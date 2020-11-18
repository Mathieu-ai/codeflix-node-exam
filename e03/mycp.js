const fs = require('fs');

if (process.argv.length==4) {
  fs.copyFile(process.argv[2], process.argv[3], (err) => {
    if (err) throw err;
    console.log('File was copied to destination');
  }); 
} else if (process.argv.length==4 && process.argv[2]==='-r' ) {
  fs.copyFile( process.argv[3], process.argv[4], fs.constants.COPYFILE_EXC, function(err, data) {
    if (err) throw err;
    console.log(data);
  });
}
