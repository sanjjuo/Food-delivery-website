import React from 'react'
import "../Sidebar/Sidebar.css"
import { NavLink } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-options">
          <h1>Main Menu</h1>
          <NavLink to="/add" className="sidebar-option">
            <MdOutlineAddShoppingCart className='icon'/>
            <p>Add items</p>
          </NavLink>
          <NavLink to="/list" className="sidebar-option">
            <FaClipboardList className='icon'/>
            <p>List items</p>
          </NavLink>
          <NavLink to="/order" className="sidebar-option">
            <TbTruckDelivery className='icon'/>
            <p>Orders</p>
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
