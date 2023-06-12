const { error } = require('console');
const filesystem = require('fs');
const path = require('path');

const erickfoloder = path.join(__dirname,'erickfolder');


if(!filesystem.existsSync(erickfoloder))
{
    filesystem.mkdir(path.join(__dirname,'erickfolder'), error =>{
        if(error) throw error;
        console.log('directory created');
    });
}else
{
   filesystem.rmdir(erickfoloder, error =>{
     console.log('directory was removed');
   })
}



process.on('uncaughtException', error =>{
    console.error(`Error was found ${error}`)
    process.exit(1);
});