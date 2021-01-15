const betReducer = (state = false, action) => {
    switch(action.type){
        case 'BET':{
            return !state;
        }
        default: return state;
    }
}
export default betReducer;