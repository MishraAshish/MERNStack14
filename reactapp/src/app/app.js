import React, { Component, lazy, Suspense  } from "react";
import "./app.css"
import { BrowserRouter as Router, Routes, Redirect, Route } from "react-router-dom";// browser router from react

let Header = lazy(()=> import("./Common/HeaderComponent"));
let HomeComponent = lazy(()=> import("./Common/HomeComponent"));
let Footer = lazy(()=> import("./Common/FooterComponent"));
let About = lazy(()=> import("./Common/AboutComponent"));
let NotFound = lazy(()=> import("./Common/NotFound"));

//import User from "./ApplicationComponent/User/UserContainer";
let User = lazy(()=> import("./ApplicationComponent/User/UserHook"));
let ProductComponent = lazy(()=> import("./ApplicationComponent/Product/ProductComponent"));
let CartComponent = lazy(()=> import("./ApplicationComponent/Cart/CartComponent"));


let ApplicationComponent =()=>{

    //virtual dom of component // 1 - state  ==>  2 - state
    console.log("Render component")
    return(
        <Router>
            <Suspense fallback={<div>Loading Application in Lazy way...</div>}>
            <Header />
                <Routes>
                    <Route path="/home" element={<HomeComponent title={"Home Page Title"} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/cart" element={<CartComponent/>} />
                    <Route path="/product" element={<ProductComponent/>} />
                    <Route path="/about/:id" element={<About />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
            </Suspense>
        </Router>
    )
}

export default ApplicationComponent;
