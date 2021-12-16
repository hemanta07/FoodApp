// import React, { useState, useCallback, useMemo, Fragment }from 'react';
// import Demolist from './Component/Demo/Demolist';
// import DemoOutput from './Component/Demo/DemoOutput';
// import Button from './Component/UI/Button';
// import Card from './Component/UI/Card';

// const App = () =>{

//   const [showPara, setShowPara] = useState(false);
//   const [allowToggle, setAllowToggle] = useState(false);
//   const [listTitle, setListTitle] = useState('My List');

//   console.log("App is running");

//   const togglePara = useCallback(() =>{  // App is a normal javascript function
//     if(allowToggle){
//       setShowPara((preState)=> !preState);
//     } 
//   }, [allowToggle]);

//   const allowToggleHandler = () =>{
//     setAllowToggle(true);
//   };

//   const changeTitleHandler = useCallback(()=>{
//     setListTitle("New Title");
//   }, []);

//   const listItems = useMemo(() => [5,1,7,3,8,2,10,9], []);

//   return(
//     <Fragment>
//         <Card>
//           <h1> Hello there! </h1>
//           <DemoOutput show={showPara}/>
//           <Button onClick={allowToggleHandler}> Allow Toggle </Button>
//           <Button onClick={togglePara}> Toggle Paragraph! </Button>
//         </Card>

//         <Card>
//           <Demolist title={listTitle} items={listItems} />
//           <Button onClick={changeTitleHandler} > Change List </Button>
//         </Card>
//     </Fragment>
//   )
// }

// export default App;


import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Cart from './Cart';
import { Fragment, useState } from 'react';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Home
          onShowCartHandler = {showCartHandler}
        />
    </Fragment>
  );

}
export default App;

