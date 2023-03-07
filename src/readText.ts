const fs = require('fs');

/*
    - This function read a text file
    - Need one argument(File path)
    - Return data read from file
*/

export const readTextFromFile = (filePath:string):string =>{
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return data.toString()
    }catch(err){
        throw new Error("Error " + err);
    }    
   
}
