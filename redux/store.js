import {
    configureStore
} from '@reduxjs/toolkit';

import cardReducer from './slices/cardSlice';

const combineReducers= () =>({
    card: cardReducer
})

const rootReducer = (state, action)=>{
    if(action.type === "GET_CARD"){
        return combineReducers(undefined, action)
    }
    // return combineReducers(state, action);
}

export default configureStore({
    reducer: rootReducer,
})