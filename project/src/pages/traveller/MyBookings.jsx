function MyBookings() {
  // Dummy booking data
  const bookings = [
    {
      id: "BN001",
      storageName: "Green Leaf Cafe",
      location: "Jaffna Town",
      date: "30 September 2026",
      time: "10:00 AM - 2:00 PM",
      bags: 2,
      totalPrice: 1000,
      status: "Confirmed",
    },

    {
      id: "BN002",
      storageName: "Jaffna City Hotel",
      location: "Jaffna",
      date: "2 October 2026",
      time: "9:00 AM - 5:00 PM",
      bags: 1,
      totalPrice: 750,
      status: "Confirmed",
    },

    {
      id: "BN003",
      storageName: "Travel Hub",
      location: "Nallur",
      date: "5 October 2026",
      time: "11:00 AM - 3:00 PM",
      bags: 3,
      totalPrice: 1200,
      status: "Completed",
    },
  ];

  return (
    <div className="page-section py-5">

      <div className="container">

        {/* Page heading */}
        <h1 className="page-title">
          My Bookings
        </h1>

        <p className="page-description">
          View and manage your luggage storage bookings.
        </p>

        {/* Booking cards */}
        <div className="row mt-4">

          {bookings.map((booking) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={booking.id}
            >

              <div className="bag-card p-4">

                {/* Booking ID and status */}
                <div className="d-flex justify-content-between align-items-start mb-3">

                  <h5 className="fw-bold mb-0">
                    Booking #{booking.id}
                  </h5>

                  <span className="badge text-bg-success">
                    {booking.status}
                  </span>

                </div>

                {/* Storage name */}
                <h4 className="mb-2">
                  {booking.storageName}
                </h4>

                {/* Location */}
                <p className="text-muted mb-3">
                  {booking.location}
                </p>

                {/* Booking details */}
                <p className="mb-2">
                  <strong>Date:</strong>{" "}
                  {booking.date}
                </p>

                <p className="mb-2">
                  <strong>Time:</strong>{" "}
                  {booking.time}
                </p>

                <p className="mb-2">
                  <strong>Bags:</strong>{" "}
                  {booking.bags}
                </p>

                <p className="mb-4">
                  <strong>Total:</strong>{" "}
                  LKR {booking.totalPrice}
                </p>

                {/* Button */}
                <button
                  type="button"
                  className="btn btn-primary-custom"
                >
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default MyBookings;