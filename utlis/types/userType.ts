export type UserType = {
  id: string;
  username: string;
  password?: string;
  email: string;
  isFirstAccess: boolean;
  isAuthenticated: boolean;
  goal?: string;
  interests?:string[]
  skills?:string[]
  experience?:string
  studyTime?:Number
};