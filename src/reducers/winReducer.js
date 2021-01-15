const winState = {
    win:0,
    loose:0
}
const winReducer = (state = winState, action)=>{
    switch(action.type){
        case 'WON':
            return {
                win:state.win +1}

        case 'LOST':
            return {
                loose:state.loose +1} 
        
        default : return state
    }
}
export default winReducer;