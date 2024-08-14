import React from 'react'
import "../Restaurant/Restaurant.css"
import { FaTag } from 'react-icons/fa'
import { FaClock, FaStar } from 'react-icons/fa6'

const Restaurant = () => {
    return (
        <div>
            <div className="restaurant">
                <h2>featured restaurants</h2>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="restaurant-cards">
                                <div className="image">
                                    <img src="/food_22.png" alt="" />
                                </div>
                                <div className="restaurant-name">
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <img src="/kfc.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <h5>KFC</h5>
                                            <span><FaStar /> 50</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="discount-timer">
                                    <ul>
                                        <li className='first-li'><FaTag /> 20% off</li>
                                        <li className='second-li'><FaClock /> Fast</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="opens-state">
                                <h4>opens tomorrow</h4>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="restaurant-cards">
                                <div className="image">
                                    <img src="/food_23.png" alt="" />
                                </div>
                                <div className="restaurant-name">
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <img src="/kfc.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <h5>KFC</h5>
                                            <span><FaStar /> 50</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="discount-timer">
                                    <ul>
                                        <li className='first-li'><FaTag /> 20% off</li>
                                        <li className='second-li'><FaClock /> Fast</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="opens-state">
                                <h4>opens tomorrow</h4>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="restaurant-cards">
                                <div className="image">
                                    <img src="/food_24.png" alt="" />
                                </div>
                                <div className="restaurant-name">
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <img src="/kfc.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <h5>KFC</h5>
                                            <span><FaStar /> 50</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="discount-timer">
                                    <ul>
                                        <li className='first-li'><FaTag /> 20% off</li>
                                        <li className='second-li'><FaClock /> Fast</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="opens-state">
                                <h4>opens tomorrow</h4>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="restaurant-cards">
                                <div className="image">
                                    <img src="/food_16.png" alt="" />
                                </div>
                                <div className="restaurant-name">
                                    <ul>
                                        <li>
                                            <div className="image">
                                                <img src="/kfc.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <h5>KFC</h5>
                                            <span><FaStar /> 50</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="discount-timer">
                                    <ul>
                                        <li className='first-li'><FaTag /> 20% off</li>
                                        <li className='second-li'><FaClock /> Fast</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="opens-state">
                                <h4>opens tomorrow</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant
