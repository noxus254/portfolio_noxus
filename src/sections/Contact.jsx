import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Reveal from '../components/Reveal';
import { FiPhone, FiMail, FiFacebook, FiSend, FiInstagram } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="contact-section">
      <Reveal width="100%">
        <div className="contact-header">
          <h2 className="contact-title">Connect with me</h2>
          <p className="contact-subtitle">
            Have an idea or project to discuss? Don't hesitate to contact me. I'm always
            ready to listen and collaborate!
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact me</h3>
              
              <a href="tel:0707207254" className="info-item social-item">
                <div className="icon-box">
                  <FiPhone />
                </div>
                <div className="info-details">
                  <span className="label">Phone number</span>
                  <span className="value">0707207254</span>
                </div>
              </a>

              <a href="mailto:minhlahieune@gmail.com" className="info-item social-item">
                <div className="icon-box">
                  <FiMail />
                </div>
                <div className="info-details">
                  <span className="label">Email</span>
                  <span className="value">minhlahieune@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="info-card">
              <h3>Follow me</h3>
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-item">
                <div className="icon-box">
                  <FiFacebook />
                </div>
                <div className="info-details">
                  <span className="label">Facebook</span>
                  <span className="value">@trunghieu.user</span>
                </div>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-item">
                <div className="icon-box">
                  <FiInstagram/>
                </div>
                <div className="info-details">
                  <span className="label">Instagram</span>
                  <span className="value">@_.noxus</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" placeholder="Nguyen Trung Hieu" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email or Phone number</label>
                <input type="text" id="email" placeholder="minhlahieune@gmail.com or 0707207254" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Share your ideas or project..."></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FiSend /> Send message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};

export default Contact;
