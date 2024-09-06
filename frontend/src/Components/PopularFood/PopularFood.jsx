import React from 'react'
import "../PopularFood/PopularFood.css"
import { FaCartShopping, FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import { CgDetailsMore } from "react-icons/cg";
import { motion } from "framer-motion"

const PopularFood = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='popular-item-menu' id='popular-item-menu'>
            <h2>Popular Items</h2>
            <div className="container">
                <div className="slider-container2">
                    <Slider {...settings}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="popular-item-card">
                            <div className="image">
                                <img src="/cake.jpg" alt="" />
                            </div>
                            <CgDetailsMore className='details-icon' />
                            <div className="slide-details">
                                <h3>chocolate lava cake</h3>
                                <p>Cake is a sweet, baked dessert made from flour, sugar, eggs, and butter,
                                    often flavored and decorated for celebrations.baked dessert typically made from
                                    a mixture of flour, sugar, eggs, and butter or oil, often flavored with ingredients
                                    like vanilla, chocolate, or fruit.
                                </p>
                                <div className="price-location">
                                    <p>Rs. 250</p>
                                    <h5><FaLocationDot /> burger arena</h5>
                                </div>
                                <button><FaCartShopping /> Add to cart</button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="popular-item-card">
                            <div className="image">
                                <img src="/cake.jpg" alt="" />
                            </div>
                            <div className="slide-details">
                                <h3>chocolate lava cake</h3>
                                <p>Cake is a sweet, baked dessert made from flour, sugar, eggs, and butter,
                                    often flavored and decorated for celebrations.baked dessert typically made from
                                    a mixture of flour, sugar, eggs, and butter or oil, often flavored with ingredients
                                    like vanilla, chocolate, or fruit.
                                </p>
                                <div className="price-location">
                                    <p>Rs. 250</p>
                                    <h5><FaLocationDot /> burger arena</h5>
                                </div>
                                <button><FaCartShopping /> Add to cart</button>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1 }}
                            className="popular-item-card">
                            <div className="image">
                                <img src="/cake.jpg" alt="" />
                            </div>
                            <div className="slide-details">
                                <h3>chocolate lava cake</h3>
                                <p>Cake is a sweet, baked dessert made from flour, sugar, eggs, and butter,
                                    often flavored and decorated for celebrations.baked dessert typically made from
                                    a mixture of flour, sugar, eggs, and butter or oil, often flavored with ingredients
                                    like vanilla, chocolate, or fruit.
                                </p>
                                <div className="price-location">
                                    <p>Rs. 250</p>
                                    <h5><FaLocationDot /> burger arena</h5>
                                </div>
                                <button><FaCartShopping /> Add to cart</button>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.4 }}
                            className="popular-item-card">
                            <div className="image">
                                <img src="/cake.jpg" alt="" />
                            </div>
                            <div className="slide-details">
                                <h3>chocolate lava cake</h3>
                                <p>Cake is a sweet, baked dessert made from flour, sugar, eggs, and butter,
                                    often flavored and decorated for celebrations.baked dessert typically made from
                                    a mixture of flour, sugar, eggs, and butter or oil, often flavored with ingredients
                                    like vanilla, chocolate, or fruit.
                                </p>
                                <div className="price-location">
                                    <p>Rs. 250</p>
                                    <h5><FaLocationDot /> burger arena</h5>
                                </div>
                                <button><FaCartShopping /> Add to cart</button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.7 }}
                            className="popular-item-card">
                            <div className="image">
                                <img src="/cake.jpg" alt="" />
                            </div>
                            <div className="slide-details">
                                <h3>chocolate lava cake</h3>
                                <p>Cake is a sweet, baked dessert made from flour, sugar, eggs, and butter,
                                    often flavored and decorated for celebrations.baked dessert typically made from
                                    a mixture of flour, sugar, eggs, and butter or oil, often flavored with ingredients
                                    like vanilla, chocolate, or fruit.
                                </p>
                                <div className="price-location">
                                    <p>Rs. 250</p>
                                    <h5><FaLocationDot /> burger arena</h5>
                                </div>
                                <button><FaCartShopping /> Add to cart</button>
                            </div>
                        </motion.div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PopularFood
