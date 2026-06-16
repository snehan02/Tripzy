import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = [
    {
      username: "admin",
      password: "admin123",
      name: "Admin",
      role: "admin",
    },
    {
      username: "sneha",
      password: "user123",
      name: "Sneha",
      role: "user",
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const validUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (validUser) {
      localStorage.setItem(
        "user",
        JSON.stringify(validUser)
      );

      alert(`Welcome ${validUser.name}!`);

      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="auth-left">
        <h1>
          TRIP<span>ZY</span>
        </h1>

        <p>
          Welcome back! Login to continue exploring amazing
          destinations and unforgettable adventures with Tripzy.
        </p>
      </div>

      {/* Right Side */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Welcome Back</h2>

          <p className="auth-subtitle">
            Login to your account
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button type="submit">
              Login
            </button>
          </form>

         

          <p className="auth-footer">
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;