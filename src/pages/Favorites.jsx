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
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">
        My Favorite Events
      </h1>

      <p className="mt-2 text-gray-600">
        Events you have saved will appear here.
      </p>

      <div className="mt-8 space-y-4">
        {favorites.map((event) => (
          <div
            key={event.id}
            className="rounded-lg border border-gray-200 p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {event.title}
            </h2>

            <p className="mt-1 text-gray-600">
              {event.date} · {event.location}
            </p>

            <p className="mt-2 font-medium text-blue-600">
              {event.price}
            </p>

            <button
              type="button"
              onClick={() => removeFromFavorites(event.id)}
              className="mt-4 rounded-lg border border-red-500 px-4 py-2 font-medium text-red-500 hover:bg-red-50"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;