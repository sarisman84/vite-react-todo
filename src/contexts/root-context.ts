import { createContext } from "react";
import type { PageIndex } from "../data/page-index";
import type { User } from "../data/user";
import type { Project } from "../data/project";

type CurrentProject = {
  project: Project;
  setProject: (value: Project) => void;
};

type CachedProjects = {
  projects: Project[];
  setProjects: (value: Project[]) => void;
};

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
  currentProject: CurrentProject;
  cachedUsers: CachedUsersState;
  cachedProjects: CachedProjects;
};

export const Root = createContext({} as RootContext);
