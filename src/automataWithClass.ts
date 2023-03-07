class States{
    public constructor(
        public letterToValidate:string,
        public assignedLetter
        ){}

    ValidateWord(){
        if(this.assignedLetter === this.letterToValidate){
            return true
        }
        else{
            return false
        }

    }

    Saludar(){
        console.log("Hola")
    }
}

type State = {
    assignedLetter: String,
    nextState: String,
    previowsState: String,
}


let text = 'thethe';
let arrStr:any = text.toString().toLowerCase().split('')
let statesInstances = [];
let letters = 'the'.toLowerCase().split('');
for(let i = 0; i < letters.length; i++){
    statesInstances.push(new States(arrStr[0], letters[0]))
    statesInstances.push('stateq' + i.toString());
    //statesInstances[i] = new States(arrStr[0], letters[0])
    console.log(statesInstances[i])
}
