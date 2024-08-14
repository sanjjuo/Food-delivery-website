import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import LoginSignupModal from '../LoginSignUpModal/LoginSignUpModal';
import { assets } from '../../assets/assets';


const NavbarMenu = ({token, setToken}) => {
    const [menu, setMenu] = useState("home");
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Navbar expand="lg" className="bg-body-light">
                <Container>
                    <Navbar.Brand as={Link} to="/" href="#home"><img src="/logo.png" className="logo" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" as={Link} to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Nav.Link>
                            <Nav.Link href="#menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</Nav.Link>
                            <Nav.Link href="#mobile-app" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</Nav.Link>
                            <Nav.Link href="#contact-us" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</Nav.Link>
                        </Nav>
                        <div className="navbar-right">
                            <div className="search-container">
                                <IoSearch className='icon' />
                            </div>
                            <Link to="/cart">
                            <div className="navbar-cart-icon">
                                <FaCartShopping className='icon' />
                                <div className="dot"></div>
                            </div>
                            </Link>
                            <div className="login">
                                {!token ? <button onClick={() => setModalShow(true)}><FaUser /> Log in</button>
                                : <div className='user-profile'>
                                    <img src={assets.profile_icon} alt="" />
                                    <ul className="profile-dropdown">
                                        <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                                        <hr />
                                        <li><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                                    </ul>
                                </div> }
                               
                            </div>
                            <LoginSignupModal show={modalShow} token={token} setToken={setToken} onHide={() => setModalShow(false)} setModalShow={setModalShow} />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarMenu;
