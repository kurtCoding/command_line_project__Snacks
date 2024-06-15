const { nanoid } = require("nanoid");
const snackPrice = require("../data/snackPrice.json");

function create(snacks, snackName) {
    const snack = {
        name: snackName,
        id: nanoid(3),
        price: snackPrice.json[snackName]
    };
    snacks.push(snack);
    return snacks;
}

function index(snacks) {
    return snacks.map((snack) => snack.id + " " + snack.name).join("\n");
}

module.exports = { create, index };