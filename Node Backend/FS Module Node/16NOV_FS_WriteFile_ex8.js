const fs = require("fs");

// Open 'myfile.txt' for writing ('w' flag)
// If the file doesn't exist, it is created.
fs.open("example.txt", "w", (err, fd) => {
  if (err) {
    return console.error("Error opening file:", err);
  }

  console.log(`File opened successfully with File Descriptor: ${fd}`);

  const content = "This data is written using a File Descriptor.";

  // Use the FD to write to the file
  fs.write(fd, content, (writeErr) => {
    if (writeErr) {
      return console.error("Error writing file:", writeErr);
    }
    console.log("Data written successfully.");

    // ALWAYS close the file when you are done to free up memory
    fs.close(fd, (closeErr) => {
      if (closeErr) console.error("Error closing file:", closeErr);
      console.log("File closed.");
    });
  });
});
