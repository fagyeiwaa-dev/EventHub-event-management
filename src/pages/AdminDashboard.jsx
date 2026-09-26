import { useEffect, useState } from "react";

function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/registrations", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRegistrations(data);
      })
      .catch((error) => {
        console.error("Error fetching registrations:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7] p-6">
      <h1 className="text-3xl font-bold text-[#5C1329]">
        EventHub Admin Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your events and monitor registrations.
      </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">Registrations</p>
    <h2 className="text-3xl font-bold text-[#5C1329] mt-2">
      {registrations.length}
    </h2>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">Tickets Sold</p>
    <h2 className="text-3xl font-bold text-[#5C1329] mt-2">
      {registrations.reduce(
        (total, registration) => total + Number(registration.quantity),
        0
      )}
    </h2>
  </div>

  <div className="bg-white rounded-xl shadow p-6">
    <p className="text-gray-500">Revenue</p>
    <h2 className="text-3xl font-bold text-[#5C1329] mt-2">
      GH₵
      {registrations
        .reduce(
          (total, registration) => total + Number(registration.total),
          0
        )
        .toFixed(2)}
    </h2>
  </div>

</div>
<div className="mt-10">
  <h2 className="text-2xl font-bold text-[#5C1329] mb-4">
    Recent Registrations
  </h2>

  <div className="bg-white rounded-xl shadow overflow-x-auto">
    <table className="w-full">
      <thead className="bg-[#5C1329] text-white">
        <tr>
          <th className="p-4 text-left">Name</th>
          <th className="p-4 text-left">Email</th>
          <th className="p-4 text-left">Event</th>
          <th className="p-4 text-left">Tickets</th>
          <th className="p-4 text-left">Total</th>
          <th className="p-4 text-left">Ticket Number</th>
        </tr>
      </thead>

      <tbody>
        {registrations.map((registration) => (
          <tr key={registration.id} className="border-b">
            <td className="p-4">{registration.name}</td>
            <td className="p-4">{registration.email}</td>
            <td className="p-4">{registration.event_title}</td>
            <td className="p-4">{registration.quantity}</td>
            <td className="p-4">
              GH₵{Number(registration.total).toFixed(2)}
            </td>
            <td className="p-4">{registration.ticket_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    </div>
  );
}

export default AdminDashboard;