const { readFileSync, writeFileSync, mkdirSync } = require("fs");
function createFolderGb(){
    for (let i = 0; i < 50; i++) {
        mkdirSync(`./folder${i + 1}`);
        console.log(`flder ${i + 1} created.`);
    };
};
createFolderGb()