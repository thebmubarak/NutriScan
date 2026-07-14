/*
===========================================================
NutriScan AI Food Database

Nutrition values adapted from:
- USDA FoodData Central
- Nigerian Food Composition Table
- Nutritionix

Values represent average serving estimates.
===========================================================
*/

export const FOOD_DATABASE = {

    //
    // ================================
    // RICE & GRAINS
    // ================================
    //
    
    white_rice:{
    nm:"White Rice",
    al:["white_rice","white rice","rice"],
    cl:360,
    pr:7,
    cb:80,
    ft:1,
    ct:"Grain",
    hs:90,
    tp:"Pair with vegetables and lean protein."
    },
    
    brown_rice:{
    nm:"Brown Rice",
    al:["brown_rice","brown rice"],
    cl:340,
    pr:8,
    cb:72,
    ft:2,
    ct:"Whole Grain",
    hs:95,
    tp:"Rich in fibre and supports digestion."
    },
    
    fried_rice:{
    nm:"Fried Rice",
    al:["fried_rice","fried rice"],
    cl:500,
    pr:15,
    cb:60,
    ft:20,
    ct:"Grain",
    hs:78,
    tp:"Contains more oil. Consume moderately."
    },
    
    jollof_rice:{
    nm:"Jollof Rice",
    al:["jollof_rice","jollof rice"],
    cl:450,
    pr:12,
    cb:65,
    ft:15,
    ct:"Grain",
    hs:82,
    tp:"Best enjoyed with vegetables."
    },
    
    coconut_rice:{
    nm:"Coconut Rice",
    al:["coconut_rice","coconut rice"],
    cl:470,
    pr:9,
    cb:60,
    ft:18,
    ct:"Grain",
    hs:75,
    tp:"Rich in healthy fats."
    },
    
    rice_and_beans:{
    nm:"Rice and Beans",
    al:["rice_and_beans","rice beans","beans and rice"],
    cl:430,
    pr:17,
    cb:66,
    ft:6,
    ct:"Grain",
    hs:93,
    tp:"Balanced carbohydrate and protein meal."
    },
    
    //
    // ================================
    // PASTA
    // ================================
    //
    
    spaghetti:{
    nm:"Spaghetti",
    al:["spaghetti"],
    cl:390,
    pr:10,
    cb:65,
    ft:9,
    ct:"Pasta",
    hs:86,
    tp:"Serve with vegetables for extra fibre."
    },
    
    macaroni:{
    nm:"Macaroni",
    al:["macaroni"],
    cl:400,
    pr:12,
    cb:66,
    ft:10,
    ct:"Pasta",
    hs:84,
    tp:"Choose lean protein toppings."
    },
    
    noodles:{
    nm:"Instant Noodles",
    al:["noodles","instant noodles","indomie"],
    cl:420,
    pr:9,
    cb:60,
    ft:17,
    ct:"Pasta",
    hs:68,
    tp:"High sodium. Limit frequent consumption."
    },

    //
// ================================
// SWALLOW
// ================================
//

eba:{
    nm:"Eba",
    al:["eba","garri"],
    cl:370,
    pr:2,
    cb:88,
    ft:1,
    ct:"Swallow",
    hs:70,
    tp:"High carbohydrate meal. Pair with vegetable soup."
    },
    
    amala:{
    nm:"Amala",
    al:["amala"],
    cl:360,
    pr:3,
    cb:82,
    ft:1,
    ct:"Swallow",
    hs:73,
    tp:"Best served with vegetable soup and lean protein."
    },
    
    semovita:{
    nm:"Semovita",
    al:["semo","semovita"],
    cl:350,
    pr:4,
    cb:79,
    ft:1,
    ct:"Swallow",
    hs:74,
    tp:"Consume moderate portions."
    },
    
    pounded_yam:{
    nm:"Pounded Yam",
    al:["pounded_yam","pounded yam"],
    cl:410,
    pr:8,
    cb:72,
    ft:6,
    ct:"Swallow",
    hs:72,
    tp:"High energy meal. Portion control is recommended."
    },
    
    fufu:{
    nm:"Fufu",
    al:["fufu"],
    cl:330,
    pr:3,
    cb:78,
    ft:1,
    ct:"Swallow",
    hs:75,
    tp:"Pair with nutritious soups."
    },

//
// ================================
// SOUPS
// ================================
//

egusi:{
    nm:"Egusi Soup",
    al:["egusi","egusi soup"],
    cl:520,
    pr:25,
    cb:18,
    ft:35,
    ct:"Soup",
    hs:82,
    tp:"Rich in healthy fats and protein."
    },
    
    ogbono:{
    nm:"Ogbono Soup",
    al:["ogbono","ogbono soup"],
    cl:480,
    pr:21,
    cb:16,
    ft:32,
    ct:"Soup",
    hs:81,
    tp:"Consume with moderate portions of swallow."
    },
    
    okra:{
    nm:"Okra Soup",
    al:["okra","okra soup"],
    cl:210,
    pr:8,
    cb:14,
    ft:10,
    ct:"Soup",
    hs:94,
    tp:"Excellent source of dietary fibre."
    },
    
    vegetable_soup:{
    nm:"Vegetable Soup",
    al:["vegetable soup","vegetable_soup"],
    cl:250,
    pr:12,
    cb:15,
    ft:14,
    ct:"Soup",
    hs:97,
    tp:"Rich in vitamins and minerals."
    },
    
    ewedu:{
    nm:"Ewedu Soup",
    al:["ewedu","ewedu soup"],
    cl:180,
    pr:7,
    cb:12,
    ft:8,
    ct:"Soup",
    hs:98,
    tp:"Low calorie and nutrient dense."
    },
    
    banga:{
    nm:"Banga Soup",
    al:["banga","banga soup"],
    cl:470,
    pr:18,
    cb:15,
    ft:34,
    ct:"Soup",
    hs:79,
    tp:"Contains healthy palm fruit nutrients but is high in fat."
    },
    
    afang:{
    nm:"Afang Soup",
    al:["afang","afang soup"],
    cl:260,
    pr:16,
    cb:12,
    ft:16,
    ct:"Soup",
    hs:95,
    tp:"High fibre and protein meal."
    },

    //
// ================================
// BEANS
// ================================
//

beans:{
    nm:"Cooked Beans",
    al:["beans","bean"],
    cl:330,
    pr:21,
    cb:44,
    ft:1,
    ct:"Legume",
    hs:96,
    tp:"Excellent source of plant protein."
    },
    
    moi_moi:{
    nm:"Moi Moi",
    al:["moi moi","moi_moi"],
    cl:280,
    pr:14,
    cb:20,
    ft:10,
    ct:"Legume",
    hs:94,
    tp:"Healthy steamed bean pudding."
    },
    
    akara:{
    nm:"Akara",
    al:["akara","bean cake"],
    cl:320,
    pr:13,
    cb:24,
    ft:18,
    ct:"Legume",
    hs:80,
    tp:"Deep fried. Consume in moderation."
    },

    //
// ================================
// CHICKEN
// ================================
//

grilled_chicken:{
    nm:"Grilled Chicken",
    al:["grilled chicken","grilled_chicken"],
    cl:280,
    pr:35,
    cb:0,
    ft:12,
    ct:"Protein",
    hs:98,
    tp:"Excellent lean protein source."
    },
    
    fried_chicken:{
    nm:"Fried Chicken",
    al:["fried chicken","fried_chicken"],
    cl:420,
    pr:28,
    cb:12,
    ft:28,
    ct:"Protein",
    hs:72,
    tp:"Higher fat due to frying."
    },
    
    boiled_chicken:{
    nm:"Boiled Chicken",
    al:["boiled chicken","boiled_chicken"],
    cl:250,
    pr:34,
    cb:0,
    ft:9,
    ct:"Protein",
    hs:97,
    tp:"Low fat and rich in protein."
    },
    
    roasted_chicken:{
    nm:"Roasted Chicken",
    al:["roasted chicken","roasted_chicken"],
    cl:300,
    pr:33,
    cb:0,
    ft:15,
    ct:"Protein",
    hs:95,
    tp:"Healthy when skin is removed."
    },

    //
// ================================
// BEEF & MEAT
// ================================
//

beef:{
    nm:"Boiled Beef",
    al:["beef","boiled beef"],
    cl:250,
    pr:26,
    cb:0,
    ft:15,
    ct:"Protein",
    hs:90,
    tp:"Rich in protein and iron."
    },
    
    fried_beef:{
    nm:"Fried Beef",
    al:["fried beef","fried_beef"],
    cl:340,
    pr:25,
    cb:2,
    ft:26,
    ct:"Protein",
    hs:72,
    tp:"Higher fat content due to frying."
    },
    
    goat_meat:{
    nm:"Goat Meat",
    al:["goat","goat meat","goat_meat"],
    cl:220,
    pr:27,
    cb:0,
    ft:12,
    ct:"Protein",
    hs:94,
    tp:"Lean meat rich in protein."
    },
    
    turkey:{
    nm:"Turkey",
    al:["turkey","turkey meat"],
    cl:240,
    pr:29,
    cb:0,
    ft:10,
    ct:"Protein",
    hs:96,
    tp:"Excellent lean protein."
    },
    
    suya:{
    nm:"Suya",
    al:["suya"],
    cl:320,
    pr:31,
    cb:5,
    ft:18,
    ct:"Protein",
    hs:82,
    tp:"High protein but often contains excess salt."
    },
    
    peppered_meat:{
    nm:"Peppered Meat",
    al:["peppered meat","peppered_meat"],
    cl:310,
    pr:28,
    cb:4,
    ft:19,
    ct:"Protein",
    hs:80,
    tp:"Contains healthy protein but may be high in sodium."
    },
    
    //
    // ================================
    // FISH & SEAFOOD
    // ================================
    //
    
    grilled_fish:{
    nm:"Grilled Fish",
    al:["grilled fish","grilled_fish"],
    cl:220,
    pr:32,
    cb:0,
    ft:8,
    ct:"Seafood",
    hs:99,
    tp:"Excellent source of omega-3 and protein."
    },
    
    fried_fish:{
    nm:"Fried Fish",
    al:["fried fish","fried_fish"],
    cl:310,
    pr:28,
    cb:6,
    ft:18,
    ct:"Seafood",
    hs:82,
    tp:"Healthier when grilled instead."
    },
    
    catfish:{
    nm:"Catfish",
    al:["catfish"],
    cl:230,
    pr:27,
    cb:0,
    ft:12,
    ct:"Seafood",
    hs:95,
    tp:"Rich in protein."
    },
    
    tilapia:{
    nm:"Tilapia",
    al:["tilapia"],
    cl:200,
    pr:29,
    cb:0,
    ft:7,
    ct:"Seafood",
    hs:97,
    tp:"Lean fish suitable for healthy diets."
    },
    
    salmon:{
    nm:"Salmon",
    al:["salmon","grilled salmon"],
    cl:250,
    pr:30,
    cb:0,
    ft:13,
    ct:"Seafood",
    hs:100,
    tp:"Excellent source of Omega-3 fatty acids."
    },
    
    shrimp:{
    nm:"Shrimp",
    al:["shrimp","prawn"],
    cl:110,
    pr:24,
    cb:1,
    ft:1,
    ct:"Seafood",
    hs:99,
    tp:"Low calorie, high protein seafood."
    },
    
    //
    // ================================
    // EGGS
    // ================================
    //
    
    boiled_egg:{
    nm:"Boiled Egg",
    al:["boiled egg","egg"],
    cl:78,
    pr:6,
    cb:1,
    ft:5,
    ct:"Protein",
    hs:98,
    tp:"Excellent source of complete protein."
    },
    
    fried_egg:{
    nm:"Fried Egg",
    al:["fried egg"],
    cl:110,
    pr:7,
    cb:1,
    ft:9,
    ct:"Protein",
    hs:90,
    tp:"Use little oil when frying."
    },
    
    scrambled_egg:{
    nm:"Scrambled Egg",
    al:["scrambled egg"],
    cl:150,
    pr:10,
    cb:2,
    ft:11,
    ct:"Protein",
    hs:90,
    tp:"Healthy breakfast option."
    },
    
    omelette:{
    nm:"Omelette",
    al:["omelette","omelet"],
    cl:180,
    pr:12,
    cb:3,
    ft:13,
    ct:"Protein",
    hs:92,
    tp:"Add vegetables for extra nutrients."
    },

    //
// ================================
// FRUITS
// ================================
//

apple:{
    nm:"Apple",
    al:["apple"],
    cl:95,
    pr:0,
    cb:25,
    ft:0,
    ct:"Fruit",
    hs:100,
    tp:"Rich in fibre and antioxidants."
    },
    
    banana:{
    nm:"Banana",
    al:["banana"],
    cl:105,
    pr:1,
    cb:27,
    ft:0,
    ct:"Fruit",
    hs:98,
    tp:"Great natural energy source."
    },
    
    orange:{
    nm:"Orange",
    al:["orange"],
    cl:62,
    pr:1,
    cb:15,
    ft:0,
    ct:"Fruit",
    hs:100,
    tp:"Excellent source of Vitamin C."
    },
    
    watermelon:{
    nm:"Watermelon",
    al:["watermelon"],
    cl:46,
    pr:1,
    cb:12,
    ft:0,
    ct:"Fruit",
    hs:100,
    tp:"Very hydrating and low in calories."
    },
    
    pineapple:{
    nm:"Pineapple",
    al:["pineapple"],
    cl:82,
    pr:1,
    cb:22,
    ft:0,
    ct:"Fruit",
    hs:98,
    tp:"Rich in Vitamin C."
    },
    
    mango:{
    nm:"Mango",
    al:["mango"],
    cl:99,
    pr:1,
    cb:25,
    ft:1,
    ct:"Fruit",
    hs:97,
    tp:"Naturally sweet and vitamin-rich."
    },
    
    avocado:{
    nm:"Avocado",
    al:["avocado"],
    cl:240,
    pr:3,
    cb:13,
    ft:22,
    ct:"Fruit",
    hs:96,
    tp:"Rich in healthy fats."
    },

    //
// ================================
// VEGETABLES
// ================================
//

cabbage:{
    nm:"Cabbage",
    al:["cabbage"],
    cl:25,
    pr:1,
    cb:6,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Low calorie and rich in Vitamin C."
    },
    
    carrot:{
    nm:"Carrot",
    al:["carrot"],
    cl:41,
    pr:1,
    cb:10,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Excellent source of Vitamin A."
    },
    
    spinach:{
    nm:"Spinach",
    al:["spinach"],
    cl:23,
    pr:3,
    cb:4,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Rich in iron and antioxidants."
    },
    
    lettuce:{
    nm:"Lettuce",
    al:["lettuce"],
    cl:15,
    pr:1,
    cb:3,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Very low calorie and refreshing."
    },
    
    cucumber:{
    nm:"Cucumber",
    al:["cucumber"],
    cl:16,
    pr:1,
    cb:4,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"High water content keeps you hydrated."
    },
    
    tomato:{
    nm:"Tomato",
    al:["tomato"],
    cl:18,
    pr:1,
    cb:4,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Rich in lycopene and Vitamin C."
    },
    
    broccoli:{
    nm:"Broccoli",
    al:["broccoli"],
    cl:34,
    pr:3,
    cb:7,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Excellent fibre and vitamin source."
    },
    
    green_beans:{
    nm:"Green Beans",
    al:["green beans","green_beans"],
    cl:31,
    pr:2,
    cb:7,
    ft:0,
    ct:"Vegetable",
    hs:100,
    tp:"Healthy side dish."
    },

    //
// ================================
// FAST FOOD
// ================================
//

hamburger:{
    nm:"Hamburger",
    al:["hamburger","burger"],
    cl:550,
    pr:28,
    cb:45,
    ft:30,
    ct:"Fast Food",
    hs:55,
    tp:"High calories and saturated fat."
    },
    
    cheeseburger:{
    nm:"Cheeseburger",
    al:["cheeseburger"],
    cl:620,
    pr:30,
    cb:47,
    ft:36,
    ct:"Fast Food",
    hs:50,
    tp:"Consume occasionally."
    },
    
    pizza:{
    nm:"Pizza",
    al:["pizza"],
    cl:285,
    pr:12,
    cb:36,
    ft:10,
    ct:"Fast Food",
    hs:72,
    tp:"Choose vegetable toppings when possible."
    },
    
    shawarma:{
    nm:"Shawarma",
    al:["shawarma"],
    cl:520,
    pr:24,
    cb:48,
    ft:25,
    ct:"Fast Food",
    hs:70,
    tp:"High calorie meal."
    },
    
    hotdog:{
    nm:"Hot Dog",
    al:["hotdog","hot dog"],
    cl:320,
    pr:12,
    cb:28,
    ft:18,
    ct:"Fast Food",
    hs:60,
    tp:"Processed meat should be eaten occasionally."
    },
    
    french_fries:{
    nm:"French Fries",
    al:["fries","french fries"],
    cl:365,
    pr:4,
    cb:48,
    ft:17,
    ct:"Fast Food",
    hs:62,
    tp:"Deep-fried food should be limited."
    },
    
    fried_chicken_combo:{
    nm:"Chicken Combo",
    al:["chicken combo","fried chicken combo"],
    cl:780,
    pr:36,
    cb:68,
    ft:38,
    ct:"Fast Food",
    hs:45,
    tp:"Very high calorie meal."
    },

    //
// ================================
// DRINKS
// ================================
//

water:{
    nm:"Water",
    al:["water"],
    cl:0,
    pr:0,
    cb:0,
    ft:0,
    ct:"Drink",
    hs:100,
    tp:"Stay hydrated throughout the day."
    },
    
    orange_juice:{
    nm:"Orange Juice",
    al:["orange juice","orange_juice"],
    cl:110,
    pr:2,
    cb:26,
    ft:0,
    ct:"Drink",
    hs:90,
    tp:"Natural juice is healthier than soda."
    },
    
    apple_juice:{
    nm:"Apple Juice",
    al:["apple juice","apple_juice"],
    cl:114,
    pr:0,
    cb:28,
    ft:0,
    ct:"Drink",
    hs:88,
    tp:"Contains natural sugars."
    },
    
    coke:{
    nm:"Coca-Cola",
    al:["coke","coca cola","coca-cola"],
    cl:140,
    pr:0,
    cb:39,
    ft:0,
    ct:"Soft Drink",
    hs:35,
    tp:"High added sugar."
    },
    
    sprite:{
    nm:"Sprite",
    al:["sprite"],
    cl:140,
    pr:0,
    cb:38,
    ft:0,
    ct:"Soft Drink",
    hs:35,
    tp:"Limit sugary beverages."
    },
    
    fanta:{
    nm:"Fanta",
    al:["fanta"],
    cl:160,
    pr:0,
    cb:44,
    ft:0,
    ct:"Soft Drink",
    hs:30,
    tp:"High sugar content."
    },
    
    milk:{
    nm:"Milk",
    al:["milk"],
    cl:150,
    pr:8,
    cb:12,
    ft:8,
    ct:"Drink",
    hs:96,
    tp:"Good source of calcium."
    },
    
    coffee:{
    nm:"Coffee",
    al:["coffee","black coffee"],
    cl:2,
    pr:0,
    cb:0,
    ft:0,
    ct:"Drink",
    hs:99,
    tp:"Minimal calories without sugar."
    },
    
    tea:{
    nm:"Tea",
    al:["tea","green tea"],
    cl:2,
    pr:0,
    cb:0,
    ft:0,
    ct:"Drink",
    hs:100,
    tp:"Rich in antioxidants."
    },

    //
// ================================
// SNACKS & DESSERTS
// ================================
//

doughnut:{
    nm:"Doughnut",
    al:["doughnut","donut"],
    cl:260,
    pr:4,
    cb:31,
    ft:14,
    ct:"Snack",
    hs:45,
    tp:"High sugar snack."
    },
    
    cake:{
    nm:"Cake",
    al:["cake"],
    cl:350,
    pr:4,
    cb:52,
    ft:14,
    ct:"Dessert",
    hs:40,
    tp:"Consume in moderation."
    },
    
    ice_cream:{
    nm:"Ice Cream",
    al:["ice cream","ice_cream"],
    cl:210,
    pr:4,
    cb:24,
    ft:11,
    ct:"Dessert",
    hs:50,
    tp:"High sugar and fat."
    },
    
    cookies:{
    nm:"Cookies",
    al:["cookies","cookie"],
    cl:160,
    pr:2,
    cb:22,
    ft:7,
    ct:"Snack",
    hs:48,
    tp:"Limit frequent consumption."
    },
    
    popcorn:{
    nm:"Popcorn",
    al:["popcorn"],
    cl:120,
    pr:3,
    cb:22,
    ft:2,
    ct:"Snack",
    hs:92,
    tp:"Healthy when not heavily buttered."
    },
    
    plantain_chips:{
    nm:"Plantain Chips",
    al:["plantain chips","plantain_chips"],
    cl:290,
    pr:2,
    cb:34,
    ft:17,
    ct:"Snack",
    hs:62,
    tp:"Contains healthy potassium but is fried."
    },
    
    chin_chin:{
    nm:"Chin Chin",
    al:["chin chin","chin_chin"],
    cl:450,
    pr:6,
    cb:55,
    ft:22,
    ct:"Snack",
    hs:42,
    tp:"High calorie snack."
    },
    
    meat_pie:{
    nm:"Meat Pie",
    al:["meat pie","meat_pie"],
    cl:420,
    pr:10,
    cb:38,
    ft:24,
    ct:"Snack",
    hs:55,
    tp:"High fat pastry."
    },
    
    sausage_roll:{
    nm:"Sausage Roll",
    al:["sausage roll","sausage_roll"],
    cl:390,
    pr:12,
    cb:30,
    ft:25,
    ct:"Snack",
    hs:52,
    tp:"Processed meat snack."
    }
};