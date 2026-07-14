// ============================================
// IMPORTS
// ============================================

import {

    db,
    auth

} from "./firebase-config.js";

import {

    collection,
    query,
    where,
    getDocs

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import {

    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


// ============================================
// CHART VARIABLE
// ============================================

let nutritionChart = null;


// ============================================
// LOAD ANALYTICS
// ============================================

export async function loadAnalytics() {

    try {

        const user =
            auth.currentUser;

        if (!user) return;


        // ====================================
        // GET MEAL HISTORY
        // ====================================

        const q = query(

            collection(db, "meal_history"),

            where("uid", "==", user.uid)

        );

        const querySnapshot =
            await getDocs(q);


        // ====================================
        // TOTALS
        // ====================================

        let totalCalories = 0;

        let totalProtein = 0;

        let totalCarbs = 0;

        let totalFat = 0;

        let mealCount = 0;


        // ====================================
// WEEKLY CHART ARRAYS
// ====================================

const labels = [

    "Mon",

    "Tue",

    "Wed",

    "Thu",

    "Fri",

    "Sat",

    "Sun"

];

const caloriesData =

    [0,0,0,0,0,0,0];

const proteinData =

    [0,0,0,0,0,0,0];

const carbsData =

    [0,0,0,0,0,0,0];

const fatData =

    [0,0,0,0,0,0,0];

        // ====================================
        // LOOP MEALS
        // ====================================

        querySnapshot.forEach((doc) => {

            const data =
                doc.data();
        
            totalCalories +=
                Number(data.calories || 0);
        
            totalProtein +=
                Number(data.protein || 0);
        
            totalCarbs +=
                Number(data.carbs || 0);
        
            totalFat +=
                Number(data.fat || 0);
        
            mealCount++;
        
            // ====================================
// WEEKLY DATA
// ====================================

const mealDate =
new Date(data.date);

const dayIndex =
(mealDate.getDay() + 6) % 7;

// Sunday=0 becomes index 6
// Monday=1 becomes index 0

caloriesData[dayIndex] +=
Number(data.calories || 0);

proteinData[dayIndex] +=
Number(data.protein || 0);

carbsData[dayIndex] +=
Number(data.carbs || 0);

fatData[dayIndex] +=
Number(data.fat || 0);
        
        });


        // ====================================
        // UPDATE DASHBOARD TOTALS
        // ====================================

        document.getElementById("total-calories")
            .innerText =
            totalCalories + " kcal";

        document.getElementById("total-protein")
            .innerText =
            totalProtein + " g";

        document.getElementById("total-carbs")
            .innerText =
            totalCarbs + " g";

        document.getElementById("total-fat")
            .innerText =
            totalFat + " g";


        // ====================================
        // DAILY INSIGHT ENGINE
        // ====================================

        let insight = "";

        if (totalCalories > 3000) {

            insight =
                "High calorie intake detected. Consider balancing meals with vegetables and water intake.";

        }

        else if (totalProtein < 40) {

            insight =
                "Protein intake appears low. Consider adding eggs, fish, beans, or chicken.";

        }

        else if (totalFat > 100) {

            insight =
                "Fat intake is relatively high. Monitor oily food consumption.";

        }

        else {

            insight =
                "Your nutrition balance appears moderate and stable.";

        }


        document.getElementById("daily-insight")
            .innerText = insight;


        // ====================================
        // CREATE CHART
        // ====================================

        function createChart(

            labels,
        
            chartData,
        
            title
        
        )

    }

    catch (err) {

        console.error(
            "ANALYTICS ERROR:",
            err
        );

    }

}


// ============================================
// CREATE CHART
// ============================================

const metricSelect =

    document.getElementById(
        "metric-select"
    );

function updateChart(){

    const metric =

        metricSelect.value;

    if(metric === "calories"){

        createChart(

            labels,

            caloriesData,

            "Weekly Calories"

        );

    }

    else if(metric === "protein"){

        createChart(

            labels,

            proteinData,

            "Weekly Protein"

        );

    }

    else if(metric === "carbs"){

        createChart(

            labels,

            carbsData,

            "Weekly Carbohydrates"

        );

    }

    else{

        createChart(

            labels,

            fatData,

            "Weekly Fat"

        );

    }

}

// Initial chart
updateChart();

// Switch chart when dropdown changes
metricSelect.onchange =
    updateChart;
    
    {

    const ctx =

        document.getElementById(
            "nutritionChart"
        );

    if(nutritionChart){

        nutritionChart.destroy();

    }

    nutritionChart = new Chart(ctx,{

        type:"bar",

        data:{

            labels:labels,

            datasets:[

                {

                    label: title,

data: chartData,

                }

            ]

        },

        options:{

            responsive:true,

            plugins:{

                title:{

                    display:true,

                    text:"Weekly Calorie Intake",

                    color:"white",

                    font:{
                        size:18
                    }

                },

                title: {

                    display: true,
                
                    text: title,
                
                    color: "white",
                
                    font: {
                
                        size: 18
                
                    }
                
                },
                
                legend: {
                
                    display: false
                
                }

            },

            scales:{

                x:{

                    ticks:{

                        color:"white"

                    }

                },

                y:{

                    beginAtZero:true,

                    title:{

                        display:true,

                        text:"Calories (kcal)",

                        color:"white"

                    },

                    ticks:{

                        color:"white"

                    }

                }

            }

        }

    });

}


// ============================================
// WAIT FOR LOGIN
// ============================================

onAuthStateChanged(auth, (user) => {

    if (user) {

        loadAnalytics();

    }

});