let catCard = {
    name: "Mysterious Cat",
    diet: "???",
    fav_food: "Whiskas",
    favourite: "Angi & Marten",
    extra: "Eaten by: Nobody, he will fuck you up",
    img: "breed_abyssinian_cat.jpg"
};

let slimes = [
    { name: "Pink Slime", diet: "None", fav_food: "None", img: "Slime_Images/Pink_Slime.jpg" },
    { name: "Dervish Slime", diet: "Fruit", fav_food: "Pickle Pear", img: "Slime_Images/Dervish_Slime.jpg" },
    { name: "Hunter Slime", diet: "Meat", fav_food: "Roostro", img: "Slime_Images/Hunter_Slime.jpg" },
    { name: "Crystal Slime", diet: "Veggie", fav_food: "Odd Onion", img: "Slime_Images/Crystal_Slime.jpg" },
    { name: "Honey Slime", diet: "Fruit", fav_food: "Mint Mango", img: "Slime_Images/Honey_Slime.jpg" },
    { name: "Boom Slime", diet: "Meat", fav_food: "Briar Hen", img: "Slime_Images/Boom-Slime.jpg" },
    { name: "Ringtail Slime", diet: "Everything", fav_food: "None", img: "Slime_Images/Ringtail_Slime.jpg" },
    { name: "Flutter Slime", diet: "Nectar", fav_food: "Moondew Nectar", img: "Slime_Images/Flutter_Slime.jpg" },
    { name: "Batty Slime", diet: "Fruit", fav_food: "Pomegranite", img: "Slime_Images/Batty_Slime.jpg" },
    { name: "Rock Slime", diet: "Veggie", fav_food: "Heart Beat", img: "Slime_Images/Rock_Slime.jpg" },
    { name: "Angler Slime", diet: "Meat", fav_food: "Sea Hen", img: "Slime_Images/Angler_Slime.png" },
    { name: "Phosphor Slime", diet: "Fruit", fav_food: "Cuberry", img: "Slime_Images/Phosphor_Slime.jpg" },
    { name: "Tabby Slime", diet: "Meat", fav_food: "Stony Hen", img: "Slime_Images/Tabby_Slime.jpg" },
    { name: "Cotton Slime", diet: "Veggie", fav_food: "Water Lettuce", img: "Slime_Images/Cotton_Slime.jpg" },
    { name: "Tangle Slime", diet: "Meat", fav_food: "Painted Hen", img: "Slime_Images/Tangle_Slime.jpg" },
    { name: "Twin Slime", diet: "Fruit", fav_food: "Polaricherry", img: "Slime_Images/Twin_Slime.jpg" },
    { name: "Sloomber Slime", diet: "Meat", fav_food: "Candied Hen", img: "Slime_Images/Sloomber_Slime.png" }
];

let food = [
    { name: "Pickle Pear", type: "Fruit", fav_of: "Dervish Slime" },
    { name: "Roostro", type: "Meat", fav_of: "Hunter Slime" },
    { name: "Odd Onion", type: "Veggie", fav_of: "Crystal Slime" },
    { name: "Mint Mango", type: "Fruit", fav_of: "Honey Slime" },
    { name: "Briar Hen", type: "Meat", fav_of: "Boom Slime" },
    { name: "Moondew Nectar", type: "Nectar", fav_of: "Flutter Slime" },
    { name: "Pomegranite", type: "Fruit", fav_of: "Batty Slime" },
    { name: "Heart Beat", type: "Veggie", fav_of: "Rock Slime" },
    { name: "Sea Hen", type: "Meat", fav_of: "Angler Slime" },
    { name: "Cuberry", type: "Fruit", fav_of: "Phosphor Slime" },
    { name: "Stony Hen", type: "Meat", fav_of: "Tabby Slime" },
    { name: "Water Lettuce", type: "Veggie", fav_of: "Cotton Slime" },
    { name: "Painted Hen", type: "Meat", fav_of: "Tangle Slime" },
    { name: "Polaricherry", type: "Fruit", fav_of: "Twin Slime" },
    { name: "Candied Hen", type: "Meat", fav_of: "Sloomber Slime" }
];

// Arrays sortieren
slimes.sort((a, b) => a.name.localeCompare(b.name));
food.sort((a, b) => a.name.localeCompare(b.name));

let app = document.getElementById("app");
let catImg = document.getElementById("cat");

function createCard(slime) {
    return `
    <div class="card">
      <h2>${slime.name}</h2>
      <img src="${slime.img}" alt="${slime.name}">
      <p>Diet: ${slime.diet}</p>
      <p>Favourite: ${slime.fav_food}</p>
    </div>
    `;
}

function createCatCard(cat) {
    return `
    <div class="card">
        <h2>${cat.name}</h2>
        <img src="${cat.img}" style="width: 200px;">
        <p>Fav food: ${cat.fav_food}</p>
        <p>Favourite: ${cat.favourite}</p>
        <p>${cat.extra}</p>
    </div>
    `;
}

function renderSlimes() {
    app.innerHTML = "";

    let randomIndex = Math.floor(Math.random() * (slimes.length + 1));

    slimes.forEach((s, index) => {
        if (index === randomIndex) {
            app.innerHTML += createCatCard(catCard);
        }

        app.innerHTML += createCard(s);
    });

    // Falls randomIndex ganz am Ende liegt
    if (randomIndex === slimes.length) {
        app.innerHTML += createCatCard(catCard);
    }
}

function renderFood() {
    app.innerHTML = "";

    let randomIndex = Math.floor(Math.random() * (food.length + 1));

    food.forEach((f, index) => {
        if (index === randomIndex) {
            app.innerHTML += createCatCard(catCard);
        }

        app.innerHTML += `
        <div class="card">
            <h2>${f.name}</h2>
            <p>Type: ${f.type}</p>
            <p>Favourite of: ${f.fav_of}</p>
        </div>
        `;
    });

    if (randomIndex === food.length) {
        app.innerHTML += createCatCard(catCard);
    }
}

function renderCats() {
    app.innerHTML = "";

    if (catImg.style.display === "none") {
        catImg.style.display = "block";
    } else {
        catImg.style.display = "none";
    }
}

// Buttons holen
let slimeBtn = document.getElementById("slime-btn");
let foodBtn = document.getElementById("food-btn");
let catBtn = document.getElementById("cat-btn");

// Events
slimeBtn.addEventListener("click", renderSlimes);
foodBtn.addEventListener("click", renderFood);
catBtn.addEventListener("click", renderCats);

// Default View
renderSlimes();