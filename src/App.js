import './App.css';
import React, { useReducer, createContext } from 'react';
import Sidebar from "./components/sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import Order from "./components/order"
import Product from "./components/product";
import Money from "./components/money";
import Setting from "./components/setting";
import Login from "./components/auth";

//Context
export const AuthContext = createContext()

//Inisiasi state
const initialState = {
    isAuthenticated: false,
    token: null,
    tokenExpires: 0,
    role: 0
}

const reducer = (state, action) => {
    console.log("cek run reducer ")
    console.log("cek state " + {state})
    console.log("cek action " + {action})
    switch(action.type) {
        case "LOGIN":
            localStorage.setItem("token", JSON.stringify(action.payload.token))
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                tokenExpires: action.payload.expires,
                role: action.payload.role
            }
        case "LOGOUT":
            localStorage.clear()
            return {
                ...state,
                isAuthenticated: false,
                token: null
            }

        default:
            return state
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("cek run app ")
    console.log(state.isAuthenticated)
  return (
      <Router>
          <AuthContext.Provider value={{
              state,
              dispatch
          }}>
              <div className="w-full">
                  <Routes>
                      {/* auth path start */}
                      <Route path="login" element={<Login/>}/>
                      {/* auth path end */}
                  </Routes>
                  <div className="w-full min-h-screen bg-white flex flex-row">
                      <Sidebar/>
                      <Routes>
                          <Route path="/" element={<Home/>}/>
                          <Route path="/order" element={<Order/>}/>
                          <Route path="/product" element={<Product/>}/>
                          <Route path="/money" element={<Money/>}/>
                          <Route path="/setting" element={<Setting/>}/>
                      </Routes>
                  </div>
              </div>
          </AuthContext.Provider>

      </Router>
  );
}

export default App;
