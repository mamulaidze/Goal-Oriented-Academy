import CarCard from "@/components/CarCard";
import React from "react";
import BookingForm from "@/components/BookingForm";
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <CarCard />
      <BookingForm/>
    </main>
  );
}
