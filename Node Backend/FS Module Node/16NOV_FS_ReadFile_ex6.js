const fs = require("fs");

// Using .readFile() You can read a file
fs.readFile("./16NOV_ReadFile_Demo3.json", (error, data) => {
  try {
    if (error) throw new Error("Error While Reading File");
    // console.log(data.toString()); // for .txt file
    // console.log(data.toString()); // for .html file
    console.log(JSON.parse(data)); // for .json file
  } catch (error) {
    console.log(error);
  }
});

// If you dont want to use .toString() method
// Then you can use .utf-8 for encoding the file data
// fs.readFile("./16NOV_ReadFile_Demo1.txt", "utf-8", (error, data) => {
//   try {
//     if (error) throw new Error("Error While Reading File");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// });
