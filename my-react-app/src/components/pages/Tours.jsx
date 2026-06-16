import React, { useEffect, useState } from "react";
import "../../styles/tours.css";
import Navbar from "./Navbar";

function Tours() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedState, setSelectedState] = useState("All");

  useEffect(() => {
    fetch("/tours.json")
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setFilteredTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...tours];

    if (selectedCountry !== "All") {
      filtered = filtered.filter((tour) => tour.country === selectedCountry);
    }

    if (selectedState !== "All") {
      filtered = filtered.filter((tour) => tour.state === selectedState);
    }

    if (searchTerm) {
      filtered = filtered.filter((tour) =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredTours(filtered);
  }, [searchTerm, selectedCountry, selectedState, tours]);

  const countries = ["All", ...new Set(tours.map((tour) => tour.country))];

  const states = [
    "All",
    ...new Set(
      tours
        .filter(
          (tour) =>
            selectedCountry === "All" || tour.country === selectedCountry,
        )
        .map((tour) => tour.state),
    ),
  ];

  return (
    <>
    <Navbar/>
    <section className="tours-page">
      <div className="tours-header">
        <h1>Explore Our Tours</h1>
        <p>Discover breathtaking destinations around the world.</p>
      </div>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search Tours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState("All");
          }}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <h2 className="loading">Loading Tours...</h2>
      ) : (
        <div className="tour-grid">
          {filteredTours.map((tour) => (
            <div className="tour-card" key={tour.id}>
              <img src={tour.image} alt={tour.title} />

              <div className="tour-info">
                <h3>{tour.title}</h3>

                <p>
                   {tour.state}, {tour.country}
                </p>

                <p>{tour.duration}</p>

                <div className="tour-bottom">
                  <span>₹{tour.price.toLocaleString()}</span>

                  <button className = "book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
    </>
  );
}

export default Tours;
