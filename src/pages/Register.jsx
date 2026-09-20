import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/api/events/${id}`;

    console.log("Fetching:", apiUrl);

    fetch(apiUrl)
      .then((response) => {
        console.log("Response status:", response.status);
        console.log("Response URL:", response.url);

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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  

  const price = event ? Number(event.price) : 0;
  const total = price * Number(quantity);

  const handleRegister = async () => {
  if (!name || !email) {
    alert("Please fill in your name and email.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

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

    const registration = await response.json();

    console.log("Registration saved:", registration);

    navigate("/my-events", {
      state: {
        message:
          "Registration successful! Your event has been added to My Events.",
      },
    });
  } catch (error) {
    console.error("Error registering for event:", error);
    alert("Registration failed. Please try again.");
  }
};

if (loading) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10 text-center">
      <p className="text-gray-600">Loading event...</p>
    </div>
  );
}
  if (!event) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Event Not Found</h1>

        <p className="mt-2 text-gray-600">We couldn't find this event.</p>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">Register for Event</h1>

      <p className="mt-2 text-gray-600">You are registering for: {event.title}</p>

      <p className="mt-2 font-medium text-blue-600">Ticket Price: {event.price}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Howard Schultz"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="name@example.com"
          />
        </div>

       <div className="mt-4">
  <label className="mb-2 block font-medium text-gray-700">
    Number of Tickets
  </label>

  <input
    type="number"
    min="1"
    value={quantity}
    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
<div className="mt-6 rounded-lg bg-gray-100 p-4">
  <p className="text-lg font-semibold text-gray-900">
    Total: GH₵{total}
  </p>
</div>


    <button
     type="button"
     onClick={handleRegister}
     className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
>
       Register for Event
    </button>
    </div>
    </div>
  );
}
export default Register;