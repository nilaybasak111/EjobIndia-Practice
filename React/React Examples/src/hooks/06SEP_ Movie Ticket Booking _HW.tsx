import React, { useState } from "react";

interface SEP06MovieTicketBookingHWType {
  movieName: string;
  showTiming: string;
  ticketCategory: string;
  ticketQuantity: number;
  totalAmount: number;
}

interface ShowInventory {
  gold: number;
  silver: number;
}

interface MovieInventory {
  morning: ShowInventory;
  evening: ShowInventory;
  night: ShowInventory;
}

type DynamicTicketsLeft = Record<string, MovieInventory>;

// 1. The Master List of Movies (Define IDs and Display Names here)
const MOVIE_LIST = [
  { id: "EndGame", name: "Avengers : End Game" },
  { id: "InfinityWar", name: "Avengers : Infinity War" },
  { id: "AgeOfUltron", name: "Avengers : Age of Ultron" },
  { id: "CivilWar", name: "Avengers : Civil War" },
];

// 2. The starting ticket count for any new movie
const initialShowInventory: MovieInventory = {
  morning: { gold: 10, silver: 10 },
  evening: { gold: 10, silver: 10 },
  night: { gold: 10, silver: 10 },
};

const SEP06MovieTicketBookingHW = () => {
  const goldTicketPrice = 100;
  const silverTicketPrice = 50;

  const [ticketsLeft, setTicketsLeft] = useState<DynamicTicketsLeft>({});

  const [booking, setBooking] = useState<SEP06MovieTicketBookingHWType[]>([]);
  const [form, setForm] = useState<SEP06MovieTicketBookingHWType>({
    movieName: "",
    showTiming: "",
    ticketCategory: "",
    ticketQuantity: 0,
    totalAmount: 0,
  });

  const valueUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const val = name === "ticketQuantity" ? Number(value) : value;
    setForm({ ...form, [name]: val });
  };

  // Helper function to convert movie ID back to the display name
  const getMovieDisplayName = (id: string) => {
    const movie = MOVIE_LIST.find((m) => m.id === id);
    return movie ? movie.name : id;
  };

  const calculateTotal = () => {
    if (
      !form.movieName ||
      !form.showTiming ||
      !form.ticketCategory ||
      !form.ticketQuantity
    ) {
      alert("Please select all fields before booking.");
      return;
    }

    const movieID = form.movieName;
    const show = form.showTiming as keyof MovieInventory;
    const category = form.ticketCategory as keyof ShowInventory;

    const ticketPrice =
      form.ticketCategory === "gold" ? goldTicketPrice : silverTicketPrice;
    const totalAmount = form.ticketQuantity * ticketPrice;

    // --- Dynamic Inventory Management ---

    // Check the existing inventory for the movieID
    let currentMovieInventory = ticketsLeft[movieID];

    // If the movie's inventory hasn't been initialized yet, initialize it.
    if (!currentMovieInventory) {
      // Deep clone the initial structure to avoid shared references
      currentMovieInventory = JSON.parse(JSON.stringify(initialShowInventory));

      // OPTIMISTIC UPDATE: Add the new movie inventory to state
      setTicketsLeft((prev) => ({
        ...prev,
        [movieID]: currentMovieInventory,
      }));
    }

    // Check for ticket availability using the current or newly initialized inventory
    const availableTickets = currentMovieInventory[show][category];

    if (availableTickets < form.ticketQuantity) {
      alert(
        `Not enough ${category.toUpperCase()} tickets left for ${getMovieDisplayName(
          movieID
        )} - ${show} show. Available: ${availableTickets}`
      );
      return;
    }

    // DECREMENT: Update state with the reduced quantity
    setTicketsLeft((prev) => ({
      ...prev,
      [movieID]: {
        // Target the specific movie by ID
        ...prev[movieID],
        [show]: {
          // Target the specific show within that movie
          ...prev[movieID][show],
          [category]: prev[movieID][show][category] - form.ticketQuantity, // Decrement the category count
        },
      },
    }));

    // Save booking
    const newBooking = { ...form, totalAmount };
    setBooking([...booking, newBooking]);

    // Reset form
    setForm({
      movieName: "",
      showTiming: "",
      ticketCategory: "",
      ticketQuantity: 0,
      totalAmount: 0,
    });
  };

  return (
    <div className="container">
      <h1>🎬 Movie Ticket Booking</h1>

      <div className="card">
        <form>
          <label>Movie Name:</label>
          <select
            name="movieName"
            value={form.movieName}
            onChange={valueUpdate}
          >
            <option value="">Select Movie</option>
            {/* Dynamically populate movie options from MOVIE_LIST */}
            {MOVIE_LIST.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>

          <label>Show Time:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="showTiming"
                value="morning"
                checked={form.showTiming === "morning"}
                onChange={valueUpdate}
              />
              Morning
            </label>
            <label>
              <input
                type="radio"
                name="showTiming"
                value="evening"
                checked={form.showTiming === "evening"}
                onChange={valueUpdate}
              />
              Evening
            </label>
            <label>
              <input
                type="radio"
                name="showTiming"
                value="night"
                checked={form.showTiming === "night"}
                onChange={valueUpdate}
              />
              Night
            </label>
          </div>

          <label>Ticket Category:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="ticketCategory"
                value="silver"
                checked={form.ticketCategory === "silver"}
                onChange={valueUpdate}
              />
              Silver (₹{silverTicketPrice})
            </label>
            <label>
              <input
                type="radio"
                name="ticketCategory"
                value="gold"
                checked={form.ticketCategory === "gold"}
                onChange={valueUpdate}
              />
              Gold (₹{goldTicketPrice})
            </label>
          </div>

          <label>Ticket Quantity:</label>
          <select
            name="ticketQuantity"
            value={form.ticketQuantity}
            onChange={valueUpdate}
          >
            <option value={0}>Select Quantity</option>
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          <button type="button" onClick={calculateTotal}>
            Book Ticket
          </button>
        </form>
      </div>

      <hr />

      <h2>🎟️ Booking Details</h2>
      {booking.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Show</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((item, index) => (
              <tr key={index}>
                {/* Use helper to display full name */}
                <td>{getMovieDisplayName(item.movieName)}</td>
                <td>{item.showTiming}</td>
                <td>{item.ticketCategory}</td>
                <td>{item.ticketQuantity}</td>
                <td>{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings yet.</p>
      )}

      <hr />

      {/* --- Dynamic Available Tickets Display --- */}
      <h2>🎫 Available Tickets (Per Movie)</h2>
      {Object.entries(ticketsLeft).length > 0 ? (
        // Iterate over ONLY the movies that have been booked/initialized
        Object.entries(ticketsLeft).map(([movieID, movieInventory]) => (
          <div
            key={movieID}
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {/* Use helper to display full name */}
            <h3>**{getMovieDisplayName(movieID)}** Inventory</h3>
            <table className="table movie-inventory-table">
              <thead>
                <tr>
                  <th>Show</th>
                  <th>Gold Left</th>
                  <th>Silver Left</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(movieInventory).map(([show, count]) => (
                  <tr key={show}>
                    <td>{show.charAt(0).toUpperCase() + show.slice(1)}</td>
                    <td style={{ color: count.gold < 3 ? "red" : "inherit" }}>
                      {count.gold}
                    </td>
                    <td style={{ color: count.silver < 3 ? "red" : "inherit" }}>
                      {count.silver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>
          Available tickets will show up here after the first booking for a
          movie is made.
        </p>
      )}

      {/* --- CSS Styles --- */}
      <style>{`
        .container {
          max-width: 700px;
          margin: 40px auto;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }
        h1, h2, h3 {
          text-align: center;
          color: #333;
          margin-bottom: 10px;
        }
        .card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        label {
          font-weight: 600;
          color: #444;
        }
        select, input[type="text"], button {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 15px;
        }
        .radio-group {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .radio-group label {
            font-weight: normal;
        }
        button {
          background-color: #007bff;
          color: white;
          cursor: pointer;
          transition: 0.3s;
          font-weight: bold;
        }
        button:hover {
          background-color: #0056b3;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          text-align: center;
        }
        .table th, .table td {
          border: 1px solid #ccc;
          padding: 8px;
        }
        .table th {
          background-color: #007bff;
          color: white;
        }
        .table.movie-inventory-table th {
            background-color: #6c757d;
        }
        .table tr:nth-child(even) {
          background: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default SEP06MovieTicketBookingHW;
