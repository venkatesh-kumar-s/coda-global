const nameReducer = (state = false, action) => {
    switch(action.type){
        case 'NAME':{
            return !state;
        }
        default: return state;
    }
}
export default nameReducer;