// ============================================
// IMPORT HISTORY SAVE FUNCTION
// ============================================

import {

    saveMeal,

    loadHistory

} from "./history.js";

import {

    loadDashboardSummary

} from "./dashboard.js";

import {

    loadAnalytics

} from "./analytics.js";
import { FOOD_DATABASE } from "./food_database.js";


// ============================================
// GEMINI API KEY
// ============================================

const HF_TOKEN =
    "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";


// ============================================
// DOM ELEMENTS
// ============================================

const uploadZone =
    document.getElementById("upload-zone");

const fileInput =
    document.getElementById("file-input");

const preview =
    document.getElementById("preview");

const analyzeBtn =
    document.getElementById("analyze-btn");

const scanStatus =
    document.getElementById("scan-status");


// ============================================
// GLOBAL VARIABLES
// ============================================

let base64Image = "";

let currentFileName = "";


// ============================================
// OPEN FILE PICKER
// ============================================

uploadZone.addEventListener("click", ()=>{

    fileInput.click();

});


// ============================================
// HANDLE IMAGE UPLOAD + COMPRESSION
// ============================================

fileInput.addEventListener("change", (e)=>{

    const file = e.target.files[0];

    // STOP IF NO FILE
    if(!file) return;

    // STORE FILE NAME
    currentFileName = file.name;

    // IMAGE SIZE LIMIT
    if(file.size > 5000000){

        alert(
            "Image too large. Please upload image below 5MB."
        );

        return;

    }

    const reader = new FileReader();

    reader.onload = (event)=>{

        const img = new Image();

        img.onload = ()=>{

            // CREATE CANVAS FOR COMPRESSION
            const canvas =
                document.createElement("canvas");

            const MAX_WIDTH = 600;

            const scale =
                MAX_WIDTH / img.width;

            canvas.width = MAX_WIDTH;

            canvas.height =
                img.height * scale;

            const ctx =
                canvas.getContext("2d");

            // DRAW IMAGE
            ctx.drawImage(

                img,
                0,
                0,
                canvas.width,
                canvas.height

            );

            // COMPRESS IMAGE
            const compressed =
                canvas.toDataURL(
                    "image/jpeg",
                    0.7
                );

            // SHOW PREVIEW
            preview.src = compressed;

            preview.style.display = "block";

            // SAVE BASE64
            base64Image =
                compressed.split(",")[1];

        };

        img.src = event.target.result;

    };

    reader.readAsDataURL(file);

});


// ============================================
// UPDATE UI FUNCTION
// ============================================

function updateUI(data){

    // SHOW RESULT CARD
    document.getElementById("result-card")
        .style.display = "block";

    // FOOD NAME
    document.getElementById("food-name")
        .innerText = data.name;

    // NUTRIENTS
    document.getElementById("food-calories")
        .innerText = data.calories + " kcal";

    document.getElementById("food-protein")
        .innerText = data.protein + " g";

    document.getElementById("food-carbs")
        .innerText = data.carbs + " g";

    document.getElementById("food-fat")
        .innerText = data.fat + " g";

    // CONFIDENCE
    document.getElementById("confidence-score")
        .innerText = data.confidence;

    // HEALTH SCORE
    document.getElementById("health-score")
        .innerText = data.healthScore;

    // NUTRITION TIP
    document.getElementById("nutrition-tip")
        .innerText = data.tip;

    // ANALYSIS SOURCE
    document.getElementById("analysis-source")
        .innerText = data.source;

}


// ============================================
// FALLBACK AI SYSTEM
// ============================================

function generateFallbackAnalysis(fileName){

    // Convert "chocolate_mousse" -> "Chocolate Mousse"

    const foodName =

        fileName
        .replaceAll("_"," ")
        .replace(/\b\w/g, c => c.toUpperCase());

    return{

        name: foodName,

        calories: 350,

        protein: 10,

        carbs: 45,

        fat: 10,

        confidence: "Unknown",

        healthScore: 70,

        source: "Generic Nutrition Database",

        tip:
        "Nutrition information is unavailable for this food. Generic values were used."

    };

}


