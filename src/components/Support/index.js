import React from 'react'
import {FaShippingFast, FaRegClock} from 'react-icons/fa'
import {RiMoneyPoundCircleLine} from 'react-icons/ri'



import './Support.css'

const Support = () => {
    return (
        <div className="support-container parent">
            <div className="support-item child">
                <i className="support-icon"><FaShippingFast/></i>
                <h5 className="support-title">Free Shipping</h5>
                    <p className="support-text">
                    First class delivery at no cost!
                    </p>
            </div>


            <div className="support-item child">
                <i className="support-icon"><FaRegClock/></i>
                <h5 className="support-title">24/7</h5>
                    <p className="support-text">
                    24 hour support, 7 days a week!
                    </p>
            </div>


            <div className="support-item child">
                <i className="support-icon"><RiMoneyPoundCircleLine/></i>
                <h5 className="support-title">Money return</h5>
                    <p className="support-text">
                    Change your mind? Don't worry!
                    </p>
            </div>
            
        </div>
    )
}

export default Support
