import { initialState, initialEducationState , initialExperienceState} from "../actions";
export const displayReducer = (state='block', action) => {
        switch(action.payload){
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            case 4:
                return 4;
            case 5:
                return 5;
            default:
                return 1;
        }
}


export const hiddenReducer = (state='block', action) => {
        switch(action.type){
            case "DISPLAY":
                return state;
            case "HIDDEN":
                return state='hidden';
            default:
                return state;
        }
}



export const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.payload
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export const personalDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'PERSONAL':
            return action.payload
        default:
            return state
    }
}


export const personalEducationReducer = (state = initialEducationState, action) => {
    switch(action.type){
        case 'EDUCATION':
            return action.payload
        default:
            return state
    }
}


export const SkillReducer = (state = '', action) => {
    switch(action.type){
        case 'SKILLS':
            return action.payload
        default:
            return state    
    }
}


export const personalExperienceReducer = (state = initialExperienceState, action) => {
    switch(action.type){
        case 'EXPERIENCE':
            return action.payload
        default:
            return state
    }
}


