import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/tourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetch("/tours.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedTour = data.find((item) => item.id === Number(id));

        setTour(selectedTour);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookedTours")) || [];

    const alreadyBooked = bookings.find((item) => item.id === tour.id);

    if (alreadyBooked) {
      alert("Tour already booked!");
      return;
    }

    bookings.push(tour);

    localStorage.setItem("bookedTours", JSON.stringify(bookings));

    alert(`${tour.title} booked successfully!`);
  };

  if (!tour) {
    return <h2>Loading Tour Details...</h2>;
  }

  return (
    <div className="tour-details">
      <div className="tour-image-section">
        <img src={tour.image} alt={tour.title} />
      </div>

      <div className="tour-info-section">
        <h1>{tour.title}</h1>

        <p className="location">
          📍 {tour.state}, {tour.country}
        </p>

        <p className="description">{tour.description}</p>

        <div className="tour-stats">
          <p>Duration: {tour.duration}</p>

          <p>Maximum Persons: {tour.persons || 15}</p>

          <p>
            {tour.rating || 4.8} ({tour.reviews || 250} Reviews)
          </p>

          <p>
            {tour.description ||
              "Experience an unforgettable journey with stunning destinations and premium travel services."}
          </p>
        </div>

        <h2>₹{tour.price.toLocaleString()}</h2>

        <button className="book-tour-btn" onClick={handleBooking}>
          Book This Tour
        </button>
      </div>
    </div>
  );
}

export default TourDetails;
