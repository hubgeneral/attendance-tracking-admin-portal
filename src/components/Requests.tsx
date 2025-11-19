import { Card, CardContent } from "@mui/material";
import { useDashboardRequestsQuery } from "../generated/graphql";

const Requests = ({
  startDay,
  stopDate,
}: {
  startDay: string;
  stopDate: string;
}) => {
  const { data: requestsData } = useDashboardRequestsQuery({
    variables: { startDay, stopDate },
  });

  return (
    <Card className="shadow-sm shadow-gray-500 rounded-lg p-0  max-h-[290px] ">
      <CardContent className="dark:bg-[#1A2D26]">
        <h3 className="text-lg font-semibold mb-2 text-[#758DA3] dark:text-[#C3C3C3]">
          Requests
        </h3>

        <div className="flex-1 sm:max-h-[250px] sm:overflow-y-auto">
          {requestsData?.requestLogs && requestsData.requestLogs.length > 0 ? (
            requestsData.requestLogs.slice(0, 3).map((req, i) => (
              <div
                key={i}
                className="flex justify-between items-center mb-3 p-3 border-[#E8ECF0] rounded-lg bg-[#F7F7F7] dark:bg-[#1f3a30] "
              >
                <div>
                  <p className="text-sm dark:text-[#E9EDEB]">
                    {req?.employeeName ?? "N/A"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-[#C0C0C0]">
                    {req?.timeOfDay
                      ? new Date(req.timeOfDay).toLocaleString()
                      : "N/A"}
                  </p>
                </div>
                <button className="bg-white text-[#004E2B] px-3 py-1 border-2 rounded-lg border-[#E8ECF0] text-xs dark:text-[#F7F7F7] dark:bg-[#1A2D26] dark:border-[#315547]">
                  Take Action
                </button>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-[220px]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No data available
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Requests;
