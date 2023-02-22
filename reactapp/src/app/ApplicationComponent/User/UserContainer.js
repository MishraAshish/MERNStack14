import User from "./UserComponent";
import { connect } from "react-redux";

import { addUserToStore, signInSignUpUser } from "../../State/User/useractions";

//subsribing from store
let mapStateToProps = (state)=>{ //store
    return {
        User : state.userReducer
    }
}

//publishing to store
let mapDispatchToStore = (dispatch)=>{
    return{
        AddUserToStore : (user)=>{
                dispatch(addUserToStore(user))
            },
        SaveUserToDB : (user)=>{
            dispatch(signInSignUpUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToStore)(User);