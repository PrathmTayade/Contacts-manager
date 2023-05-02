import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useCovidhistory } from "../../api/api";
import { format } from "date-fns";

const LineGraph: React.FC = () => {
  //Fetching data
  const { data, isLoading, isError, isSuccess } = useCovidhistory();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const chartData = Object.keys(data.cases).map((date) => ({
    name: format(new Date(date), "dd/MM/yyyy"), //? Optional formating date to dd/mm/yy instead of MM/dd/yyyy
    Cases: data.cases[date],
    Deaths: data.deaths[date],
    Recovered: data.recovered[date],
  }));

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      {isSuccess ? (
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 ,4" />

            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Cases" stroke="#8884d8" />
            
            {/*  Multiple line graphs for the chart */}

            {/* <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" /> */}
            {/* <Line type="monotone" dataKey="Recovered" stroke="#ffc658" /> */}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-center text-red-500">Error fetching data</div>
      )}
    </div>
  );
};

export default LineGraph;
