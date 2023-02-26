const path = require('path');
const fs = require('fs');

const readTextFromFile = (filePath:string):string =>{
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return data.toString()
    }catch(err){
        throw new Error("Error " + err);
        return err.toString()
    }    
   
}

const findAndCountWord = (data:string, wordLookingFor:string):number =>{
    let arrData = data.toLowerCase().split(" ");
    let cnt = 0
    for(let i = 0; i < arrData.length; i++){
        if(arrData[i] === wordLookingFor.toLowerCase()){
            cnt += 1;
        }

    }
 return cnt;
}


const text = readTextFromFile('./text_file/full_speech.txt')
const wordLookingFor = 'The'
const countOfSpecificWord = findAndCountWord(text,wordLookingFor)

console.log(`Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countOfSpecificWord}`)


