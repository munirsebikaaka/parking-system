import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoCall, IoCheckmarkSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbDeviceMobileCharging } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
              <NavLink to="/parking" className="btn btn-primary btn-lg">
                Find Parking Now
              </NavLink>
            </div>
          </div>
          <div className="hero-image">
            <img src="/img/park2.jpg" alt="Parking illustration" />
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
                <HiOutlineCurrencyDollar className="icon-item" />
              </div>
              <h3>Contactless Payments</h3>
              <p>
                Secure in-app payments with multiple options including mobile
                and airtel money Pay.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <IoCheckmarkSharp className="icon-item" />
              </div>
              <h3>Guaranteed Spots</h3>
              <p>
                Your reserved spot is held for you with our 15-minute grace
                period.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <TbDeviceMobileCharging className="icon-item" />
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
          </div>
          <div className="about-image">
            <img src="/img/workers.jpg" alt="ParkEase team" />
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
              <p>
                "ParkEase has completely transformed my daily commute. I save at
                least 15 minutes every morning!"
              </p>
              <div className="user">
                <img src="/img/sarah.jpg" alt="Sarah J." />
                <div>
                  <h4>Sarah J.</h4>
                  <span>Regular User</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <p>
                "The EV charging integration is brilliant. I can always find a
                spot that meets my needs."
              </p>
              <div className="user">
                <img src="/img/munir.jpg" alt="abdul munir" />
                <div>
                  <h4>Abdul Munir</h4>
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
            </div>

            <div className="service-card">
              <h3>Commercial Parking</h3>
              <p>Custom solutions for businesses and office buildings.</p>
            </div>

            <div className="service-card">
              <h3>Event Parking</h3>
              <p>Specialized parking for concerts, games, and large events.</p>
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
                <img src="/img/urban-park.jpg" alt="Urban parking solutions" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Technology</span>
                <h3>How Smart Parking is Transforming Cities</h3>
                <p>
                  Exploring the impact of technology on urban mobility and
                  parking infrastructure.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image">
                <img src="/img/ev-charge.jpg" alt="EV charging" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Sustainability</span>
                <h3>The Future of EV Parking Infrastructure</h3>
                <p>
                  How cities are adapting parking facilities for the electric
                  vehicle revolution.
                </p>
              </div>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/garage" className="btn btn-outline">
              View Garage
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have questions or want to learn more about our solutions? Our team
            is here to help.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <MdEmail />

              <span>munirsebikaaka@gmail.com</span>
            </div>

            <div className="contact-method">
              <IoCall />
              <span>+(256) 742083075</span>
            </div>
            <div className="contact-method">
              <FaLocationDot />

              <span>123 Parking , Nansana, Kpl</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
