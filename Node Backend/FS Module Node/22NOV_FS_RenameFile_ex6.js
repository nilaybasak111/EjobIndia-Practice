const fs = require("fs");

// fs.rename is Used to Rename A File
fs.rename(
  "./22NOV_RenameFile_Demo7.txt",
  "./22NOV_NewRenameFile_Demo7.txt",
  (error) => {
    try {
      if (error) throw error;
      console.log("Rename Operation is Done");
    } catch (error) {
      console.log("Error : ", error);
    }
  }
);