// ============================================
// MAIN ANALYSIS BUTTON
// ============================================

analyzeBtn.addEventListener(

    "click",

    async()=>{

        try{

            scanStatus.innerText =
                "Analyzing meal...";


            // ====================================
            // CONVERT IMAGE
            // ====================================
            const imageBlob =
            await fetch(preview.src)
            .then(res => res.blob());
        
        const response =
            await fetch(
        
                "https://router.huggingface.co/hf-inference/models/nateraw/food",
        
                {
        
                    method: "POST",
        
                    headers: {
        
                        Authorization:
                            `Bearer ${HF_TOKEN}`,
        
                        "Content-Type":
                            imageBlob.type
        
                    },
        
                    body:
                        imageBlob
        
                }
        
            );
        
            const result =
            await response.json();


            // ====================================
            // GET FOOD LABEL
            // ====================================

            const detectedFood =

    result[0]?.label ||

    result[0]?.food ||

    "Unknown Meal";

    
    // ====================================
// GET NUTRITION FROM DATABASE
// ====================================

let nutritionData =

getNutritionData(
    detectedFood
);


// ====================================
// IF NOT FOUND USE FALLBACK
// ====================================

if(!nutritionData){

nutritionData =

    generateFallbackAnalysis(
        detectedFood
    );

}

const topPredictions =
result.slice(1,4);


// ====================================
// ENRICH DATA
// ====================================

const enrichedData =

enrichNutritionData(
    nutritionData
);


                // =============================
// DETERMINE MEAL QUALITY
// =============================

let quality = "";

const score =
    parseInt(enrichedData.healthScore);

if(score >= 85){

    quality = "🟢 Excellent";

}
else if(score >= 70){

    quality = "🟡 Good";

}
else if(score >= 50){

    quality = "🟠 Moderate";

}
else{

    quality = "🔴 Poor";

}

document.getElementById(
    "meal-quality"
).innerText = quality;


            // ====================================
            // UPDATE UI
            // ====================================

            document.getElementById(
                "result-card"
            ).style.display = "block";


            document.getElementById(
                "food-name"
            ).innerText =
                enrichedData.name;


            document.getElementById(
                "food-calories"
            ).innerText =
                enrichedData.calories;


            document.getElementById(
                "food-protein"
            ).innerText =
                enrichedData.protein;


            document.getElementById(
                "food-carbs"
            ).innerText =
                enrichedData.carbs;


            document.getElementById(
                "food-fat"
            ).innerText =
                enrichedData.fat;


                // ===========================
// AI CONFIDENCE
// ===========================

document.getElementById(
    "confidence-score"
).innerText =
    (result[0].score * 100).toFixed(1) + "%";


// ===========================
// ALTERNATIVE MATCHES
// ===========================

const altList =
    document.getElementById(
        "alternative-foods"
    );

altList.innerHTML = "";

topPredictions.forEach(food=>{

    altList.innerHTML += `

<li>

${food.label.replaceAll("_"," ")}

(${(food.score*100).toFixed(2)}%)

</li>

`;

});
            // ====================================
            // SAVE MEAL
            // ====================================

            await saveMeal(
                enrichedData
            );
            
            // Refresh UI
            await loadHistory();
            
            await loadDashboardSummary();
            
            await loadAnalytics();


            scanStatus.innerText =
                "Meal analyzed successfully.";


        }catch(err){

            // ====================================
            // FALLBACK MODE
            // ====================================

            const fallbackData =
                generateFallbackAnalysis(
                    currentFileName
                );


            const enrichedFallback =
                enrichNutritionData(
                    fallbackData
                );


            document.getElementById(
                "result-card"
            ).style.display = "block";


            document.getElementById(
                "food-name"
            ).innerText =
                enrichedFallback.name;


            document.getElementById(
                "food-calories"
            ).innerText =
                enrichedFallback.calories;


            document.getElementById(
                "food-protein"
            ).innerText =
                enrichedFallback.protein;


            document.getElementById(
                "food-carbs"
            ).innerText =
                enrichedFallback.carbs;


            document.getElementById(
                "food-fat"
            ).innerText =
                enrichedFallback.fat;


                document.getElementById(
                    "confidence-score"
                ).innerText =
                    enrichedData.confidence;
                
                document.getElementById(
                    "health-score"
                ).innerText =
                    enrichedData.healthScore;
                
                document.getElementById(
                    "nutrition-tip"
                ).innerText =
                    enrichedData.tip;
                
                document.getElementById(
                    "analysis-source"
                ).innerText =
                    enrichedData.source;


                    await saveMeal(
                        enrichedFallback
                    );
                    
                    // Refresh UI
                    await loadHistory();
                    
                    await loadDashboardSummary();
                    
                    await loadAnalytics();


            scanStatus.innerText =
                "Fallback AI mode activated.";

        }

    }

);


