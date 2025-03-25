import { useEffect, useState } from "react";

export default function App() {
  const [cityName, setCityName] = useState("Lomi");
  const [apiData, setApiData] = useState(null);

  const API_KEY = "7bc20a94915113aadf93377d037789be";
  const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const result = await response.json();
        setApiData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setApiData(null);
      }
    };
    callApi();
  }, [cityName])
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-xl font-bold text-center mb-4">
          Amindi <b>G777</b>
        </h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>
        {apiData ? (
          <div>
            <p className="text-lg">
              <b>ქალაქი:</b> {apiData.name}
            </p>
            <p className="text-lg">
              <b>ტემპერატურა:</b> {(apiData.main?.temp - 273.15).toFixed(2)}°C
            </p>
            <p className="text-lg">
              <b>ქარის სიჩქარე:</b> {apiData.wind?.speed} m/s
            </p>
          </div>
        ) : (
          <p className="text-red-500 text-center">No data available</p>
        )}
      </div>
    </div>
  );
}
