import "./App.css";
import React from "react"; 

import FirstPage from "./component1/FirstPage";
import SecPage from "./component1/SecPage";
import MessagesPage from "./component1/MessagesPage";
import Nada from "./component1/Nada";
import FifthPage from './component1/FifthPage'
// import Search from "./component1/Search";
// import Reels from "./component1/Reels";
// import Notifications from "./component1/Notifications";

import { Route, Routes } from "react-router-dom";
import CreatePostModal from "./component1/CreatePostModal";
import LeftSide from "./component1/LeftSide";

function App() {
  return (
    <>
    <div className="App"> 
    {/* <FifthPage/> */}
      <LeftSide />
      </div>
      <Routes>
        <Route path="/home" element={<FirstPage />} />
        <Route path="/explore" element={<SecPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile" element={<Nada />} />
        {/* <Route path="/search" element={<Search />} /> */}
        {/* <Route path="/reels" element={<Reels />} />
        <Route path="/notifications" element={<Notifications />} /> */}
        <Route path="/create" element={<CreatePostModal />} />
      </Routes>
    
    </>
  );
}

export default App;
