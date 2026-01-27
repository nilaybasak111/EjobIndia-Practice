const fs = require("fs");

// fs.writeFile is Used to Write A File. If the File does not Exist, It will be Created by Default.
fs.writeFile(
  "./22NOV_WriteFile_Demo1.txt",
  "Hello This is the Write Operation using fs.writeFile",
  (error) => {
    try {
      if (error) throw error;
      console.log("Write Operation is Done");
    } catch (error) {
      console.log("Error : ", error);
    }
  }
);
