import * as Apollo from "@apollo/client/react";
import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Decimal: { input: any; output: any };
  LocalDate: { input: any; output: any };
};

export type AppRole = {
  __typename?: "AppRole";
  concurrencyStamp?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  normalizedName?: Maybe<Scalars["String"]["output"]>;
  userRoles: Array<AppUserRole>;
};

export type AppRoleFilterInput = {
  and?: InputMaybe<Array<AppRoleFilterInput>>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  normalizedName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AppRoleFilterInput>>;
  userRoles?: InputMaybe<ListFilterInputTypeOfAppUserRoleFilterInput>;
};

export type AppUser = {
  __typename?: "AppUser";
  accessFailedCount: Scalars["Int"]["output"];
  attendances?: Maybe<Array<Attendance>>;
  concurrencyStamp?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailConfirmed: Scalars["Boolean"]["output"];
  employeeName?: Maybe<Scalars["String"]["output"]>;
  employeeType?: Maybe<Scalars["String"]["output"]>;
  entryExitLogs?: Maybe<Array<EntryExitLog>>;
  id: Scalars["Int"]["output"];
  isPasswordReset: Scalars["Boolean"]["output"];
  leaves?: Maybe<Array<Leave>>;
  lockoutEnabled: Scalars["Boolean"]["output"];
  lockoutEnd?: Maybe<Scalars["DateTime"]["output"]>;
  normalizedEmail?: Maybe<Scalars["String"]["output"]>;
  normalizedUserName?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  passwordHash?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberConfirmed: Scalars["Boolean"]["output"];
  refreshTokens: Array<RefreshToken>;
  requestLogs?: Maybe<Array<RequestLog>>;
  securityStamp?: Maybe<Scalars["String"]["output"]>;
  staffId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  twoFactorEnabled: Scalars["Boolean"]["output"];
  userName?: Maybe<Scalars["String"]["output"]>;
  userRoles: Array<AppUserRole>;
};

export type AppUserFilterInput = {
  accessFailedCount?: InputMaybe<IntOperationFilterInput>;
  and?: InputMaybe<Array<AppUserFilterInput>>;
  attendances?: InputMaybe<ListFilterInputTypeOfAttendanceFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  employeeName?: InputMaybe<StringOperationFilterInput>;
  employeeType?: InputMaybe<StringOperationFilterInput>;
  entryExitLogs?: InputMaybe<ListFilterInputTypeOfEntryExitLogFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isPasswordReset?: InputMaybe<BooleanOperationFilterInput>;
  leaves?: InputMaybe<ListFilterInputTypeOfLeaveFilterInput>;
  lockoutEnabled?: InputMaybe<BooleanOperationFilterInput>;
  lockoutEnd?: InputMaybe<DateTimeOperationFilterInput>;
  normalizedEmail?: InputMaybe<StringOperationFilterInput>;
  normalizedUserName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AppUserFilterInput>>;
  password?: InputMaybe<StringOperationFilterInput>;
  passwordHash?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  phoneNumberConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  refreshTokens?: InputMaybe<ListFilterInputTypeOfRefreshTokenFilterInput>;
  requestLogs?: InputMaybe<ListFilterInputTypeOfRequestLogFilterInput>;
  securityStamp?: InputMaybe<StringOperationFilterInput>;
  staffId?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StringOperationFilterInput>;
  twoFactorEnabled?: InputMaybe<BooleanOperationFilterInput>;
  userName?: InputMaybe<StringOperationFilterInput>;
  userRoles?: InputMaybe<ListFilterInputTypeOfAppUserRoleFilterInput>;
};

export type AppUserRole = {
  __typename?: "AppUserRole";
  role: AppRole;
  roleId: Scalars["Int"]["output"];
  user: AppUser;
  userId: Scalars["Int"]["output"];
};

export type AppUserRoleFilterInput = {
  and?: InputMaybe<Array<AppUserRoleFilterInput>>;
  or?: InputMaybe<Array<AppUserRoleFilterInput>>;
  role?: InputMaybe<AppRoleFilterInput>;
  roleId?: InputMaybe<IntOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
};

export type AppUserSortInput = {
  accessFailedCount?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  employeeName?: InputMaybe<SortEnumType>;
  employeeType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isPasswordReset?: InputMaybe<SortEnumType>;
  lockoutEnabled?: InputMaybe<SortEnumType>;
  lockoutEnd?: InputMaybe<SortEnumType>;
  normalizedEmail?: InputMaybe<SortEnumType>;
  normalizedUserName?: InputMaybe<SortEnumType>;
  password?: InputMaybe<SortEnumType>;
  passwordHash?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  phoneNumberConfirmed?: InputMaybe<SortEnumType>;
  securityStamp?: InputMaybe<SortEnumType>;
  staffId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  twoFactorEnabled?: InputMaybe<SortEnumType>;
  userName?: InputMaybe<SortEnumType>;
};

export type Attendance = {
  __typename?: "Attendance";
  appUserId: Scalars["Int"]["output"];
  clockIn?: Maybe<Scalars["DateTime"]["output"]>;
  clockOut?: Maybe<Scalars["DateTime"]["output"]>;
  clockingType: Scalars["Boolean"]["output"];
  currentDate?: Maybe<Scalars["LocalDate"]["output"]>;
  entryExitLogs: Array<EntryExitLog>;
  id: Scalars["Int"]["output"];
  status?: Maybe<Scalars["String"]["output"]>;
  totalHoursWorked?: Maybe<Scalars["Decimal"]["output"]>;
  user?: Maybe<AppUser>;
};

