import EventCard from "@/components/event/EventCard";
import { events } from "@/mock/events";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-slate-900 dark:to-slate-800 text-white">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl">
      <p className="uppercase tracking-widest mb-2">
        Event Booking Platform
      </p>
      <small className="text-gray-200">Trusted by Event Lovers Across India</small>

      <h1 className="text-4xl md:text-7xl font-bold leading-tight mt-4">
        Discover & Book
        Amazing Events
      </h1>

      <p className="mt-6 text-lg md:text-xl text-white/90">
        Find conferences, workshops, concerts and
        networking events happening around you.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
          Explore Events
        </button>

        <button className="border border-white px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-gray-50 dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">
          10K+
        </h3>
        <p className="text-gray-600 mt-2">
          Users
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">
          500+
        </h3>
        <p className="text-gray-600 mt-2">
          Events
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">
          50+
        </h3>
        <p className="text-gray-600 mt-2">
          Cities
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-indigo-600">
          99%
        </h3>
        <p className="text-gray-600 mt-2">
          Satisfaction
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-20">
  <div className="container mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-4">
      Why Choose EventBook?
    </h2>

    <p className="text-center text-gray-500 mb-12">
      Fast, secure and trusted event booking platform.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-xl font-bold mb-3">
          Fast Booking
        </h3>
        <p className="text-gray-600">
          Book your favorite events in seconds.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h3 className="text-xl font-bold mb-3">
          Secure Platform
        </h3>
        <p className="text-gray-600">
          Safe and secure booking experience.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold mb-3">
          Premium Events
        </h3>
        <p className="text-gray-600">
          Discover top events happening near you.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Events
          </h2>
          <p className="text-center text-gray-500 mb-12">
  Explore trending events happening near you.
</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {events.map((event) => (
    <EventCard
      key={event.id}
      event={event}
    />
  ))}
           
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-12">
      What Our Users Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-gray-600">
          Amazing platform. Booking was super easy.
        </p>

        <h4 className="font-bold mt-4">
          — Rahul
        </h4>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-gray-600">
          Found great tech events through EventBook.
        </p>

        <h4 className="font-bold mt-4">
          — Priya
        </h4>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <p className="text-gray-600">
          Smooth experience and modern UI.
        </p>

        <h4 className="font-bold mt-4">
          — Karthik
        </h4>
      </div>

    </div>

  </div>
</section>

<section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
  <div className="container mx-auto px-4 text-center">

    <h2 className="text-4xl font-bold mb-4">
      Ready to Join Your Next Event?
    </h2>

    <p className="text-lg mb-8">
      Discover amazing events and book your seat today.
    </p>

    <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
      Explore Events
    </button>

  </div>
</section>
    </main>
  );
}