import React from 'react'
import "../Question/Question.css"
import { FaMapLocationDot } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { FcTouchscreenSmartphone } from "react-icons/fc";
import {motion} from "framer-motion"

const Question = () => {
    return (
        <div>
            <div className="question">
                <h2>how does it work</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="order-image">
                                <img src="/order.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 second">
                            <div className="question-part">
                                <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Sit at Home</motion.h1>
                                <motion.h3 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>We will take care</motion.h3>
                                <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}>Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula.
                                     Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</motion.p>
                                <div className="icons-part">
                                    <ul>
                                        <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}><TbTruckDelivery className='icon'/>fast delivery in 1 hour</motion.li>
                                        <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}><FcTouchscreenSmartphone className='icon'/>amazing mobile app</motion.li>
                                        <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}><FaMapLocationDot className='icon'/>wide coverage map</motion.li>
                                        <motion.li initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: -10 }} transition={{ duration: 0.5 }}><GrUserWorker className='icon'/>more than 150 couriers</motion.li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
