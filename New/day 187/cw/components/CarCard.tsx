import Image from "next/image";
import { Settings, Fuel, Snowflake } from "lucide-react";

export default function CarCard() {
  return (
    <div className="w-full max-w-sm p-4 rounded-2xl shadow-md bg-white">
      <div className="w-full h-36 bg-gray-100 flex items-center justify-center rounded-xl mb-4">

        <Image
  src="/car.webp"  
  alt="Car"
  width={160}
  height={80}
/>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h3 className="font-semibold text-lg">Mercedes</h3>
          <p className="text-sm text-gray-500">Sedan</p>
        </div>
        <div className="text-right">
          <p className="text-violet-600 font-bold text-lg">$25</p>
          <p className="text-sm text-gray-500">per day</p>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <Settings size={14} /> Automat
        </div>
        <div className="flex items-center gap-1">
          <Fuel size={14} /> PB 95
        </div>
        <div className="flex items-center gap-1">
          <Snowflake size={14} /> Air Conditioner
        </div>
      </div>
      <button className="mt-4 w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition">
        View Details
      </button>
    </div>
  );
}
