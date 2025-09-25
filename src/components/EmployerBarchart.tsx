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
          <h3 className="text-lg font-semibold mb-3 text-[#758DA3]">Total Employees</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis  tickCount={6} domain={[0, 50]}  />
              <Tooltip />
              <Legend />
              
              {/* <Bar dataKey="absent" fill="#FF0101" name="Absent"/> */}
              <Bar dataKey="clockedIn" fill="#07C437" name="Clocked In" />
              <Bar dataKey="absent" fill="#FF0101" name="Absent"  />
              <Bar dataKey="onLeave" fill="#FFA640" name="On Leave" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmployerBarChart;
