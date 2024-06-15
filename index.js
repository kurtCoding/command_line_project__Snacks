const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show, update, destroy } = require("./src/snacks");


function run() {
    let snacks = readJSONFile("./data", "snacks.json");
    let updatedSnack = [];

}

run();