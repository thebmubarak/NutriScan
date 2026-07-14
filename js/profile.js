// ============================================
// IMPORT FIREBASE
// ============================================

import {

    db,
    auth

} from "./firebase-config.js";

import {

    doc,
    setDoc,
    getDoc

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import {

    onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


// ============================================
// DOM ELEMENTS
// ============================================

const saveBtn =
    document.getElementById("save-profile-btn");


// ============================================
// SAVE PROFILE
// ============================================

saveBtn.addEventListener("click", async()=>{

    try{

        const user =
            auth.currentUser;

        if(!user){

            alert(
                "User not logged in."
            );

            return;

        }

        // ====================================
        // GET INPUT VALUES
        // ====================================

        const name =
            document.getElementById("profile-name").value;

        const age =
            Number(
                document.getElementById("profile-age").value
            );

        const gender =
            document.getElementById("profile-gender").value;

        const weight =
            Number(
                document.getElementById("profile-weight").value
            );

        const heightCm =
            Number(
                document.getElementById("profile-height").value
            );

        const goal =
            document.getElementById("profile-goal").value;


        // ====================================
        // VALIDATION
        // ====================================

        if(

            !name ||
            !age ||
            !gender ||
            !weight ||
            !heightCm ||
            !goal

        ){

            alert(
                "Please complete all fields."
            );

            return;

        }


        // ====================================
        // BMI CALCULATION
        // ====================================

        const heightM =
            heightCm / 100;

        const bmi =
            weight / (heightM * heightM);

        const bmiValue =
            bmi.toFixed(1);


        // ====================================
        // BMI STATUS
        // ====================================

        let bmiStatus = "";

        if(bmi < 18.5){

            bmiStatus = "Underweight";

        }

        else if(bmi < 25){

            bmiStatus = "Normal Weight";

        }

        else if(bmi < 30){

            bmiStatus = "Overweight";

        }

        else{

            bmiStatus = "Obese";

        }


        // ====================================
        // DAILY CALORIE TARGET
        // ====================================

        let calories = 2200;

        if(goal === "Weight Loss"){

            calories = 1800;

        }

        else if(goal === "Muscle Gain"){

            calories = 2800;

        }


        // ====================================
        // SAVE TO FIRESTORE
        // ====================================

        await setDoc(

            doc(
                db,
                "profiles",
                user.uid
            ),

            {

                name,
                age,
                gender,
                weight,
                heightCm,
                goal,
                bmiValue,
                bmiStatus,
                calories,
                updatedAt:
                    new Date().toISOString()

            }

        );


        // ====================================
        // UPDATE UI
        // ====================================

        document.getElementById("bmi-value")
            .innerText = bmiValue;

        document.getElementById("bmi-status")
            .innerText = bmiStatus;

        document.getElementById("calorie-target")
            .innerText =
                calories + " kcal/day";


        alert(
            "Profile saved successfully."
        );

    }

    catch(err){

        alert(
            "Failed to save profile."
        );

    }

});


// ============================================
// LOAD PROFILE
// ============================================

async function loadProfile(){

    try{

        const user =
            auth.currentUser;

        if(!user) return;

        const docRef =

            doc(
                db,
                "profiles",
                user.uid
            );

        const snap =
            await getDoc(docRef);

        if(!snap.exists()) return;

        const data =
            snap.data();


        // ====================================
        // LOAD FORM VALUES
        // ====================================

        document.getElementById("profile-name")
            .value = data.name || "";

        document.getElementById("profile-age")
            .value = data.age || "";

        document.getElementById("profile-gender")
            .value = data.gender || "";

        document.getElementById("profile-weight")
            .value = data.weight || "";

        document.getElementById("profile-height")
            .value = data.heightCm || "";

        document.getElementById("profile-goal")
            .value = data.goal || "";


        // ====================================
        // LOAD BMI DATA
        // ====================================

        document.getElementById("bmi-value")
            .innerText =
                data.bmiValue || "--";

        document.getElementById("bmi-status")
            .innerText =
                data.bmiStatus || "--";

        document.getElementById("calorie-target")
            .innerText =

                data.calories
                ? data.calories + " kcal/day"
                : "--";

    }

    catch(err){

        console.error(
            "LOAD PROFILE ERROR:",
            err
        );

    }

}


// ============================================
// WAIT FOR AUTH
// ============================================

onAuthStateChanged(auth, (user)=>{

    if(user){

        loadProfile();

    }

});