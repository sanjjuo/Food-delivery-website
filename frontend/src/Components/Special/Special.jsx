import React from 'react'
import "../Special/Special.css"
import { BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Special = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: -10 }}
                transition={{ duration: 0.5 }}
                className="special-fd-section">
                <div className="container">
                    <div className="row p-0">
                        <div className="col-md-5">
                            <div className="special-fd">
                                <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Best deals <span>Crispy Sandwiches</span></motion.h3>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1 }}>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</motion.p>
                                <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1.5 }}>proceed to order <BsArrowRightCircleFill /></motion.button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="special-image">
                                <img src="/food_23.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 10 }}
                transition={{ duration: 0.5 }}
                className="special-fd-section">
                <div className="container">
                    <div className="row p-0">
                        <div className="col-md-7">
                            <div className="special-image2">
                                <img src="/food_30.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="special-fd">
                                <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Best deals <span>Crispy Sandwiches</span></motion.h3>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1 }}>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</motion.p>
                                <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1.5 }}>proceed to order <BsArrowRightCircleFill /></motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: -10 }}
                transition={{ duration: 0.5 }}
                className="special-fd-section">
                <div className="container">
                    <div className="row p-0">
                        <div className="col-md-5">
                            <div className="special-fd">
                                <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Best deals <span>Crispy Sandwiches</span></motion.h3>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1 }}>Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</motion.p>
                                <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 1.5 }}>proceed to order <BsArrowRightCircleFill /></motion.button>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="special-image">
                                <img src="/food_24.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="proceed-best-order-section">
                <div className="image">
                    <img src="/header_img.png" alt="" />
                </div>
                <div className="content">
                    <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Are you ready to order with the best deals ?</motion.h3>
                    <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>proceed to order <BsArrowRightCircleFill /></motion.button>
                </div>
            </div>
        </div>
    )
}

export default Special
