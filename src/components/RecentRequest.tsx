import { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { recentRequests } from "../services/mockData";
import type { RecentRequest } from "../services/mockData"; // 👈 fixed
import ActionModal from "./ActionModal";

export default function RecentRequests() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedRequest, setSelectedRequest] = useState<RecentRequest | null>(null);

  const handleOpen = (request: RecentRequest) => {
    setSelectedRequest(request);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRequest(null);
  };

  return (
    <>
      <Card className="mb-6" elevation={1}>
        <CardContent>
          <Typography
            variant="h6"
            component="h2"
            className="font-bold mb-4"
            sx={{ fontWeight: 600, color: "#29333D" }}
          >
            Recent Requests
          </Typography>

          <div className="space-y-3">
            {recentRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-md"
              >
                {/* Left: Name + Date */}
                <div className="flex flex-col w-1/4">
                  <Typography variant="subtitle2" className="font-medium text-gray-900">
                    {request.employeeName}
                  </Typography>
                  <Typography variant="caption" className="text-gray-500">
                    {request.date}
                  </Typography>
                </div>

                {/* Middle: Reason/Message */}
                <div className="flex-1 px-4">
                  <Typography variant="body2" className="text-gray-600 line-clamp-1">
                    {request.reason}
                  </Typography>
                </div>

                {/* Right: Action Button */}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleOpen(request)}
                  sx={{
                    fontWeight: "bold",
                    background: "#FFFFFF",
                    textTransform: "none",
                    borderColor: "#E8ECF0",
                    color: "#004E2B",
                    "&:hover": {
                      borderColor: "#E8ECF0",
                      backgroundColor: "#004E2B",
                      color: "#E8ECF0",
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

      {/* Modal */}
      <ActionModal open={open} onClose={handleClose} request={selectedRequest} />
    </>
  );
}
