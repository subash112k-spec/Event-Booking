"use client";

import { useState } from "react";
import BookingModal from "@/components/ui/BookingModal";
import Image from "next/image";
import { events } from "@/mock/events";
import { useParams } from "next/navigation";
import EventCard from "@/components/event/EventCard";
import toast from "react-hot-toast";

export default function EventDetails() {
const handleShare = async () => {
  await navigator.clipboard.writeText(window.location.href);
  toast.success("Event link copied!");
};

  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const event = events.find(
    (e) => e.id === Number(id)
  );

  if (!event) {
    return (
      <div className="text-center py-20">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <Image
          src={event.image}
          alt={event.title}
          width={1200}
          height={500}
          className="w-full h-[250px] md:h-[450px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-4">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
    Technology
  </span>

  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
    Available
  </span>
</div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">

  <div className="bg-gray-50 p-4 rounded-xl">
    <p className="text-sm text-gray-500">Location</p>
    <p className="font-semibold">📍 {event.location}</p>
  </div>

  <div className="bg-gray-50 p-4 rounded-xl">
    <p className="text-sm text-gray-500">Date</p>
    <p className="font-semibold">📅 {event.date}</p>
  </div>

  <div className="bg-gray-50 p-4 rounded-xl">
    <p className="text-sm text-gray-500">Seats Left</p>
    <p className="font-semibold">
      🎟️ {event.availableSeats}
    </p>
  </div>

</div>

          <p className="text-3xl font-bold text-indigo-600 mb-6">
            ₹{event.price}
          </p>

          <div className="mb-6">
  <p className="text-gray-500 text-sm">
    Organized By
  </p>

  <h3 className="font-semibold text-lg">
    EventBook Team
  </h3>
</div>

          <p className="text-gray-700 leading-8 mb-8 max-w-3xl">
            Join this amazing event and connect with
            professionals, students and enthusiasts.
            Learn from industry experts, build your
            network and gain valuable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-end">

            <div>
              <label className="block mb-2 font-medium">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                max="10"
                defaultValue="1"
                className="border rounded-lg p-3 w-28"
              />
            </div>
            

            <button onClick={() => {
  toast.success("Booking Successful 🎉");
}} className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition">
              Book Now
            </button>
            <button  onClick={handleShare} className="border px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Share Event
            </button>

          </div>
        </div>
      </div>
      <section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Related Events
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {events
      .filter((e) => e.id !== event.id)
      .slice(0, 3)
      .map((item) => (
        <EventCard
          key={item.id}
          event={item}
        />
      ))}
  </div>
</section>
      <BookingModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
/>
    </div>
    
  );
}