type Leave = {
  emoployeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  leaveStatus: string;
};

export function getLeaveStatusToday(leaves: Leave[]) {
  const currentDate = new Date().toISOString().split("T")[0];
  const todaysLeaves = leaves.filter(
    (leave) => leave.startDate <= currentDate && leave.endDate >= currentDate
  );

  const approvedLeaves = leaves.filter(
    (leave) => leave.leaveStatus === "Approved"
  );
  return approvedLeaves;
}

export function getAllApprovedLeaves(leaves: Leave[]) {
  const approvedLeaves = leaves.filter(
    (leave) => leave.leaveStatus === "Approved"
  );
  return approvedLeaves;
}
