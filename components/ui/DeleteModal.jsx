export default function DeleteModal({
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md">

        <h2 className="text-2xl font-bold mb-4">
          Delete Event
        </h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this event?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}