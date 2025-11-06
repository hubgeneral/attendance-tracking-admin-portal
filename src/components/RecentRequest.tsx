import { Button, Card, CardContent, Typography } from "@mui/material";
import { useRecentRequestsQuery } from "../generated/graphql";
import { useState } from "react";
import { formatTime, formatDate } from "../../helpers";

interface RecentRequestsProps {
  onTakeAction: (request: {
    employeeName: string;
    date: string;
    reason: string;
  }) => void;
}

export default function RecentRequests({ onTakeAction }: RecentRequestsProps) {
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

  const { data, loading, error } = useRecentRequestsQuery({
    variables: { startday: startDate, stopdate: endDate },
  });

  return (
    <Card className="mb-6" elevation={1}>
      <CardContent className="dark:bg-[#14241D]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-[#29333D] dark:text-[#E8EAE9]">
            Recent Requests
          </h1>
        </div>

        <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2">
          {loading && (
            <div className="py-8 text-center text-gray-500 dark:text-[#C3C3C3]">
              <p className="font-medium">Loading...</p>
            </div>
          )}

          {!loading &&
            !error &&
            (!data?.requestLogs || data.requestLogs.length === 0) && (
              <div className="py-8 text-center text-gray-500 dark:text-[#C3C3C3]">
                <p className="font-medium">No recent requests</p>
                <p className="text-sm text-gray-400 dark:text-[#9BA3A0]">
                  Requests from employees will appear here.
                </p>
              </div>
            )}

          {data?.requestLogs?.map((request, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-6 px-6 bg-[#F7F7F7] rounded-[5px] gap-24 dark:bg-[#172C24]"
            >
              <div className="flex flex-col">
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#29333D",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxWidth: "200px",
                  }}
                  className="dark:text-[#E8EAE9]"
                >
                  {request.employeeName}
                </Typography>

                <Typography
                  variant="caption"
                  className="text-[#758DA3] whitespace-nowrap dark:text-[#C3C3C3]"
                >
                  {`${formatDate(request.timeOfDay)} ${formatTime(
                    request.timeOfDay
                  )}`}
                </Typography>
              </div>

              <Typography
                variant="body2"
                className="text-[#29333D] flex-1 text-left mr-4 dark:text-[#E8EAE9]"
              >
                {request.reason}
              </Typography>

              <Button
                variant="outlined"
                size="small"
                className="mt-3 md:mt-0 md:ml-4 whitespace-nowrap dark:bg-[#1A2D26] dark:text-[#F7F7F7] dark:border-[#315547] dark:hover:bg-[#315547]"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderColor: "#E8ECF0",
                  color: "#004E2B",
                  backgroundColor: "#fff",
                  "&:hover": {
                    borderColor: "#007102",
                    backgroundColor: "#fff",
                  },
                }}
                onClick={() =>
                  onTakeAction({
                    employeeName: request.employeeName ?? "",
                    date: request.timeOfDay ?? "",
                    reason: request.reason ?? "",
                  })
                }
              >
                Take Action
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
