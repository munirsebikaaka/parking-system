import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LuSquareParking } from "react-icons/lu";
import { MdMarkEmailRead, MdSecurity } from "react-icons/md";
import Nav from "../features/nav";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />

      <section className="hero">
        <div className="hero-content">
          <h1>Smart Parking Made Simple</h1>
          <p>
            Find, book, and pay for parking in seconds with our seamless
            platform
          </p>
          <NavLink to="/parking" className="hero-button">
            Start Parking Now
          </NavLink>
        </div>
        <div className="hero-image">
          <img src="img/park2.jpg" alt="Parking illustration" />
        </div>
      </section>

      <section className="services">
        <h2>Our Premium Services</h2>
        <p className="services-subtitle">
          We go beyond just parking to enhance your experience
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <LuSquareParking size={32} />
            </div>
            <h3>Reserved Parking</h3>
            <p>
              Guarantee your spot in advance with our reservation system,
              perfect for busy locations and events.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <FaServicestack size={32} />
            </div>
            <h3>Valet Service</h3>
            <p>
              Let our professional valets handle your vehicle with care while
              you attend to your business.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <MdSecurity size={32} />
            </div>
            <h3>Vehicle Security</h3>
            <p>
              24/7 monitored parking with CCTV and security patrols for complete
              peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-image">
          <img src="img/park1.jpg" alt="About ParkEasy" />
        </div>
        <div className="about-content">
          <h2>About ParkEasy</h2>
          <p>
            Founded in 2023, ParkEasy revolutionized urban parking with our
            smart technology platform. We combine cutting-edge software with
            premium parking facilities to create stress-free parking
            experiences.
          </p>
          <p>
            Our mission is to eliminate the frustration of finding parking
            through real-time availability, seamless payments, and exceptional
            customer service. With over 500 locations nationwide, we're making
            cities more accessible.
          </p>
          <div className="stats">
            <div className="stat-item">
              <span>50+</span>
              <p>Locations</p>
            </div>
            <div className="stat-item">
              <span>2K+</span>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <span>24/7</span>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <IoLocationSharp size={32} />
              <div>
                <h4>Address</h4>
                <p>Kampala, Nansana</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt size={32} />
              <div>
                <h4>Phone</h4>
                <p>+ (256) 742083075</p>
              </div>
            </div>
            <div className="info-item">
              <MdMarkEmailRead size={32} />
              <div>
                <h4>Email</h4>
                <a href="mailto:info@munirsebikaaka@gmail.com">
                  munirsebikaaka@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
