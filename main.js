let slimes = [
    { name: "Pink Slime", diet: "None", fav_food: "Carrot" },
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

let app = document.getElementById("app");

function createCard(slime) {
    return `
    <div class="card">
      <h2>${slime.name}</h2>
      <p>Diet: ${slime.diet}</p>
      <p>Favourite: ${slime.fav_food}</p>
    </div>
    `;
}

app.innerHTML = "";

slimes.forEach(s => {
    app.innerHTML += createCard(s);
});


console.log(slime[0].name);
console.log(slime[0].fav_food);
console.log(slime[1].name);
console.log(slime[1].fav_food);
console.log(slime[2].name);
console.log(slime[2].fav_food);