import { TDepartments, TUser } from 'src/types/types';

export type TAppState = {
  currentTab: TDepartments;
};

export type TStaffState = {
  users: TUser[];
  isFetchUsers: boolean;
  error: string | null;
}
