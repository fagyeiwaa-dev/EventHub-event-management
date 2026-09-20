import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MyEvents() {
  const location = useLocation();
  const message = location.state?.message;

  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/registrations`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch registrations");
        }

        return response.json();
      })
      .then((data) => {
        setRegistrations(data);
      })
      .catch((error) => {
        console.error("Error fetching registrations:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
            EventHub
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#5C1329]">
            My Events
          </h1>

          <p className="mt-3 text-gray-600">
            View the events you have registered for.
          </p>
        </div>

        {message && (
          <div className="mb-8 rounded-xl border border-[#E8D5C4] bg-[#FCEFE6] px-5 py-4 text-center font-medium text-[#7F1D3A]">
            {message}
          </div>
        )}

        {registrations.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#5C1329]">
              No Registered Events
            </h2>

            <p className="mt-3 text-gray-600">
              You haven't registered for any events yet.
            </p>

            <Link
              to="/events"
              className="mt-6 inline-block rounded-lg bg-[#7F1D3A] px-6 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Explore Events
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {registrations.map((registration) => (
              <div
                key={registration.id}
                className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-[#FCEFE6] px-3 py-1 text-sm font-semibold text-[#7F1D3A]">
                      Registered
                    </span>

                    <h2 className="mt-3 text-2xl font-bold text-[#5C1329]">
                      {registration.event_title}
                    </h2>

                    <div className="mt-4 space-y-2 text-gray-600">
                      <p>📅 {registration.date}</p>
                      <p>📍 {registration.location}</p>
                      <p>🎟️ Tickets: {registration.quantity}</p>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm font-medium text-gray-500">
                      Total Paid
                    </p>

                    <p className="mt-1 text-2xl font-bold text-[#7F1D3A]">
                      GH₵{Number(registration.total).toFixed(2)}
                    </p>

                    <Link
                      to={`/events/${registration.event_id}`}
                      className="mt-4 inline-block rounded-lg bg-[#7F1D3A] px-5 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
                    >
                      View Event
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/events"
            className="font-semibold text-[#7F1D3A] hover:underline"
          >
            ← Browse More Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;