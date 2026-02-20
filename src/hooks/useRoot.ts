import { useReducer, useState, type Reducer } from "react";
import type { RootContext } from "../contexts/root-context";
import type { User } from "../data/user";
import type { PageIndex } from "../data/page-index";
import { dummyProjects, type Project } from "../data/project";

function useRoot(
  pageState: Reducer<React.ReactElement, PageIndex>,
  defaultPage: React.ReactElement,
) {
  const [cachedUsers, setCachedUsers] = useState({} as User[]);
  const [currentProject, setCurrentProject] = useState({} as Project);
  const [cachedProjects, setCachedProjects] = useState(dummyProjects);
  const [state, dispatch] = useReducer(pageState, defaultPage);

  const rootContext: RootContext = {
    currentPage: {
      state,
      dispatch,
    },
    cachedUsers: {
      users: cachedUsers,
      setUsers: setCachedUsers,
    },
    cachedProjects: {
      projects: cachedProjects,
      setProjects: setCachedProjects,
    },

    currentProject: {
      project: currentProject,
      setProject: setCurrentProject,
    },
  };

  return rootContext;
}

export default useRoot;
