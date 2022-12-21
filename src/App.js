import './App.css';
import React from 'react'
import Sidebar from "./components/sidebar";
import Content from "./components/content/Content";

function App() {
  return (
      <div className="w-full">

          <div className="w-full min-h-screen bg-white flex flex-row">
              <Sidebar/>
              <Content/>
          </div>
      </div>

  );
}

export default App;
