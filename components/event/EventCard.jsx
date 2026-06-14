import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Event Image */}
      <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">
          <img
  src={event.image}
  alt={event.title}
  className="w-[500px] h-48 object-cover"
/>
        </span>
      </div>

      <div className="p-6">

        {/* Badge */}
        <span className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Featured
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
          {event.title}
        </h3>

        {/* Location */}
        <p className="text-gray-600 mb-2 dark:text-gray-300">
          📍 {event.location}
        </p>

        {/* Date */}
        <p className="text-gray-600 mb-2">
          📅 {event.date}
        </p>

        {/* Seats */}
        <p className="text-gray-500 text-sm mb-4">
          🎟 Seats Left: {event.availableSeats}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-indigo-600">
            ₹{event.price}
          </p>

          <Link
            href={`/events/${event.id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}