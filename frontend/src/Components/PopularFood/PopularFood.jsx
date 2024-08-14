import React from 'react'
import "../PopularFood/PopularFood.css"
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";

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
                        <div className="popular-item-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <h3>cake</h3>
                            <h5><FaLocationDot /> burger arena</h5>
                            <p>Rs. 250</p>
                            <button>order now</button>
                        </div>

                        <div className="popular-item-card">
                            <div className="image">
                                <img src="/food_16.png" alt="" />
                            </div>
                            <h3>cake</h3>
                            <h5><FaLocationDot /> burger arena</h5>
                            <p>Rs. 250</p>
                            <button>order now</button>
                        </div>

                        <div className="popular-item-card">
                            <div className="image">
                                <img src="/food_14.png" alt="" />
                            </div>
                            <h3>cake</h3>
                            <h5><FaLocationDot /> burger arena</h5>
                            <p>Rs. 250</p>
                            <button>order now</button>
                        </div>

                        <div className="popular-item-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <h3>cake</h3>
                            <h5><FaLocationDot /> burger arena</h5>
                            <p>Rs. 250</p>
                            <button>order now</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PopularFood
