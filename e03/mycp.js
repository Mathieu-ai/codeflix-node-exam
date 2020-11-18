const fs = require('fs');

if (process.argv.length==4) {
  fs.copyFile(process.argv[2], process.argv[3], (err) => {
    if (err) throw err;
    console.log('File was copied to destination');
  }); /*
} else if (process.argv.length==5 && process.argv[2]==='-r' ) {
  fs.writeFile(process.argv[3], 'if you read this, then the file is succefully created', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}
*/