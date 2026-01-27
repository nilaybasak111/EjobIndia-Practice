const fs = require('fs');

// Create a directory called '22NOV_MKDirFile_Demo9'
fs.mkdir('./22NOV_MKDirFile_Demo9', { recursive: true }, (err) => {
    if (err) return console.error(err);
    console.log('Directory created successfully!');
});