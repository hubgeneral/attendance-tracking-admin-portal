import { DateRangePicker } from "rsuite";
import { Card, CardContent } from "@mui/material";
import StatCard from "../Component/StatCard";
import statsData from "../Mockdata/Statmockdata";
import EmployerBarChart from "../Component/EmployerBarchart";
import RankingCard from "../Component/RankingCard";
import { DashboardRangingCardData } from "../Mockdata/DashboardRangingCard";

import WorkHourSummary from "../Component/WorkHourSummary";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-1 gap-2">
        <h1 className="text-2xl sm:text-3xl font-semibold">Dashboard</h1>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <DateRangePicker
            size="md"
            placeholder="Select Date"
            placement="bottomEnd"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-3">
        {statsData.map((stat, index) => (
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
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card className="shadow rounded-2xl">
                <CardContent className="text-center">
                  <p className="text-gray-500">Average Clock-In Time</p>
                  <h2 className="text-2xl font-bold">08:30 AM</h2>
                </CardContent>
              </Card>

              <>
                <WorkHourSummary />
              </>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card className="shadow rounded-2xl">
                <CardContent className="text-center">
                  <p className="text-gray-500">Average Clock-In Time</p>
                  <h2 className="text-2xl font-bold">08:30 AM</h2>
                </CardContent>
              </Card>

              <Card className="shadow rounded-2xl p-0">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-2 text-gray-400">
                    Requests
                  </h3>
                  {new Array(3).fill(0).map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center mb-3 p-2 border rounded-lg bg-[#F7F7F7] h-[100%]"
                    >
                      <div>
                        <p className="text-sm">Addo Dankwa</p>
                        <p className="text-sm text-gray-500">
                          02/11/2025 09:00
                        </p>
                      </div>
                      <button className="bg-white text-green-500 px-3 py-1 border-2 rounded border-gray-400 text-xs">
                        Take Action
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full grid gap-3 mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {DashboardRangingCardData?.map((value) => (
          <RankingCard
            key={value.title}
            title={value.title}
            color={value.color}
            icon={value.icon}
            entries={value.entries}
          />
        ))}
      </section>
    </>
  );
};

export default Dashboard;
