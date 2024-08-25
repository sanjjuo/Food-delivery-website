import React, { useEffect, useState } from 'react'
import "../Menu/Menu.css"
import { Card, Button } from 'react-bootstrap';
import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import { Hourglass } from 'react-loader-spinner';
import MenuModal from './MenuModal';
import { motion } from 'framer-motion';

const Menu = ({ foodList, url, handleCart }) => {
    const [nav, setNav] = useState("All")
    const [itemCount, setItemCount] = useState({})
    const [loading, setLoading] = useState(false)
    const [menuModal, setMenuModal] = useState(false);
    const [foodDetails, setFoodDetails] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000)

    }, [])

    const handleShowModal = (menu) => {
        setMenuModal(true)
        setFoodDetails(menu)
        console.log(menu);

    }


    return (
        <div>
            <div className="menu-section" id='menu'>
                <h2>our menu</h2>
                <div className="container">
                    <div className="menu-navbar">
                        <ul>
                            <li onClick={() => setNav("All")} className={nav === "All" ? "active" : ""}>all</li>
                            <li onClick={() => setNav("sandwich")} className={nav === "sandwich" ? "active" : ""}>Sandwich</li>
                            <li onClick={() => setNav("noodles")} className={nav === "noodles" ? "active" : ""}>noodles</li>
                            <li onClick={() => setNav("pasta")} className={nav === "pasta" ? "active" : ""}>pasta</li>
                            <li onClick={() => setNav("ice-cream")} className={nav === "ice-cream" ? "active" : ""}>ice cream</li>
                            <li onClick={() => setNav("cake")} className={nav === "cake" ? "active" : ""}>cake</li>
                        </ul>
                    </div>
                    <div className="row">
                        {!loading ? <Hourglass
                            visible={true}
                            height="30"
                            width="30"
                            ariaLabel="hourglass-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            colors={['#49557e', 'orangered']}
                        /> : <>
                            {foodList.map((menu, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" key={index}>

                                    <Card className='menu-cards'>
                                        <Card.Img variant="top" src={`${url}/images/${menu.image}`} />
                                        <div className='detail-icon'><CgDetailsMore onClick={() => handleShowModal(menu)} /></div>
                                        <Card.Body>
                                            <Card.Title style={{ color: "#49557e" }}>{menu.name}</Card.Title>

                                            <Card.Text style={{
                                                color: "#666565",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 3, // Number of lines to show
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }} className='card-text'>{menu.description}</Card.Text>

                                            <div className="price-btn">
                                                <h3>Rs. {menu.price}</h3>
                                                <Button className='btn' onClick={() => handleCart(menu)}><FaCartShopping /> Add to cart</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </motion.div>

                            ))}
                        </>
                        }
                    </div>
                </div>
            </div>
            <MenuModal show={menuModal} onHide={() => setMenuModal(false)} foodDetails={foodDetails} url={url} handleCart={handleCart} />
        </div>

    )
}

export default Menu
