import React from "react";

const SlotM = (props) =>{
  
        let {x,y,z} = props;//order of x y z doesn't matter ,but variable names x,y,z do(x,y,w won't work)
        //x,y,z of {x,y,z} take value of props.x,props.y,props.z irrespective of order in {x,z,y} 
        if(x===y && y===z)
        {
            return(
                <>
                <div> {x} {y} {z}</div>
               
                <div><br /> This is Matching </div>
                </>
            );
        }else{
            return(
                <>
                <div> {x} {y} {z}</div>
               
                <div><br /> This is not Matching</div>
                </>
            );
        }
    
}

export default SlotM;