import { TDepartments, TSortBy, TUser } from 'src/types/types';

export type TAppState = {};

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