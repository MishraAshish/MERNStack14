console.log("This file is used to bootstrap the entire react application in html root!!")

import React from "react"; // default import
import * as ReactDOM from "react-dom/client"; // importing all modules 

import DefaultApp, { ApplicationComponent } from "./app/app";//react application

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <DefaultApp/>
        <ApplicationComponent/>
    </>
)