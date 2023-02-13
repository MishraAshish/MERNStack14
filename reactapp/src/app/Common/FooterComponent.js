import React from "react";

let Footer = (props)=>{
    
    return(
        <>
            <h3>This is footer component</h3>
            {props.children&& props.children[0]}
            {props.children&& props.children[1]}

            <button onClick={()=>props.clickCounter(5)}>Increment Counter</button>
        </>
    )
}

export default Footer;


//class component and functional component
//sharing data between components 