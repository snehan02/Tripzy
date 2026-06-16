import React, { useState } from "react";
import Navbar from "./Navbar";
import "../../styles/package.css";

function Packages() {
  const packages = [
    {
      id: 1,
      title: "Beach Escape",
      destination: "Goa • Maldives • Bali",
      duration: "5 Days",
      price: 24999,
      type: "Beach",
    },
    {
      id: 2,
      title: "Mountain Adventure",
      destination: "Manali • Kashmir • Switzerland",
      duration: "7 Days",
      price: 34999,
      type: "Adventure",
    },
    {
      id: 3,
      title: "City Explorer",
      destination: "Paris • Dubai • Singapore",
      duration: "6 Days",
      price: 44999,
      type: "City",
    },
    {
      id: 4,
      title: "Luxury Honeymoon",
      destination: "Maldives • Santorini",
      duration: "5 Days",
      price: 79999,
      type: "Luxury",
    },
    {
      id: 5,
      title: "Wildlife Safari",
      destination: "Kenya • South Africa",
      duration: "8 Days",
      price: 59999,
      type: "Adventure",
    },
    {
      id: 6,
      title: "European Delight",
      destination: "France • Italy • Switzerland",
      duration: "10 Days",
      price: 99999,
      type: "Luxury",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredPackages =
    filter === "All"
      ? packages
      : packages.filter((pkg) => pkg.type === filter);

  return (
    <>
      <Navbar />

      <section className="packages-page">
        <div className="packages-header">
          <h1>Travel Packages</h1>
          <p>
            Choose from our carefully crafted travel experiences.
          </p>
        </div>

        <div className="package-filter">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Packages</option>
            <option value="Beach">Beach</option>
            <option value="Adventure">Adventure</option>
            <option value="City">City</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>

        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div className="package-card" key={pkg.id}>
              <div className="package-badge">
                {pkg.type}
              </div>

              <h3>{pkg.title}</h3>

              <p>{pkg.destination}</p>

              <p>🗓 {pkg.duration}</p>

              
                <p>Hotel Included</p>
                <p>Meals Included</p>
                <p>Airport Pickup</p>
              

              <div className="package-bottom">
                <span>
                  ₹{pkg.price.toLocaleString()}
                </span>

                <button className="package-btn">
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Packages;