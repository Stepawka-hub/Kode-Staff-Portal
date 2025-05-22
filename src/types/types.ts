import { DEPARTMENTS } from "@utils/constants";

export type TDepartments = (typeof DEPARTMENTS)[keyof typeof DEPARTMENTS];

export type TSortBy = 'name' | 'birthday';

export type TUser = {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: TDepartments;
  position: string;
  birthday: string;
  phone: string;
};
