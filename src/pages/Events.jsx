import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "" ||
      event.category.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const addToFavorites = (event) => {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === event.id
    );

    if (alreadyFavorite) {
      return;
    }

    const updatedFavorites = [...favorites, event];

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover Events
        </h1>

        <p className="mt-2 text-gray-600">
          Find events happening around you.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search for events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-80"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="py-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            No events found
          </h2>

          <p className="mt-2 text-gray-500">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <img
                src={event.image}
                alt={event.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />

              <h2 className="text-xl font-semibold text-gray-900">
                {event.title}
              </h2>

              <p className="text-sm text-gray-600">
                {event.category}
              </p>

              <p className="mt-2 text-gray-700">
                {event.date}
              </p>

              <p className="text-gray-700">
                {event.location}
              </p>

              <p className="mt-3 font-medium text-blue-600">
                GH₵{event.price}
              </p>

              <Link
                to={`/events/${event.id}`}
                className="mt-4 block w-full rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700"
              >
                View Details
              </Link>

              <button
                type="button"
                onClick={() => addToFavorites(event)}
                className="mt-2 w-full rounded-lg border border-red-500 px-4 py-2 font-medium text-red-500 hover:bg-red-50"
              >
                {favorites.some(
                  (favorite) => favorite.id === event.id
                )
                  ? "♥ Favorited"
                  : "♡ Add to Favorites"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;