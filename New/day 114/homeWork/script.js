// !                                  1
const fs = require("fs");

function createFoldersAndFiles() {
  for (let i = 1; i <= 10; i++) {
    const folder = `folder_${i}`;
    fs.mkdirSync(folder, { recursive: true });

    fs.mkdirSync(`${folder}/classwork`, { recursive: true });
    fs.mkdirSync(`${folder}/homework`, { recursive: true });

    fs.writeFileSync(`${folder}/classwork/classwork.js`, 'console.log("goa best");');
    fs.writeFileSync(`${folder}/homework/homework.js`, 'console.log("goa best");');
  }

  console.log("ფოლდერები და ფაილები შეიქმნა!");
}

// createFoldersAndFiles();


// ! 2 წაშლა 

function deleteFolders(sawyisi, bolo) {
    for (let i = sawyisi; i <= bolo; i++) {
      const folder = `folder_${i}`;
      if (fs.existsSync(folder)) {
        fs.rmSync(folder, { recursive: true});
        console.log(`ფოლდერი "${folder}" წაიშალა.`);
      } else {
        console.log(`ფოლდერი "${folder}" არ მოიძებნა.`);
      }
    }
  }
// deleteFolders(3,5)