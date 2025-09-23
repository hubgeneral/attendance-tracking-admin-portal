// Attendance Record Interface
export interface AttendanceRecord {
  id: string;
  employeeName: string;
  employeeId: string;
  email: string;
  department: string;
  role: string;
  status: string;
  employmentType: string; // NEW
}

// Recent Request Interface
export interface RecentRequest {
  id: string;
  employeeName: string;
  date: string;
  reason: string;
}

// =========== Mock data for recent requests
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
    employeeName: "Kwamena Abelkoo Addo",
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

// ======= Mock data for log history with details
export const logHistory: AttendanceRecord[] = [
  {
    id: "log_001",
    employeeName: "Kwamena Abelkoo Addo",
    employeeId: "DHG0001",
    email: "kwamenaabelkooaddo@heidelbergcement.com",
    department: "Power Apps",
    role: "User",
    status: "Active",
    employmentType: "Intern",
  },
  {
    id: "log_002",
    employeeName: "Kwame Agyemang Osei",
    employeeId: "DHG0002",
    email: "kwamenaaddo@heidelbergcement.com",
    department: "RPA",
    role: "Admin",
    status: "On Leave",
    employmentType: "Staff",
  },
  {
    id: "log_003",
    employeeName: "Nana Ama Ababio Tsumasi",
    employeeId: "DHG0003",
    email: "kwamenaaddo@heidelbergcement.com",
    department: "Software Development",
    role: "Admin",
    status: "Active",
    employmentType: "Staff",
  },
  {
    id: "log_004",
    employeeName: "Akosua Mensah",
    employeeId: "DHG0004",
    email: "akosuamensah@heidelbergcement.com",
    department: "Power Apps",
    role: "User",
    status: "Active",
    employmentType: "Staff",
  },
  {
    id: "log_005",
    employeeName: "Kofi Asante",
    employeeId: "DHG0005",
    email: "kofiasante@heidelbergcement.com",
    department: "RPA",
    role: "User",
    status: "Active",
    employmentType: "National Service",
  },
  {
    id: "log_006",
    employeeName: "Ama Osei",
    employeeId: "DHG0006",
    email: "amaosei@heidelbergcement.com",
    department: "Software Development",
    role: "User",
    status: "Active",
    employmentType: "EIT",
  },
  {
    id: "log_007",
    employeeName: "Yaw Boateng",
    employeeId: "DHG0007",
    email: "yawboateng@heidelbergcement.com",
    department: "Power Apps",
    role: "User",
    status: "On Leave",
    employmentType: "National Service",
  },
  {
    id: "log_008",
    employeeName: "Efua Danso",
    employeeId: "DHG0008",
    email: "efuadanso@heidelbergcement.com",
    department: "RPA",
    role: "User",
    status: "Active",
    employmentType: "Intern",
  },
  {
    id: "log_009",
    employeeName: "Kwaku Owusu",
    employeeId: "DHG0009",
    email: "kwakuowusu@heidelbergcement.com",
    department: "Software Development",
    role: "User",
    status: "Active",
    employmentType: "Staff",
  },
  {
    id: "log_010",
    employeeName: "Abena Adjei",
    employeeId: "DHG0010",
    email: "abenaadjei@heidelbergcement.com",
    department: "Software Development",
    role: "Admin",
    status: "Active",
    employmentType: "Staff",
  },
  {
    id: "log_011",
    employeeName: "Samuel Gyasi",
    employeeId: "DHG0011",
    email: "samuelgyasi@heidelbergcement.com",
    department: "RPA",
    role: "User",
    status: "On Leave",
    employmentType: "Staff",
  },
  {
    id: "log_012",
    employeeName: "Grace Amponsah",
    employeeId: "DHG0012",
    email: "graceamponsah@heidelbergcement.com",
    department: "Software Development",
    role: "User",
    status: "Active",
    employmentType: "Staff",
  },
];

// ===== Helper functions =====
export const getDepartments = (): string[] => {
  const departments = Array.from(new Set(logHistory.map(record => record.department)));
  return ["All", ...departments];
};

export const getStatuses = (): string[] => {
  const statuses = Array.from(new Set(logHistory.map(record => record.status)));
  return ["All", ...statuses];
};

export const getRoles = (): string[] => {
  const roles = Array.from(new Set(logHistory.map(record => record.role)));
  return ["All", ...roles];
};

// NEW: Employment types
export const getEmploymentTypes = (): string[] => {
  const types = Array.from(new Set(logHistory.map(record => record.employmentType)));
  return ["All", ...types];
};
