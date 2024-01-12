// import { initialState } from '../actions';

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
        default:
            return 1;
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


export const skillsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SKILLS':
        return  [...state, action.payload];
      default:
        return state;
    }
};


