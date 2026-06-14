export default function BookingsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Bookings
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 mb-4">
        <h2 className="text-xl font-bold">
          Tech Conference 2026
        </h2>

        <p>Quantity: 2</p>

        <p className="text-green-600 font-semibold">
          CONFIRMED
        </p>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
          Cancel Booking
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-bold">
          Music Festival
        </h2>

        <p>Quantity: 1</p>

        <p className="text-yellow-600 font-semibold">
          PENDING
        </p>

        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
          Cancel Booking
        </button>
      </div>
    </div>
  );
}