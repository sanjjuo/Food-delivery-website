import React from 'react'
import "../Header/Header.css"
import { motion } from "framer-motion"

const Header = () => {

    return (
        <>
            <div className='header' id='home'>
                <div className="header-contents">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >Order your favourite food here</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: -10 }}
                        transition={{ duration: 1.5 }}
                    >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                        Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
                    </motion.p>
                    <motion.a initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: -10 }}
                        transition={{ duration: 2.5 }}
                        href="#menu"><button >view menu</button></motion.a>
                </div>
            </div>
        </>
    )
}

export default Header
