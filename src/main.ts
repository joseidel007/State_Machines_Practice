const path = require('path');
const fs = require('fs');

/*
    - This function read a text file
    - Need one argument(File path)
    - Return data read from file
*/

const readTextFromFile = (filePath:string):string =>{
    try{
        const data = fs.readFileSync(filePath, 'utf8');
        return data.toString()
    }catch(err){
        throw new Error("Error " + err);
    }    
   
}

/*
    #### Solución #1: Código puro y simple ####
    - This function count number of specific word
    - Need two argument, first one is the text from file and the second one is the word looking for
    - Returns the number of word appearances 
*/
const findAndCountWord = (data:string, wordLookingFor:string):number =>{
    let arrData = data.toLowerCase().split("");
    let cnt = 0
    let word = "";
    let newPosition = 0
    for(let i = 0; i < arrData.length; i++){
        word = arrData[i];
        for(let j = i + 1; j < i + wordLookingFor.length; j++){
            word += arrData[j]; 
            newPosition = j;
        }

        if(word === wordLookingFor.toLowerCase()){
            cnt += 1;
            i = newPosition;
        }
    }
 return cnt;
}

/*
    Solución #3: REGEX (/.../)
*/

const cntWordWithRegex = (textIn:string, word:string):number => {
    const regex = /The/ig
    let count = 0;
    while(regex.exec(textIn) !== null){
        count += 1;
    }
    return count;
}

//Time for algorithm A
console.log("====> ### A - Challenge ### <====");
const text = readTextFromFile('./text_file/full_speech.txt');
const wordLookingFor = 'The';
let startTimeA = new Date().getTime();
const countOfSpecificWord = findAndCountWord(text,wordLookingFor);
console.log(`  > Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countOfSpecificWord}`);
let endTimeA= new Date().getTime();
let timeDiff = (endTimeA - startTimeA);
console.log(`  > Tiempo en ejecución ${timeDiff} ms`);


//Time for algorithm B
console.log("====> ### C - Challenge ### <====");
let startTimeB = new Date().getTime();
const countWithRegex = cntWordWithRegex(text, wordLookingFor)
console.log(`  > Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countWithRegex}`)
let endTimeB = new Date().getTime();
let timeDiffB = (endTimeB - startTimeB);
console.log(`  > Tiempo en ejecución ${timeDiffB} ms`);

