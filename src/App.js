import './App.css';
import React from 'react'
import Sidebar from "./components/sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Order from "./components/order"
import Product from "./components/product";
import Money from "./components/money";
import Setting from "./components/setting";
import Login from "./components/auth";

function App() {
  return (
      <div>
          <Login/>
      </div>
      // <Router>
      //     <div className="w-full">
      //         <div className="w-full min-h-screen bg-white flex flex-row">
      //             <Sidebar/>
      //             <Routes>
      //                 <Route path="/" element={<Home/>}/>
      //                 <Route path="/order" element={<Order/>}/>
      //                 <Route path="/product" element={<Product/>}/>
      //                 <Route path="/money" element={<Money/>}/>
      //                 <Route path="/setting" element={<Setting/>}/>
      //             </Routes>
      //         </div>
      //     </div>
      // </Router>
  );
}

export default App;
