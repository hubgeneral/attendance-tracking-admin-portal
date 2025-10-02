import { DateRangePicker } from "rsuite";
import { Card, CardContent } from "@mui/material";
import StatCard from "../components/StatCard";
import statsData from "../Mockdata/Statmockdata";
import EmployerBarChart from "../components/EmployerBarchart";
import RankingCard from "../components/RankingCard";
import { DashboardRangingCardData } from "../Mockdata/DashboardRangingCard";

import WorkHourSummary from "../components/WorkHourSummary";
import Requests from "../components/Requests";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-1 gap-2 ">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#29333D]">Dashboard</h1>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <DateRangePicker
            size="md"
            placeholder="Select Date"
            placement="bottomEnd"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-4 mb-3 ">
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
          <div className="flex flex-col md:flex-row gap-4 w-full h-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card data-testid="avg-clockin-card" className="shadow-sm shadow-gray-500 rounded-lg h-[100px]">
                <CardContent className="text-start">
                  <p className="text-[#758DA3] mb-2">Average Clock-In Time</p>
                  <h2 className="text-2xl font-bold">08:30 AM</h2>
                </CardContent>
              </Card>

              <div className="flex-1">
                <WorkHourSummary />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <Card data-testid="avg-clockout-card" className="shadow-sm shadow-gray-500 rounded-lg h-[100px]">
                <CardContent className="text-start">
                  <p className="text-[#758DA3] mb-2">Average Clock-Out Time</p>
                  <h2 className="text-2xl font-bold">08:30 AM</h2>
                </CardContent>
              </Card>
               
               <div className="flex-1">
              <Requests/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full grid gap-3 mt-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
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
