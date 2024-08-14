import React from 'react'
import NavbarMenu from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import './index.css';
import { Routes, Route } from "react-router-dom"
import Add from './Pages/Add/Add';
import List from './Pages/List/List';
import Orders from './Pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <NavbarMenu />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add  url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/order' element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
