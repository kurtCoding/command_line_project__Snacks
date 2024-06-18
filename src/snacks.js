const { nanoid } = require("nanoid");
const snackPrice = require("../data/snacks.json");

function create(snacks, snackName, price) {
    const snack = {
        name: snackName,
        id: nanoid(3),
        price: Number(price),
        inStock: true
    };
    snacks.push(snack);
    console.log(`Snack: ${snackName} was successfully created with Id: ${snack.id}`);
    return snacks;
}

function index(snacks) {
    return snacks.map((snack) => snack.id + " " + snack.name).join("\n");
}

function show(snacks, snackId){
    const snack = snacks.find((snack) => snack.id === snackId);
    if (snack.inStock === true) {
    return `Id: ${snack.id} Name: ${snack.name} Price: $${snack.price} InStock: ✅`
    } else {
        return `Id: ${snack.id} Name: ${snack.name} Price: $${snack.price} InStock: ❌`
    }
}

function update(snacks, snackId, updatedSnack) {
    const index = snacks.findIndex((snack) => snack.id === snackId);
    if (index > -1) {
        snacks[index].id = snackId;
        snacks[index].name = updatedSnack;
        snacks[index].price = snackPrice[updatedSnack];
        console.log("Snack successfully updated");
        return snacks;
    } else {
        console.log("Sorry we are all out. Please choose again");
        return snacks;
    }
}

function destroy(snacks, snackId) {
    const index = snacks.findIndex((snack) => snack.id === snackId);
    if (index > -1) {
        snacks.splice(index, 1);
        console.log("Snack has been removed");
        return snacks;
    } else {
        console.log("Snack not found");
        return snacks;
    }
}

module.exports = { create, index, show, update, destroy };