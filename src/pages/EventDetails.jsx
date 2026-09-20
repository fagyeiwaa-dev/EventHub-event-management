import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function EventDetails() {
  const { id } = useParams();
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 text-center">
      <p className="text-gray-600">Loading event...</p>
    </div>
  );
}

if (!event) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        Event Not Found
      </h1>

      <p className="mt-2 text-gray-600">
        Sorry, we couldn't find this event.
      </p>
    </div>
  );
}

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
  <Link
    to="/events"
    className="mb-6 inline-block text-blue-600 hover:underline"
  >
    ← Back to Events
  </Link>

  <img
  src={event.image}
  alt={event.title}
  className="mb-6 h-72 w-full rounded-lg object-cover"
/>
     <h1 className="text-4xl font-bold text-gray-900">
  {event.title}
</h1>

<p className="mt-2 text-gray-600">
  {event.category}
</p>

<div className="mt-6 grid gap-4 rounded-lg bg-gray-50 p-5 md:grid-cols-3">
  <div>
    <p className="text-sm font-medium text-gray-500">Date</p>
    <p className="mt-1 text-gray-800">{event.date}</p>
  </div>

  <div>
    <p className="text-sm font-medium text-gray-500">Location</p>
    <p className="mt-1 text-gray-800">{event.location}</p>
  </div>

  <div>
    <p className="text-sm font-medium text-gray-500">Price</p>
    <p className="mt-1 font-semibold text-blue-600">
      GH₵{event.price}
    </p>
  </div>
</div>
<div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-900">
    About This Event
  </h2>

  <p className="mt-3 leading-7 text-gray-700">
    {event.description}
  </p>
</div>

<Link
  to={`/events/${event.id}/register`}
  className="mt-8 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 md:w-fit"
>
  Register / Buy Ticket
</Link>

    </div>
  );
}

export default EventDetails;