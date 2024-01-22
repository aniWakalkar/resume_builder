import { combineReducers } from "redux";
import {
  SkillReducer,
  displayReducer,
  hiddenReducer,
  personalDetailsReducer,
  personalEducationReducer,
  personalExperienceReducer,
} from "./Reducers";

const allReducers = combineReducers({
  isDisplay: displayReducer,
  isHidden: hiddenReducer,
  isPersonal: personalDetailsReducer,
  isEducation: personalEducationReducer,
  isSkill: SkillReducer,
  isExperience: personalExperienceReducer,
});
export default allReducers;
