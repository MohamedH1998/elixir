import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to recieve the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button className="subscription-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Footer;
