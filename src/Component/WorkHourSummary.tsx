import { Card, CardContent } from "@mui/material";
import GrageChart from "./GrageChart";

const WorkHourSummary = () => {
  return (
    <Card className="shadow rounded-2xl p-0  h-[100%]">
      <CardContent>
        <h3 className="text-lg font-semibold mb-2 text-gray-400">
          Work Hour Summary
        </h3>
        <GrageChart />
      </CardContent>
    </Card>
  );
};

export default WorkHourSummary;
