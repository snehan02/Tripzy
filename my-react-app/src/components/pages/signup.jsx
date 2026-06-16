import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function Signup() {
  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <h1>
          TRIP<span>ZY</span>
        </h1>

        <p>
          Start your next adventure today. Create an account and
          discover amazing destinations around the world.
        </p>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>

          <p className="auth-subtitle">
            Join Tripzy and begin your journey
          </p>

          <form>
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              required
            />

            <button type="submit">
              Create Account
            </button>
          </form>

          <p className="auth-footer">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;