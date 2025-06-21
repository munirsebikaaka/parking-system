import { NavLink } from "react-router-dom";
import "../uniqueStyles/home.css";

const ParkingHomepage = () => {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className="section hero">
        <div className="hero-text-content">
          <h1 className="hero-title">Find and Reserve Parking</h1>
          <p>
            Skip the stress of circling the block. Our smart parking app helps
            you instantly locate available spots near your destination.
          </p>
          <p>
            With real-time updates, secure payments, and easy reservations,
            parking has never been simpler.
          </p>
          <NavLink to="/entry" className="btn btn-primary">
            Find Parking
          </NavLink>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="img/park-lot.jpg"
            alt="Parking"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <div className="grid services-grid">
          {[
            {
              icon: "🅿️",
              title: "Daily Parking",
              desc: "Secure daily commute parking.",
            },
            {
              icon: "🏢",
              title: "Monthly Parking",
              desc: "Monthly spaces for home or work.",
            },
            {
              icon: "✈️",
              title: "Airport Parking",
              desc: "Long-term airport parking solutions.",
            },
            {
              icon: "🚗",
              title: "Valet Service",
              desc: "Premium valet parking experience.",
            },
          ].map((item, index) => (
            <div key={index} className="card service-card">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="section feature">
        <div className="feature-image-wrapper">
          <img
            src="img/ev-charge.jpg"
            alt="Features"
            className="responsive-image"
          />
        </div>
        <div className="feature-content">
          <h2 className="section-title">Why Choose Us</h2>
          <ul className="feature-list">
            <li>
              <span>⚡</span> Real-time parking availability
            </li>
            <li>
              <span>💰</span> No hidden fees, fair prices
            </li>
            <li>
              <span>🔒</span> 24/7 monitored parking
            </li>
            <li>
              <span>📱</span> Mobile-friendly booking
            </li>
          </ul>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats">
        {[
          { label: "Parking Spaces", value: "10,000+" },
          { label: "Locations", value: "500+" },
          { label: "Happy Customers", value: "1M+" },
          { label: "Support", value: "24/7" },
        ].map((stat, i) => (
          <div key={i} className="stat">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="grid testimonials-grid">
          {[
            {
              text: "Finding parking downtown used to be a nightmare. Now I can reserve a spot before I even leave home!",
              author: "Adam B.",
            },
            {
              text: "The monthly parking pass has saved me so much time and money. Highly recommended!",
              author: "Aliah K.",
            },
            {
              text: "Airport parking was never this easy. The valet service is worth every penny.",
              author: "Codesmann S.",
            },
          ].map((t, i) => (
            <div key={i} className="card testimonial-card">
              <p>"{t.text}"</p>
              <p className="author">- {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section about">
        <div className="about-content">
          <h2 className="section-title">About Our Parking</h2>
          <p>
            We're revolutionizing the parking industry with smart technology and
            customer-focused solutions.
          </p>
          <p>
            Founded in 2015, we've grown from a single lot to a nationwide
            network.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
        <div className="about-image-wrapper">
          <img
            src="img/parkfacility.jpg"
            alt="About Parking"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">ParkEasy</div>
        <p className="footer-text">
          © {new Date().getFullYear()} ParkEasy. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </main>
  );
};

export default ParkingHomepage;
