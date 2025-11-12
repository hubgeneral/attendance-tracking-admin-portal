import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import { useGetAttendanceByDateLazyQuery } from "../generated/graphql";
import TableComponent from "../components/Tables";
import { formatTime } from "../../helpers";

export type Attendance = {
  users: { id: string; staffId: string; employeeName: string }[];
  clockIn: string;
  clockOut: string;
  totalHours: string;
  totalTimeOff: string;
  currentDate: { eq: Date };
};

export const Attendance = () => {
  const [search, setSearch] = useState("");
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

  const [getAttendance, { data, loading, error }] =
    useGetAttendanceByDateLazyQuery();

  const attendanceData = data?.attendances || [];

  const columns = [
    {
      field: "employeeName",
      headerName: "Employee",
      valueGetter: (row: any) =>
        `${row.user?.employeeName} - ${row.user?.staffId}`,
    },
    {
      field: "clockIn",
      headerName: "Clock In",
      valueGetter: (row: any) =>
        row.clockIn ? formatTime(row.clockIn) : "N/A",
    },
    {
      field: "clockOut",
      headerName: "Clock Out",
      valueGetter: (row: any) =>
        row.clockOut ? formatTime(row.clockOut) : "N/A",
    },
    {
      field: "totalHoursWorked",
      headerName: "Total Hours Worked",
      valueGetter: (row: any) => row.totalHoursWorked,
    },
    {
      field: "employeeType",
      headerName: "Total Time off",
      valueGetter: (row: any) => {
        const total = parseFloat(row.totalHoursWorked ?? "0");
        const timeOff = 8 - total;
        if (isNaN(timeOff) || timeOff <= 0) return "N/A";
        return timeOff % 1 === 0 ? timeOff : timeOff.toFixed(2);
      },
    },
  ];

  useEffect(() => {
    if (search.trim() === "") {
      getAttendance({
        variables: {
          startDate,
          endDate,
          search: "",
        },
      });
    }
  }, [search]);

  useEffect(() => {
    if (dateRange) {
      getAttendance({
        variables: {
          startDate,
          endDate,
          search: search.trim(),
        },
      });
    }
  }, [dateRange]);

  useEffect(() => {
    // attendanceData is derived from the query result via:
    // const attendanceData = data?.attendances || [];
    // so there's no need to call it as a function; if you intended to keep
    // the attendances in a local state, replace `attendanceData` with a useState
    // and call the setter here (e.g. setAttendanceData(data.attendances)).
  }, [data]);

  const handleSearch = () => {
    const text = search.trim();

    getAttendance({
      variables: {
        startDate,
        endDate,
        search: text,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between items-center mb-4 px-1 dark:bg-[#131C18]">
          <h1 className="text-3xl font-semibold dark:text-[#E8EAE9]">
            Attendance
          </h1>
          <div className="flex-shrink-0">
            <DateRangePicker
              size="md"
              placeholder="Select Date"
              placement="bottomEnd"
              onChange={(Range) => setDateRange(Range || [null, null])}
            />
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow dark:bg-[#1A2D26]">
          {/* Header */}
          <div className="flex justify-between items-center mb-4 dark:bg-[#1A2D26]">
            <h2 className="text-xl font-semibold dark:text-[#E8EAE9]">
              All Employees
            </h2>
            <div className="flex gap-2 items-center">
              <div className=" border border-gray-300 dark:border-[#204335] rounded-md p-1 flex items-center gap-1 w-[250px]">
                <MdOutlineSearch className="text-gray-400 h-5 w-5" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border-0 focus:outline-none p-1 text-sm w-full dark:text-[#E8EAE9] dark:bg-[#1A2D26]"
                  placeholder="Search employee name or id"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </div>

              <Button
                sx={{
                  backgroundColor: "white",
                  color: "gray",
                  boxShadow: "none",
                  border: "1px solid lightgray",
                  textTransform: "none",
                }}
                className="dark:bg-[#1A2D26] dark:text-[#E8EAE9] dark:border-[#204335]"
              >
                {" "}
                <FaRegFileAlt className=" pe-1" />
                Export
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <CircularProgress size={24} className="dark:text-white" />
                <span className="ms-2 dark:text-white">Loading..</span>
              </div>
            ) : error ? (
              <p className="text-center">Error loading attendance</p>
            ) : (
              <TableComponent columns={columns} data={attendanceData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
