// To-do list App starts here

import React, { useState } from "react";
import Todolist from "./TodoList";
const App = () =>{

const [itemRaw,setRaw] = useState();
const [itemArr,setArr] = useState([]);

const putRaw = (event)=>{
    const value = event.target.value;
    setRaw(value);
}

const putItem = (event)=>{    
    setArr((prevValue)=>{
        return [...prevValue,itemRaw];
    });
    setRaw("");//To empty input field after element has been added to the array
}

const deleteItem = (id)=>{
    console.log("deleted"); //To check if the function was called or not in the first place

    setArr((oldItems)=>{
        return oldItems.filter((arrElem,index) => { //No use of first parameter
            return index !== id;
        });
    });
}

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>To-do List</h1>
                <br />
                <input type="text" placeholder="Add an Item here" onChange={putRaw} value={itemRaw} />
                <button onClick={putItem}> + </button>
            <ol>
                {
                    itemArr.map((val,index)=>{
                        return <Todolist 
                        text={val}
                        key={index}
                        id={index}
                        delItem={deleteItem}
                        />
                    })
                }
            </ol>
            </div>
        </div>
        </>
    );
};


export default App;

/* To-do List App ends here */















// //Tasks 36-39 start here 

// import React, { useState } from "react";

// const App = () =>{
//     const [fullname,setName] = useState({
//         fname:"",
//         lname:"",
//         gmail:"",
//         mob:""
//     });

//     const inputevent = (event) =>{
//         // const name=event.target.name;
//         // const value=event.target.value;
    
//         const {name,value}=event.target;

//         console.log(name);
//         console.log(value);

//         setName((prevValue)=>{
//             console.log(prevValue);

//             return {
//                 ...prevValue,
//                 [name]:value
//             }
//         })

//         // if(name === "fname"){
//         //     setName((prevValue)=>{
//         //         return {
//         //         fname:value,
//         //         lname:prevValue.lname,
//         //         gmail:prevValue.gmail,
//         //         mob:prevValue.mob
//         //         }
//         //     })
//         // }else if(name === "lname"){
//         //     setName((prevValue)=>{
//         //         return {
//         //         fname:prevValue.fname,
//         //         lname:value,
//         //         gmail:prevValue.gmail,
//         //         mob:prevValue.mob
//         //         }
//         //     })
//         // }else if(name === "gmail"){
//         //     setName((prevValue)=>{
//         //         return {
//         //         fname:prevValue.fname,
//         //         lname:prevValue.lname,
//         //         gmail:value,
//         //         mob:prevValue.mob
//         //         }
//         //     })
//         // }else if(name === "mob"){
//         //     setName((prevValue)=>{
//         //         return {
//         //         fname:prevValue.fname,
//         //         lname:prevValue.lname,
//         //         gmail:prevValue.gmail,
//         //         mob:value
//         //         }
//         //     })
//         // }
//     }
  
//     const onSubmit = (event)=>{
//         event.preventDefault();
//         alert("The form has been submitted successfully!")
//     }

//     return(
//         <>
//         <form onSubmit={onSubmit}>
//         <div>
//         <h1> Hello {fullname.fname} {fullname.lname}</h1>
//         <p>{fullname.gmail}</p>
//         <p>{fullname.mob}</p>
//         <input 
//             type="text"
//             placeholder="Enter your name here"
//             name="fname"
//             onChange={inputevent}
//             value={fullname.fname}
//         />
//         <input 
//             type="text"
//             placeholder="Enter your name here"
//             name="lname"
//             onChange={inputevent}
//             value={fullname.lname}
//         />
//         <input 
//             type="email"
//             placeholder="Enter your mail here"
//             name="gmail"
//             onChange={inputevent}
//             value={fullname.gmail}
//             autoComplete="off"
//         />
//         <input 
//             type="number"
//             placeholder="Enter your mobile number"
//             name="mob"
//             onChange={inputevent}
//             value={fullname.mob}
//         />
//         <button type="submit" >Click Me 😄</button>
//         </div> 
//         </form> 
//         </>
//     );

// }

// export default App;

// //Tasks 36-39 end here

























// // Tasks 34 and 35 start here
// import React, { useState } from "react";

// const App = () =>{
//     const [name,setName] = useState("");
//     const [lastName,setLastName] = useState("");
//     const [fullName,setFullName] = useState("");
//     const [lastNamenew,setLastNamenew] = useState("");

//     const changeName = (event)=>{
//         console.log(event.target.value);
//         setName(event.target.value);
//     }

//     const changeNametwo = (event)=>{
//         console.log(event.target.value);
//         setLastName(event.target.value);
//     }

//     const onSubmit = (event)=>{
//         setFullName(name);
//         setLastNamenew(lastName);
//         event.preventDefault();
//     }

//     return(
//         <>
//         <form onSubmit={onSubmit}>
//         <div>
//         <h1> Hello {fullName} {lastNamenew}</h1>
//         <input 
//             type="text"
//             placeholder="Enter your name here"
//             onChange={changeName}
//             value={name}
//         />
//         <input 
//             type="text"
//             placeholder="Enter your name here"
//             onChange={changeNametwo}
//             value={lastName}
//         />
//         <button type="submit" >Click Me 😄</button>
//         </div> 
//         </form> 
//         </>
//     );

