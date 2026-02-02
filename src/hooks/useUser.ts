import { useEffect, useState } from "react";
import { defaultUser, type User } from "../data/user";

export type OnUserRemoved = (id: number) => void;

const user_id: string = "users";
const empty_array: string = "[]";

function _tryLoadingUsers(): User[] {
  let savedUsers = JSON.parse(localStorage.getItem(user_id) || empty_array);
  if (savedUsers.length === 0) {
    savedUsers = [defaultUser];
  }
  return savedUsers;
}

function useUser() {
  const [users, setUsers] = useState(_tryLoadingUsers());

  useEffect(() => {
    localStorage.setItem(user_id, JSON.stringify(users));
  }, [users]);

  function createUser(name: string) {
    setUsers((prevArray) => [
      {
        id: Date.now(),
        name,
      },
      ...prevArray,
    ]);
  }

  function removeUser(id: number, callback: OnUserRemoved = (_) => {}) {
    setUsers((prevArray) => prevArray.filter((user) => user.id !== id));
    callback(id);
  }

  return {
    users,
    createUser,
    removeUser,
  };
}

export default useUser;
