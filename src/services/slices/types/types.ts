import { TDepartments, TSortBy, TUser, TUserCache } from "@types";

export type TAppState = {
  isInitialized: boolean;
};

export type TStaffState = {
  users: TUser[];
  isFetchUsers: boolean;
  error: string | null;
  cache: Record<string, TUserCache>;
};

export type TSearchState = {
  searchQuery: string;
  sortBy: TSortBy;
  currentTab: TDepartments;
};
