export default function BookingModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl">

        <h2 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Booking Successful
        </h2>

        <p className="text-gray-600 mb-6">
          Your ticket has been reserved successfully.
        </p>

        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Close
        </button>

      </div>
    </div>
  );
}