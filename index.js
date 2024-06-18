const { readJSONFile, writeJSONFile } = require("./src/helpers");
const { create, index, show, update, destroy } = require("./src/snacks");


function run() {
    let snacks = readJSONFile("./data", "snacks.json");
    let updatedSnack = [];
    let writeToFile = false;
    
    const action = process.argv[2];
    const snack = process.argv[3];
    const price = process.argv[4];

    switch (action) {
        case "create":
            updatedSnack = create(snacks, snack, price);
            writeToFile = true;
            break;
        case "index":
            const allSnacks = index(snacks)
            console.log(allSnacks);
            break;
        case "show":
            const oneSnack = show(snacks, snack);
            console.log(oneSnack);
            break;
        case "update":
            updatedSnack = update(snacks, snack, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedSnack = destroy(snacks, snack);
            writeToFile = true;
            break;
        default:
            console.log("There was an error");
    }
    if (writeToFile) {
        writeJSONFile("./data", "snacks.json", updatedSnack);
    }
}

run();