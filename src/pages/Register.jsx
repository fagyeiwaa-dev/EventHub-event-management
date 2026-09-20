import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`)
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
        setError("Unable to load this event.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const total = event ? Number(event.price) * Number(quantity) : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("Please enter your name and email.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_id: event.id,
            name,
            email,
            quantity: Number(quantity),
            total,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      navigate("/my-events", {
        state: {
          message:
            "Registration successful! Your event has been added to My Events.",
        },
      });
    } catch (error) {
      console.error("Error registering for event:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
      <div className="mx-auto max-w-5xl">
        <Link
          to={`/events/${event.id}`}
          className="mb-6 inline-block font-medium text-[#7F1D3A] hover:underline"
        >
          ← Back to Event
        </Link>

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
          <div className="bg-[#7F1D3A] p-8 text-white md:p-10">
            <span className="inline-block rounded-full bg-[#FCEFE6] px-4 py-2 text-sm font-semibold text-[#7F1D3A]">
              {event.category}
            </span>

            <h1 className="mt-6 text-3xl font-bold md:text-4xl">
              {event.title}
            </h1>

            <div className="mt-8 space-y-4 text-[#FCEFE6]">
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
              <p>
                🎟️ Ticket Price:{" "}
                <span className="font-bold text-white">
                  GH₵{event.price}
                </span>
              </p>
            </div>

            <div className="mt-10 rounded-xl bg-[#5C1329] p-5">
              <p className="text-sm text-[#FCEFE6]">
                Your total
              </p>

              <p className="mt-1 text-3xl font-bold">
                GH₵{total.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#5C1329]">
              Register for this Event
            </h2>

            <p className="mt-2 text-gray-600">
              Enter your details to reserve your ticket.
            </p>

            {error && (
              <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-red-600">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Number of Tickets
                </label>

                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div className="rounded-xl bg-[#FFF8E7] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    {quantity} ticket{Number(quantity) !== 1 ? "s" : ""}
                  </span>

                  <span className="text-xl font-bold text-[#7F1D3A]">
                    GH₵{total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-[#7F1D3A] px-6 py-4 font-semibold text-white transition hover:bg-[#5C1329] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Registering..." : "Confirm Registration"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;