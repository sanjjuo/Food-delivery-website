import React from 'react'
import Modal from 'react-bootstrap/Modal';
import "../Menu/Modal.css"
import { FaCartShopping } from 'react-icons/fa6';

const MenuModal = ({ show, onHide, foodDetails, url }) => {

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='title'>
                        <h4>Food details</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <div className="row p-0">
                        <div className="col-md-4">
                            <div className="image">
                                <img src={`${url}/images/${foodDetails.image}`} alt="loading..." />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="details">
                                <h4>{foodDetails.name}</h4>
                                <h6>{foodDetails.category}</h6>
                                <p>{foodDetails.description}</p>
                                <h5>Price: <span>Rs. {foodDetails.price}</span></h5>
                                <div className="button">
                                    <button type="button" onClick={() => handleCart(menu)}><FaCartShopping /> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MenuModal
