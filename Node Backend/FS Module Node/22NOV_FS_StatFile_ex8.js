const fs = require("fs");

fs.stat("./22NOV_StatFile_Demo9.txt", (err, stats) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File does not exist.");
    } else {
      console.error(err);
    }
    return;
  }

  // Checking if it is a file or directory
  console.log("Is File:", stats.isFile());
  console.log("Is Directory:", stats.isDirectory());

  if (stats.isFile()) {
    console.log("File Size:", stats.size, "bytes");
    console.log("Created on:", stats.birthtime);
    console.log("Last Modified:", stats.mtime);
  }
});
