import { useReducer, useState, type Reducer } from "react";
import type { RootContext } from "../contexts/root-context";
import type { User } from "../data/user";
import type { PageIndex } from "../data/page-index";

function useRoot(
  pageState: Reducer<React.ReactElement, PageIndex>,
  defaultPage: React.ReactElement,
) {
  const [cachedUsers, setCachedUsers] = useState({} as User[]);
  const [state, dispatch] = useReducer(pageState, defaultPage);

  const rootContext: RootContext = {
    currentPage: {
      state,
      dispatch
    },
    cachedUsers: {
      users: cachedUsers,
      setUsers: setCachedUsers,
    },
  };

  return rootContext;
}

export default useRoot;
