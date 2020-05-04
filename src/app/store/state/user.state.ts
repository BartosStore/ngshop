import { IUser } from 'src/app/model/user';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initialUserState: IUserState = {
  users: [],
  selectedUser: null
}