import { Button, Card, CardContent, Typography } from "@mui/material";
import { recentRequests } from "../services/mockData";


export default function RecentRequests() {
  return (
    <Card className="mb-6" elevation={1}>
      <CardContent>
        <Typography variant="h6" component="h2" className="font-bold mb-4">
          Recent Requests
        </Typography>


        <div className="space-y-3">
          {recentRequests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    {/* Name */}
                  <Typography variant="subtitle2" className="font-medium text-gray-900">
                    {request.employeeName}
                  </Typography>
                  {/* time for the request */}
                <Typography variant="body2" className="text-gray-600 mt-1">
                  {request.reason}
                </Typography>
                  {/* time for the request */}
                  <Typography variant="caption" className="text-gray-500 p-3">
                    {request.date}
                  </Typography>
                </div>
              </div>

              {/* ========== */}
              <Button
                variant="outlined"
                size="small"
                className="mt-3 md:mt-0 md:ml-4 whitespace-nowrap"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  borderColor: "#8a8a8aff",
                  color: "#007102",
                  "&:hover": {
                    borderColor: "#007102",
                    backgroundColor: "#daf6daff",
                  },
                }}
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