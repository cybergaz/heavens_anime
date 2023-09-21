import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Screens/Home";
import Mood from "./Screens/Mood";
import Watchlist from "./Screens/Watchlist";
import Description from "./Screens/Description";
import Navbar from "./Layout/Navbar/Navbar";
import Player from "./Screens/Player";

function App() {

  const recieve = value => {
    console.log("woohooo you have recieved a value from a 2nd nested component which is :" + value)
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home pass={recieve} />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/player" element={<Player />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/description" element={<Description />} />
      </Routes>

    </>

  )
}

export default App;












// <BrowserRouter>
//   {/* <Box sx={{ backgroundColor: '#001155'}}> */}
//     <div className=" bg-[url('./assets/fr5.png')] h-screen w-screen">
//       <div className=" w-screen">
//       <Routes>
//       <Route path="" element={<Home />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/player" exact element={<Player />} />
//         <Route path="/mood" exact element={<Mood />} />
//         <Route path="/watchlist" exact element={<Watchlist />} />

//       </Routes>
//       </div>  
//     </div>

//     {/* </Box> */}
//   </BrowserRouter>
