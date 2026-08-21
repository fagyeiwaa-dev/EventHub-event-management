
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Have a question, feedback, or need support? Send us a message and
            we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Let's Start a Conversation
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Whether you are looking for information about an event or need
              help using EventHub, our team is ready to assist you.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="mt-1 text-gray-600">
                  support@eventhub.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="mt-1 text-gray-600">
                  +233 53 259 9652
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="mt-1 text-gray-600">
                  Accra, Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="text-center text-sm font-medium text-green-600">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Contact;