const iniitialdata=0;

const Numchange=(state=iniitialdata, action)=>{
    switch(action.type){
        case "INCR": return state+1;
        case "DECR": return state-1;
        default: return state;
    }
}

export default Numchange;