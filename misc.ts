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


// export function getAllApprovedLeaves(leaves: Leave[]) {
//   const approvedLeaves = leaves.filter(
//     (leave) =>leave.leaves.some(l => l.approvalStatus.name === "Approved")
//   );
//   return approvedLeaves;
// }
