export default function BookingForm() {
  return (
    <div className="max-w-sm w-full bg-violet-700 text-white p-6 rounded-2xl space-y-4">
      <h2 className="text-xl font-semibold text-center">Book your car</h2>
      <select className="w-full bg-violet-600 text-white px-4 py-2 rounded-md outline-none">
        <option>Car type</option>
        <option>Mercedes</option>
        <option>Audi</option>
        <option>BMW</option>
      </select>
      <select className="w-full bg-violet-600 text-white px-4 py-2 rounded-md outline-none">
        <option>Place of rental</option>
        <option>Tbilisi</option>
        <option>Batumi</option>
        <option>Kutaisi</option>
      </select>
      <select id="city"className="w-full bg-violet-600 text-white px-4 py-2 rounded-md outline-none">
        <option>Place of return</option>
        <option>Tbilisi</option>
        <option>Batumi</option>
        <option>Kutaisi</option>
      </select>
      <label for="rental-date">Rental Date</label>
      <input id="rental-date"
        type="date"
        className="w-full bg-violet-600 text-white px-4 py-2 rounded-md outline-none cursor-pointer"
        placeholder="Rental date"
      />
      <label for="return-date">Return Date</label>
      <input id="return-date"
        type="date"
        className="w-full bg-violet-600 text-white px-4 py-2 rounded-md outline-none cursor-pointer"
        placeholder="Return date"
      />
      <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-md transition">
        Book now
      </button>
    </div>
  );
}
