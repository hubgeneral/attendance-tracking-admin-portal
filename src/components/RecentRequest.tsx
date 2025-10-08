import { Button, Card, CardContent, Typography } from "@mui/material";
import { recentRequests } from "../services/mockData";

interface RecentRequestsProps {
  onTakeAction: (request: {
    employeeName: string;
    date: string;
    reason: string;
  }) => void;
}

export default function RecentRequests({ onTakeAction }: RecentRequestsProps) {
  return (
    <Card className="mb-6" elevation={1}>
      <CardContent className="dark:bg-[#1A2D26]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-[#29333D]">
            Recent Requests
          </h1>
        </div>

        <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2">
          {recentRequests.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between py-6 px-6 bg-[#F7F7F7] rounded-[5px] gap-24"
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
                >
                  {request.employeeName}
                </Typography>

                <Typography
                  variant="caption"
                  className="text-[#758DA3] whitespace-nowrap"
                >
                  {request.date}
                </Typography>
              </div>

              <Typography
                variant="body2"
                className="text-[#29333D] flex-1 text-left mr-4"
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
                onClick={() => onTakeAction(request)} // 👈 Call parent handler
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
