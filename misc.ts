export type Leave = {
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  leaves:{approvalStatus: {name:string }}[];
};


export function getLeaveStatusToday(users: any[]) {
  const currentDate = new Date().toISOString().split("T")[0];

  const todaysLeaves = users.filter(
    (user) =>
      user.leaves?.some(
        (leave: any) =>
          leave.approvalStatus?.name === "Approved" &&
          leave.startDate <= currentDate &&
          leave.endDate >= currentDate
      )
  );

  const todaysLeaveIds = new Set(todaysLeaves.map((user) => user.employeeId));
  return { todaysLeaveIds };
}

export function formatTime(timeString: string) {
  if (!timeString) return "N/A";
  return new Date(timeString).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}


// export function refetchRecentRequestsHelper(
//   refetch: (vars?: any) => void,
//   startDate: string,
//   endDate: string
// ) {
//   refetch({
//     startday: startDate,
//     stopdate: endDate,
//   });
// }


// import { refetchRecentRequests } from "../utils/refetchHelpers";

// // inside handleSubmit:
// await addManualAttendance({...});
// refetchRecentRequests(refetchRecentRequestsFn, startDate, endDate);
