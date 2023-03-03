


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
    if(correct){
        cnt += 1;
    }

    if(data.shift() === 't'){
        stateq1(data,cnt,true)
    }     

    if(data.length ===0){
        return cnt
    }

}

const stateq1 = (data:any, cnt:number, correct:boolean) =>{
    if( data[0] === 'h'){
        stateq2(data,cnt,true)
    }
    else{
        stateq0(data,cnt,false)
    }

}

const stateq2 = (data:any, cnt:number, correct:boolean) => {
    if(data[1] === 'e'){
        stateq0(data,cnt,true);
    }else{
        stateq0(data,cnt,false);
    }

}