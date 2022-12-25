// import React from 'react'



// //in this below func  all the tags must be inside the one parent tag, div or section or article or React Fragment
// // if <React.Fragment></React.Fragment> is used then the import statement is must  short format for this is <></>
// const App = () => {
//   return (
//     <div>
//      {/* <h1 className='myclassname'>Hello world {3+3} </h1>  */}
//       <MyName/>   {/*nested component*/}
//       <h1 className='myclassname'>Hello world {3+3} </h1>
//       <p>Awesome</p> 
        
//     </div>
//     //<p>Awesome></p> error  -> if written adjacent to parent tag
    
//   )
// }

// // function App() {
// //   return <h1>Hello World</h1>
// // }

// //react is actually looking like this
// // const App = () =>{
// //   return React.createElement("h1",{}, "Hello world");
// // };

// const MyName =()=>{
//   return <h1>Mayur karpe</h1>
// }


// export default App





//restaurant
import React from 'react';
import Restaurant from "./component/Basics/Restaurant";
// import UseState from "./component/Hooks/useState";
// import UseEffect from "./component/Hooks/useEffect";
// import UseReducer from "./component/Hooks/useReducer";

const App = () => {
  return <Restaurant/>
  // return <UseReducer />;
  // return <UseEffect/>;
  // return <UseState/>;
};

export default App;