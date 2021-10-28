import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = ()=>{
    return(
        <Card
        key={Sdata[5].id}
        img_src={Sdata[5].img_src}
        s_name={Sdata[5].s_name}
        info= {Sdata[5].info}
        s_link={Sdata[5].s_link}
        /> 
    );
}

export default Netflix;