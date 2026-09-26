import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRegister = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    navigate("/login", {
      state: {
        from: `/events/${event.id}/register`,
      },
    });

    return;
  }

  navigate(`/events/${event.id}/register`);
};

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/events/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Event not found");
        }

        return response.json();
      })
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.error("Error fetching event:", error);
        navigate("/events");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] px-6 py-16 text-center">
        <p className="text-[#7F1D3A]">Loading event...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#5C1329]">
          Event Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          Sorry, we couldn't find this event.
        </p>

        <Link
          to="/events"
          className="mt-6 inline-block rounded-lg bg-[#7F1D3A] px-6 py-3 font-semibold text-white hover:bg-[#5C1329]"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/events"
          className="mb-6 inline-block font-medium text-[#7F1D3A] hover:underline"
        >
          ← Back to Events
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            className="h-72 w-full object-cover md:h-96"
          />

          <div className="p-6 md:p-10">
            <span className="inline-block rounded-full bg-[#FCEFE6] px-4 py-2 text-sm font-semibold text-[#7F1D3A]">
              {event.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold text-[#5C1329] md:text-5xl">
              {event.title}
            </h1>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-[#FFF8E7] p-5">
                <p className="text-sm font-medium text-gray-500">
                  Date
                </p>

                <p className="mt-2 font-semibold text-[#5C1329]">
                  📅 {event.date}
                </p>
              </div>

              <div className="rounded-xl bg-[#FFF8E7] p-5">
                <p className="text-sm font-medium text-gray-500">
                  Location
                </p>

                <p className="mt-2 font-semibold text-[#5C1329]">
                  📍 {event.location}
                </p>
              </div>

              <div className="rounded-xl bg-[#FCEFE6] p-5">
                <p className="text-sm font-medium text-gray-500">
                  Price
                </p>

                <p className="mt-2 text-xl font-bold text-[#7F1D3A]">
                  GH₵{event.price}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#5C1329]">
                About This Event
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                {event.description}
              </p>
            </div>

            <div className="mt-10 border-t border-[#E8D5C4] pt-8">
              <h2 className="text-2xl font-bold text-[#5C1329]">
                Ready to Join?
              </h2>

              <p className="mt-2 text-gray-600">
                Secure your spot and be part of this event.
              </p>

              <button
                onClick={handleRegister}
                className="mt-6 inline-block w-full rounded-lg bg-[#7F1D3A] px-6 py-4 text-center font-semibold text-white transition hover:bg-[#5C1329] md:w-auto"
              >
                Register / Buy Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;