export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">
  <div className="container mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h2 className="text-2xl font-bold text-indigo-400">
          EventBook
        </h2>

        <p className="text-gray-400 mt-3">
          Discover and book amazing events
          happening around you.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>Home</li>
          <li>Events</li>
          <li>Bookings</li>
          <li>Profile</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4">
          Contact
        </h3>

        <ul className="space-y-2 text-gray-400">
          <li>support@eventbook.com</li>
          <li>+91 9876543210</li>
          <li>Hosur, Tamil Nadu</li>
        </ul>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">
      © 2026 EventBook. All Rights Reserved.
    </div>
  </div>
</footer>
  );
}