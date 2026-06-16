import React from "react";
import Navbar from "./Navbar";
import "../../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <h1>About TRIPZY</h1>

        <p>
          Creating unforgettable journeys and helping travelers
          explore the world with comfort, safety, and excitement.
        </p>
      </section>

      {/* Story */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>

          <p>
            TRIPZY was founded with a simple mission:
            to make travel easy, affordable, and memorable.
            We believe every journey should be filled with
            excitement, discovery, and beautiful memories.
          </p>

          <p>
            From exotic beaches to breathtaking mountains,
            we help travelers find the perfect destination
            and experience the joy of exploring the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="mission-card">
          <h3>🌍 Our Mission</h3>

          <p>
            To provide exceptional travel experiences through
            carefully planned tours, affordable packages,
            and outstanding customer service.
          </p>
        </div>

        <div className="mission-card">
          <h3>🚀 Our Vision</h3>

          <p>
            To become the most trusted travel partner,
            inspiring people to explore the world and
            create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>12K+</h2>
          <p>Happy Travelers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Tour Packages</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Countries Covered</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Years Experience</p>
        </div>
      </section>

      
      <section className="why-us-section">
        <h2>Why Choose Tripzy?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Best Destinations</h3>
            <p>
              Handpicked locations across the globe.
            </p>
          </div>

          <div className="why-card">
            <h3>Affordable Packages</h3>
            <p>
              Premium experiences at competitive prices.
            </p>
          </div>

          <div className="why-card">
            <h3>Safe Travel</h3>
            <p>
              Trusted guides and secure travel planning.
            </p>
          </div>

          <div className="why-card">
            <h3>24/7 Support</h3>
            <p>
              Assistance whenever and wherever you need it.
            </p>
          </div>
        </div>
      </section>

      
      <section className="team-section">
        <h2>Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
            />

            <h3>Sneha</h3>
            <p>Founder & Travel Planner</p>
          </div>

          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt=""
            />

            <h3>chaya</h3>
            <p>Tour Manager</p>
          </div>

          
        </div>
      </section>
    </>
  );
}

export default About;