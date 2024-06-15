const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show, update } = require("./src/snacks");


function run() {
    let snacks = readJSONFile("./data", "snacks.json");


}

run();