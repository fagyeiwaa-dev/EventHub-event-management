import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Hero */}
      <section className="bg-[#7F1D3A] px-6 py-16 text-center text-white">
        <p className="font-semibold uppercase tracking-wider text-[#F5D9C8]">
          Get In Touch
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Contact EventHub
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#FCEFE6]">
          Have a question, suggestion, or feedback? We'd love to
          hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
              Let's Talk
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5C1329]">
              We're Here to Help
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Whether you have a question about an event, need help
              with registration, or simply want to share feedback,
              feel free to reach out.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="text-3xl">📧</div>

                <div>
                  <h3 className="font-bold text-[#5C1329]">
                    Email
                  </h3>

                  <p className="mt-1 text-gray-600">
                    support@eventhub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="text-3xl">📍</div>

                <div>
                  <h3 className="font-bold text-[#5C1329]">
                    Location
                  </h3>

                  <p className="mt-1 text-gray-600">
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="text-3xl">💬</div>

                <div>
                  <h3 className="font-bold text-[#5C1329]">
                    Support
                  </h3>

                  <p className="mt-1 text-gray-600">
                    We're happy to help with your EventHub
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <h2 className="text-2xl font-bold text-[#5C1329]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-600">
              Fill in the form below and we'll get back to you.
            </p>

            {submitted && (
              <div className="mt-5 rounded-lg border border-[#E8D5C4] bg-[#FCEFE6] px-4 py-3 font-medium text-[#7F1D3A]">
                Thank you! Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#7F1D3A] px-6 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;