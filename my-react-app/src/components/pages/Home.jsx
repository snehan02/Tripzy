import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import heroImg from "../../assets/images/hero-img01.jpg";
import heroImg02 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";

const Home = () => {
  return (
    <>
      <Navbar />

      
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Athithidevo Bhava!
            <span className="highlight"> ಅತಿಥಿ ದೇವೋ ಭವ</span>
          </h1>

          <p>
            Life is a journey, enjoy the trip. Aim for the sky, but move slowly,
            enjoying every step along the way. It is all those little steps that
            make the journey complete. The journey is a reward.
          </p>
        </div>

        <div className="hero-gallery">
          <div className="hero__img-box left-img">
            <img src={heroImg} alt="Travel Destination" />
          </div>

          <div className="hero__img-box center-video">
            <video src={heroVideo} autoPlay muted loop controls />
          </div>

          <div className="hero__img-box right-img">
            <img src={heroImg02} alt="Travel Destination" />
          </div>
        </div>
      </section>




<section className="featured-tours">
  <div className="section-title">
    <h5>Explore</h5>
    <h2>Featured Tours</h2>
  </div>

  <div className="tour-cards">
    <div className="tour-card">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Maldives"
      />
      <div className="tour-info">
        <h3>Maldives</h3>
        <p>5 Days • Luxury Beach Escape</p>
        <span>₹49,999</span>
      </div>
    </div>

    <div className="tour-card">
      <img
        src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
        alt="Paris"
      />
      <div className="tour-info">
        <h3>Paris</h3>
        <p>7 Days • Romantic City Tour</p>
        <span>₹69,999</span>
      </div>
    </div>

    <div className="tour-card">
      <img
        src="https://images.unsplash.com/photo-1548013146-72479768bada"
        alt="Switzerland"
      />
      <div className="tour-info">
        <h3>Switzerland</h3>
        <p>6 Days • Alpine Adventure</p>
        <span>₹79,999</span>
      </div>
    </div>
  </div>

  <div className="view-all-container">
    <Link to = "/tours">
    
    <button className="view-all-btn">
      View All Tours →
    </button>
    </Link>
  </div>
</section>

<section className="packages-section">
  <div className="section-title">
    <h5>Popular Packages</h5>
    <h2>Choose Your Perfect Trip</h2>
  </div>

  <div className="package-cards">

    <div className="package-card">
      <h3> Beach Escape</h3>
      <p>Maldives • Bali • Goa</p>
      <span>Starting from ₹24,999</span>
    </div>

    <div className="package-card">
      <h3> Mountain Adventure</h3>
      <p>Manali • Kashmir • Switzerland</p>
      <span>Starting from ₹34,999</span>
    </div>

    <div className="package-card">
      <h3>City Explorer</h3>
      <p>Paris • Dubai • Singapore</p>
      <span>Starting from ₹44,999</span>
    </div>
    <div className="package-card">
      <h3>Temple devotion</h3>
      <p>Kerala • Karnataka •Tamil Nadu</p>
      <span>Starting from ₹4,999</span>
    </div>

  </div>
</section>


 {/* Features Section */}
<section className="features-section">
  <div className="section-title">
    <h5>Why Choose Us</h5>
    <h2>Our Features</h2>
  </div>

  <div className="features-container">
    <div className="feature-card">
  <div className="feature-icon">🌍</div>
  <h3>Best Destinations</h3>
  <p>
    Explore handpicked destinations across the world with unforgettable experiences.
  </p>
</div>

<div className="feature-card">
  <div className="feature-icon">🏨</div>
  <h3>Comfortable Stays</h3>
  <p>
    Enjoy premium hotels and accommodations carefully selected for every traveler.
  </p>
</div>

<div className="feature-card">
  <div className="feature-icon">💰</div>
  <h3>Affordable Packages</h3>
  <p>
    Travel more while spending less with our budget-friendly tour packages.
  </p>
</div>

<div className="feature-card">
  <div className="feature-icon">🛡️</div>
  <h3>Safe Travel</h3>
  <p>
    Your safety is our priority with trusted guides and secure travel planning.
  </p>
</div>
    
  </div>
</section>



<section className="stats-section">
  <div className="stat-card">
    <h2>12K+</h2>
    <p>Happy Travelers</p>
  </div>

  <div className="stat-card">
    <h2>500+</h2>
    <p>Tours Completed</p>
  </div>

  <div className="stat-card">
    <h2>50+</h2>
    <p>Destinations</p>
  </div>

  <div className="stat-card">
    <h2>10+</h2>
    <p>Years Experience</p>
  </div>
</section>
<section className="testimonials-section">
  <div className="section-title">
    <h5>Customer Reviews</h5>
    <h2>What Our Travelers Say</h2>
  </div>

  <div className="testimonial-cards">

    <div className="testimonial-card">
      <p>
        "Tripzy made our honeymoon unforgettable. Everything was perfectly planned."
      </p>
      <h4>— Sarah Johnson</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "Excellent service, affordable packages and amazing destinations."
      </p>
      <h4>— Rahul Sharma</h4>
    </div>

    <div className="testimonial-card">
      <p>
        "The best travel experience I've ever had. Highly recommended!"
      </p>
      <h4>— Priya Patel</h4>
    </div>

  </div>
</section>
<section className="gallery-section">
  <div className="section-title">
    <h5>Gallery</h5>
    <h2>Captured Moments</h2>
  </div>

  <div className="gallery-grid">
    <img src="https://picsum.photos/400/500?1" alt="" />
    <img src="https://picsum.photos/400/500?2" alt="" />
    <img src="https://picsum.photos/400/500?3" alt="" />
    <img src="https://picsum.photos/400/500?4" alt="" />
    <img src="https://picsum.photos/400/500?5" alt="" />
    <img src="https://picsum.photos/400/500?6" alt="" />
  </div>
</section>

<section className="subscribe-section">
  <div className="subscribe-content">
    <h2>Subscribe To Our Travel Updates</h2>

    <p>
      Get exclusive offers, travel tips, and exciting destination updates directly in your inbox.
    </p>

    <div className="subscribe-form">
      <input
        type="email"
        placeholder="Enter your email address"
      />

      <button>
        Subscribe →
      </button>
    </div>
  </div>
</section>




<footer className="footer">
  <div className="footer-container">

    <div className="footer-col">
      <h2 className="footer-logo">
        Trip<span>zy</span>
      </h2>

      <p>
        Explore the world with Tripzy. We create memorable travel experiences,
        exciting adventures, and stress-free vacations.
      </p>
    </div>

    <div className="footer-col">
      <h3>Quick Links</h3>

      <ul>
        <li>Home</li>
        <li>Tours</li>
        <li>Packages</li>
        <li>Gallery</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Top Destinations</h3>

      <ul>
        <li>Maldives</li>
        <li>Paris</li>
        <li>Switzerland</li>
        <li>Bali</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact Us</h3>

      <p>support@tripzy.com</p>
      <p>+91 9876543210</p>
      <p>Bengaluru, India</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Tripzy. All Rights Reserved.</p>
  </div>
</footer>



</>
  );
};
export default Home;

