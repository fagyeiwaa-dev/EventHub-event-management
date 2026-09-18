import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Welcome to EventHub
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Discover Events.
            <br />
            Create Experiences.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Find exciting events, connect with people, register for
            experiences, and create unforgettable moments with EventHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/events">
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
                Explore Events
              </button>
            </Link>

            <Link to="/create-event">
              <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Create an Event
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose EventHub */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why EventHub?
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Everything You Need for Your Next Event
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              EventHub makes it simple to discover events, manage your
              registrations, and keep track of the experiences that matter to
              you.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🎟️
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Easy Ticketing
              </h3>

              <p className="mt-3 text-gray-600">
                Register for events and purchase tickets through a simple and
                convenient process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Discover Events
              </h3>

              <p className="mt-3 text-gray-600">
                Find interesting events and explore experiences that match your
                interests.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                ❤️
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Save Favorites
              </h3>

              <p className="mt-3 text-gray-600">
                Save events you are interested in so you can easily find them
                later.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔔
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Event Reminders
              </h3>

              <p className="mt-3 text-gray-600">
                Stay informed with reminders about upcoming events you have
                registered for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Upcoming Events
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Featured Events
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600">
                Explore some of the exciting events happening soon.
              </p>
            </div>

            <Link to="/events">
              <button className="w-fit rounded-lg border border-blue-600 px-5 py-2.5 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                View All Events
              </button>
            </Link>
          </div>

          {/* Event Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event 1 - Tech4Girls */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                alt="Tech4Girls Conference"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-blue-600">
                  Technology
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Tech4Girls Conference
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  A technology event bringing together young people interested
                  in technology, innovation, and digital skills.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>📅 September 20, 2026</p>
                  <p>📍 Accra, Ghana</p>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
                  View Event
                </button>
              </div>
            </div>

            {/* Event 2 - Accra Music Festival */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
                alt="Accra Music Festival"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-purple-600">
                  Music
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Accra Music Festival
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  Enjoy live music, entertainment, and an exciting experience
                  with other music lovers.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>📅 September 25, 2026</p>
                  <p>📍 Accra, Ghana</p>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
                  View Event
                </button>
              </div>
            </div>

            {/* Event 3 - Business Networking */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Business Networking Night"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-green-600">
                  Business
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  Business Networking Night
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                  Connect with professionals, build relationships, and discover
                  new business opportunities.
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-600">
                  <p>📅 October 2, 2026</p>
                  <p>📍 Accra, Ghana</p>
                </div>

                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
                  View Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Your Next Experience Starts Here
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Ready to Experience Something Amazing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Discover exciting events, connect with people, and create
            unforgettable experiences with EventHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
              Explore Events
            </button>

            <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              Become an Organizer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
