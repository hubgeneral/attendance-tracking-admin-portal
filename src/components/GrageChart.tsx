import { Stack, Box, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useWorkHourSummaryQuery } from "../generated/graphql";
import { useState } from "react";

export default function BasicGauges() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const today = new Date().toISOString().split("T")[0];

  const startDate = dateRange[0]
    ? dateRange[0].toISOString().split("T")[0]
    : today;
  const endDate = dateRange[1]
    ? dateRange[1].toISOString().split("T")[0]
    : today;

  const { data: summaryData } = useWorkHourSummaryQuery({
    variables: { startDay: startDate, stopDate: endDate },
  });

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      {/* Gauge itself */}
      <Gauge
        width={150}
        height={150}
        value={summaryData?.workHoursSummary?.totalWorkingHours || 0}
        startAngle={-90}
        endAngle={90}
        outerRadius="100%"
        innerRadius="80%"
        valueMax={100}
        sx={{
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#07C437",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "#EAEAEA",
          },
          [`& .${gaugeClasses.valueText}`]: {
            fill: "#C3C3C3",
          },
        }}
      />

      {/* Legend / Info */}
      <Box display="flex" gap={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 16,
              height: 16,
              bgcolor: "#07C437",
              borderRadius: "50%",
            }}
          />
          <Typography variant="body2" className="dark:text-[#C3C3C3]">
            Total Hours Worked
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              width: 16,
              height: 16,
              bgcolor: "#EAEAEA",
              borderRadius: "50%",
              border: "",
            }}
          />
          <Typography variant="body2" className="dark:text-[#C3C3C3]">
            Total Off Hours
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
