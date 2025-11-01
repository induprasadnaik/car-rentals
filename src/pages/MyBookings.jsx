import React, { useEffect, useState } from "react";
 import { Link, useNavigate, useLocation } from "react-router-dom";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );
 const navigate = useNavigate();
  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (loggedInUser) {
      // Show only this user's bookings
      const userBookings = allBookings.filter(
        (b) => b.userEmail === loggedInUser.email
      );
      setBookings(userBookings);
    }
  }, [loggedInUser]);

  if (!loggedInUser) {
    return (
      <div className="text-center mt-20 text-xl font-medium flex justify-center flex-col items-center">
        <h3>Please sign in to view your bookings.</h3>
        <button onClick={() => navigate("/signin")} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition max-w-2xs mt-3" >
                Sign In
              </button>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-12">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-4 shadow-md"
            >
              <h2 className="text-xl font-semibold mb-2">
                {b.car.brand} {b.car.model}
              </h2>
              <p>Pickup: {b.pickupDate}</p>
              <p>Return: {b.returnDate}</p>
              <p className="text-gray-500 mt-2">Total amount paid: ₹{b.totalAmount}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