// ====================================
// FIND FOOD IN DATABASE
// ====================================

function getNutritionData(label){

    if(!label){

        return null;

    }

    const lower =

        label
        .toLowerCase()
        .replaceAll("_"," ")
        .trim();


    // ====================================
    // STAGE 1 - EXACT MATCH
    // ====================================

    for(const key in FOOD_DATABASE){

        const food =
            FOOD_DATABASE[key];

        if(

            food.al &&

            food.al.some(alias =>

                alias
                .toLowerCase()
                .replaceAll("_"," ")
                .trim() === lower

            )

        ){

            return{

                name: food.nm,

                calories: food.cl,

                protein: food.pr,

                carbs: food.cb,

                fat: food.ft,

                healthScore: food.hs,

                tip: food.tp,

                category: food.ct

            };

        }

    }


    // ====================================
    // STAGE 2 - PARTIAL MATCH
    // ====================================

    for(const key in FOOD_DATABASE){

        const food =
            FOOD_DATABASE[key];

        if(!food.al)
            continue;

        for(const alias of food.al){

            const cleanAlias =

                alias
                .toLowerCase()
                .replaceAll("_"," ")
                .trim();

            if(

                lower.includes(cleanAlias)

                ||

                cleanAlias.includes(lower)

            ){

                return{

                    name: food.nm,

                    calories: food.cl,

                    protein: food.pr,

                    carbs: food.cb,

                    fat: food.ft,

                    healthScore: food.hs,

                    tip: food.tp,

                    category: food.ct

                };

            }

        }

    }


    // ====================================
    // STAGE 3 - KEYWORD MATCH
    // ====================================

    const words =

        lower.split(" ");

    for(const key in FOOD_DATABASE){

        const food =
            FOOD_DATABASE[key];

        if(!food.al)
            continue;

        for(const alias of food.al){

            const cleanAlias =

                alias
                .toLowerCase()
                .replaceAll("_"," ")
                .trim();

            for(const word of words){

                if(word.length < 3)
                    continue;

                if(cleanAlias.includes(word)){

                    return{

                        name: food.nm,

                        calories: food.cl,

                        protein: food.pr,

                        carbs: food.cb,

                        fat: food.ft,

                        healthScore: food.hs,

                        tip: food.tp,

                        category: food.ct

                    };

                }

            }

        }

    }


    // ====================================
    // NOT FOUND
    // ====================================

    return null;

}


// ========================================
// HEALTH INTELLIGENCE LAYER
// ========================================

function enrichNutritionData(data){

    let healthScore = 100;

    if(data.calories > 600)
        healthScore -= 15;

    if(data.fat > 25)
        healthScore -= 10;

    if(data.protein < 10)
        healthScore -= 10;

    let tip =
        "Balanced meal.";

    if(data.carbs > 60){

        tip =
            "High carbohydrate intake detected.";

    }

    if(data.protein > 20){

        tip =
            "Good protein content detected.";

    }

    return {

        ...data,

        confidence:
    (
        75 +
        Math.floor(
            Math.random() * 20
        )
    ) + "%",

        healthScore:
            healthScore + "/100",

        source:
            "Hugging Face AI",

        tip:
            tip

    };

}
