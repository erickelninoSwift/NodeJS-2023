console.log('hey , Jackpot');
const os = require('os');
const path = require('path');
const addmyNumber = require('./math');
const {addNumber} = require('./math');








// console.log(__dirname);

// console.log(global);
// console.log(global);
// console.log(`OS : ${os.type()}`)
// console.log(`Version: ${os.version()}`)
// console.log(`Home directory: ${os.homedir()}`)

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));


console.log(addmyNumber.addNumber(10,11));
console.log(addNumber(50,50));






