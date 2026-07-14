// ==========================================
// IMPORTS
// ==========================================

import {

    auth,
    db

} from "./firebase-config.js";

import {

    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {

    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import {

    loadHistory

} from "./history.js";

import {

    loadAnalytics

} from "./analytics.js";


// ==========================================
// LOAD DASHBOARD
// ==========================================

onAuthStateChanged(auth, async(user)=>{

    if(!user) return;

    await loadDashboardSummary();

    await loadHistory();

    await loadAnalytics();

});


// ==========================================
// LOAD DASHBOARD SUMMARY
// ==========================================

export async function loadDashboardSummary(){

    const user = auth.currentUser;

    if(!user) return;

    // -------------------------
    // TODAY
    // -------------------------

    const today =
        new Date().toDateString();

    // -------------------------
    // TOTALS
    // -------------------------

    let mealsToday = 0;

    let caloriesToday = 0;

    let proteinToday = 0;

    let carbsToday = 0;

    let fatToday = 0;

    let healthTotal = 0;

    // -------------------------
    // GET MEALS
    // -------------------------

    const mealQuery = query(

        collection(db,"meal_history"),

        where("uid","==",user.uid)

    );

    const snapshot =
        await getDocs(mealQuery);

    snapshot.forEach(doc=>{

        const meal =
            doc.data();

        const mealDate =
            new Date(meal.date)
            .toDateString();

        if(mealDate!==today) return;

        mealsToday++;

        caloriesToday +=
            Number(meal.calories||0);

        proteinToday +=
            Number(meal.protein||0);

        carbsToday +=
            Number(meal.carbs||0);

        fatToday +=
            Number(meal.fat||0);

        healthTotal +=
            parseInt(meal.healthScore)||0;

    });

    // -------------------------
    // PROFILE
    // -------------------------

    let calorieTarget = 2200;

    const profileRef = doc(

        db,

        "profiles",

        user.uid

    );

    const profileSnap =
        await getDoc(profileRef);

    if(profileSnap.exists()){

        const profile =
            profileSnap.data();

        calorieTarget =
            profile.calories||2200;

            const bmiElement =
            document.getElementById("dashboard-bmi");
        
        if (bmiElement) {
        
            bmiElement.innerText =
                profile.bmiValue || "--";
        
        }

    }

    // -------------------------
    // AVERAGE HEALTH
    // -------------------------

    const averageHealth =

        mealsToday===0

        ? 0

        :

        Math.round(

            healthTotal /

            mealsToday

        );

    // -------------------------
    // UPDATE CARDS
    // -------------------------

    document.getElementById(

        "today-calories"

    ).innerText =

        caloriesToday;

    document.getElementById(

        "today-meals"

    ).innerText =

        mealsToday;

    document.getElementById(

        "dashboard-health"

    ).innerText =

        averageHealth + "/100";


        // -------------------------
// AI NUTRITION INSIGHT
// -------------------------

let insight = "";

if(mealsToday === 0){

    insight =
    "No meals have been recorded today.";

}

else if(averageHealth >= 85){

    insight =
    "Excellent eating habits today. Keep maintaining a balanced diet.";

}

else if(averageHealth >= 70){

    insight =
    "Your meals are generally healthy. Consider adding more fruits and vegetables.";

}

else if(averageHealth >= 50){

    insight =
    "Your diet is average today. Reducing high-calorie foods may improve your health score.";

}

else{

    insight =
    "Your meals today were not very balanced. Consider healthier food choices.";

}

const insightElement =

    document.getElementById(
        "nutrition-insight"
    );

if(insightElement){

    insightElement.innerText =
        insight;

}
// -------------------------
// CALORIE PROGRESS
// -------------------------

const calorieProgress =
    document.getElementById("calorie-progress");

if(calorieProgress){

    calorieProgress.max = calorieTarget;

    calorieProgress.value = caloriesToday;

}


// -------------------------
// PROTEIN PROGRESS
// -------------------------

const proteinProgress =
    document.getElementById("protein-progress");

if(proteinProgress){

    proteinProgress.max = 150;

    proteinProgress.value = proteinToday;

}


// -------------------------
// CARBS PROGRESS
// -------------------------

const carbsProgress =
    document.getElementById("carbs-progress");

if(carbsProgress){

    carbsProgress.max = 300;

    carbsProgress.value = carbsToday;

}


// -------------------------
// FAT PROGRESS
// -------------------------

const fatProgress =
    document.getElementById("fat-progress");

if(fatProgress){

    fatProgress.max = 80;

    fatProgress.value = fatToday;

}


// -------------------------
// LABELS
// -------------------------

const calorieLabel =
    document.getElementById("calorie-label");

if(calorieLabel){

    calorieLabel.innerText =
        caloriesToday + " / " +
        calorieTarget + " kcal";

}

const proteinLabel =
    document.getElementById("protein-label");

if(proteinLabel){

    proteinLabel.innerText =
        proteinToday + " g";

}

const carbsLabel =
    document.getElementById("carbs-label");

if(carbsLabel){

    carbsLabel.innerText =
        carbsToday + " g";

}

const fatLabel =
    document.getElementById("fat-label");

if(fatLabel){

    fatLabel.innerText =
        fatToday + " g";

}


// -------------------------
// TOTAL NUTRIENTS
// -------------------------

const totalCalories =
    document.getElementById("total-calories");

if(totalCalories){

    totalCalories.innerText =
        caloriesToday + " kcal";

}

const totalProtein =
    document.getElementById("total-protein");

if(totalProtein){

    totalProtein.innerText =
        proteinToday + " g";

}

const totalCarbs =
    document.getElementById("total-carbs");

if(totalCarbs){

    totalCarbs.innerText =
        carbsToday + " g";

}

const totalFat =
    document.getElementById("total-fat");

if(totalFat){

    totalFat.innerText =
        fatToday + " g";

}

// ==========================================
// DAILY NUTRITION FACT
// ==========================================

const nutritionFacts = [

    "🥦 Broccoli contains more Vitamin C than oranges.",

    "🍌 Bananas are rich in potassium, which supports heart health.",

    "🥚 Eggs provide high-quality protein and essential amino acids.",

    "🥜 Groundnuts contain healthy fats that support brain function.",

    "🥕 Carrots are an excellent source of Vitamin A for eye health.",

    "🐟 Fish provides Omega-3 fatty acids that support the heart.",

    "💧 Drinking enough water helps digestion and nutrient absorption.",

    "🍎 Apples contain fiber that helps improve digestion.",

    "🥬 Leafy vegetables are rich in iron and folate.",

    "🍉 Watermelon helps keep the body hydrated."

];

const factElement =
    document.getElementById("daily-fact");

if(factElement){

    factElement.innerText =

        nutritionFacts[

            Math.floor(

                Math.random() *

                nutritionFacts.length

            )

        ];

}}