import React from 'react'
import "../Header/Header.css"
import Slider from "react-slick";

const Header = () => {
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
        <>
            <div className='header'>
                <div className="header-contents">
                    <h2>Order your favourite food here</h2>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                    </p>
                    <a href="#menu"><button >view menu</button></a>
                </div>
            </div>
            <div className="container">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="recent-food-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <div className="discount-percentage">
                                <h5>10% <span>off</span></h5>
                            </div>
                            <h4>10 days remaining</h4>
                        </div>

                        <div className="recent-food-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <div className="discount-percentage">
                                <h5>10% <span>off</span></h5>
                            </div>
                            <h4>10 days remaining</h4>
                        </div>

                        <div className="recent-food-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <div className="discount-percentage">
                                <h5>10% <span>off</span></h5>
                            </div>
                            <h4>10 days remaining</h4>
                        </div>

                        <div className="recent-food-card">
                            <div className="image">
                                <img src="/food_13.png" alt="" />
                            </div>
                            <div className="discount-percentage">
                                <h5>10% <span>off</span></h5>
                            </div>
                            <h4>10 days remaining</h4>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Header
