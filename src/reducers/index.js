import {counterReducer, displayReducer, personalDetailsReducer, personalEducationReducer, SkillReducer, hiddenReducer, personalExperienceReducer} from './Reducers'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isDisplay: displayReducer,
    isHidden: hiddenReducer,
    isPersonal: personalDetailsReducer,
    isEducation: personalEducationReducer,
    isSkill: SkillReducer,
    isExperience: personalExperienceReducer,
})
export default allReducers