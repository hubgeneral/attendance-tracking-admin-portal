import { Card, CardContent } from "@mui/material";
import GrageChart from "./GrageChart";

const WorkHourSummary = () => {
  return (
    <Card className="shadow rounded-2xl p-0 h-[290px] ">
      <CardContent className="h-full">
        <h3 className="text-lg font-semibold mb-2 text-[#758DA3]">
          Work Hour Summary
        </h3>
        <GrageChart />
      </CardContent>
    </Card>
  );
};

export default WorkHourSummary;
