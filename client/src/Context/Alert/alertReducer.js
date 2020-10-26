import {SET_ALERT, REMOVE_ALERT } from '../Types';

export default (state, action) => {
    switch(action.type){
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(filter => alert.id !== action.payload);
        default:
            return state;
    }
};