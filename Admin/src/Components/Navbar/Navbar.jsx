import React from 'react'
import "../Navbar/Navbar.css"
import {assets} from "../../assets/assets"

const NavbarMenu = () => {
    return (
        <div>
            <div className="navbar-menu">
                <img className="logo" src="/logo.png" alt="logo" />
                <img className="profile" src={assets.profile_image} alt="profile" />
            </div>
        </div>
    )
}

export default NavbarMenu
