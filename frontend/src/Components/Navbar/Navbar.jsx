import React, { useState } from 'react'
import "../Navbar/Navbar.css"
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { Navbar, Nav, Container, Dropdown, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import LoginSignupModal from '../LoginSignUpModal/LoginSignUpModal';
import { HiUser } from "react-icons/hi2";
import { GiShoppingBag } from "react-icons/gi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { FaMobile } from "react-icons/fa6";


const NavbarMenu = ({ token, setToken, url, size }) => {
    const [menu, setMenu] = useState("home");
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

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
                            <Nav.Link href="#contact-us" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact</Nav.Link>
                        </Nav>
                        <div className="navbar-right">
                            <div className="search-container">
                                <IoSearch className='icon' />
                            </div>
                            <Link to="/cart">
                                <div className="navbar-cart-icon">
                                    <FaCartShopping className='icon' />
                                    <div className="dot">{size}</div>
                                </div>
                            </Link>
                            <div className="login">
                                {!token ? <button onClick={() => setModalShow(true)}><FaUser /> Log in</button>
                                    : <NavDropdown
                                        align="start"
                                        id="nav-dropdown-dark-example"
                                        title={<HiUser size={25} color='#49557e' />}
                                        menuVariant="black"
                                    >
                                        <NavDropdown.Item className='custom-drop-item'><GiShoppingBag size={25} color='#49557e' />Orders</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='custom-drop-item' onClick={logout}><RiLogoutBoxFill size={25} color='#49557e' />Logout</NavDropdown.Item>
                                    </NavDropdown>}

                            </div>
                            <LoginSignupModal show={modalShow} token={token} setToken={setToken} onHide={() => setModalShow(false)} setModalShow={setModalShow} url={url} />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section className="mobile-navbar">
                <div className="logo-login-icons">
                    <div className="image">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="login-icons">
                        <ul>
                            <li><IoSearch size={22} color='#49557e' /></li>
                            <Link to="/cart"><li><FaCartShopping size={22} color='#49557e' /><span className="dot">{size}</span></li></Link>
                            <li onClick={() => setModalShow(true)}>{! token ? (<button type="button"><FaUser />Log in</button>
                                ):(<NavDropdown
                                    align="start"
                                    id="nav-dropdown-dark-example"
                                    title={<HiUser size={25} color='#49557e' />}
                                >
                                    <NavDropdown.Item className='custom-drop-item'><GiShoppingBag size={25} color='#49557e' />Orders</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='custom-drop-item' onClick={logout}><RiLogoutBoxFill size={25} color='#49557e' />Logout</NavDropdown.Item>
                                </NavDropdown>)}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bottom-menu-bar">
                <ul>
                    <li><a href="#home"><IoHome/></a></li>
                    <li><a href="#menu"><IoFastFood/></a></li>
                    <li><a href=""><FaMobile/></a></li>
                </ul>
            </section>
        </>
    )
}

export default NavbarMenu;
