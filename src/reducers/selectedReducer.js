const initialState = []

const selectedReducer = ( state =initialState, action ) =>{
    switch(action.type){
        case 'PUSH':
            return [
                ...state,
                Object.assign({},action.payload)
            ]
        case 'POP':
            return state.filter((data,i) => i!== action.id)
        default:
            return state
    }
}
export default selectedReducer;