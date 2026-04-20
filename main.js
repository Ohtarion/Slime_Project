// Define an object for the cat card with properties: name, diet, favorite food, favorite person, extra info, and image source
let catCard = {
    name: "Mysterious Cat",
    diet: "???",
    fav_food: "Whiskas",
    favourite: "Angi",
    extra: "Eaten by: Nobody, he will fuck you up",
    img: "breed_abyssinian_cat.jpg"
};

// Define an array of slime objects, each with name, diet, favorite food, and image source
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

// Define an array of food objects, each with name, type, and which slime it's favorite of
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

// Sort the slimes array alphabetically by name
slimes.sort((a, b) => a.name.localeCompare(b.name));
// Sort the food array alphabetically by name
food.sort((a, b) => a.name.localeCompare(b.name));

// Get the DOM element with ID "app" where content will be rendered
let app = document.getElementById("app");
// Get the DOM element with ID "cat" which is the cat image
let catImg = document.getElementById("cat");

// Function to create HTML for a slime card
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

// Function to create HTML for the cat card
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

// Function to render the slimes view
function renderSlimes() {
    // Clear the app content
    app.innerHTML = "";

    // Check if random chance (5/10) to include the cat
    if (Math.random() < 0.1) {
        // Generate a random index to insert the cat card
        let randomIndex = Math.floor(Math.random() * (slimes.length + 1));

        // Loop through slimes and insert cat card at random index
        slimes.forEach((s, index) => {
            if (index === randomIndex) {
                app.innerHTML += createCatCard(catCard);
            }
            app.innerHTML += createCard(s);
        });

        // If randomIndex is at the end, add cat card after all slimes
        if (randomIndex === slimes.length) {
            app.innerHTML += createCatCard(catCard);
        }
    } else {
        // If no cat, just render all slimes
        slimes.forEach(s => app.innerHTML += createCard(s));
    }
}

// Function to render the food view
function renderFood() {
    // Clear the app content
    app.innerHTML = "";

    // Check for 1/10 chance to include the cat
    if (Math.random() < 0.1) { // 1/10 chance to include the cat
        // Generate random index for cat insertion
        let randomIndex = Math.floor(Math.random() * (food.length + 1));

        // Loop through food and insert cat at random index
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

        // Add cat at end if index matches
        if (randomIndex === food.length) {
            app.innerHTML += createCatCard(catCard);
        }
    } else {
        // Render food without cat
        food.forEach(f => app.innerHTML += `
        <div class="card">
            <h2>${f.name}</h2>
            <p>Type: ${f.type}</p>
            <p>Favourite of: ${f.fav_of}</p>
        </div>
        `);
    }
}

// Function to render the cat view (toggles the cat image)
function renderCats() {
    // Clear app content
    app.innerHTML = "";

    // Toggle the display of the cat image
    if (catImg.style.display === "none") {
        catImg.style.display = "block";
    } else {
        catImg.style.display = "none";
    }
}

// Get button elements by ID
let slimeBtn = document.getElementById("slime-btn");
let foodBtn = document.getElementById("food-btn");
let catBtn = document.getElementById("cat-btn");

// Add event listeners to buttons to call respective render functions
slimeBtn.addEventListener("click", renderSlimes);
foodBtn.addEventListener("click", renderFood);
catBtn.addEventListener("click", renderCats);

// Default view: render slimes on page load
renderSlimes();