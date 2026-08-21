function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            About EventHub
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Bringing People and Experiences Together
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            EventHub is an event management and ticketing platform designed
            to make discovering, creating, and managing events easier.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Events Should Be Easy to Discover and Manage
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Finding exciting events and managing event registrations can
              sometimes be difficult. EventHub aims to bring everything into
              one platform where users can discover events, register for
              experiences, and keep track of upcoming activities.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Event organizers can also use EventHub to create events,
              manage attendees, and monitor registrations more easily.
            </p>
          </div>

          <div className="flex min-h-80 items-center justify-center rounded-2xl bg-blue-100 text-8xl">
            🎉
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🎯</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              To make discovering, attending, and managing events simple,
              convenient, and accessible for everyone.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="text-4xl">🚀</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              To become a trusted digital platform that connects people to
              meaningful events and helps organizers create better
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Who We Serve
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Built for Event Attendees and Organizers
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-8 text-left">
              <div className="text-4xl">👤</div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                Event Attendees
              </h3>

              <p className="mt-4 text-gray-600">
                Discover interesting events, register for experiences,
                purchase tickets, save favourites, and receive reminders.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 text-left">
              <div className="text-4xl">🧑‍💼</div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                Event Organizers
              </h3>

              <p className="mt-4 text-gray-600">
                Create events, manage event information, track registrations,
                and organize attendee details from one platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;