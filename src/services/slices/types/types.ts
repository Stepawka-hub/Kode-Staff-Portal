import { TDepartments, TSortBy, TUser } from '@types';

export type TAppState = {
  isInitialized: boolean;
};

export type TStaffState = {
  users: TUser[];
  isFetchUsers: boolean;
  error: string | null;
}

export type TSearchState = {
  searchQuery: string;
  sortBy: TSortBy;
  currentTab: TDepartments;
}