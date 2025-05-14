import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/logo.svg" alt="ParkEase" />
            <span>ParkEase</span>
          </div>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>

          <button className="mobile-menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Smart Parking Solutions for Modern Cities</h1>
            <p className="lead">
              Find, book, and pay for parking in seconds with our intuitive
              platform. Never circle the block again.
            </p>
            <div className="cta-buttons">
              <Link to="/parking" className="btn btn-primary btn-lg">
                Find Parking Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </Link>
              <Link to="/demo" className="btn btn-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-illustration.svg" alt="Parking illustration" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Happy Users</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Parking Spots</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2>Revolutionizing Urban Parking</h2>
            <p className="section-description">
              Our platform combines cutting-edge technology with user-friendly
              design
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                </svg>
              </div>
              <h3>Contactless Payments</h3>
              <p>
                Secure in-app payments with multiple options including Apple Pay
                and Google Pay.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                </svg>
              </div>
              <h3>Guaranteed Spots</h3>
              <p>
                Your reserved spot is held for you with our 15-minute grace
                period.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
                </svg>
              </div>
              <h3>EV Charging</h3>
              <p>
                Find and reserve parking with electric vehicle charging
                stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <span className="section-subtitle">Our Story</span>
            <h2>Redefining Urban Mobility</h2>
            <p>
              Founded in 2022, ParkEase was born out of frustration with
              traditional parking systems. Our mission is to make urban parking
              seamless, efficient, and stress-free.
            </p>
            <p>
              We combine smart technology with deep urban planning expertise to
              create solutions that work for both drivers and cities.
            </p>
            <Link to="/about" className="btn btn-outline">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="about-image">
            <img src="/about-image.jpg" alt="ParkEase team" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Happy Customers</span>
            <h2>What Our Users Say</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">★★★★★</div>
              <p>
                "ParkEase has completely transformed my daily commute. I save at
                least 15 minutes every morning!"
              </p>
              <div className="user">
                <img src="/user-1.jpg" alt="Sarah J." />
                <div>
                  <h4>Sarah J.</h4>
                  <span>Regular User</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">★★★★☆</div>
              <p>
                "The EV charging integration is brilliant. I can always find a
                spot that meets my needs."
              </p>
              <div className="user">
                <img src="/user-2.jpg" alt="Michael T." />
                <div>
                  <h4>Michael T.</h4>
                  <span>EV Driver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Offerings</span>
            <h2>Comprehensive Parking Solutions</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Residential Parking</h3>
              <p>
                Monthly parking solutions for apartment dwellers and homeowners.
              </p>
              <Link to="/services/residential" className="btn btn-text">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>Commercial Parking</h3>
              <p>Custom solutions for businesses and office buildings.</p>
              <Link to="/services/commercial" className="btn btn-text">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="service-card">
              <h3>Event Parking</h3>
              <p>Specialized parking for concerts, games, and large events.</p>
              <Link to="/services/events" className="btn btn-text">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Latest Updates</span>
            <h2>From Our Blog</h2>
          </div>

          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="/blog-1.jpg" alt="Urban parking solutions" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Technology</span>
                <h3>How Smart Parking is Transforming Cities</h3>
                <p>
                  Exploring the impact of technology on urban mobility and
                  parking infrastructure.
                </p>
                <Link to="/blog/smart-parking" className="btn btn-text">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="/blog-2.jpg" alt="EV charging" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sustainability</span>
                <h3>The Future of EV Parking Infrastructure</h3>
                <p>
                  How cities are adapting parking facilities for the electric
                  vehicle revolution.
                </p>
                <Link to="/blog/ev-parking" className="btn btn-text">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/blog" className="btn btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Have questions or want to learn more about our solutions? Our
                team is here to help.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>hello@parkease.com</span>
                </div>

                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <span>+1 (800) 555-PARK</span>
                </div>

                <div className="contact-method">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>123 Parking Ave, Suite 100, San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo">
                <img src="/logo-white.svg" alt="ParkEase" />
                <span>ParkEase</span>
              </div>
              <p>Making urban parking simple, smart, and stress-free.</p>

              <div className="social-links">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-2.5-3.5-3.77-6.36-3.77-2.86 0-4.93 1.27-6.36 3.77-.2.35.11.75.51.75h11.69c.41 0 .72-.4.52-.75zM9 10.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5S9 11.33 9 10.5zm6 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/integrations">Integrations</Link>
                </li>
                <li>
                  <Link to="/updates">Updates</Link>
                </li>
                <li>
                  <Link to="/download">Download</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/press">Press</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <Link to="/help">Help Center</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/security">Security</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} ParkEase Technologies. All rights
              reserved.
            </p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookies">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
