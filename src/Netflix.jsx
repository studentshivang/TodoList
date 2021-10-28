import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = ()=>{
    return(
        <Card
        key={Sdata[0].id}
        img_src={Sdata[0].img_src}
        s_name={Sdata[0].s_name}
        info= {Sdata[0].info}
        s_link={Sdata[0].s_link}
        /> 
    );
}

export default Netflix;