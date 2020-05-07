export interface IErrorState {
  message: string;
}

export const initialErrorState: IErrorState = {
  message: null
};

export enum AppErrors {
  postsNotAvailable
}