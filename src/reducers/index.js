import priceReducer from './priceReducer'
import betReducer from './betReducer'
import nameReducer from './nameReducer'
import selectedReducer from './selectedReducer'
import winReducer from './winReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    priceReducer,
    nameReducer,
    betReducer,
    selectedReducer,
    winReducer
})
export default allReducers;