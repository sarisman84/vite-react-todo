import { useEffect, useState } from "react";
import {
  defaultUser,
  type OnUserRemoved,
  type User,
  type UserEvents,
} from "../data/user";

const user_id: string = "users";
const empty_array: string = "[]";

function _tryLoadingUsers(): User[] {
  let savedUsers = JSON.parse(localStorage.getItem(user_id) || empty_array);
  if (savedUsers.length === 0) {
    savedUsers = [defaultUser];
  }
  return savedUsers;
}

function useUser(): [User[], UserEvents] {
  const [users, setUsers] = useState(_tryLoadingUsers());

  useEffect(() => {
    localStorage.setItem(user_id, JSON.stringify(users));
  }, [users]);

  function onUserCreated(name: string) {
    setUsers((prevArray) => [
      {
        id: Date.now(),
        name,
      },
      ...prevArray,
    ]);
  }

  function onUserRemoved(id: number, callback: OnUserRemoved = (_) => {}) {
    setUsers((prevArray) => prevArray.filter((user) => user.id !== id));
    callback(id);
  }
  const events: UserEvents = {
    onUserRemoved,
    onUserCreated,
  };
  return [users, events];
}

export default useUser;
