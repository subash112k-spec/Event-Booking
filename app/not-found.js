import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-indigo-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}