const fs = require('fs');

// fs.readdir is Used to Read A Directory. 
// It returns an array of file names in the directory.
fs.readdir('./', (err, files) => {
    if (err) return console.error(err);
    
    console.log('Files in current directory:');
    files.forEach(file => {
        console.log('-', file);
    });
});