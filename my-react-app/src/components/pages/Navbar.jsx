import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        TRIP<span>ZY</span>
      </div>

    
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/tours">Tours</Link>
          </li>

          <li>
            <Link to="/packages">Package</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        {user ? (
          <div className="profile-container">
            <div className="profile">
              👤 {user.name}
            </div>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;