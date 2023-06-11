console.log('hey , Jackpot');
const os = require('os');
const path = require('path');
const addmyNumber = require('./math');
const {addNumber} = require('./math');
const fileSystem = require('fs');
const { error } = require('console');


// console.log(__dirname);

// console.log(global);
// console.log(global);
// console.log(`OS : ${os.type()}`)
// console.log(`Version: ${os.version()}`)
// console.log(`Home directory: ${os.homedir()}`)

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));


// console.log(addmyNumber.addNumber(10,11));
// console.log(addNumber(50,50));


fileSystem.readFile(path.join(__dirname,'files','erick.txt'),'utf-8', (error,data) =>{
   if(error) throw error;
   console.log(data);
})

fileSystem.writeFile(path.join(__dirname,'files','jackpot.txt'),'I am called jackpot in the forex market',error =>{
    if(error) throw error;
    console.log('Write file complted !!!');
});

fileSystem.appendFile(path.join(__dirname,'files','Regex.txt'),'We can use regular expression',error =>{
    if(error) throw error;
    console.log('append complted !!!');
});

process.on('uncaughtException', err =>{
    console.error(`There was an error while trying to read your file ${err}`)
    process.exit(1);
});





