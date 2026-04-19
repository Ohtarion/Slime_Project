let slimes = [
    { name: "Pink Slime", diet: "None", fav_food: "None" },
    { name: "Dervish Slime", diet: "Fruit", fav_food: "Pickle Pear" },
    { name: "Hunter Slime", diet: "Meat", fav_food: "Roostro" },
    { name: "Crystal Slime", diet: "Veggie", fav_food: "Odd Onion" },
    { name: "Honey Slime", diet: "Fruit", fav_food: "Mint Mango" },
    { name: "Boom Slime", diet: "Meat", fav_food: "Briar Hen" },
    { name: "Ringtail Slime", diet: "Everything", fav_food: "None" },
    { name: "Flutter Slime", diet: "Nectar", fav_food: "Moondew Nectar" },
    { name: "Batty Slime", diet: "Fruit", fav_food: "Pomegranite" },
    { name: "Rock Slime", diet: "Veggie", fav_food: "Heart Beat" },
    { name: "Angler Slime", diet: "Meat", fav_food: "Sea Hen" },
    { name: "Phosphor Slime", diet: "Fruit", fav_food: "Cuberry" },
    { name: "Tabby Slime", diet: "Meat", fav_food: "Stony Hen" },
    { name: "Cotton Slime", diet: "Veggie", fav_food: "Water Lettuce" },
    { name: "Tangle Slime", diet: "Meat", fav_food: "Painted Hen" },
    { name: "Twin Slime", diet: "Fruit", fav_food: "Polaricherry" },
    { name: "Sloomber Slime", diet: "Meat", fav_food: "Candied Hen" }
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
      <p>Diet: ${slime.diet}</p>
      <p>Favourite: ${slime.fav_food}</p>
    </div>
    `;
}

function renderSlimes() {
    catImg.style.display = "none";
    app.innerHTML = "";

    slimes.forEach(s => {
        app.innerHTML += createCard(s);
    });
}

function renderFood() {
    app.innerHTML = "";

    food.forEach(f => {
        app.innerHTML += `
        <div class="card">
            <h2>${f.name}</h2>
            <p>Type: ${f.type}</p>
            <p>Favourite of: ${f.fav_of}</p>
        </div>
        `;
    });
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