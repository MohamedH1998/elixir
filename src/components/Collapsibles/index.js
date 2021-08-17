import React from 'react'
import { VscAccount } from "react-icons/vsc";

import Collapsible from '../Collapsible'
import GoogleAuth from '../GoogleAuth';

import './Collapsibles.css'
const Collapsibles = () => {
    return (
        <div className="collapsible-container">
            <h2 className="my-account-header"><VscAccount className="nav-icon" />My Account</h2>
        <Collapsible id="1" label="Edit your account information">
        <div className="account-info-header-container">
               <h3 className="account-info-header">My Account Information</h3>
               <h4 className="account-info-header">Your personal Details</h4>
               </div>
               <hr className="account-info-separator"></hr>
               <form className="account-info-form">
                   <label htmlFor="fName" className="account-form-label">First Name</label>
                   <input type="text" className="account-form-input" name="fName"/>
                   <label htmlFor="lName" className="account-form-label">Last Name</label>
                   <input type="text" className="account-form-input" name="lName"/>
                   <label htmlFor="email" className="account-form-label">Email Address</label>
                   <input type="email" className="account-form-input" name="email"/>
                   <button className="account-info-btn">Continue</button>
               </form>
        </Collapsible>
        <Collapsible id="2" label="Change your Password">
        <div className="account-info-header-container">
               <h3 className="account-info-header">Change Password</h3>
               <h4 className="account-info-header">Your password</h4>
               </div>
               <hr className="account-info-separator"></hr>
               <form className="account-info-form">
                   <label htmlFor="password" className="account-form-label">Password</label>
                   <input type="password" className="account-form-input" name="password"/>
                   <label htmlFor="confirm-password" className="account-form-label">Confirm Password</label>
                   <input type="password" className="account-form-input" name="confirm-password"/>
                   <button className="account-info-btn">Continue</button>
               </form>
        </Collapsible>
        <div className="sign-out-container">
            <GoogleAuth/>
        </div>
        </div>
    )
}

export default Collapsibles
