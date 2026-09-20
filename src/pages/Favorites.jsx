import { Link } from "react-router-dom";
import { useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter(
      (event) => event.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
            EventHub
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#5C1329]">
            My Favorites
          </h1>

          <p className="mt-3 text-gray-600">
            Keep track of the events you don't want to miss.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">♡</div>

            <h2 className="mt-4 text-2xl font-bold text-[#5C1329]">
              No Favorites Yet
            </h2>

            <p className="mt-3 text-gray-600">
              Start exploring events and add your favorites here.
            </p>

            <Link
              to="/events"
              className="mt-6 inline-block rounded-lg bg-[#7F1D3A] px-6 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Explore Events
            </Link>
          </div>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {favorites.map((event) => (
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
                    onClick={() => removeFromFavorites(event.id)}
                    className="mt-2 w-full rounded-lg border border-[#7F1D3A] px-4 py-3 font-semibold text-[#7F1D3A] transition hover:bg-[#FCEFE6]"
                  >
                    ♥ Remove from Favorites
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

export default Favorites;