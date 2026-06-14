export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">
        Admin Dashboard
      </h1>
      
<p className="text-gray-500 mb-8">
  Manage events, bookings and users from one place.
</p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-lg font-semibold">
            Total Events
          </h2>
          <p className="text-4xl font-bold text-indigo-600 mt-2">
            12
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-lg font-semibold">
            Total Bookings
          </h2>
          <p className="text-4xl font-bold text-green-600 mt-2">
            156
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-lg font-semibold">
            Total Users
          </h2>
          <p className="text-4xl font-bold text-orange-500 mt-2">
            89
          </p>
        </div>
      </div>
    </div>
  );
}