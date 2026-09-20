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

<p className="mt-4 text-gray-700">
  Date: {event.date}
</p>

<p className="text-gray-700">
  Location: {event.location}
</p>

<p className="mt-2 font-medium text-blue-600">
  Price: {event.price}
</p>

<p className="mt-4 text-gray-700">
  {event.description}
</p>

<Link
  to={`/events/${event.id}/register`}
  className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
>
  Register / Buy Ticket
</Link>

    </div>
  );
}

export default EventDetails;