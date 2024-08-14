import React from 'react'
import "../Footer/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { BiEnvelope, BiHeart } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="container">
                    <div className="footer-three-part">
                        <div className="footer-content">
                            <div className="image">
                                <img src="/logo.png" alt="" />
                                <p>Welcome to Tomato, your go-to food delivery service for delicious meals delivered to your doorstep. 
                                    With a wide selection of dishes from the best local restaurants, you can easily browse menus, place orders, 
                                    and track your delivery in real-time. Enjoy the convenience and delight of Tomato today! </p>
                            </div>
                        </div>
                        <div className="footer-content">
                            <h4>COMPANY</h4>
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Delivery</li>
                                <li>Privacy policy</li>
                                <li>Long beach</li>
                            </ul>
                        </div>
                        <div className="footer-content">
                            <h4>GET IN TOUCH</h4>
                            <ul>
                                <li>+91 7902501645</li>
                                <li>tomato123@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="icons-email-section">
                        <h4>follow us on</h4>
                        <ul>
                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
                            <li><FaTwitter /></li>
                        </ul>
                        <p>Receive exclusive offers and discounts in your mailbox</p>
                        <div className="email-input-btn">
                            <div className="email-input">
                                <BiEnvelope style={{ color: "#bdbdbd" }} /><input type="email" name="email" id="" placeholder='Enter Email' />
                            </div>
                            <button>subscribe</button>
                        </div>
                    </div>
                    <hr />

                    <div className="copyright-section">
                        <ul>
                            <li>All rights received @ your Company, 2024</li>
                            <li>Made with <BsHeartFill style={{ color: "ffb30e" }} /> by <span>SJ</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
