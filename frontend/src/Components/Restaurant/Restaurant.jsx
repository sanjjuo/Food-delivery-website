import React from 'react'
import "../Restaurant/Restaurant.css"
import { PiClockAfternoonFill } from "react-icons/pi";
import { RiArrowRightDoubleLine } from 'react-icons/ri'
import { BiCalendar } from 'react-icons/bi';
import { motion } from "framer-motion"

const Restaurant = () => {
    return (
        <div>
            <div className="restaurant">
                <h2>Cafes & restaurants</h2>
                <div className="container">
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="col-md-6">
                            <div className="restaurant-card">
                                <div className="large-image">
                                    <img src="/sandwich.jpg" alt="" />
                                </div>
                                <div className="restaurant-details">
                                    <h1>Just Loaf</h1>
                                    <span><BiCalendar size={25} color='tomato' />Monday - Saturday</span>
                                    <div className="know-more">
                                        <span><PiClockAfternoonFill size={25} color='tomato' />09:00 - 18:00</span>
                                        <RiArrowRightDoubleLine size={25} color='white' className='arrow-icon' />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="col-md-6">
                            <div className="row p-0">
                                <motion.div initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -10 }}
                                    transition={{ duration: 1 }}
                                    className="col-md-6">
                                    <div className="small-cards">
                                        <div className="image">
                                            <img src="/cake.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h1>Cafe Al Bacio</h1>
                                            <span><BiCalendar size={25} color='tomato' />Monday - Saturday</span>
                                            <div className="know-more">
                                                <span><PiClockAfternoonFill size={25} color='tomato' />09:00 - 18:00</span>
                                                <RiArrowRightDoubleLine size={25} color='white' className='arrow-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -10 }}
                                    transition={{ duration: 1.5 }}
                                    className="col-md-6">
                                    <div className="small-cards">
                                        <div className="image">
                                            <img src="/noodles.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h1>Chiyang Restaurant</h1>
                                            <span><BiCalendar size={25} color='tomato' />Monday - Saturday</span>
                                            <div className="know-more">
                                                <span><PiClockAfternoonFill size={25} color='tomato' />09:00 - 18:00</span>
                                                <RiArrowRightDoubleLine size={25} color='white' className='arrow-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -10 }}
                                    transition={{ duration: 2 }}
                                    className="col-md-6">
                                    <div className="small-cards">
                                        <div className="image">
                                            <img src="/icecream.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h1>Frutao Ice</h1>
                                            <span><BiCalendar size={25} color='tomato' />Monday - Saturday</span>
                                            <div className="know-more">
                                                <span><PiClockAfternoonFill size={25} color='tomato' />09:00 - 18:00</span>
                                                <RiArrowRightDoubleLine size={25} color='white' className='arrow-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: -10 }}
                                    transition={{ duration: 2.5 }}
                                    className="col-md-6">
                                    <div className="small-cards">
                                        <div className="image">
                                            <img src="/pasta.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <h1>Italian Spices</h1>
                                            <span><BiCalendar size={25} color='tomato' />Monday - Saturday</span>
                                            <div className="know-more">
                                                <span><PiClockAfternoonFill size={25} color='tomato' />09:00 - 18:00</span>
                                                <RiArrowRightDoubleLine size={25} color='white' className='arrow-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant
