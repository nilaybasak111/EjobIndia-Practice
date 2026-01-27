const fs = require("fs");

fs.readFile("./22NOV_WriteFile_Demo2.html", (error, data) => {
  try {
    if (error) throw error;
    console.log("Data : ", data.toString());
    fs.writeFile("./22NOV_CopyFile_Demo1.html", data, (error) => {
      if (error) throw error;
      console.log("Copy Operation is Done");
    });
  } catch (error) {
    console.log("Error : ", error);
  }
});
