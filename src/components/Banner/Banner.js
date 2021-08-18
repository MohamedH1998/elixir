import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1 className="banner-heading">Cold-pressed juices</h1>
                <h2 className="banner-subheading">Fresh and organic fruits and veggies without artificial flavors or added sugars.</h2>
                <Link className="banner-btn" to="/products">Shop now</Link>
            </div>
        </div>
    )
}

export default Banner
