const fs = require("fs");

const inputValue = `{
    "name": "Node Backend",
    "message": "Testing Demo2 fs.writeFile",
    "info": {
      "name": "Nilay Basak",
      "age": 24,
      "location": "Kolkata",
      "skills": ["MongoDB", "JS", "React"]
    }
  }`;

fs.writeFile("./22NOV_WriteFile_Demo3.json", inputValue, (error) => {
  try {
    if (error) throw error;
    console.log("Write Operation is Done without Creating any File");
  } catch (error) {
    console.log("Error : ", error);
  }
});
