import React, { useState } from 'react'
import "../Menu/Menu.css"
import { Card, Button } from 'react-bootstrap';
import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";

const Menu = () => {
    const [nav, setNav] = useState("All")
    const [itemCount, setItemCount] = useState(0)

    return (
        <div>
            <div className="menu-section" id='menu'>
                <h2>our menu</h2>
                <div className="container">
                    <div className="menu-navbar">
                        <ul>
                            <li onClick={() => setNav("All")} className={nav === "All" ? "active" : ""}>all</li>
                            <li onClick={() => setNav("pizza")} className={nav === "pizza" ? "active" : ""}>pizza</li>
                            <li onClick={() => setNav("burger")} className={nav === "burger" ? "active" : ""}>burger</li>
                            <li onClick={() => setNav("pasta")} className={nav === "pasta" ? "active" : ""}>pasta</li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <Card className='menu-cards'>
                                <Card.Img variant="top" src="/food_23.png" />
                                <Card.Body>
                                    <Card.Title style={{ color: "#49557e" }}>Delicius Pizza</Card.Title>
                                    <Card.Text style={{ color: "#666565" }}>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</Card.Text>
                                    <div className="price-btn">
                                        <h3>Rs. 500</h3>
                                        <Button><FaCartShopping /> Order now</Button>
                                    </div>
                                </Card.Body>
                                {!itemCount ? <div className="large-plus" onClick={()=>setItemCount(prev=>prev+1)}><FaPlus /></div>
                                    : <div className="quantity-btns">
                                        <div className="plus" onClick={()=>setItemCount(prev=>prev+1)}><FaPlus /></div>
                                        <div className="quantity">{itemCount}</div>
                                        <div className="minus" onClick={()=>setItemCount(prev=>prev-1)}><FaMinus /></div>
                                    </div>
                                }
                            </Card>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <Card className='menu-cards'>
                                <Card.Img variant="top" src="/food_23.png" />
                                <Card.Body>
                                    <Card.Title style={{ color: "#49557e" }}>Delicius Pizza</Card.Title>
                                    <Card.Text style={{ color: "#666565" }}>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</Card.Text>
                                    <div className="price-btn">
                                        <h3>Rs. 500</h3>
                                        <Button><FaCartShopping /> Order now</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <Card className='menu-cards'>
                                <Card.Img variant="top" src="/food_23.png" />
                                <Card.Body>
                                    <Card.Title style={{ color: "#49557e" }}>Delicius Pizza</Card.Title>
                                    <Card.Text style={{ color: "#666565" }}>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</Card.Text>
                                    <div className="price-btn">
                                        <h3>Rs. 500</h3>
                                        <Button><FaCartShopping /> Order now</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <Card className='menu-cards'>
                                <Card.Img variant="top" src="/food_23.png" />
                                <Card.Body>
                                    <Card.Title style={{ color: "#49557e" }}>Delicius Pizza</Card.Title>
                                    <Card.Text style={{ color: "#666565" }}>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</Card.Text>
                                    <div className="price-btn">
                                        <h3>Rs. 500</h3>
                                        <Button><FaCartShopping /> Order now</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
