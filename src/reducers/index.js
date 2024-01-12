import {counterReducer, displayReducer, skillsReducer} from './Reducers'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isDisplay: displayReducer,
    isSkills: skillsReducer
})
export default allReducers