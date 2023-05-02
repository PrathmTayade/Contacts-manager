import { useQuery } from "@tanstack/react-query";
import { fetchWorldWideData } from "../../api/api";

const Stats = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["worldwideData"],
    queryFn: fetchWorldWideData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto ">
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="w-full rounded-lg border bg-white px-4 py-5 shadow">
          <div className="truncate text-sm font-medium text-gray-500">
            Today Cases
          </div>
          <div className="mt-1  text-3xl font-semibold text-gray-900">
            {data.todayCases}
          </div>
        </div>
        <div className="w-full rounded-lg border bg-white px-4 py-5 shadow">
          <div className="truncate text-sm font-medium text-gray-500">
            Today Deaths
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {data.todayDeaths}
          </div>
        </div>
        <div className="w-full rounded-lg border bg-white px-4 py-5 shadow">
          <div className="truncate text-sm font-medium text-gray-500">
            Today Recovered
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            {data.todayRecovered}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