// }

// export default App;

// //Tasks 34 and 35 end here









// //Task 33 starts here

// import React, { useState } from "react";

// const App = ()=>{

//     const [bg,Change] = useState('#b19cd9');
//     const [title,tChange] = useState('Click Me');
//     const bgtChange =()=>{
//         Change('#ff0000');
//         tChange('Ouchh 😨');
//     }
//     const Changetwo =()=>{
//         Change('#b19cd9');
//         tChange('Ayyo 😺');
//     }

//     return(
//         <>
//         <div style={{backgroundColor : bg}}>
//         <button onClick={bgtChange} onDoubleClick={Changetwo}> {title} </button>
//         </div>
//         </>
//     );
// }

// export default App;

// //Task 33 ends here




























// //Task 32 begins here

// import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
// const App = ()=>{
   
//     const [activeTime,refTime] = useState(new Date().toLocaleTimeString());
   
//     setInterval(() => {
//         refTime(new Date().toLocaleTimeString());
//     },1000); 
   
//     return(
//         <>
//         <div>
//         <h1>{activeTime} </h1>
//         <AddIcon/>
//         </div>
//         </>
//    );
// };

// export default App;

// //Task 32 ends here

















// // Task 31 starts here


// import React, { useState } from "react";

// const App=()=>{

//     const [Time,setTime] = useState(new Date().toLocaleTimeString() ); 

//     const refTime = ()=>{
//         setTime(new Date().toLocaleTimeString() );
//     }

//     return(
//         <>
//         <div>
//         <h1> {Time} </h1>
//         <button onClick={refTime}> Click Me </button>
//         </div>
//         </>
//     );
// };

// export default App;

// // Task 31 ends here

















// // Task 30 starts here

// import React, { useState } from "react";


// const App = ()=>{

//     // const state = useState();
//     const [count,setCount] = useState(50);

//     const IncNum =()=>{
//         setCount(count - 50);   
//         // console.log("clicked " + count++);
//     }
//     return(
//         <>
//         <div>
//         <h1> {count} </h1>

//         <button onClick={IncNum}> Click Me </button>
//         </div>
//         </>
//     );
// };

// export default App;

// // Task 30 ends here





























// task #28 starts here

// import React from "react";
// import SlotM from "./SlotMach";

// const App = () =>{
//     return(
//         <>
//             <h1>🎰 WELCOME TO <span>SLOT MACHINE GAME</span> 🎰</h1>
//         <div>
//         <br /><SlotM x='😊' y='😊' z='😊'/><br />
//         <hr/>
//         <br /><SlotM x='😊' y='😂' z='😊'/><br />
//         <hr/>
//         <br /><SlotM x='🎂' y='👍' z='🎂'/><br />
//         <hr/>
//         <br /><SlotM x='👑' y='👑' z='👑'/><br />
//         <hr/>
//         </div>
//         <hr className="vert"/>
//         <hr className="hori"/>
//         </>
//     )
// }

// export default App;

// task #28 ends here










// import React from "react";
// import Netflix from "./Netflix";
// import Amazon from './Amazon';
// const favseries = "netflix";

// // const Favs = ()=>{
// //     if(favseries === "netflix"){
// //         return <Netflix />
// //     }else{
// //        return <Amazon />
// //     }
// // }

// const App = () =>{
//     return(
//     <>
//     <h1 className="heading_style">List of top 5 netflix series</h1>
//         {(favseries === "netflix")?<Netflix/>:<Amazon/>}
//     {/* <Favs /> */}
//     </>
//     );
// }

// export default App;












// import React from "react";
// import {add,sub,product,quotient} from './Calc';

// function App(){
//     return(
//     <>
//     <ul>
//         <li>The sum of two numbers is {add(90,89)}</li>
//         <li>The difference between two numbers is {sub(90,89)}</li>
//         <li>The product of two numbers is {product(90,89)}</li>
//         <li>The quotient of two numbers is {quotient(90,89)}</li>
        
//     </ul>
//     </>
//     );
// };


// export default App;







// import './index.css'; //IT does not matter where you import index.css ; You may directly import it in App.jsx
// import Hellosir from "./Hellosir";


// function App(){
//     return <Hellosir/>
// }   

// export default App;
    

















// const hare = "Hare";

// const Ram = "Ram";

// function myName(){
//     const hari = "Hare";
//     return hari;
// }

// function myNames(){
//     const naam = "Krishna";
//     return naam;
// }

// export default hare;
// export {Ram , myName , myNames};


















































    
    
    
    
    
    
    
    
    
    
    

    
    
    
    

    
    
    
    

    
    
    
    // import Heading from './Heading';
    // import Para from './Para';
    // import List from './List';
    
    
    // function App(){
        //     return(
            //         <>
            //         <Heading />
            //         <Para/>
            //         <List />  
            //         <Para/>
            //         </>
            //     );
            //}