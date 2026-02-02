export type OnUserRemoved = (id: number) => void;
export type OnUserCreated = (name: string) => void;

export type UserEvents = {
  onUserRemoved: OnUserRemoved;
  onUserCreated: OnUserCreated;
};

export interface User {
  id: number;
  name: string;
}

export const defaultUser: User = {
  id: 1,
  name: "Jane Doe",
};
