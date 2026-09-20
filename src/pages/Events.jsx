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
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
            EventHub
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#5C1329] md:text-5xl">
            Discover Events
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Find exciting events, connect with people, and create memorable
            experiences.
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search for events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8] md:w-80"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-[#E8D5C4] bg-white px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
            >
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Music">Music</option>
              <option value="Business">Business</option>
              <option value="Sports">Sports</option>
              <option value="Education">Education</option>
            </select>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-[#5C1329]">
              No events found
            </h2>

            <p className="mt-2 text-gray-500">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <span className="inline-block rounded-full bg-[#FCEFE6] px-3 py-1 text-sm font-medium text-[#7F1D3A]">
                    {event.category}
                  </span>

                  <h2 className="mt-3 text-xl font-bold text-[#5C1329]">
                    {event.title}
                  </h2>

                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>📅 {event.date}</p>
                    <p>📍 {event.location}</p>
                  </div>

                  <p className="mt-4 text-lg font-bold text-[#7F1D3A]">
                    GH₵{event.price}
                  </p>

                  <Link
                    to={`/events/${event.id}`}
                    className="mt-5 block w-full rounded-lg bg-[#7F1D3A] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#5C1329]"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    onClick={() => addToFavorites(event)}
                    className="mt-2 w-full rounded-lg border border-[#7F1D3A] px-4 py-3 font-semibold text-[#7F1D3A] transition hover:bg-[#FCEFE6]"
                  >
                    {favorites.some(
                      (favorite) => favorite.id === event.id
                    )
                      ? "♥ Favorited"
                      : "♡ Add to Favorites"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;