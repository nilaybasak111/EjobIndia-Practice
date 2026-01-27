const fs = require("fs");

const inputValue = `(
  <html>
    <head>
      {" "}
      <title> fs.writeFile</title>
    </head>
    <body>
      {" "}
      <h1>Node Backend</h1> <p>Testing Demo2 fs.writeFile</p>{" "}
    </body>
  </html>
)`;

fs.writeFile("./22NOV_WriteFile_Demo2.html", inputValue, (error) => {
  try {
    if (error) throw error;
    console.log("Write Operation is Done without Creating any File");
  } catch (error) {
    console.log("Error : ", error);
  }
});
