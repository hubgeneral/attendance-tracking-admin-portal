import { Card, CardContent } from "@mui/material";
import data from "../Mockdata/BarChartData";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EmployerBarChart = () => {
  return (
    <div>
      <Card className="lg:col-span-6 row-span-2 shadow rounded-2xl">
        <CardContent>
          <h3 className="text-lg font-semibold mb-3">Total Employees</h3>
          <ResponsiveContainer width="100%" height={310}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend className="text-sm" />
              <Bar dataKey="clockedIn" fill="#07C437" name="Clocked In" />
              <Bar dataKey="absent" fill="#FFA640" name="Absent" />
              <Bar dataKey="onLeave" fill="#FF0101" name="On Leave" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerBarChart;
