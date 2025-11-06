import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import { useGetAttendanceByDateLazyQuery } from "../generated/graphql";

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

  //

  const [getAttendance, { data, loading, error }] =
    useGetAttendanceByDateLazyQuery();

  const [rows, setRows] = useState<any[]>([]);

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
    if (data?.attendances) {
      setRows(data.attendances);
    }
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

        {/* ✅ Table */}
        <div className="h-[55vh] 2xl:h-[80vh]">
          <TableContainer
            component={Paper}
            elevation={0}
            className="shadow-none border-none dark:bg-[#1A2D26] dark:border-none"
            sx={{
              maxHeight: 440,
              overflow: "hidden",
            }}
          >
            <Table stickyHeader size="medium" aria-label="attendance table">
              <TableHead className="">
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "#F0F2F5",
                      color: "#000",
                      fontWeight: 600,
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      lineHeight: 1,
                    }}
                    className="dark:bg-[#204335] dark:text-[#E8EAE9]"
                  >
                    Employee
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#F0F2F5",
                      color: "#000",
                      fontWeight: 600,
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      lineHeight: 1,
                    }}
                    className="dark:bg-[#204335] dark:text-[#E8EAE9]"
                  >
                    Clock In
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#F0F2F5",
                      color: "#000",
                      fontWeight: 600,
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      lineHeight: 1,
                    }}
                    className="dark:bg-[#204335] dark:text-[#E8EAE9]"
                  >
                    Clock Out
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#F0F2F5",
                      color: "#000",
                      fontWeight: 600,
                      position: "sticky",
                      top: 0,
                      zIndex: 2,
                      lineHeight: 1,
                    }}
                    className="dark:bg-[#204335] dark:text-[#E8EAE9]"
                  >
                    Total Hours Worked
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "#F0F2F5",
                      color: "#000",
                      fontWeight: 600,
                      position: "sticky",
                      zIndex: 2,
                      lineHeight: 1,
                    }}
                    className="dark:bg-[#204335] dark:text-[#E8EAE9]"
                  >
                    Total Time Off
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* ✅ Table Body */}
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      align="center"
                      className="dark:text-white"
                    >
                      <CircularProgress
                        size={20}
                        className="dark:text-white text-white mr-3"
                      />
                      Loading
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      Error loading attendance data.
                    </TableCell>
                  </TableRow>
                ) : (
                  (rows.length > 0 ? rows : data?.attendances)?.map(
                    (row: any) => (
                      <TableRow
                        key={row.id}
                        className="hover:bg-gray-50 dark:hover:bg-[#204335]"
                      >
                        <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                          {row.user?.employeeName} - {row.user?.staffId}
                        </TableCell>
                        <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                          {row.clockIn
                            ? new Date(row.clockIn).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "N/A"}
                        </TableCell>
                        <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                          {row.clockOut
                            ? new Date(row.clockOut).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "N/A"}
                        </TableCell>
                        <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                          {row.totalHoursWorked}
                        </TableCell>
                        <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                          {(() => {
                            const total = parseFloat(
                              row.totalHoursWorked ?? "0"
                            );
                            const timeOff = 8 - total;
                            if (isNaN(timeOff) || timeOff <= 0) return "N/A";
                            return timeOff % 1 === 0
                              ? timeOff
                              : timeOff.toFixed(2);
                          })()}
                        </TableCell>
                      </TableRow>
                    )
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Attendance;
