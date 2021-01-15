const priceReducer = (state = false, action) => {
    switch(action.type){
        case 'PRICE':{
            return !state;
        }
        default: return state;
    }
}
export default priceReducer;