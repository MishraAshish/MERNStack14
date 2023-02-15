import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

let Header = ()=>{

    let userName = "";

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
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink> 

                <button className="button" onClick={func} >Go To About</button>
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

export default Header;