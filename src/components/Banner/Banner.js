import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Link className="banner-btn" to="/products">Shop now</Link>
        </div>
    )
}

export default Banner
