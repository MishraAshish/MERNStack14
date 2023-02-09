import React from "react";

let DefaultApp = ()=>{
    let firstValue = 25;
    let secondValue = 25;
    return(
        <>
            <h2>My First React Application</h2>
            <label>Sum Is : {firstValue+ secondValue}</label>
        </>
    )
}

export default DefaultApp;