import React from "react";
import Greeting from "./Greeting";
// import './index.css';
function Hellosir(){
    return(
        <>
        <div className="just">
        <h1 className="heading">Hello Sir ,<Greeting/></h1>
        </div>
        </>
    );
}

export default Hellosir;//DO NOT use type HEADING(); otherwise the function will get called here instantly  