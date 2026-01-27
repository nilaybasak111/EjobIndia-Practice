const fs = require("fs");

// fs.unlink is Used to Delete A File
fs.unlink("./22NOV_DeleteFile_Demo8.txt", (error) => {
  try {
    if (error) throw error;
    console.log("Delete Operation is Done");
  } catch (error) {
    console.log("Error : ", error);
  }
});
