import React from "react";
import Heading from "./Heading";
import Images from "./Images";


function Card(props){
    // console.log(props);
    return(
        <>
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.img_src} />   
                <div className="card__info">
                <span className="card__category">{props.info}</span>
                <Heading sname={props.s_name} />
                <a 
                    href={props.s_link}
                    target="_blank"
                >
                    <button> Watch Now </button>
                </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card; 