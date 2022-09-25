import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';


const combineReducers = combineReducers({
    card: cardReducer
})


export default configureStore({
    reducer
})