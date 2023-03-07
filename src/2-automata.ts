import { readTextFromFile } from './readText'


/*
    Solución #2: With Automata
    
*/

let alphabet =
{
    t: "t",
    h: "h",
    e: "e"
};


const automata = (data:[]) =>{
    let state = 'stateq0';
    let cnt = 0;
    if(data.length === 0){
        return 0
    }
    
    for(let i = 0; i < data.length; i++){
        switch(state){
            case 'stateq0':
                if(data[i] === 't'){
                    state = 'stateq1'
                }
                break
            case 'stateq1':
                if(data[i] === 'h'){
                    state = 'stateq2'
                }else{
                    state = 'stateq0'
                }
                break
            case 'stateq2':
                if(data[i] === 'e'){
                    state = 'stateq0'
                    cnt += 1;
                }else{
                    state = 'stateq0'
                }
                break
            default:
                break
        }

    }
    return cnt;

}


const text:string = readTextFromFile('./text_file/full_speech.txt');
let arrStr:any = text.toString().toLowerCase().split('')

let startTimeA = new Date().getTime();
console.log(automata(arrStr));
let endTimeA= new Date().getTime();
let timeDiff = (endTimeA - startTimeA);
console.log(`  > Tiempo en ejecución ${timeDiff} ms`);
