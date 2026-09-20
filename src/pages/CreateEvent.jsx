import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

 const [description, setDescription] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const navigate = useNavigate();;
const handleSubmit = async (event) => {
  event.preventDefault();

  setLoading(true);
  setError("");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          category,
          date,
          location,
          price: Number(price),
          image,
          description,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create event");
    }

    const createdEvent = await response.json();

    console.log("Event created successfully:", createdEvent);
    navigate("/events");
  } catch (error) {
    setError("Failed to create event");
    console.error("Error creating event:", error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">
        Create an Event
      </h1>

      <p className="mt-2 text-gray-600">
        Create and publish your event on EventHub.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error && (
  <p className="rounded-lg bg-red-50 px-4 py-3 text-red-600">
    {error}
  </p>
)}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          >
            <option value="">Select category</option>
            <option value="Technology">Technology</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Date
          </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="e.g. October 15, 2026"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Accra, Ghana"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 50"
            min="0"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/event-image.jpg"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your event..."
            rows="5"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
            required
          />
        </div>

       <button
  type="submit"
  disabled={loading}
  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Creating Event..." : "Create Event"}
</button>
      </form>
    </div>
  );
}

export default CreateEvent;