import React from "react";
import './index.css'; 

const hour = new Date().getHours();
let gc = 'Green';
let greeting = "Good Morning";

if(hour>=19 || hour<=1){
    greeting = "Good Night";
        gc = "Purple";
    
}else if(hour>11){
        
    greeting = "Good Afternoon";
    gc = "Orange";
}

let greetcolor = {
    color:gc
};

function Greeting(){
    return <span style={greetcolor} className="heading">{greeting}</span> 
}

export default Greeting;