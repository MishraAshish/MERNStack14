import React, { Component } from "react";
import DefaultApp from "./Common/DefaultComponent";
import Footer from "./Common/FooterComponent";


export default class ApplicationComponent extends Component{

    constructor(props){
        super();        
        //allows us to manipulate the virtual dom
        this.state = {
            title : "Application Component Title",
            counter : 20
        }
    }

    // titleChange = setInterval(() => {
    //     //this.setState({}) - callback api used to generate new state
    //     this.setState({
    //         //title : "Application Component Title"
    //         title : "Change Title after 10 seconds"
    //     })
    //     console.log(this.state.title);
    // }, 10000);//updating at every 10 seconds

    //event handler
    updateCounter = (counter)=>{
        //alert("Alerted!!" + this.state.counter)

        //setState : an api provided by react to pass the message to react that there is change in state jut re-render
        //the new v-dom will be created and this happens in batch format
        this.setState({
            counter : this.state.counter + counter
        })


        //this.state.counter++;

        //this should be avoided
        //this.forceUpdate(); //it skips the other life cycle methods of class component like : shouldComponent

        //evt.preventDefault();//any default behaviour we must stop
    }


    //virtual dom of component // 1 - state  ==>  2 - state
    render(){
        console.log("Render component")
        return(
            <div>
                <label>From Application Class Component</label>
                <h4>{this.state.title}</h4>

                <DefaultApp parentTitle={this.state.title} counter={this.state.counter}>
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                    {/* <Footer/> */}
                </DefaultApp>
                {/* <Footer>
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                </Footer> */}

                {/* <button onClick={this.updateCounter}>Increment Counter</button> */}

                <Footer clickCounter={this.updateCounter} counter={this.state.counter}/>
            </div>
        )
    }
}


