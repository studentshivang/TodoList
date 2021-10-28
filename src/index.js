import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'));




















// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById('root'));





























// import hare , { Ram , myName , myNames}  from './App'; 

// ReactDOM.render(
//     <>
//     <ol>
//         <li>Bol</li>
//         <li>{hare}</li>
//         <li>{Ram}</li>
//         <li>{myName()}</li>
//         <li>{myNames()}</li>
//     </ol>
//     </>
//     ,document.getElementById('root')
// )




































// import './index.css'; 

// const hour = new Date().getHours();
// let gc = 'Green';
// let greeting = "Good Morning";

// if(hour>=19 || hour<=1){
    //     greeting = "Good Night";
    //     gc = "Purple";
    
    // }else if(hour>11){
        
        //     greeting = "Good Afternoon";
        //     gc = "Orange";
        // }
        
        // let greetcolor = {
            //     color:gc
            // };
            
            // ReactDOM.render(
                //     <>
                //     <div className="just">
                //     <h1 className="heading">Hello Sir , <span style={greetcolor} className="heading">{greeting}</span> </h1>
                //     </div>
                //     </>
                //     ,document.getElementById('root')
                // )


                
                
                
                

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                // import './index.css'; 
                
                // const name = "Shivang";
                // const img1 = "https://picsum.photos/200/300";
                // const img2 = "https://picsum.photos/250/300";
                // const img3 = "https://picsum.photos/300/300";
                // const link1 = "https://picsum.photos/";//check out this website for random photos
                
                // const heading = {
                    //     color:'#fa9191',
                    //     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontWeight:'bold',
//     margin:'4rem 0',
//     textShadow:'0 2px 4px #ffe9c5',
//     fontFamily: '"Josefin Sans" , sansSerif'
// }

// ReactDOM.render(
//     <>
//     <h1 style={heading}> My name is {name} </h1>
//     <div className="img_div">
//     <img src= {img1} alt = "Random_Image" />
//     <img src= {img2} alt = "Random_Image" />
//     <a href = {link1} target="_blank">
//     <img src= {img3} alt = "Random_Image" />
//     </a>
//     </div>
//     </>
//     ,document.getElementById('root')
// );






















// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();
// const name = "Shivang";
// ReactDOM.render(
//     <>
//     <h1>Hello my name is {name}</h1>
//     <p>The currrent date is = {currentDate}</p>
//     <p>The currrent Time is = {currentTime}</p>
//     </>
//     ,document.getElementById('root')
// );
















// const Ramnaam = "Ram";

// const heaven = "Ram";
// const bound = "Naam";

// ReactDOM.render(
//     <h1> {`I guess ${1001+7} ${heaven} ${bound} is the plane of relief!`} </h1>
//     ,document.getElementById('root')
// );









// import React from "react";
// import ReactDOM from "react-dom";


// // using JSX
// ReactDOM.render(
//     <>
//         <h1>Top Five Netflix Series</h1>
//         <p>
//             List of Five Netflix Series
//         </p>
//         <ol>
//             <li>Dark</li>
//             <li>Money Heist</li>
//             <li>6 Underground</li>
//             <li>Halo</li>
//             <li>Grain</li>
//         </ol>
//     </>,
//     document.getElementById("root")
// );












// (es6 converted to js through babel)

//js before es6
// ReactDOM.render(React.createElement("h1", null, "Hello from the other side!!"), document.getElementById('root'));


//pure javascript
// var h1=document.createElement("h1");
// h1.innerHTML="Thapa Technical";
// document.getElementById("root").appendChild(h1);    