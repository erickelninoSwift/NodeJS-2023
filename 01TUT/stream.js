const myFs =  require('fs');
const path = require('path');



const read = myFs.createReadStream(path.join(__dirname,'files','starter.txt'),{encoding:'utf-8'});

const write = myFs.createWriteStream(path.join(__dirname,'files','new-erickelnino.txt'));

read.on('data', (mydata) =>{
    console.log(mydata);
});

read.pipe(write);

myFs.unlink(path.join(__dirname,'files','Elnino.txt'),(error) =>{
    if(error) throw error;

    console.log('data was deleted ');
});

