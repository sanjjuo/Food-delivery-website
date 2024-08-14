import React from 'react'
import "../Special/Special.css"
import { BsArrowRightCircleFill } from "react-icons/bs";

const Special = () => {
    return (
        <div>
            <div className="special-fd-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="special-fd">
                                <h3>Best deals <span>Crispy Sandwiches</span></h3>
                                <p>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                                <button>proceed to order <BsArrowRightCircleFill /></button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="special-image">
                                <img src="/food_23.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="special-fd-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="special-image2">
                                <img src="/food_30.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="special-fd">
                                <h3>Celebrate parties with <span>Fried Chicken</span></h3>
                                <p>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                                <button>proceed to order <BsArrowRightCircleFill /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="special-fd-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="special-fd">
                                <h3>Wanna eat hot & <span>Spicy Pizza ?</span></h3>
                                <p>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                                <button>proceed to order <BsArrowRightCircleFill /></button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="special-image">
                                <img src="/food_24.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="proceed-best-order-section">
                <div className="image">
                    <img src="/header_img.png" alt="" />
                </div>
                <div className="content">
                    <h3>Are you ready to order with the best deals ?</h3>
                    <button>proceed to order <BsArrowRightCircleFill /></button>
                </div>
            </div>
        </div>
    )
}

export default Special
