import React, { Component } from "react";
import "./app.css"
import { BrowserRouter as Router, Routes, Redirect, Route } from "react-router-dom";// browser router from react

import Header from "./Common/HeaderComponent"
import HomeComponent from "./Common/HomeComponent";
import Footer from "./Common/FooterComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFound";

//import User from "./ApplicationComponent/User/UserContainer";
import User from "./ApplicationComponent/User/UserHook";
import ProductComponent from "./ApplicationComponent/Product/ProductComponent";

let ApplicationComponent =()=>{

    //virtual dom of component // 1 - state  ==>  2 - state
    console.log("Render component")
    return(
        <Router>
            <Header />
                <Routes>
                    <Route path="/home" element={<HomeComponent title={"Home Page Title"} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/product" element={<ProductComponent/>} />
                    <Route path="/about/:id" element={<About />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
        </Router>
    )
}

export default ApplicationComponent;
