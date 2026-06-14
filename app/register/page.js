export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form className="space-y-4">
             <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}