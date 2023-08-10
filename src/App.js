import React, { useState } from 'react';
import Setting from './components/Setting';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';

const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <NavBar 
        setShowSideBar={setShowSideBar} 
          showSideBar={showSideBar} />
      <div className="flex relative overflow-hidden">
        <Sidebar 
          setShowSideBar={setShowSideBar} 
          showSideBar={showSideBar} 
        />
        <Setting />
      </div>
    </>
  )
};


export default App;