export type AttendanceFilterInput = {
  and?: InputMaybe<Array<AttendanceFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  clockIn?: InputMaybe<DateTimeOperationFilterInput>;
  clockOut?: InputMaybe<DateTimeOperationFilterInput>;
  clockingType?: InputMaybe<BooleanOperationFilterInput>;
  currentDate?: InputMaybe<LocalDateOperationFilterInput>;
  entryExitLogs?: InputMaybe<ListFilterInputTypeOfEntryExitLogFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<AttendanceFilterInput>>;
  status?: InputMaybe<StringOperationFilterInput>;
  totalHoursWorked?: InputMaybe<DecimalOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type AttendanceSortInput = {
  appUserId?: InputMaybe<SortEnumType>;
  clockIn?: InputMaybe<SortEnumType>;
  clockOut?: InputMaybe<SortEnumType>;
  clockingType?: InputMaybe<SortEnumType>;
  currentDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  totalHoursWorked?: InputMaybe<SortEnumType>;
  user?: InputMaybe<AppUserSortInput>;
};

export type AverageClockTimeResult = {
  __typename?: "AverageClockTimeResult";
  averageClockIn?: Maybe<Scalars["DateTime"]["output"]>;
  averageClockOut?: Maybe<Scalars["DateTime"]["output"]>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  neq?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DashboardTotalSummary = {
  __typename?: "DashboardTotalSummary";
  employeesClockedIn: Scalars["Int"]["output"];
  employeesClockedOut: Scalars["Int"]["output"];
  totalAbsent: Scalars["Int"]["output"];
  totalEmployees: Scalars["Int"]["output"];
  totalLeaves: Scalars["Int"]["output"];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  neq?: InputMaybe<Scalars["DateTime"]["input"]>;
  ngt?: InputMaybe<Scalars["DateTime"]["input"]>;
  ngte?: InputMaybe<Scalars["DateTime"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  nlt?: InputMaybe<Scalars["DateTime"]["input"]>;
  nlte?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export enum DayOfWeek {
  Friday = "FRIDAY",
  Monday = "MONDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
  Thursday = "THURSDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
}

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Decimal"]["input"]>>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  neq?: InputMaybe<Scalars["Decimal"]["input"]>;
  ngt?: InputMaybe<Scalars["Decimal"]["input"]>;
  ngte?: InputMaybe<Scalars["Decimal"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Decimal"]["input"]>>>;
  nlt?: InputMaybe<Scalars["Decimal"]["input"]>;
  nlte?: InputMaybe<Scalars["Decimal"]["input"]>;
};

export type EntryExitLog = {
  __typename?: "EntryExitLog";
  appUserId?: Maybe<Scalars["Int"]["output"]>;
  attendance?: Maybe<Attendance>;
  attendanceId: Scalars["Int"]["output"];
  currentDate?: Maybe<Scalars["LocalDate"]["output"]>;
  entryTime?: Maybe<Scalars["DateTime"]["output"]>;
  exitTime?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  totalExitTime?: Maybe<Scalars["Int"]["output"]>;
  user?: Maybe<AppUser>;
};

export type EntryExitLogFilterInput = {
  and?: InputMaybe<Array<EntryExitLogFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  attendance?: InputMaybe<AttendanceFilterInput>;
  attendanceId?: InputMaybe<IntOperationFilterInput>;
  currentDate?: InputMaybe<LocalDateOperationFilterInput>;
  entryTime?: InputMaybe<DateTimeOperationFilterInput>;
  exitTime?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<EntryExitLogFilterInput>>;
  totalExitTime?: InputMaybe<IntOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type GraphDataResults = {
  __typename?: "GraphDataResults";
  absent: Scalars["Int"]["output"];
  clockedInCount: Scalars["Int"]["output"];
  day: DayOfWeek;
  onLeave: Scalars["Int"]["output"];
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  neq?: InputMaybe<Scalars["Int"]["input"]>;
  ngt?: InputMaybe<Scalars["Int"]["input"]>;
  ngte?: InputMaybe<Scalars["Int"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  nlt?: InputMaybe<Scalars["Int"]["input"]>;
  nlte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type LateEmployees = {
  __typename?: "LateEmployees";
  employeeName?: Maybe<Scalars["String"]["output"]>;
  timeOfDay?: Maybe<Scalars["DateTime"]["output"]>;
};

export type Leave = {
  __typename?: "Leave";
  appUserId: Scalars["Int"]["output"];
  approvalStatus?: Maybe<Scalars["String"]["output"]>;
  daysRequested?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  employeeName?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  startDate?: Maybe<Scalars["DateTime"]["output"]>;
  user?: Maybe<AppUser>;
};

export type LeaveFilterInput = {
  and?: InputMaybe<Array<LeaveFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  approvalStatus?: InputMaybe<StringOperationFilterInput>;
  daysRequested?: InputMaybe<IntOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  employeeName?: InputMaybe<StringOperationFilterInput>;
  endDate?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<LeaveFilterInput>>;
  startDate?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type ListFilterInputTypeOfAppUserRoleFilterInput = {
  all?: InputMaybe<AppUserRoleFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<AppUserRoleFilterInput>;
  some?: InputMaybe<AppUserRoleFilterInput>;
};

export type ListFilterInputTypeOfAttendanceFilterInput = {
  all?: InputMaybe<AttendanceFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<AttendanceFilterInput>;
  some?: InputMaybe<AttendanceFilterInput>;
};

export type ListFilterInputTypeOfEntryExitLogFilterInput = {
  all?: InputMaybe<EntryExitLogFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<EntryExitLogFilterInput>;
  some?: InputMaybe<EntryExitLogFilterInput>;
};

export type ListFilterInputTypeOfLeaveFilterInput = {
  all?: InputMaybe<LeaveFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<LeaveFilterInput>;
  some?: InputMaybe<LeaveFilterInput>;
};

export type ListFilterInputTypeOfRefreshTokenFilterInput = {
  all?: InputMaybe<RefreshTokenFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<RefreshTokenFilterInput>;
  some?: InputMaybe<RefreshTokenFilterInput>;
};

export type ListFilterInputTypeOfRequestLogFilterInput = {
  all?: InputMaybe<RequestLogFilterInput>;
  any?: InputMaybe<Scalars["Boolean"]["input"]>;
  none?: InputMaybe<RequestLogFilterInput>;
  some?: InputMaybe<RequestLogFilterInput>;
};

export type LocalDateOperationFilterInput = {
  eq?: InputMaybe<Scalars["LocalDate"]["input"]>;
  gt?: InputMaybe<Scalars["LocalDate"]["input"]>;
  gte?: InputMaybe<Scalars["LocalDate"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["LocalDate"]["input"]>>>;
  lt?: InputMaybe<Scalars["LocalDate"]["input"]>;
  lte?: InputMaybe<Scalars["LocalDate"]["input"]>;
  neq?: InputMaybe<Scalars["LocalDate"]["input"]>;
  ngt?: InputMaybe<Scalars["LocalDate"]["input"]>;
  ngte?: InputMaybe<Scalars["LocalDate"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["LocalDate"]["input"]>>>;
  nlt?: InputMaybe<Scalars["LocalDate"]["input"]>;
  nlte?: InputMaybe<Scalars["LocalDate"]["input"]>;
};

export type MostHoursWastedByEmployee = {
  __typename?: "MostHoursWastedByEmployee";
  employeeName?: Maybe<Scalars["String"]["output"]>;
  totalWastedHours?: Maybe<Scalars["Decimal"]["output"]>;
};

export type MostHoursWorkedByEmployee = {
  __typename?: "MostHoursWorkedByEmployee";
  employeeName?: Maybe<Scalars["String"]["output"]>;
  totalWorkingHours?: Maybe<Scalars["Decimal"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createAttendance: Attendance;
  createManualLog: RequestLog;
  createRequest: Scalars["String"]["output"];
  createUser: AppUser;
  deleteAttendance: Scalars["Boolean"]["output"];
  deleteRequest: Scalars["String"]["output"];
  deleteUser: Scalars["Boolean"]["output"];
  geofenceClockIn: Scalars["String"]["output"];
  geofenceClockOut: Scalars["String"]["output"];
  login: UserLoginResponse;
  loginForForgottenPassword: UserLoginResponse;
  resetPassword: UserResetPasswordResponse;
  updateAttendance?: Maybe<Attendance>;
  updateRequest: Scalars["String"]["output"];
  updateUser?: Maybe<AppUser>;
};

export type MutationCreateAttendanceArgs = {
  appuserid: Scalars["Int"]["input"];
  clockin: Scalars["DateTime"]["input"];
  clockout: Scalars["DateTime"]["input"];
  currentdate: Scalars["LocalDate"]["input"];
  status: Scalars["String"]["input"];
  totalhoursworked: Scalars["Int"]["input"];
};

export type MutationCreateManualLogArgs = {
  adminId: Scalars["Int"]["input"];
  adminName: Scalars["String"]["input"];
  approvalStatus: Scalars["String"]["input"];
  clockIn: Scalars["DateTime"]["input"];
  clockOut: Scalars["DateTime"]["input"];
  employeeId: Scalars["Int"]["input"];
  employeeName: Scalars["String"]["input"];
  reason: Scalars["String"]["input"];
};

export type MutationCreateRequestArgs = {
  reason: Scalars["String"]["input"];
  userid: Scalars["Int"]["input"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"]["input"];
  employeeName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
  staffId: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationDeleteAttendanceArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteRequestArgs = {
  requestId: Scalars["Int"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationGeofenceClockInArgs = {
  clockinUtc: Scalars["DateTime"]["input"];
  id: Scalars["Int"]["input"];
};

export type MutationGeofenceClockOutArgs = {
  clockoutUtc: Scalars["DateTime"]["input"];
  id: Scalars["Int"]["input"];
};

export type MutationLoginArgs = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationLoginForForgottenPasswordArgs = {
  email: Scalars["String"]["input"];
  phoneno: Scalars["String"]["input"];
  staffid: Scalars["String"]["input"];
};

export type MutationResetPasswordArgs = {
  password: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MutationUpdateAttendanceArgs = {
  appuserid: Scalars["Int"]["input"];
  clockin: Scalars["DateTime"]["input"];
  clockout: Scalars["DateTime"]["input"];
  currentdate: Scalars["LocalDate"]["input"];
  status: Scalars["String"]["input"];
  totalhoursworked: Scalars["Int"]["input"];
};

export type MutationUpdateRequestArgs = {
  reason: Scalars["String"]["input"];
  requestId: Scalars["Int"]["input"];
};

export type MutationUpdateUserArgs = {
  email: Scalars["String"]["input"];
  employeeName: Scalars["String"]["input"];
  id: Scalars["Int"]["input"];
  password: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
  staffId: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type PunctualEmployees = {
  __typename?: "PunctualEmployees";
  employeeName?: Maybe<Scalars["String"]["output"]>;
  timeOfDay?: Maybe<Scalars["DateTime"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  attendanceByUserId: Array<Attendance>;
  attendances: Array<Attendance>;
  averageClockTime: AverageClockTimeResult;
  dashboardTotalStats: DashboardTotalSummary;
  graphData: Array<GraphDataResults>;
  lateEmployees: Array<LateEmployees>;
  manualLogs: Array<RequestLog>;
  mostHoursWorked: Array<MostHoursWorkedByEmployee>;
  mostWastedHours: Array<MostHoursWastedByEmployee>;
  punctualEmployees: Array<PunctualEmployees>;
  requestLogs: Array<RequestLog>;
  requestLogsByUserId: Array<RequestLog>;
  userById?: Maybe<AppUser>;
  users: Array<AppUser>;
  usersOnLeave: Array<AppUser>;
  usersOnLeaveToday: Array<AppUser>;
  usersWithRoles: Array<UserWithRoleResponse>;
  workHoursSummary: WorkingHours;
};

export type QueryAttendanceByUserIdArgs = {
  username: Scalars["String"]["input"];
};

export type QueryAttendancesArgs = {
  order?: InputMaybe<Array<AttendanceSortInput>>;
  where?: InputMaybe<AttendanceFilterInput>;
};

export type QueryAverageClockTimeArgs = {
  endDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  startDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
};

export type QueryDashboardTotalStatsArgs = {
  endDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  startDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
};

export type QueryGraphDataArgs = {
  endDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  startDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
};

export type QueryLateEmployeesArgs = {
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
};

export type QueryManualLogsArgs = {
  order?: InputMaybe<Array<RequestLogSortInput>>;
  where?: InputMaybe<RequestLogFilterInput>;
};

export type QueryMostHoursWorkedArgs = {
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
};

export type QueryMostWastedHoursArgs = {
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
};

export type QueryPunctualEmployeesArgs = {
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
};

export type QueryRequestLogsArgs = {
  order?: InputMaybe<Array<RequestLogSortInput>>;
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
  where?: InputMaybe<RequestLogFilterInput>;
};

export type QueryRequestLogsByUserIdArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUserByIdArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUsersArgs = {
  order?: InputMaybe<Array<AppUserSortInput>>;
  where?: InputMaybe<AppUserFilterInput>;
};

export type QueryUsersOnLeaveArgs = {
  endDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  startDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
};

export type QueryUsersWithRolesArgs = {
  order?: InputMaybe<Array<UserWithRoleResponseSortInput>>;
  where?: InputMaybe<UserWithRoleResponseFilterInput>;
};

export type QueryWorkHoursSummaryArgs = {
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
};

export type RefreshToken = {
  __typename?: "RefreshToken";
  appUserId: Scalars["Int"]["output"];
  expires: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  isRevoked: Scalars["Boolean"]["output"];
  isUsed: Scalars["Boolean"]["output"];
  token: Scalars["String"]["output"];
  user?: Maybe<AppUser>;
};

export type RefreshTokenFilterInput = {
  and?: InputMaybe<Array<RefreshTokenFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  expires?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  isRevoked?: InputMaybe<BooleanOperationFilterInput>;
  isUsed?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<RefreshTokenFilterInput>>;
  token?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type RequestLog = {
  __typename?: "RequestLog";
  actionBy?: Maybe<Scalars["String"]["output"]>;
  appUserId: Scalars["Int"]["output"];
  approvalStatus?: Maybe<Scalars["String"]["output"]>;
  clockIn?: Maybe<Scalars["DateTime"]["output"]>;
  clockOut?: Maybe<Scalars["DateTime"]["output"]>;
  currentDate?: Maybe<Scalars["LocalDate"]["output"]>;
  employeeName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  timeOfDay?: Maybe<Scalars["DateTime"]["output"]>;
  user?: Maybe<AppUser>;
};

export type RequestLogFilterInput = {
  actionBy?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<RequestLogFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  approvalStatus?: InputMaybe<StringOperationFilterInput>;
  clockIn?: InputMaybe<DateTimeOperationFilterInput>;
  clockOut?: InputMaybe<DateTimeOperationFilterInput>;
  currentDate?: InputMaybe<LocalDateOperationFilterInput>;
  employeeName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<RequestLogFilterInput>>;
  reason?: InputMaybe<StringOperationFilterInput>;
  timeOfDay?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type RequestLogSortInput = {
  actionBy?: InputMaybe<SortEnumType>;
  appUserId?: InputMaybe<SortEnumType>;
  approvalStatus?: InputMaybe<SortEnumType>;
  clockIn?: InputMaybe<SortEnumType>;
  clockOut?: InputMaybe<SortEnumType>;
  currentDate?: InputMaybe<SortEnumType>;
  employeeName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  reason?: InputMaybe<SortEnumType>;
  timeOfDay?: InputMaybe<SortEnumType>;
  user?: InputMaybe<AppUserSortInput>;
};

export enum SortEnumType {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  ncontains?: InputMaybe<Scalars["String"]["input"]>;
  nendsWith?: InputMaybe<Scalars["String"]["input"]>;
  neq?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  nstartsWith?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserLoginResponse = {
  __typename?: "UserLoginResponse";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isPasswordReset: Scalars["Boolean"]["output"];
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  resetToken?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type UserResetPasswordResponse = {
  __typename?: "UserResetPasswordResponse";
  isPasswordReset?: Maybe<Scalars["Boolean"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UserWithRoleResponse = {
  __typename?: "UserWithRoleResponse";
  email?: Maybe<Scalars["String"]["output"]>;
  employeeName?: Maybe<Scalars["String"]["output"]>;
  employeeType?: Maybe<Scalars["String"]["output"]>;
  roleId: Scalars["Int"]["output"];
  roleName?: Maybe<Scalars["String"]["output"]>;
  staffId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["Int"]["output"];
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type UserWithRoleResponseFilterInput = {
  and?: InputMaybe<Array<UserWithRoleResponseFilterInput>>;
  email?: InputMaybe<StringOperationFilterInput>;
  employeeName?: InputMaybe<StringOperationFilterInput>;
  employeeType?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserWithRoleResponseFilterInput>>;
  roleId?: InputMaybe<IntOperationFilterInput>;
  roleName?: InputMaybe<StringOperationFilterInput>;
  staffId?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StringOperationFilterInput>;
  userId?: InputMaybe<IntOperationFilterInput>;
  userName?: InputMaybe<StringOperationFilterInput>;
};

export type UserWithRoleResponseSortInput = {
  email?: InputMaybe<SortEnumType>;
  employeeName?: InputMaybe<SortEnumType>;
  employeeType?: InputMaybe<SortEnumType>;
  roleId?: InputMaybe<SortEnumType>;
  roleName?: InputMaybe<SortEnumType>;
  staffId?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  userId?: InputMaybe<SortEnumType>;
  userName?: InputMaybe<SortEnumType>;
};

export type WorkingHours = {
  __typename?: "WorkingHours";
  totalOffHours: Scalars["Decimal"]["output"];
  totalWorkingHours: Scalars["Decimal"]["output"];
};

export type LoginMutationVariables = Exact<{
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserLoginResponse";
    accessToken?: string | null;
    id?: string | null;
    userName?: string | null;
    refreshToken?: string | null;
    role?: string | null;
    isPasswordReset: boolean;
    resetToken?: string | null;
  };
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  staffid: Scalars["String"]["input"];
  phoneNumber: Scalars["String"]["input"];
}>;

export type ForgotPasswordMutation = {
  __typename?: "Mutation";
  loginForForgottenPassword: {
    __typename?: "UserLoginResponse";
    id?: string | null;
    accessToken?: string | null;
    isPasswordReset: boolean;
    role?: string | null;
    userName?: string | null;
    refreshToken?: string | null;
    resetToken?: string | null;
  };
};

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type ResetPasswordMutation = {
  __typename?: "Mutation";
  resetPassword: {
    __typename?: "UserResetPasswordResponse";
    message?: string | null;
    isPasswordReset?: boolean | null;
  };
};

export type GetAllAttendanceQueryVariables = Exact<{
  date?: InputMaybe<Scalars["LocalDate"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAllAttendanceQuery = {
  __typename?: "Query";
  attendances: Array<{
    __typename?: "Attendance";
    clockIn?: any | null;
    clockOut?: any | null;
    currentDate?: any | null;
    totalHoursWorked?: any | null;
    user?: {
      __typename?: "AppUser";
      id: number;
      staffId?: string | null;
      employeeName?: string | null;
    } | null;
  }>;
};

export type GetAttendanceByDateQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
  endDate?: InputMaybe<Scalars["LocalDate"]["input"]>;
}>;

export type GetAttendanceByDateQuery = {
  __typename?: "Query";
  attendances: Array<{
    __typename?: "Attendance";
    id: number;
    clockIn?: any | null;
    clockOut?: any | null;
    clockingType: boolean;
    totalHoursWorked?: any | null;
    user?: {
      __typename?: "AppUser";
      staffId?: string | null;
      employeeName?: string | null;
      email?: string | null;
    } | null;
  }>;
};

export type TotalStatsQueryVariables = Exact<{ [key: string]: never }>;

export type TotalStatsQuery = {
  __typename?: "Query";
  dashboardTotalStats: {
    __typename?: "DashboardTotalSummary";
    totalEmployees: number;
    employeesClockedIn: number;
    employeesClockedOut: number;
    totalAbsent: number;
    totalLeaves: number;
  };
};

export type ClockTimeQueryVariables = Exact<{ [key: string]: never }>;

export type ClockTimeQuery = {
  __typename?: "Query";
  averageClockTime: {
    __typename?: "AverageClockTimeResult";
    averageClockIn?: any | null;
    averageClockOut?: any | null;
  };
};

export type AttendanceGraphDataQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type AttendanceGraphDataQuery = {
  __typename?: "Query";
  graphData: Array<{
    __typename?: "GraphDataResults";
    day: DayOfWeek;
    clockedInCount: number;
    absent: number;
    onLeave: number;
  }>;
};

export type MostPunctualQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type MostPunctualQuery = {
  __typename?: "Query";
  punctualEmployees: Array<{
    __typename?: "PunctualEmployees";
    employeeName?: string | null;
    timeOfDay?: any | null;
  }>;
};

export type LateEmployeesQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type LateEmployeesQuery = {
  __typename?: "Query";
  lateEmployees: Array<{
    __typename?: "LateEmployees";
    employeeName?: string | null;
    timeOfDay?: any | null;
  }>;
};

export type MostUnproductiveQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type MostUnproductiveQuery = {
  __typename?: "Query";
  mostWastedHours: Array<{
    __typename?: "MostHoursWastedByEmployee";
    employeeName?: string | null;
    totalWastedHours?: any | null;
  }>;
};

export type DashboardRequestsQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type DashboardRequestsQuery = {
  __typename?: "Query";
  requestLogs: Array<{
    __typename?: "RequestLog";
    employeeName?: string | null;
    timeOfDay?: any | null;
  }>;
};

export type WorkHourSummaryQueryVariables = Exact<{
  startDay: Scalars["LocalDate"]["input"];
  stopDate: Scalars["LocalDate"]["input"];
}>;

export type WorkHourSummaryQuery = {
  __typename?: "Query";
  workHoursSummary: {
    __typename?: "WorkingHours";
    totalWorkingHours: any;
    totalOffHours: any;
  };
};

export type RecentRequestsQueryVariables = Exact<{
  startday: Scalars["LocalDate"]["input"];
  stopdate: Scalars["LocalDate"]["input"];
}>;

export type RecentRequestsQuery = {
  __typename?: "Query";
  requestLogs: Array<{
    __typename?: "RequestLog";
    employeeName?: string | null;
    reason?: string | null;
    timeOfDay?: any | null;
  }>;
};

export type LogHistroyQueryVariables = Exact<{ [key: string]: never }>;

export type LogHistroyQuery = {
  __typename?: "Query";
  manualLogs: Array<{
    __typename?: "RequestLog";
    employeeName?: string | null;
    currentDate?: any | null;
    timeOfDay?: any | null;
    reason?: string | null;
    clockIn?: any | null;
    clockOut?: any | null;
    actionBy?: string | null;
  }>;
};

export type GetUsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: Array<{
    __typename?: "AppUser";
    staffId?: string | null;
    email?: string | null;
    employeeName?: string | null;
    employeeType?: string | null;
    userRoles: Array<{
      __typename?: "AppUserRole";
      role: { __typename?: "AppRole"; name?: string | null };
    }>;
    leaves?: Array<{
      __typename?: "Leave";
      approvalStatus?: string | null;
    }> | null;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  userById?: {
    __typename?: "AppUser";
    id: number;
    staffId?: string | null;
    userName?: string | null;
    employeeName?: string | null;
    email?: string | null;
    status?: string | null;
    phoneNumber?: string | null;
  } | null;
};

export const LoginDocument = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      id
      userName
      refreshToken
      role
      isPasswordReset
      resetToken
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword(
    $email: String!
    $staffid: String!
    $phoneNumber: String!
  ) {
    loginForForgottenPassword(
      email: $email
      staffid: $staffid
      phoneno: $phoneNumber
    ) {
      id
      accessToken
      isPasswordReset
      role
      userName
      refreshToken
      resetToken
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      staffid: // value for 'staffid'
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword(
    $token: String!
    $username: String!
    $password: String!
  ) {
    resetPassword(token: $token, username: $username, password: $password) {
      message
      isPasswordReset
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const GetAllAttendanceDocument = gql`
  query getAllAttendance($date: LocalDate, $search: String) {
    attendances(
      where: {
        currentDate: { eq: $date }
        or: [
          { user: { employeeName: { contains: $search } } }
          { user: { staffId: { contains: $search } } }
        ]
      }
    ) {
      clockIn
      clockOut
      currentDate
      totalHoursWorked
      user {
        id
        staffId
        employeeName
      }
    }
  }
`;

/**
 * __useGetAllAttendanceQuery__
 *
 * To run a query within a React component, call `useGetAllAttendanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAttendanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAttendanceQuery({
 *   variables: {
 *      date: // value for 'date'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetAllAttendanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllAttendanceQuery,
    GetAllAttendanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllAttendanceQuery, GetAllAttendanceQueryVariables>(
    GetAllAttendanceDocument,
    options
  );
}
export function useGetAllAttendanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllAttendanceQuery,
    GetAllAttendanceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllAttendanceQuery,
    GetAllAttendanceQueryVariables
  >(GetAllAttendanceDocument, options);
}
export function useGetAllAttendanceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllAttendanceQuery,
        GetAllAttendanceQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllAttendanceQuery,
    GetAllAttendanceQueryVariables
  >(GetAllAttendanceDocument, options);
}
export type GetAllAttendanceQueryHookResult = ReturnType<
  typeof useGetAllAttendanceQuery
>;
export type GetAllAttendanceLazyQueryHookResult = ReturnType<
  typeof useGetAllAttendanceLazyQuery
>;
export type GetAllAttendanceSuspenseQueryHookResult = ReturnType<
  typeof useGetAllAttendanceSuspenseQuery
>;
export type GetAllAttendanceQueryResult = Apollo.QueryResult<
  GetAllAttendanceQuery,
  GetAllAttendanceQueryVariables
>;
export const GetAttendanceByDateDocument = gql`
  query getAttendanceByDate($startDate: LocalDate, $endDate: LocalDate) {
    attendances(
      where: { and: [{ currentDate: { gte: $startDate, lte: $endDate } }] }
    ) {
      id
      clockIn
      clockOut
      clockingType
      totalHoursWorked
      user {
        staffId
        employeeName
        email
      }
    }
  }
`;

/**
 * __useGetAttendanceByDateQuery__
 *
 * To run a query within a React component, call `useGetAttendanceByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAttendanceByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAttendanceByDateQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useGetAttendanceByDateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >(GetAttendanceByDateDocument, options);
}
export function useGetAttendanceByDateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >(GetAttendanceByDateDocument, options);
}
export function useGetAttendanceByDateSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAttendanceByDateQuery,
        GetAttendanceByDateQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >(GetAttendanceByDateDocument, options);
}
export type GetAttendanceByDateQueryHookResult = ReturnType<
  typeof useGetAttendanceByDateQuery
>;
export type GetAttendanceByDateLazyQueryHookResult = ReturnType<
  typeof useGetAttendanceByDateLazyQuery
>;
export type GetAttendanceByDateSuspenseQueryHookResult = ReturnType<
  typeof useGetAttendanceByDateSuspenseQuery
>;
export type GetAttendanceByDateQueryResult = Apollo.QueryResult<
  GetAttendanceByDateQuery,
  GetAttendanceByDateQueryVariables
>;
export const TotalStatsDocument = gql`
  query TotalStats {
    dashboardTotalStats {
      totalEmployees
      employeesClockedIn
      employeesClockedOut
      totalAbsent
      totalLeaves
    }
  }
`;

/**
 * __useTotalStatsQuery__
 *
 * To run a query within a React component, call `useTotalStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TotalStatsQuery,
    TotalStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TotalStatsQuery, TotalStatsQueryVariables>(
    TotalStatsDocument,
    options
  );
}
export function useTotalStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TotalStatsQuery,
    TotalStatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TotalStatsQuery, TotalStatsQueryVariables>(
    TotalStatsDocument,
    options
  );
}
export function useTotalStatsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<TotalStatsQuery, TotalStatsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<TotalStatsQuery, TotalStatsQueryVariables>(
    TotalStatsDocument,
    options
  );
}
export type TotalStatsQueryHookResult = ReturnType<typeof useTotalStatsQuery>;
export type TotalStatsLazyQueryHookResult = ReturnType<
  typeof useTotalStatsLazyQuery
>;
export type TotalStatsSuspenseQueryHookResult = ReturnType<
  typeof useTotalStatsSuspenseQuery
>;
export type TotalStatsQueryResult = Apollo.QueryResult<
  TotalStatsQuery,
  TotalStatsQueryVariables
>;
export const ClockTimeDocument = gql`
  query ClockTime {
    averageClockTime {
      averageClockIn
      averageClockOut
    }
  }
`;

/**
 * __useClockTimeQuery__
 *
 * To run a query within a React component, call `useClockTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useClockTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClockTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useClockTimeQuery(
  baseOptions?: Apollo.QueryHookOptions<ClockTimeQuery, ClockTimeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ClockTimeQuery, ClockTimeQueryVariables>(
    ClockTimeDocument,
    options
  );
}
export function useClockTimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClockTimeQuery,
    ClockTimeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ClockTimeQuery, ClockTimeQueryVariables>(
    ClockTimeDocument,
    options
  );
}
export function useClockTimeSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ClockTimeQuery, ClockTimeQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ClockTimeQuery, ClockTimeQueryVariables>(
    ClockTimeDocument,
    options
  );
}
export type ClockTimeQueryHookResult = ReturnType<typeof useClockTimeQuery>;
export type ClockTimeLazyQueryHookResult = ReturnType<
  typeof useClockTimeLazyQuery
>;
export type ClockTimeSuspenseQueryHookResult = ReturnType<
  typeof useClockTimeSuspenseQuery
>;
export type ClockTimeQueryResult = Apollo.QueryResult<
  ClockTimeQuery,
  ClockTimeQueryVariables
>;
export const AttendanceGraphDataDocument = gql`
  query attendanceGraphData($startDay: LocalDate!, $stopDate: LocalDate!) {
    graphData(startDate: $startDay, endDate: $stopDate) {
      day
      clockedInCount
      absent
      onLeave
    }
  }
`;

/**
 * __useAttendanceGraphDataQuery__
 *
 * To run a query within a React component, call `useAttendanceGraphDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttendanceGraphDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttendanceGraphDataQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useAttendanceGraphDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    AttendanceGraphDataQuery,
    AttendanceGraphDataQueryVariables
  > &
    (
      | { variables: AttendanceGraphDataQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AttendanceGraphDataQuery,
    AttendanceGraphDataQueryVariables
  >(AttendanceGraphDataDocument, options);
}
export function useAttendanceGraphDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AttendanceGraphDataQuery,
    AttendanceGraphDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AttendanceGraphDataQuery,
    AttendanceGraphDataQueryVariables
  >(AttendanceGraphDataDocument, options);
}
export function useAttendanceGraphDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        AttendanceGraphDataQuery,
        AttendanceGraphDataQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    AttendanceGraphDataQuery,
    AttendanceGraphDataQueryVariables
  >(AttendanceGraphDataDocument, options);
}
export type AttendanceGraphDataQueryHookResult = ReturnType<
  typeof useAttendanceGraphDataQuery
>;
export type AttendanceGraphDataLazyQueryHookResult = ReturnType<
  typeof useAttendanceGraphDataLazyQuery
>;
export type AttendanceGraphDataSuspenseQueryHookResult = ReturnType<
  typeof useAttendanceGraphDataSuspenseQuery
>;
export type AttendanceGraphDataQueryResult = Apollo.QueryResult<
  AttendanceGraphDataQuery,
  AttendanceGraphDataQueryVariables
>;
export const MostPunctualDocument = gql`
  query MostPunctual($startDay: LocalDate!, $stopDate: LocalDate!) {
    punctualEmployees(startday: $startDay, stopdate: $stopDate) {
      employeeName
      timeOfDay
    }
  }
`;

/**
 * __useMostPunctualQuery__
 *
 * To run a query within a React component, call `useMostPunctualQuery` and pass it any options that fit your needs.
 * When your component renders, `useMostPunctualQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMostPunctualQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useMostPunctualQuery(
  baseOptions: Apollo.QueryHookOptions<
    MostPunctualQuery,
    MostPunctualQueryVariables
  > &
    (
      | { variables: MostPunctualQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MostPunctualQuery, MostPunctualQueryVariables>(
    MostPunctualDocument,
    options
  );
}
export function useMostPunctualLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MostPunctualQuery,
    MostPunctualQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MostPunctualQuery, MostPunctualQueryVariables>(
    MostPunctualDocument,
    options
  );
}
export function useMostPunctualSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MostPunctualQuery,
        MostPunctualQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MostPunctualQuery, MostPunctualQueryVariables>(
    MostPunctualDocument,
    options
  );
}
export type MostPunctualQueryHookResult = ReturnType<
  typeof useMostPunctualQuery
>;
export type MostPunctualLazyQueryHookResult = ReturnType<
  typeof useMostPunctualLazyQuery
>;
export type MostPunctualSuspenseQueryHookResult = ReturnType<
  typeof useMostPunctualSuspenseQuery
>;
export type MostPunctualQueryResult = Apollo.QueryResult<
  MostPunctualQuery,
  MostPunctualQueryVariables
>;
export const LateEmployeesDocument = gql`
  query LateEmployees($startDay: LocalDate!, $stopDate: LocalDate!) {
    lateEmployees(startday: $startDay, stopdate: $stopDate) {
      employeeName
      timeOfDay
    }
  }
`;

/**
 * __useLateEmployeesQuery__
 *
 * To run a query within a React component, call `useLateEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLateEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLateEmployeesQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useLateEmployeesQuery(
  baseOptions: Apollo.QueryHookOptions<
    LateEmployeesQuery,
    LateEmployeesQueryVariables
  > &
    (
      | { variables: LateEmployeesQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LateEmployeesQuery, LateEmployeesQueryVariables>(
    LateEmployeesDocument,
    options
  );
}
export function useLateEmployeesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LateEmployeesQuery,
    LateEmployeesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LateEmployeesQuery, LateEmployeesQueryVariables>(
    LateEmployeesDocument,
    options
  );
}
export function useLateEmployeesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        LateEmployeesQuery,
        LateEmployeesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    LateEmployeesQuery,
    LateEmployeesQueryVariables
  >(LateEmployeesDocument, options);
}
export type LateEmployeesQueryHookResult = ReturnType<
  typeof useLateEmployeesQuery
>;
export type LateEmployeesLazyQueryHookResult = ReturnType<
  typeof useLateEmployeesLazyQuery
>;
export type LateEmployeesSuspenseQueryHookResult = ReturnType<
  typeof useLateEmployeesSuspenseQuery
>;
export type LateEmployeesQueryResult = Apollo.QueryResult<
  LateEmployeesQuery,
  LateEmployeesQueryVariables
>;
export const MostUnproductiveDocument = gql`
  query MostUnproductive($startDay: LocalDate!, $stopDate: LocalDate!) {
    mostWastedHours(startday: $startDay, stopdate: $stopDate) {
      employeeName
      totalWastedHours
    }
  }
`;

/**
 * __useMostUnproductiveQuery__
 *
 * To run a query within a React component, call `useMostUnproductiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useMostUnproductiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMostUnproductiveQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useMostUnproductiveQuery(
  baseOptions: Apollo.QueryHookOptions<
    MostUnproductiveQuery,
    MostUnproductiveQueryVariables
  > &
    (
      | { variables: MostUnproductiveQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MostUnproductiveQuery, MostUnproductiveQueryVariables>(
    MostUnproductiveDocument,
    options
  );
}
export function useMostUnproductiveLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MostUnproductiveQuery,
    MostUnproductiveQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MostUnproductiveQuery,
    MostUnproductiveQueryVariables
  >(MostUnproductiveDocument, options);
}
export function useMostUnproductiveSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MostUnproductiveQuery,
        MostUnproductiveQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MostUnproductiveQuery,
    MostUnproductiveQueryVariables
  >(MostUnproductiveDocument, options);
}
export type MostUnproductiveQueryHookResult = ReturnType<
  typeof useMostUnproductiveQuery
>;
export type MostUnproductiveLazyQueryHookResult = ReturnType<
  typeof useMostUnproductiveLazyQuery
>;
export type MostUnproductiveSuspenseQueryHookResult = ReturnType<
  typeof useMostUnproductiveSuspenseQuery
>;
export type MostUnproductiveQueryResult = Apollo.QueryResult<
  MostUnproductiveQuery,
  MostUnproductiveQueryVariables
>;
export const DashboardRequestsDocument = gql`
  query DashboardRequests($startDay: LocalDate!, $stopDate: LocalDate!) {
    requestLogs(startday: $startDay, stopdate: $stopDate) {
      employeeName
      timeOfDay
    }
  }
`;

/**
 * __useDashboardRequestsQuery__
 *
 * To run a query within a React component, call `useDashboardRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardRequestsQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useDashboardRequestsQuery(
  baseOptions: Apollo.QueryHookOptions<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  > &
    (
      | { variables: DashboardRequestsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
export function useDashboardRequestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
export function useDashboardRequestsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        DashboardRequestsQuery,
        DashboardRequestsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    DashboardRequestsQuery,
    DashboardRequestsQueryVariables
  >(DashboardRequestsDocument, options);
}
export type DashboardRequestsQueryHookResult = ReturnType<
  typeof useDashboardRequestsQuery
>;
export type DashboardRequestsLazyQueryHookResult = ReturnType<
  typeof useDashboardRequestsLazyQuery
>;
export type DashboardRequestsSuspenseQueryHookResult = ReturnType<
  typeof useDashboardRequestsSuspenseQuery
>;
export type DashboardRequestsQueryResult = Apollo.QueryResult<
  DashboardRequestsQuery,
  DashboardRequestsQueryVariables
>;
export const WorkHourSummaryDocument = gql`
  query WorkHourSummary($startDay: LocalDate!, $stopDate: LocalDate!) {
    workHoursSummary(startday: $startDay, stopdate: $stopDate) {
      totalWorkingHours
      totalOffHours
    }
  }
`;

/**
 * __useWorkHourSummaryQuery__
 *
 * To run a query within a React component, call `useWorkHourSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkHourSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkHourSummaryQuery({
 *   variables: {
 *      startDay: // value for 'startDay'
 *      stopDate: // value for 'stopDate'
 *   },
 * });
 */
export function useWorkHourSummaryQuery(
  baseOptions: Apollo.QueryHookOptions<
    WorkHourSummaryQuery,
    WorkHourSummaryQueryVariables
  > &
    (
      | { variables: WorkHourSummaryQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WorkHourSummaryQuery, WorkHourSummaryQueryVariables>(
    WorkHourSummaryDocument,
    options
  );
}
export function useWorkHourSummaryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WorkHourSummaryQuery,
    WorkHourSummaryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    WorkHourSummaryQuery,
    WorkHourSummaryQueryVariables
  >(WorkHourSummaryDocument, options);
}
export function useWorkHourSummarySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        WorkHourSummaryQuery,
        WorkHourSummaryQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    WorkHourSummaryQuery,
    WorkHourSummaryQueryVariables
  >(WorkHourSummaryDocument, options);
}
export type WorkHourSummaryQueryHookResult = ReturnType<
  typeof useWorkHourSummaryQuery
>;
export type WorkHourSummaryLazyQueryHookResult = ReturnType<
  typeof useWorkHourSummaryLazyQuery
>;
export type WorkHourSummarySuspenseQueryHookResult = ReturnType<
  typeof useWorkHourSummarySuspenseQuery
>;
export type WorkHourSummaryQueryResult = Apollo.QueryResult<
  WorkHourSummaryQuery,
  WorkHourSummaryQueryVariables
>;
export const RecentRequestsDocument = gql`
  query recentRequests($startday: LocalDate!, $stopdate: LocalDate!) {
    requestLogs(startday: $startday, stopdate: $stopdate) {
      employeeName
      reason
      timeOfDay
    }
  }
`;

/**
 * __useRecentRequestsQuery__
 *
 * To run a query within a React component, call `useRecentRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentRequestsQuery({
 *   variables: {
 *      startday: // value for 'startday'
 *      stopdate: // value for 'stopdate'
 *   },
 * });
 */
export function useRecentRequestsQuery(
  baseOptions: Apollo.QueryHookOptions<
    RecentRequestsQuery,
    RecentRequestsQueryVariables
  > &
    (
      | { variables: RecentRequestsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecentRequestsQuery, RecentRequestsQueryVariables>(
    RecentRequestsDocument,
    options
  );
}
export function useRecentRequestsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecentRequestsQuery,
    RecentRequestsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecentRequestsQuery, RecentRequestsQueryVariables>(
    RecentRequestsDocument,
    options
  );
}
export function useRecentRequestsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        RecentRequestsQuery,
        RecentRequestsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    RecentRequestsQuery,
    RecentRequestsQueryVariables
  >(RecentRequestsDocument, options);
}
export type RecentRequestsQueryHookResult = ReturnType<
  typeof useRecentRequestsQuery
>;
export type RecentRequestsLazyQueryHookResult = ReturnType<
  typeof useRecentRequestsLazyQuery
>;
export type RecentRequestsSuspenseQueryHookResult = ReturnType<
  typeof useRecentRequestsSuspenseQuery
>;
export type RecentRequestsQueryResult = Apollo.QueryResult<
  RecentRequestsQuery,
  RecentRequestsQueryVariables
>;
export const LogHistroyDocument = gql`
  query LogHistroy {
    manualLogs {
      employeeName
      currentDate
      timeOfDay
      reason
      clockIn
      clockOut
      actionBy
    }
  }
`;

/**
 * __useLogHistroyQuery__
 *
 * To run a query within a React component, call `useLogHistroyQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogHistroyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogHistroyQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogHistroyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LogHistroyQuery,
    LogHistroyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LogHistroyQuery, LogHistroyQueryVariables>(
    LogHistroyDocument,
    options
  );
}
export function useLogHistroyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LogHistroyQuery,
    LogHistroyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LogHistroyQuery, LogHistroyQueryVariables>(
    LogHistroyDocument,
    options
  );
}
export function useLogHistroySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<LogHistroyQuery, LogHistroyQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<LogHistroyQuery, LogHistroyQueryVariables>(
    LogHistroyDocument,
    options
  );
}
export type LogHistroyQueryHookResult = ReturnType<typeof useLogHistroyQuery>;
export type LogHistroyLazyQueryHookResult = ReturnType<
  typeof useLogHistroyLazyQuery
>;
export type LogHistroySuspenseQueryHookResult = ReturnType<
  typeof useLogHistroySuspenseQuery
>;
export type LogHistroyQueryResult = Apollo.QueryResult<
  LogHistroyQuery,
  LogHistroyQueryVariables
>;
export const GetUsersDocument = gql`
  query getUsers($search: String) {
    users(
      where: {
        or: [
          { employeeName: { contains: $search } }
          { staffId: { contains: $search } }
        ]
      }
    ) {
      staffId
      email
      employeeName
      userRoles {
        role {
          name
        }
      }
      leaves {
        approvalStatus
      }
      employeeType
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersSuspenseQueryHookResult = ReturnType<
  typeof useGetUsersSuspenseQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetUserByIdDocument = gql`
  query getUserById($id: Int!) {
    userById(id: $id) {
      id
      staffId
      userName
      employeeName
      email
      status
      phoneNumber
    }
  }
`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  > &
    (
      | { variables: GetUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetUserByIdSuspenseQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
