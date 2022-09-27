import {configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';

const combineReducers= () =>({
    card: cardReducer
})

const rootReducer = (state, action)=>{
    // if(action.type === "getData"){
    //     return combineReducers(undefined, action)
    // }
    return combineReducers(state, action);
}

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


// export default () => {
//     const rootReducer = combineReducers({
//       card: cardReducer
//     });
  
//     return configureStore(rootReducer);
//   };
  