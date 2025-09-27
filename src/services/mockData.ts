export interface AttendanceRecord {
  id: string;
  employeeName: string;
  reason: string;
  clockIn: string | null;   
  clockOut: string | null;  
  actionBy: string;         
  date: string;             
}

export interface RecentRequest {
  id: string;
  employeeName: string;
  date: string;
  reason: string;
}

// =========== Mock data for recent requests ===========
export const recentRequests: RecentRequest[] = [
  {
    id: "req_001",
    employeeName: "Kwamena Abelkoo Addo",
    date: "02/11/2024 08:00",
    reason:
      "Requested manual log entry for overtime work completed on weekend project. Need to record additional 4 hours worked on system maintenance.",
  },
  {
    id: "req_002",
    employeeName: "Ama Addo",
    date: "02/11/2024 08:00",
    reason:
      "Manual log correction needed for incorrect clock-out time due to system glitch. Actual departure time was 6:30 PM instead of recorded 5:00 PM.",
  },
  {
    id: "req_003",
    employeeName: "Kwame Agyemang Osei",
    date: "01/11/2024 14:30",
    reason:
      "Forgot to clock in this morning due to emergency meeting. Arrived at office at 8:00 AM but system shows no entry.",
  },
];

// ======= Mock data for log history (to fit Logs History table) =======
export const logHistory: AttendanceRecord[] = [
  {
    id: "log_001",
    employeeName: "Kwamena Abelkoo Addo",
    reason:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sed eget amet id vulputate posuere at et congue.",
    clockIn: "9:56 AM",
    clockOut: null,
    actionBy: "Abena Awusi Amina",
    date: "02/20/2025 – 9:10 AM",
  },
  {
    id: "log_002",
    employeeName: "Kwamena Abelkoo Addo",
    reason:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing sed eget amet id vulputate posuere at et congue.",
    clockIn: null,
    clockOut: "5:00 PM",
    actionBy: "Adwoa",
    date: "02/20/2025 – 9:10 AM",
  },
  {
    id: "log_003",
    employeeName: "Kwame Agyemang Osei",
    reason:
      "Correction for missing clock-in due to emergency meeting. Arrived at 8:00 AM.",
    clockIn: "8:00 AM",
    clockOut: "4:30 PM",
    actionBy: "Kofi Asante",
    date: "02/19/2025 – 5:00 PM",
  },
];
