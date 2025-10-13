import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
};

export type ActivityLogger = {
  __typename?: 'ActivityLogger';
  activityDescription?: Maybe<Scalars['String']['output']>;
  activityLog?: Maybe<Scalars['String']['output']>;
  appUserId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  user?: Maybe<AppUser>;
};

export type ActivityLoggerFilterInput = {
  activityDescription?: InputMaybe<StringOperationFilterInput>;
  activityLog?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<ActivityLoggerFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ActivityLoggerFilterInput>>;
  user?: InputMaybe<AppUserFilterInput>;
};

export type AppUser = {
  __typename?: 'AppUser';
  accessFailedCount: Scalars['Int']['output'];
  activityLogger?: Maybe<Array<ActivityLogger>>;
  attendances?: Maybe<Array<Attendance>>;
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  employeeName?: Maybe<Scalars['String']['output']>;
  employeeType?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  leaves?: Maybe<Array<Leave>>;
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  requests?: Maybe<Array<Request>>;
  securityStamp?: Maybe<Scalars['String']['output']>;
  staffId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  userName?: Maybe<Scalars['String']['output']>;
};

export type AppUserFilterInput = {
  accessFailedCount?: InputMaybe<IntOperationFilterInput>;
  activityLogger?: InputMaybe<ListFilterInputTypeOfActivityLoggerFilterInput>;
  and?: InputMaybe<Array<AppUserFilterInput>>;
  attendances?: InputMaybe<ListFilterInputTypeOfAttendanceFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  employeeName?: InputMaybe<StringOperationFilterInput>;
  employeeType?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
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
  requests?: InputMaybe<ListFilterInputTypeOfRequestFilterInput>;
  securityStamp?: InputMaybe<StringOperationFilterInput>;
  staffId?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StringOperationFilterInput>;
  twoFactorEnabled?: InputMaybe<BooleanOperationFilterInput>;
  userName?: InputMaybe<StringOperationFilterInput>;
};

export type AppUserSortInput = {
  accessFailedCount?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  employeeName?: InputMaybe<SortEnumType>;
  employeeType?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
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
  __typename?: 'Attendance';
  appUserId: Scalars['Int']['output'];
  clockIn: Scalars['DateTime']['output'];
  clockOut: Scalars['DateTime']['output'];
  currentDate: Scalars['LocalDate']['output'];
  id: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
  totalHoursWorked?: Maybe<Scalars['Decimal']['output']>;
  user?: Maybe<AppUser>;
};

