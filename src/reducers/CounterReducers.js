import { DECREMENT, INCREMENT } from "../actions/actionTypes";

export const counterReducers = (times = 0, action) =>{
    switch(action.type){
        case INCREMENT:
            return times + action.step;
        case DECREMENT:
            return times - action.step;
        default:
            return times;
    }
}