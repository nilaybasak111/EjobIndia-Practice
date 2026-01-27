const fs = require('fs');

// Deleting an empty directory
fs.rmdir('./22NOV_MKDirFile_Demo9', (err) => {
    if (err) return console.error(err);
    console.log('Empty directory removed!');
});