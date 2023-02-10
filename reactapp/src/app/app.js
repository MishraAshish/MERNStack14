import React, { Component } from "react";

export class ApplicationComponent extends Component{

    constructor(props){
        super();
        this.state = {
            title : "Application Component Title"
        }

        //this.titleChange();
    }

    titleChange = setInterval(() => {
        this.setState({
            title : "Change Title after 5 seonds"
        })
        console.log(this.state.title);
    }, 5000);

    //virtual dom of component
    render(){
        return(
            <div>
                <label>From Application Class Component</label>
                <h4>{this.state.title}</h4>
            </div>
        )
    }

}


let DefaultApp = ()=>{
    let firstValue = 25;
    let secondValue = 25;
    let title = "My Second React Application";
    return(
        <>
            <h2>{title}</h2>
            <label>Sum Is : {firstValue+ secondValue}</label>
        </>
    )
}

export default DefaultApp;