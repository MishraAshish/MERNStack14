//store : combination of reducers
//reducers : we'll have reduce functions to create new state 
//initialize the state

import * as ActionTypes from "../actionTypes";

let initialState = {
    userName : "UserName",
    password : "Default Password",
    street : "Default Address",
    mobile : "0070080091"
}

//store : upon looking into all dispatched actions will match given action type which is defined in each reducer
// and will return new state on the basis of changes done in swith statement

let userReducer = (state=initialState, action)=> {

    console.log("userReducer ", action);

    switch (action.type) {

        case ActionTypes.USER_ADDUSER:
                return action.payload;

        case ActionTypes.USER_UPDATETUSER:
                return {...state, UserName: action.payload.UserName};

        case ActionTypes.USER_GETUSER:
                return state;

        default:
             return state;
            break;
    }
}

export default userReducer;