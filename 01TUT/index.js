const myfielSystem = require('fs').promises;
const path = require('path');




const fileOps = async () =>{

    try
    {
        const data =  await myfielSystem.readFile(path.join(__dirname,'files','erick.txt'),'utf-8')
        console.log(data);
        await myfielSystem.appendFile(path.join(__dirname,'files','erick.txt'),'\n\n I am doing udemy course for web');
        await myfielSystem.rename(path.join(__dirname,'files','erick.txt'),path.join(__dirname,'files','yollande.txt'));

        const newData = await myfielSystem.readFile(path.join(__dirname,'files','yollande.txt'),'utf-8')
        console.log(`New data :${newData}`);
    }
       catch(error)
    {
        console.error(`There was an error while trying to read file : ${error}`); 
    }
      finally
    {
        console.log('Data finished executing');
    }

}


fileOps();