import { Link, useLocation } from "react-router-dom";
import { useState } from "react";


function MyEvents() {
    const location = useLocation();
    const message = location.state?.message;  
    const [registrations] = useState(() => {
    const savedRegistrations = localStorage.getItem("registrations");

  return savedRegistrations
    ? JSON.parse(savedRegistrations)
    : [];
});
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">
        My Events
      </h1>

      <p className="mt-2 text-gray-600">
        Events you have registered for will appear here.
      </p>
      
      {message && (
  <div className="mt-4 rounded-lg bg-green-100 p-4 text-green-800">
    {message}
  </div>
)}

      <div className="mt-8">
  {registrations.length === 0 ? (
    <div className="rounded-lg border border-gray-200 p-6 text-center">
      <h2 className="text-xl font-semibold text-gray-900">
        No Registered Events
      </h2>

      <p className="mt-2 text-gray-600">
        You haven't registered for any events yet.
      </p>
    </div>
  ) : (
    <div className="space-y-4">
      {registrations.map((registration, index) => (
        <div
         key={registration.id}
          className="rounded-lg border border-gray-200 p-5 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            {registration.eventTitle}
          </h2>

          <p className="mt-2 text-gray-600">
            {registration.date} · {registration.location}
          </p>

          <p className="mt-2 text-gray-700">
            Tickets: {registration.quantity}
          </p>

          <p className="mt-2 font-medium text-blue-600">
            Total: GH₵{registration.total}
          </p>
          <Link
  to={`/events/${registration.eventId}`}
  className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
>
  View Event
</Link>
        </div>
      ))}
    </div>
  )}
</div>
    </div>
  );
}

export default MyEvents;