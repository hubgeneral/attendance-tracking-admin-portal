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

export function formatDate(dateString: string) {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatTime(timeString: string) {
  if (!timeString) return "N/A";
  return new Date(timeString).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
