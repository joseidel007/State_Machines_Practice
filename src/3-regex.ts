import { readTextFromFile } from './readText'

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

const text = readTextFromFile('./text_file/full_speech.txt');
const wordLookingFor = 'The';

//Time for algorithm B
console.log("====> ### C - Challenge ### <====");
let startTime = new Date().getTime();
const countWithRegex = cntWordWithRegex(text, wordLookingFor)
let endTime = new Date().getTime();
let timeDiff = (endTime - startTime);
console.log(`  > Cantidad de repeticiones de la palabra ${wordLookingFor} es ${countWithRegex}`)
console.log(`  > Tiempo en ejecución ${timeDiff} ms`);
