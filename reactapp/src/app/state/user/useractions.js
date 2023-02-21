//we'll create action object essentially to adduser to store when it is invoked on UI

import * as ActionTypes from "../actionTypes";

//action is the object that we'll dispatch from user component to store/reducer
export const addUserToStore = (user)=>{
    return {
        type : ActionTypes.USER_ADDUSER,
        payload : user
    }
}

export const getUserToStore = (user)=>{
    return {
        type : ActionTypes.USER_ADDUSER,
    }
}