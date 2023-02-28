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
        return err.toString()
    }    
   
}

/*
    - This function count number of specific word
    - Need two argument, first one is the text from file and the second one is the word looking for
    - Returns the number of word appearances 
*/
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

/*
    Solution 3 with REGEX
*/

const cntWordWithRegex = (textIn:string, word:string):number => {
    const text = textIn.toLowerCase()
    // const regex = text.search(word.toLowerCase() + " ")
    const regexText = textIn.search(/the /ig)
    // console.log(text.search(word.toLowerCase() + " "))

    return regexText
}

//Time for algorithm A
let startTimeA = new Date().getTime();
const text = readTextFromFile('./text_file/full_speech.txt')
const wordLookingFor = 'The'
const countOfSpecificWord = findAndCountWord(text,wordLookingFor)

console.log(`Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countOfSpecificWord}`)
let endTimeA= new Date().getTime();
let timeDiff = (endTimeA - startTimeA);
console.log(`Tiempo en ejecución ${timeDiff} ms`);


let startTimeB = new Date().getTime();
const countWithRegex = cntWordWithRegex(text, wordLookingFor)
console.log(`Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countWithRegex}`)
let endTimeB = new Date().getTime();
let timeDiffB = (endTimeB - startTimeB);
console.log(`Tiempo en ejecución ${timeDiffB} ms`);

