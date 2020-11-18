const readline = require("readline");
const fs = require('fs');

if (process.argv.length==2) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('line', (input) => {
        console.log(`${input.repeat(1)}`);
      });
} else if (process.argv.length==3) {
    fs.readFile(process.argv[2], 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
} else if (process.argv.length==4 && process.argv[2]==='-e') {
    fs.readFile(process.argv[3], 'utf8', function (err, data) {
        if (err) throw err;
        let result = data.replace(/\r\n/g, '$\r\n') 
        if (!/\$$/.test(result)) result= result + '$'
        console.log(result); 
    });
}