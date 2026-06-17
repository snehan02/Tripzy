import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>
          TRIP<span>ZY</span>
        </h1>

        <p>
          Start your next adventure today. Create an account and discover
          amazing destinations around the world.
        </p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h2>Create Account</h2>

          <p className="auth-subtitle">Join Tripzy and begin your journey</p>

          <form>
            <input type="text" placeholder="Full Name" required />

            <input type="tel" placeholder="Phone Number" required />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button type="submit">Create Account</button>
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
