"use client";

import { useState } from "react";
import EventCard from "@/components/event/EventCard";
import { events } from "@/mock/events";

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [priceFilter, setPriceFilter] = useState("All Prices");
  const [sortBy, setSortBy] = useState("Default");

const filteredEvents = events.filter((event) => {
  const matchesSearch = event.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesLocation =
    location === "All Locations" ||
    event.location === location;

  const matchesPrice =
    priceFilter === "All Prices" ||
    (priceFilter === "Under ₹500" &&
      event.price < 500) ||
    (priceFilter === "Under ₹1000" &&
      event.price < 1000) ||
    (priceFilter === "Above ₹1000" &&
      event.price >= 1000);

  return (
    matchesSearch &&
    matchesLocation &&
    matchesPrice
  );
});

const sortedEvents = [...filteredEvents];

if (sortBy === "Price: Low to High") {
  sortedEvents.sort((a, b) => a.price - b.price);
}

if (sortBy === "Price: High to Low") {
  sortedEvents.sort((a, b) => b.price - a.price);
}

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        All Events
      </h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-3 rounded-lg"
        />

        <select  value={location}
  onChange={(e) =>
    setLocation(e.target.value)
  } className="border p-3 rounded-lg">
          <option>All Locations</option>
          <option>Chennai</option>
          <option>Bangalore</option>
          <option>Hosur</option>
        </select>

        <select  value={priceFilter}
  onChange={(e) =>
    setPriceFilter(e.target.value)
  } className="border p-3 rounded-lg">
          <option>All Prices</option>
          <option>Under ₹500</option>
          <option>Under ₹1000</option>
          <option>Above ₹1000</option>
        </select>

        <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="border p-3 rounded-lg"
>
  <option>Default</option>
  <option>Price: Low to High</option>
  <option>Price: High to Low</option>
</select>
      </div>

      {/* No Results */}
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No events found
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {sortedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      )}
    </div>
  );
}