export type AttendanceFilterInput = {
  and?: InputMaybe<Array<AttendanceFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  clockIn?: InputMaybe<DateTimeOperationFilterInput>;
  clockOut?: InputMaybe<DateTimeOperationFilterInput>;
  currentDate?: InputMaybe<LocalDateOperationFilterInput>;
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
  currentDate?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  totalHoursWorked?: InputMaybe<SortEnumType>;
  user?: InputMaybe<AppUserSortInput>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type Leave = {
  __typename?: 'Leave';
  appUserId: Scalars['Int']['output'];
  approvalStatus?: Maybe<Scalars['String']['output']>;
  daysRequested?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
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

export type ListFilterInputTypeOfActivityLoggerFilterInput = {
  all?: InputMaybe<ActivityLoggerFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ActivityLoggerFilterInput>;
  some?: InputMaybe<ActivityLoggerFilterInput>;
};

export type ListFilterInputTypeOfAttendanceFilterInput = {
  all?: InputMaybe<AttendanceFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AttendanceFilterInput>;
  some?: InputMaybe<AttendanceFilterInput>;
};

export type ListFilterInputTypeOfLeaveFilterInput = {
  all?: InputMaybe<LeaveFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<LeaveFilterInput>;
  some?: InputMaybe<LeaveFilterInput>;
};

export type ListFilterInputTypeOfRequestFilterInput = {
  all?: InputMaybe<RequestFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<RequestFilterInput>;
  some?: InputMaybe<RequestFilterInput>;
};

export type LocalDateOperationFilterInput = {
  eq?: InputMaybe<Scalars['LocalDate']['input']>;
  gt?: InputMaybe<Scalars['LocalDate']['input']>;
  gte?: InputMaybe<Scalars['LocalDate']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  lt?: InputMaybe<Scalars['LocalDate']['input']>;
  lte?: InputMaybe<Scalars['LocalDate']['input']>;
  neq?: InputMaybe<Scalars['LocalDate']['input']>;
  ngt?: InputMaybe<Scalars['LocalDate']['input']>;
  ngte?: InputMaybe<Scalars['LocalDate']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['LocalDate']['input']>>>;
  nlt?: InputMaybe<Scalars['LocalDate']['input']>;
  nlte?: InputMaybe<Scalars['LocalDate']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttendance: Attendance;
  createUser: AppUser;
  deleteAttendance: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  login: UserLoginResponse;
  loginForForgottenPassword: UserLoginResponse;
  resetPassword: Scalars['String']['output'];
  updateAttendance?: Maybe<Attendance>;
  updateUser?: Maybe<AppUser>;
};


export type MutationCreateAttendanceArgs = {
  appuserid: Scalars['Int']['input'];
  clockin: Scalars['DateTime']['input'];
  clockout: Scalars['DateTime']['input'];
  currentdate: Scalars['LocalDate']['input'];
  status: Scalars['String']['input'];
  totalhoursworked: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  employeeName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  staffId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};


export type MutationDeleteAttendanceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginForForgottenPasswordArgs = {
  email: Scalars['String']['input'];
  phoneno: Scalars['String']['input'];
  staffid: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateAttendanceArgs = {
  appuserid: Scalars['Int']['input'];
  clockin: Scalars['DateTime']['input'];
  clockout: Scalars['DateTime']['input'];
  currentdate: Scalars['LocalDate']['input'];
  status: Scalars['String']['input'];
  totalhoursworked: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  email: Scalars['String']['input'];
  employeeName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  staffId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  attendanceByUserId: Array<Attendance>;
  attendances: Array<Attendance>;
  userById?: Maybe<AppUser>;
  users: Array<AppUser>;
};


export type QueryAttendanceByUserIdArgs = {
  username: Scalars['String']['input'];
};


export type QueryAttendancesArgs = {
  order?: InputMaybe<Array<AttendanceSortInput>>;
  where?: InputMaybe<AttendanceFilterInput>;
};


export type QueryUserByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  order?: InputMaybe<Array<AppUserSortInput>>;
  where?: InputMaybe<AppUserFilterInput>;
};

export type Request = {
  __typename?: 'Request';
  appUserId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  requestDescription?: Maybe<Scalars['String']['output']>;
  user?: Maybe<AppUser>;
};

export type RequestFilterInput = {
  and?: InputMaybe<Array<RequestFilterInput>>;
  appUserId?: InputMaybe<IntOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<RequestFilterInput>>;
  requestDescription?: InputMaybe<StringOperationFilterInput>;
  user?: InputMaybe<AppUserFilterInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginResponse = {
  __typename?: 'UserLoginResponse';
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserLoginResponse', id?: string | null, userName?: string | null, token?: string | null, role?: string | null } };

export type LoginForForgottenPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  staffId: Scalars['String']['input'];
  phoneno: Scalars['String']['input'];
}>;


export type LoginForForgottenPasswordMutation = { __typename?: 'Mutation', loginForForgottenPassword: { __typename?: 'UserLoginResponse', id?: string | null, userName?: string | null, token?: string | null, role?: string | null } };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: string };

export type GetRecentRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentRequestsQuery = { __typename?: 'Query', users: Array<{ __typename?: 'AppUser', employeeName?: string | null, requests?: Array<{ __typename?: 'Request', requestDescription?: string | null }> | null }> };

export type GetLogHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLogHistoryQuery = { __typename?: 'Query', users: Array<{ __typename?: 'AppUser', employeeName?: string | null, requests?: Array<{ __typename?: 'Request', requestDescription?: string | null }> | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'AppUser', staffId?: string | null, employeeName?: string | null, email?: string | null, status?: string | null, employeeType?: string | null }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', userById?: { __typename?: 'AppUser', staffId?: string | null, userName?: string | null, email?: string | null, status?: string | null, phoneNumber?: string | null } | null };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    userName
    token
    role
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LoginForForgottenPasswordDocument = gql`
    mutation LoginForForgottenPassword($email: String!, $staffId: String!, $phoneno: String!) {
  loginForForgottenPassword(email: $email, staffid: $staffId, phoneno: $phoneno) {
    id
    userName
    token
    role
  }
}
    `;
export type LoginForForgottenPasswordMutationFn = Apollo.MutationFunction<LoginForForgottenPasswordMutation, LoginForForgottenPasswordMutationVariables>;

/**
 * __useLoginForForgottenPasswordMutation__
 *
 * To run a mutation, you first call `useLoginForForgottenPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginForForgottenPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginForForgottenPasswordMutation, { data, loading, error }] = useLoginForForgottenPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      staffId: // value for 'staffId'
 *      phoneno: // value for 'phoneno'
 *   },
 * });
 */
export function useLoginForForgottenPasswordMutation(baseOptions?: Apollo.MutationHookOptions<LoginForForgottenPasswordMutation, LoginForForgottenPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginForForgottenPasswordMutation, LoginForForgottenPasswordMutationVariables>(LoginForForgottenPasswordDocument, options);
      }
export type LoginForForgottenPasswordMutationHookResult = ReturnType<typeof useLoginForForgottenPasswordMutation>;
export type LoginForForgottenPasswordMutationResult = Apollo.MutationResult<LoginForForgottenPasswordMutation>;
export type LoginForForgottenPasswordMutationOptions = Apollo.BaseMutationOptions<LoginForForgottenPasswordMutation, LoginForForgottenPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $username: String!, $password: String!) {
  resetPassword(token: $token, username: $username, password: $password)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

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
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const GetRecentRequestsDocument = gql`
    query GetRecentRequests {
  users {
    employeeName
    requests {
      requestDescription
    }
  }
}
    `;

/**
 * __useGetRecentRequestsQuery__
 *
 * To run a query within a React component, call `useGetRecentRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentRequestsQuery(baseOptions?: Apollo.QueryHookOptions<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>(GetRecentRequestsDocument, options);
      }
export function useGetRecentRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>(GetRecentRequestsDocument, options);
        }
export function useGetRecentRequestsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>(GetRecentRequestsDocument, options);
        }
export type GetRecentRequestsQueryHookResult = ReturnType<typeof useGetRecentRequestsQuery>;
export type GetRecentRequestsLazyQueryHookResult = ReturnType<typeof useGetRecentRequestsLazyQuery>;
export type GetRecentRequestsSuspenseQueryHookResult = ReturnType<typeof useGetRecentRequestsSuspenseQuery>;
export type GetRecentRequestsQueryResult = Apollo.QueryResult<GetRecentRequestsQuery, GetRecentRequestsQueryVariables>;
export const GetLogHistoryDocument = gql`
    query GetLogHistory {
  users {
    employeeName
    requests {
      requestDescription
    }
  }
}
    `;

/**
 * __useGetLogHistoryQuery__
 *
 * To run a query within a React component, call `useGetLogHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogHistoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLogHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetLogHistoryQuery, GetLogHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLogHistoryQuery, GetLogHistoryQueryVariables>(GetLogHistoryDocument, options);
      }
export function useGetLogHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLogHistoryQuery, GetLogHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLogHistoryQuery, GetLogHistoryQueryVariables>(GetLogHistoryDocument, options);
        }
export function useGetLogHistorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLogHistoryQuery, GetLogHistoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLogHistoryQuery, GetLogHistoryQueryVariables>(GetLogHistoryDocument, options);
        }
export type GetLogHistoryQueryHookResult = ReturnType<typeof useGetLogHistoryQuery>;
export type GetLogHistoryLazyQueryHookResult = ReturnType<typeof useGetLogHistoryLazyQuery>;
export type GetLogHistorySuspenseQueryHookResult = ReturnType<typeof useGetLogHistorySuspenseQuery>;
export type GetLogHistoryQueryResult = Apollo.QueryResult<GetLogHistoryQuery, GetLogHistoryQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    staffId
    employeeName
    email
    status
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
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query getUserById($id: Int!) {
  userById(id: $id) {
    staffId
    userName
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
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;