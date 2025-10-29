import { Card, CardContent } from "@mui/material";
import CustomizedLegent from "./CustomizeLegent";
import { useAttendanceGraphDataQuery } from "../generated/graphql";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AttendanceData {
  day: string;
  clockedIn: number;
  absent: number;
  onLeave: number;
}

const EmployerBarChart = () => {
  const today = new Date().toISOString().split("T")[0];
  const { data, loading, error } = useAttendanceGraphDataQuery({
    variables: { startDay: today, stopDate: today },
  });

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error loading chart: {error.message}</p>;

  const chartData = data?.graphData || [];

  const attendanceMetric = [
    { value: "Clocked In", color: "#07C437", dataKey: "clockedIn" },
    { value: "Absent", color: "#FF0101", dataKey: "absent" },
    { value: "On Leave", color: "#FFA640", dataKey: "onLeave" },
  ];
  return (
    <div>
      <Card className="lg:col-span-6 row-span-2 shadow-sm shadow-gray-500 rounded-lg">
        <CardContent className="dark:bg-[#1A2D26]">
          <h3 className="text-lg font-semibold mb-3 text-[#758DA3] dark:text-[#C3C3C3]">
            Total Employees
          </h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis tickCount={6} domain={[0, 50]} />
              <Tooltip />
              <Legend
                content={<CustomizedLegent payload={attendanceMetric} />}
              />
              {attendanceMetric.map((metric) => (
                <Bar
                  key={metric.dataKey}
                  dataKey={metric.dataKey}
                  fill={metric.color}
                  name={metric.value}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerBarChart;
