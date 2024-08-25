import React, { useState,useEffect } from 'react'
import "./LoginSignUpModal.css"
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import axios from "axios";

const LoginSignupModal = (props) => {

    const { setModalShow, setToken, token,url, ...modalProps } = props;
    const [modals, setModals] = useState("Login");
    const [userLogin, setUserLogin] = useState({
        name: "",
        email: "",
        password: ""
    })

    // Clear input fields when the modal is opened
    useEffect(() => {
        if (props.show) {
            setUserLogin({
                name: "",
                email: "",
                password: ""
            });
        }
    }, [props.show]);

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()
        let newUrl = url;
        if (modals === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        try {
            const response = await axios.post(newUrl, userLogin);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setModalShow(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error during login/signup:", error);
            alert("An error occurred. Please try again later.");
        }

    }
    return (
        <div>
            <Modal
                {...modalProps}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='title'>
                        {modals}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <form onSubmit={onLogin}>
                        {modals === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={userLogin.name} id='name' placeholder='Your name' />}
                        <input type="email" name="email" onChange={onChangeHandler} value={userLogin.email} id="email" placeholder='Your email' />
                        <input type="password" name="password" onChange={onChangeHandler} value={userLogin.password} id="password" placeholder='Your password' />
                        <button type="submit">{modals === "Sign Up" ? "Create Account" : "Login"}</button>
                        <div className="checkbox-privacy-policy">
                            <input type="checkbox" name="" id="checkbox" required />
                            <p>By continuing, I agree to the terms of use & privacy policy</p>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    {modals === "Login" ? <p>Don't have an account ? <Link style={{ color: "orangered" }} onClick={() => setModals("Sign Up")}>Sign here</Link></p> :
                        <p>Already have an account ? <Link style={{ color: "orangered" }} onClick={() => setModals("Login")}>Login here</Link></p>}


                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LoginSignupModal
