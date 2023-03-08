import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
 
let Header = (props)=>{

    console.log(props.user) // reading store data send from mapStateToProps as props here

    let userName = props.user.userName;

    let navigate = useNavigate();

    let func = ()=>{
        navigate('/about/2500');
    }

    return(
        <>
            Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink> 

                {/* <button className="button" onClick={func} >Go To About</button> */}
            </div>
        </>
    )
}

// Header.defaultProps = {
//     headerTitle : "Header Default Component"
// }

// Header.propTypes = {
//     headerTitle : PropTypes.string.isRequired
// }

//subscribe - mapStateToProps -- mapStoreToProps
//publish - mapDispatchToProps -- send new to store

let mapStateToProps = (state)=>{ //store
    return {
        user : state.userReducer
    }
}

export default connect(mapStateToProps, null)(Header);

//export default Header;