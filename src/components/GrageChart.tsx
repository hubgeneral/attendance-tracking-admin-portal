import { Box, Stack, Typography } from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function BasicGauges() {
  return (
    // <Stack
    //   direction="row"
    //   justifyContent="center" // centers horizontally
    //   alignItems="center"
    //   className="text-[#07C437] "
    // >
    //   <Gauge
    //     width={130}
    //     height={130}
    //     value={60}
    //     startAngle={-90}
    //     endAngle={90}
    //     color="#07C437"
    //     valueMax={100}
    //   />
    // </Stack>

    <Stack direction="column" spacing={2} alignItems="center">
      {/* Gauge itself */}
      <Gauge
        width={150}
        height={150}
        value={60}
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
          <Typography variant="body2">Total Hour Worked </Typography>
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
          <Typography variant="body2">Total Off Hours </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
