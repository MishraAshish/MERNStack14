import React, { Component, PureComponent, createRef } from "react";
import DefaultApp from "./DefaultComponent";
import { useNavigate } from "react-router-dom";

export default class HomeComponent extends Component{

//compares each state/props with nextstate/props and a replacement of shouldComponentUpdate
//export default class HomeComponent extends PureComponent { 
    constructor(props){
        super();        
        //allows us to manipulate the virtual dom
        this.state = {
            title : "Home Component Title",
            counter : 20,
            address : "Somewhere on earth",
            session : "React intersting session"
        }

        //ref - keyword
        //for creating and accessing html out of react flow
        //as we dont have any html selectors available in react so this provides a reference to html
        this.address = createRef(); 
        this.session = createRef();

        //view is not ready so cannot be accessed
        //this.session.current.value = "This is more interesting now";
        //this.session.current.focus();
    }

    componentDidMount() {
        //view is ready, state changes and api calls can be made

        setTimeout(() => {
            this.session.current.value = "This is more interesting now";
            this.session.current.focus();
        }, 5000);
    }

    //update life cycle method
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState)
        console.log(nextProps)
        console.log("shouldComponentUpdate - ", this.state.counter);
        if (nextState.counter > 25 && nextState.counter < 30) {//if the updated value of age is same then don't call render method
        //if (nextState.counter == this.state.counter) {
            return false;//it will not call the render method so the new v-dom will not be created
        } 
        return true; //it will invoke the render method
    }

    //can be used restore previos state
    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    //restore previos state
    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
        // this.setState({
        //     //restore previos state
        // })
    }

    //destruction life cycle method
    componentWillUnmount(){
        console.log("componentWillUnmount");

        //clearInterval(this.titleChange);
    }

    // navigateMe = ()=>{
    //     let navigate = useNavigate();
    //     navigate("/about")
    // }

    // titleChange = setInterval(() => {
    //     //this.setState({}) - callback api used to generate new state
    //     this.setState({
    //         //title : "Home Component Title"
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
            counter : this.state.counter //+ counter
        })

        //this.state.counter = this.state.counter;

        //this should be avoided
        //this.forceUpdate(); //it skips the other life cycle methods of class component like : shouldComponent

        //evt.preventDefault();//any default behaviour we must stop
    }


    //virtual dom of component // 1 - state  ==>  2 - state
    render(){
        console.log("Render component")
        return(
            <div>
                <label>From Home Class Component</label>
                <h4>{this.state.title}</h4>

                <DefaultApp parentTitle={this.state.title} counter={this.state.counter}
                        clickCounter={this.updateCounter} >
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                    {/* <Footer/> */}
                </DefaultApp>
                {/* <Footer>
                    <h1>Child HTML 1 Element</h1>
                    <h1>Child HTML 2nd Element</h1>
                </Footer> */}

                {/* <button onClick={this.updateCounter}>Increment Counter</button> */}
                {/* <button onClick={this.navigateMe} >About</button> */}
                <input type={"text"} ref={this.session} placeholder="Type Session Value"></input>
            </div>
        )
    }
}


//components =>
//class => Component, PureComponent
//functional => normal functions/arrow functions

// Creation Life Cycle - /about => /home
    //a. constructor => view is not ready
    //b. render => first time it creates the V-dom/view
    //c. componentDidMount => view is ready, we can change the state and also make API calls

// Update Life Cycle - editing state of the component
    //a. shouldComponentUpdate - whether to show the change state on UI we can decide
    //b. render - render to show updated virtual dom
    //c. getSanpshotBeforeUpdate
    //d. componentDidMount

// Destruction Life Cycle -
    //a. componentWillUnmount - gets called when we move to next page, should clear all subscription here