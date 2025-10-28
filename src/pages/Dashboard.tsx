import { Card, CardContent } from "@mui/material";
import { DateRangePicker } from "rsuite";
import EmployerBarChart from "../components/EmployerBarchart";
import RankingCard from "../components/RankingCard";
import StatCard from "../components/StatCard";
import {
  useLateEmployeesQuery,
  useMostUnproductiveQuery,
  useTotalStatsQuery,
} from "../generated/graphql";
import { useClockTimeQuery } from "../generated/graphql";
import { useMostPunctualQuery } from "../generated/graphql";
import { formatTime } from "../../misc";
import { useState } from "react";
import Requests from "../components/Requests";
import WorkHourSummary from "../components/WorkHourSummary";
// import { skip } from "node:test";
// import { useEffect } from "react";
const Dashboard = () => {
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

  const { data, loading, error } = useTotalStatsQuery();
  const { data: clockData } = useClockTimeQuery();
  const { data: punctualData } = useMostPunctualQuery({
    variables: { startDay: startDate, stopDate: endDate },
  });
  const { data: lateEmployeesdata } = useLateEmployeesQuery({
    variables: { startDay: startDate, stopDate: endDate },
  });

  const { data: mostunproductivedata } = useMostUnproductiveQuery({
    variables: { startDay: startDate, stopDate: endDate },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading stats: {error.message}</p>;
  const stats = data?.dashboardTotalStats;

  //   useEffect(() => {
  //   if (shouldFilter) {
  //     refetch({ startDay, stopDate: endDate });
  //   }
  // }, [dateRange]);

  const updatedStatsData = [
    {
      label: "Total Employees",
      dataKey: "totalEmployees",
      value: stats?.totalEmployees ?? 0,
      icon: "IoPeople",
    },
    {
      label: "Employees Clocked In",
      dataKey: "employeesClocledIn",
      value: stats?.employeesClocledIn ?? 0,
      icon: "timeicon1",
    },
    {
      label: "Employees Clocked Out",
      dataKey: "employeesClocledOut",
      value: stats?.employeesClocledOut ?? 0,
      icon: "timeicon2",
    },
    {
      label: "Employees Absent",
      dataKey: "totalAbsent",
      value: stats?.totalAbsent ?? 0,
      icon: "timeicon3",
    },
    {
      label: "Employees On Leave",
      dataKey: "totalLeaves",
      value: stats?.totalLeaves ?? 0,
      icon: "timeicon4",
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-1 gap-2 ">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#29333D] dark:text-white">
          Dashboard
        </h1>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <DateRangePicker
            size="md"
            placeholder="Select Date"
            placement="bottomEnd"
            onChange={(Range) => setDateRange(Range || [null, null])}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 mb-3 ">
        {updatedStatsData.map((stat, index) => (
          <StatCard
            key={index}
            label={stat.label}
            value={stat.value}
            icon={stat?.icon}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        {/* Left Chart */}
        <div className="w-full md:w-[45%]">
          <EmployerBarChart />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[55%] h-[100%]">
          <div className="flex flex-col md:flex-row gap-4 w-full h-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card
                data-testid="avg-clockin-card"
                className="shadow-sm shadow-gray-500 rounded-lg h-[100px]"
              >
                <CardContent className="text-start dark:bg-[#1A2D26]">
                  <p className="text-[#758DA3] dark:text-[#C3C3C3] mb-2">
                    Average Clock-In Time
                  </p>
                  <h2 className="text-2xl font-bold dark:text-[#E8EAE9]">
                    {formatTime(
                      clockData?.averageClockTime.averageClockIn || "N/A"
                    )}
                  </h2>
                </CardContent>
              </Card>

              <div className="flex-1">
                <WorkHourSummary />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card
                data-testid="avg-clockout-card"
                className="shadow-sm shadow-gray-500 rounded-lg h-[100px]"
              >
                <CardContent className="text-start dark:bg-[#1A2D26]">
                  <p className="text-[#758DA3] mb-2 dark:text-[#C3C3C3]">
                    Average Clock-Out Time
                  </p>
                  <h2 className="text-2xl font-bold dark:text-[#E8EAE9]">
                    {formatTime(clockData?.averageClockTime?.averageClockOut)}
                  </h2>
                </CardContent>
              </Card>

              <div className="flex-1">
                <Requests />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full grid gap-3 mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <RankingCard
          title="Punctual Employees"
          color="#0C4DB0"
          entries={
            punctualData?.punctualEmployees?.length
              ? punctualData.punctualEmployees.map((emp) => ({
                  name: emp.employeeName ?? "N/A",
                  stat: formatTime(emp.timeOfDay ?? "No time recorded"),
                }))
              : [{ name: "No data available", stat: "" }]
          }
        />

        <RankingCard
          title="Late Employees"
          color="#D58A39"
          entries={
            lateEmployeesdata?.lateEmployees?.length
              ? lateEmployeesdata.lateEmployees.map((emp) => ({
                  name: emp.employeeName ?? "N/A",
                  stat: formatTime(emp.timeOfDay ?? "No time recorded"),
                }))
              : [{ name: "No data available", stat: "" }]
          }
        />

        <RankingCard
          title="Most Hours Worked"
          color="#0CB036"
          entries={[{ name: "No data available", stat: "" }]}
        />

        <RankingCard
          title="Most Off Hours"
          color="#D53951"
          entries={
            mostunproductivedata?.mostWastedHours?.length
              ? mostunproductivedata.mostWastedHours.map((emp) => ({
                  name: emp.employeeName ?? "N/A",
                  stat: `${emp.totalWastedHours ?? 0} hrs`,
                }))
              : [{ name: "No data available", stat: "" }]
          }
        />
      </section>
    </>
  );
};

export default Dashboard;
