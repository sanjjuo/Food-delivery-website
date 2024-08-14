import React from 'react'
import "../Question/Question.css"
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiDonut } from "react-icons/gi";

const Question = () => {
    return (
        <div>
            <div className="question">
                <h2>how does it work</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-card">
                                <FaLocationDot className='icon' />
                                <h5>select location</h5>
                                <p>choose the location wheere your food will be delivered.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-card">
                                <BiSolidFoodMenu className='icon' />
                                <h5>choose order</h5>
                                <p>Check over hundreds of menus to pick your favorite food.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-card">
                                <GiTakeMyMoney className='icon' />
                                <h5>Pay advanced</h5>
                                <p>It's quick, safe, and simple. Select several methods of payment.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="question-card">
                                <GiDonut className='icon' />
                                <h5>Enjoy meals</h5>
                                <p>Food is made and delivered directly to your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question
