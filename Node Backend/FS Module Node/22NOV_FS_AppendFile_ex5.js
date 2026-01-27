const fs = require("fs");

const inputValue = `
<p> Append Operation Started From Here </p>
  <ol>
    <li>Hi</li>
    <li>Hello</li>
    <li>Welcome</li>
  </ol>
`;

// fs.appendFile is Used to Append A File
fs.appendFile("./22NOV_AppendFile_Demo2.html", inputValue, (error) => {
  try {
    if (error) throw error;
    console.log("Append Operation is Done");
  } catch (error) {
    console.log("Error : ", error);
  }
});
