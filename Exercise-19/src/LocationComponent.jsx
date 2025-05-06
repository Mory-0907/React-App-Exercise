import { useCurrentLocation } from "./hooks/useCurrentLocation";

function LocationComponent() {
  const { location, error, loading, getLocation } = useCurrentLocation();

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">La tua posizione</h2>
      <button
        onClick={getLocation}
        className="bg-indigo-500 text-white px-4 py-2 rounded"
      >
        Ottieni posizione
      </button>

      {loading && <p className="mt-4">Caricamento posizione...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {location && (
        <p className="mt-4">
          Latitudine: {location.latitude} <br />
          Longitudine: {location.longitude}
        </p>
      )}
    </div>
  );
}

export default LocationComponent;
