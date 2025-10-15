
import {useGetUsersQuery} from "./src/generated/graphql";

export type Leave = {
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  //leaveStatus: "Approved" | "Pending" | "Rejected";
  leaves:{approvalStatus: {name:string }}[];
};

// export function getLeaveStatusToday(leaves: Leave[]) {
  
//   const currentDate = new Date().toISOString().split("T")[0];
//   const todaysLeaves = leaves.filter(
//     (leave) => leave.startDate <= currentDate && leave.endDate >= currentDate
//   );

//   const todaysLeaveIds = new Set(todaysLeaves.map((leave) => leave.employeeId));
//   const approvedLeaves = leaves.filter(
//     (leave) =>
//       leave.leaves.some(l => l.approvalStatus.name === "Approved") && todaysLeaveIds.has(leave.employeeId)
//   );
//   return approvedLeaves;
// }


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

  const todaysLeaveIds = new Set(todaysLeaves.map((leave) => leave.employeeId));
  return { todaysLeaveIds };
}


// export function getAllApprovedLeaves(leaves: Leave[]) {
//   const approvedLeaves = leaves.filter(
//     (leave) =>leave.leaves.some(l => l.approvalStatus.name === "Approved")
//   );
//   return approvedLeaves;
// }
