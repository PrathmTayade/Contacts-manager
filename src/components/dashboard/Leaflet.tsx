import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { fetchCovidCountries } from "../../api/api";
import { Icon } from "leaflet";

const Leaflet = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countriesData"],
    queryFn: fetchCovidCountries,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error Loading the data </div>;

  const covidIcon = new Icon({
    iconUrl: "https://img.icons8.com/color/96/000000/coronavirus.png",
    iconSize: [24, 24],
  });
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div>
        <MapContainer
          className="h-screen w-full"
          center={[0, 0]}
          zoom={2}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((country: any) => (
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={covidIcon}
            >
              <Popup>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="self-center text-lg font-semibold">
                    {country.country}
                  </h3>
                  <div className="text- mt-2 flex items-center justify-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">
                      Active: {country.active}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">
                      Recovered: {country.recovered}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium">
                      Deaths: {country.deaths}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Leaflet;
