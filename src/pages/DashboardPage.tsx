import { useQueryClient } from "@tanstack/react-query";
import Leaflet from "../components/dashboard/Leaflet";
import LineGraph from "../components/dashboard/LineChart";
import Stats from "../components/dashboard/Stats";

const MapsChartsPage = () => {
  return (
    <main className="flex-1 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mt-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              COVID-19 Dashboard
            </h1>
            <p className="text-gray-600">Data updated daily.</p>
          </div>
          <div className="mt-4 flex items-center md:mt-0">
            <p className="text-gray-600">Global</p>
          </div>
        </div>

        <div className="mt-12 w-full ">
          <h2 className="mb-2 text-lg  font-medium text-gray-900">
            Today&apos;s Stats
          </h2>
          <Stats />
        </div>

        <hr className="my-6" />

        <div className="container flex flex-col ">
          <div className="w-full ">
            <h2 className="mb-2 text-lg font-medium text-gray-900">
              Cases Fluctuations
            </h2>
            <LineGraph />
          </div>
          <div className="mt-8 w-full ">
            <h2 className="mb-2 text-lg font-medium text-gray-900">
              COVID-19 Cases Map
            </h2>
            <Leaflet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MapsChartsPage;
