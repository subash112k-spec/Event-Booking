export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl">
        <div className="mb-4">
          <label className="font-semibold">Name</label>
          <p>Subash</p>
        </div>

        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <p>subash@example.com</p>
        </div>

        <div className="mb-4">
          <label className="font-semibold">Role</label>
          <p>User</p>
        </div>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
}