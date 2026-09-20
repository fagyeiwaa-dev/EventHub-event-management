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

  const navigate = useNavigate();

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
      console.error("Error creating event:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
            EventHub
          </p>

          <h1 className="mt-2 text-4xl font-bold text-[#5C1329]">
            Create an Event
          </h1>

          <p className="mt-3 text-gray-600">
            Share your event and connect with people who want to attend.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
          {error && (
            <p className="mb-6 rounded-lg bg-red-50 px-4 py-3 text-red-600">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Event Title
              </label>

              <input
                id="title"
                type="text"
                placeholder="Enter event title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Category
              </label>

              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full rounded-lg border border-[#E8D5C4] bg-white px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              >
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                <option value="Business">Business</option>
                <option value="Sports">Sports</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="text"
                  placeholder="e.g. October 15, 2026"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Accra, Ghana"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Ticket Price
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-medium text-gray-500">
                  GH₵
                </span>

                <input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] py-3 pl-14 pr-4 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Event Image URL
              </label>

              <input
                id="image"
                type="url"
                placeholder="https://example.com/event-image.jpg"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              />

              <p className="mt-2 text-sm text-gray-500">
                Add a public image URL for your event.
              </p>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Event Description
              </label>

              <textarea
                id="description"
                rows="5"
                placeholder="Tell people about your event..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="w-full resize-none rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#7F1D3A] px-6 py-4 font-semibold text-white transition hover:bg-[#5C1329] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Event..." : "Create Event"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;