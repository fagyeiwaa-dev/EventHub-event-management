function About() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Hero */}
      <section className="bg-[#7F1D3A] px-6 py-20 text-center text-white">
        <p className="font-semibold uppercase tracking-wider text-[#F5D9C8]">
          About EventHub
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Connecting People Through Events
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#FCEFE6]">
          EventHub makes it easier to discover exciting events,
          connect with people, and create memorable experiences.
        </p>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5C1329]">
              Your Event Discovery Platform
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              EventHub is an event management platform designed to
              help people discover and participate in events that
              interest them.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From technology conferences and business networking
              events to music festivals and educational programs,
              EventHub brings different experiences together in one
              place.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="rounded-xl bg-[#FCEFE6] p-8 text-center">
              <div className="text-5xl">🎟️</div>

              <h3 className="mt-4 text-2xl font-bold text-[#5C1329]">
                Discover. Connect. Experience.
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Find something exciting and make your next event
                experience memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5C1329]">
              Everything You Need for Your Next Event
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF8E7] p-7">
              <div className="text-4xl">🔎</div>

              <h3 className="mt-4 text-xl font-bold text-[#5C1329]">
                Discover Events
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Search and explore events based on your interests
                and preferred categories.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8E7] p-7">
              <div className="text-4xl">❤️</div>

              <h3 className="mt-4 text-xl font-bold text-[#5C1329]">
                Save Favorites
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keep your favorite events in one place so you can
                easily find them later.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FFF8E7] p-7">
              <div className="text-4xl">🎫</div>

              <h3 className="mt-4 text-xl font-bold text-[#5C1329]">
                Register Easily
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Register for events and keep track of your
                registrations through My Events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#7F1D3A] px-8 py-12 text-center text-white shadow-lg">
          <p className="font-semibold uppercase tracking-wider text-[#F5D9C8]">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Making Event Discovery Simple
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#FCEFE6]">
            Our goal is to create a simple and enjoyable platform
            where people can discover events, connect with others,
            and take part in experiences that matter to them.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;