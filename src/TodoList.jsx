import React from "react";

const Todolist = (props) =>{
    return (
    <>
        <div className="todo_style">
        <i 
            className ="fa fa-times " 
            aria-hidden="true"
            onClick={()=>{
                props.delItem(props.id);
            }}
        >x</i>
        <li>{props.text}</li>
        </div>
    </>
    )
}

export default Todolist;