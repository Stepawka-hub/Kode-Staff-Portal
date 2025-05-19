import { DEPARTMENTS } from "@utils/constants";

export type TDepartments = (typeof DEPARTMENTS)[keyof typeof DEPARTMENTS];
