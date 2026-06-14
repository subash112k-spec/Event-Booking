export default function EditEventPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Edit Event
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl">
        <form className="space-y-5">

          <div>
            <label className="block mb-2 font-semibold">
              Event Title
            </label>
            <input
              type="text"
              defaultValue="Tech Conference 2026"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>
            <textarea
              rows="4"
              defaultValue="Join this amazing event and connect with professionals."
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Date
            </label>
            <input
              type="date"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Location
            </label>
            <input
              type="text"
              defaultValue="Chennai"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Price
            </label>
            <input
              type="number"
              defaultValue="999"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Total Seats
            </label>
            <input
              type="number"
              defaultValue="150"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
          >
            Update Event
          </button>

        </form>
      </div>
    </div>
  );
}