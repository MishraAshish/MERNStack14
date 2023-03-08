//the centralized state, or collection of reducers
//recieves dispatched actions, reads action type and sends data to be generated on respective reducers
//one application is allowed to have one store and one reducer
//but we'll have many reducers so we need to combine them using hook

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";
import cartRedcuer from "./Cart/cartReducer";

const logger = () => (next) => (action) =>{
    //currying in javasript where we pass function as input and recieve function as output
    console.log("ation logger store ", action)
    next(action);
}

//const rootReducer = userReducer;
const rootReducer = combineReducers({
        userReducer,  //userReducer : userReducer
        productReducer,
        cartRedcuer 
})

//create configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk)
)
