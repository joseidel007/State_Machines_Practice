


/*
    Solución #2: With Automata
    
*/

let alphabet =
{
    t: "t",
    h: "h",
    e: "e"
};

const stateq0 = (data:[], cnt:number, correct:boolean) =>{
    if(data.length === 0){
        return cnt
    }
    if(correct){
        cnt += 1;
    }

    if(data.shift() === 't'){
        stateq1(data,cnt,true)
    }
    else{
        stateq0(data,cnt,false);
    }


}

const stateq1 = (data:any, cnt:number, correct:boolean) =>{
    if( data[0] === 'h'){
        data.shift();
        stateq2(data,cnt,true);
    }
    else{
        stateq0(data,cnt,false)
    }

}

const stateq2 = (data:any, cnt:number, correct:boolean) => {
    if(data[0] === 'e'){
        data.shift();
        stateq0(data,cnt,true);
    }else{
        stateq0(data,cnt,false);
    }

}

let str = "theatheathe"
let arrStr:any = str.split('')
console.log(stateq0(arrStr,0,false));