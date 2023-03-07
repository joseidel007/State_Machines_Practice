import { readTextFromFile } from './readText'

/*
    #### Solución #1: Código puro y simple ####
    - This function count number of specific word
    - Need two argument, first one is the text from file and the second one is the word looking for
    - Returns the number of word appearances 
*/
const findAndCountWord = (arrData:any, wordLookingFor:string):number =>{
    let cnt = 0
    let word = "";
    let newPosition = 0
    for(let i = 0; i < arrData.length; i++){
        word = arrData[i];
        for(let j = i + 1; j < i + wordLookingFor.length; j++){
            word += arrData[j]; 
            newPosition = j;
        }

        if(word === wordLookingFor){
            cnt += 1;
            i = newPosition;
        }
    }
 return cnt;
}




console.log("====> ### A - Challenge ### <====");
const text = readTextFromFile('./text_file/full_speech.txt').toLocaleLowerCase().split('');
const wordLookingFor = 'The'.toLowerCase();

//Time for algorithm A
let startTimeA = new Date().getTime();
const countOfSpecificWord = findAndCountWord(text,wordLookingFor);
let endTimeA= new Date().getTime();
let timeDiff = (endTimeA - startTimeA);
console.log(`  > Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countOfSpecificWord}`);
console.log(`  > Tiempo en ejecución ${timeDiff} ms`);


