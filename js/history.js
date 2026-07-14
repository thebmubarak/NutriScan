import { auth, db } from "./firebase-config.js";

import {

    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,
    doc

} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";


// ============================================
// DETERMINE MEAL TYPE
// ============================================

function determineMealType(){

    const hour =
        new Date().getHours();

    // BREAKFAST
    if(hour >= 5 && hour < 11){

        return "Breakfast";

    }

    // LUNCH
    else if(hour >= 11 && hour < 16){

        return "Lunch";

    }

    // DINNER
    else{

        return "Dinner";

    }

}


// ============================================
// SAVE MEAL
// ============================================

export async function saveMeal(data){

    await addDoc(

        collection(db, "meal_history"),

        {

            uid: auth.currentUser.uid,

            name: data.name,

            calories:
                Number(data.calories),

            protein:
                Number(data.protein),

            carbs:
                Number(data.carbs),

            fat:
                Number(data.fat),

            confidence:
                data.confidence || "Unknown",

            healthScore:
                data.healthScore || "N/A",

            source:
                data.source || "AI",

            tip:
                data.tip || "",

            mealType:
                determineMealType(),

            date:
                new Date().toISOString()

        }

    );

}


// ============================================
// SHARED DOM REFERENCES
// (looked up once, reused across renders)
// ============================================

const historyList =
    document.getElementById(
        "history-list"
    );

const searchInput =
    document.getElementById(
        "history-search"
    );

const modal =
    document.getElementById(
        "delete-modal"
    );

const confirmBtn =
    document.getElementById(
        "confirm-delete"
    );

const cancelBtn =
    document.getElementById(
        "cancel-delete"
    );

let selectedMealId = "";


// ============================================
// LOAD HISTORY
// ============================================

export async function loadHistory(){

    historyList.innerHTML = "";


    // ============================================
    // SEARCH KEYWORD
    // ============================================

    const keyword =

        searchInput
        ? searchInput.value
            .toLowerCase()
            .trim()
        : "";


    // ============================================
    // FIRESTORE QUERY
    // ============================================

    const q = query(

        collection(
            db,
            "meal_history"
        ),

        where(
            "uid",
            "==",
            auth.currentUser.uid
        ),

        orderBy(
            "date",
            "desc"
        )

    );

    const snapshot =
        await getDocs(q);


    // ============================================
    // LOOP THROUGH HISTORY
    // ============================================

    snapshot.forEach((doc)=>{

        const data =
            doc.data();

        const mealId =
            doc.id;


        // ========================================
        // SEARCH FILTER
        // ========================================

        if(

            keyword &&

            !data.name
                .toLowerCase()
                .includes(keyword)

        ){

            return;

        }


        // ========================================
        // DISPLAY HISTORY
        // ========================================

        historyList.innerHTML += `

<div class="history-accordion">

    <div class="history-header">

        <div>

            <h3>${data.name}</h3>

            <small>

                ${data.mealType || "Meal"}

                •

                ${new Date(data.date).toLocaleDateString()}

                •

                ${new Date(data.date).toLocaleTimeString()}

            </small>

        </div>

        <div class="history-actions">

    <button class="expand-btn">

        View

    </button>

    <button
        class="delete-btn"
        data-id="${mealId}"
    >

        Delete

    </button>

</div>

    </div>


    <div class="history-body">

        <div class="history-grid">

            <div class="history-box">

                <span>Calories</span>

                <h4>${data.calories} kcal</h4>

            </div>

            <div class="history-box">

                <span>Protein</span>

                <h4>${data.protein} g</h4>

            </div>

            <div class="history-box">

                <span>Carbs</span>

                <h4>${data.carbs} g</h4>

            </div>

            <div class="history-box">

                <span>Fat</span>

                <h4>${data.fat} g</h4>

            </div>

        </div>

        <div class="history-extra">

            <p>

                <strong>AI Confidence:</strong>

                ${data.confidence}

            </p>

            <p>

                <strong>Health Score:</strong>

                ${data.healthScore}

            </p>

            <p>

                <strong>Nutrition Tip:</strong>

                ${data.tip || "No recommendation available."}

            </p>

        </div>

    </div>

</div>

        `;

    });

}


// ============================================
// ACCORDION + DELETE (event delegation)
//
// Bound ONCE on the container instead of on each
// button, so it keeps working after every re-render
// of #history-list without re-binding or stacking
// duplicate listeners. Uses .closest() to find the
// right accordion item regardless of DOM nesting.
// ============================================

if (historyList) {

    historyList.addEventListener("click", (e) => {

        // EXPAND / COLLAPSE
        const expandBtn = e.target.closest(".expand-btn");

        if (expandBtn) {

            const body =
                expandBtn
                    .closest(".history-accordion")
                    .querySelector(".history-body");

            body.classList.toggle("show-history");

            expandBtn.innerText =

                body.classList.contains("show-history")

                ? "Hide"

                : "View";

            return;

        }

        // DELETE
        const deleteBtn = e.target.closest(".delete-btn");

        if (deleteBtn) {

            selectedMealId = deleteBtn.dataset.id;

            modal.classList.add("show");

        }

    });

}


// ============================================
// DELETE MODAL CONTROLS
// (bound once — these elements persist across renders)
// ============================================

if (cancelBtn) {

    cancelBtn.onclick = () => {

        modal.classList.remove("show");

    };

}

if (confirmBtn) {

    confirmBtn.onclick = async () => {

        await deleteDoc(

            doc(

                db,

                "meal_history",

                selectedMealId

            )

        );

        modal.classList.remove("show");

        loadHistory();

    };

}

if (modal) {

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("show");

        }

    });

}


// ============================================
// LIVE SEARCH
// ============================================

if (searchInput) {

    searchInput.addEventListener(

        "input",

        () => {

            loadHistory();

        }

    );

}