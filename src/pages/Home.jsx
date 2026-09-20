import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#7F1D3A] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F5D9C8]">
            Welcome to EventHub
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Discover Events.
            <br />
            Create Experiences.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#FCEFE6]">
            Find exciting events, connect with people, register for
            experiences, and create unforgettable moments with EventHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/events"
              className="rounded-lg bg-[#FFF8E7] px-6 py-3 font-semibold text-[#7F1D3A] transition hover:bg-[#F5E6D3]"
            >
              Explore Events
            </Link>

            <Link
              to="/create-event"
              className="rounded-lg border border-[#FFF8E7] px-6 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Create an Event
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose EventHub */}
      <section className="bg-[#FFF8E7] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7F1D3A]">
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
            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5D9C8] text-2xl">
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

            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5D9C8] text-2xl">
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

            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5D9C8] text-2xl">
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

            <div className="rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5D9C8] text-2xl">
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
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#7F1D3A]">
                Upcoming Events
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                Featured Events
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600">
                Explore some of the exciting events happening soon.
              </p>
            </div>

            <Link
              to="/events"
              className="w-fit rounded-lg border border-[#7F1D3A] px-5 py-2.5 font-semibold text-[#7F1D3A] transition hover:bg-[#7F1D3A] hover:text-white"
            >
              View All Events
            </Link>
          </div>

          {/* Event Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event 1 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                alt="Tech4Girls Conference"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-[#7F1D3A]">
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

                <Link
                  to="/events/1"
                  className="mt-6 block w-full rounded-lg bg-[#7F1D3A] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#5C1329]"
                >
                  View Event
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
                alt="Accra Music Festival"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-[#7F1D3A]">
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

                <Link
                  to="/events/2"
                  className="mt-6 block w-full rounded-lg bg-[#7F1D3A] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#5C1329]"
                >
                  View Event
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                alt="Business Networking Night"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-[#7F1D3A]">
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

                <Link
                  to="/events/3"
                  className="mt-6 block w-full rounded-lg bg-[#7F1D3A] px-4 py-3 text-center font-semibold text-white transition hover:bg-[#5C1329]"
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#7F1D3A] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#F5D9C8]">
            Your Next Experience Starts Here
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Ready to Experience Something Amazing?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#FCEFE6]">
            Discover exciting events, connect with people, and create
            unforgettable experiences with EventHub.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/events"
              className="rounded-lg bg-[#FFF8E7] px-6 py-3 font-semibold text-[#7F1D3A] transition hover:bg-[#F5E6D3]"
            >
              Explore Events
            </Link>

            <Link
              to="/create-event"
              className="rounded-lg border border-[#FFF8E7] px-6 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Become an Organizer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;