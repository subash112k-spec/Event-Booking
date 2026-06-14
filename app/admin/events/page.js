"use client";

import { useState } from "react";
import DeleteModal from "@/components/ui/DeleteModal";
import Link from "next/link";

export default function AdminEventsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Manage Events
      </h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-4">Tech Conference 2026</td>
              <td className="p-4">15 July 2026</td>
              <td className="p-4 text-green-600">
                Published
              </td>
              <td className="p-4">
             <Link
  href="/admin/edit-event/1"
  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
>
  Edit
</Link>

                <button onClick={() => setShowModal(true)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>

            <tr className="border-t">
              <td className="p-4">Music Festival</td>
              <td className="p-4">20 August 2026</td>
              <td className="p-4 text-yellow-600">
                Draft
              </td>
              <td className="p-4">
                <Link
  href="/admin/edit-event/1"
  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
>
  Edit
</Link>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <DeleteModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onDelete={() => {
    alert("Event Deleted");
    setShowModal(false);
  }}
/>
    </div>
  );
}