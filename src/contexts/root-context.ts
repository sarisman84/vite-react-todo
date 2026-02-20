import { createContext } from "react";
import type { PageIndex } from "../data/page-index";
import type { User } from "../data/user";

type CachedUsersState = {
  users: User[];
  setUsers: (value: User[]) => void;
};

type CurrentPage = {
  state: React.ReactElement;
  dispatch: React.ActionDispatch<[action: PageIndex]>;
};

export type RootContext = {
  currentPage: CurrentPage;
  cachedUsers: CachedUsersState;
};

export const Root = createContext({} as RootContext);
