import type { User } from "./user";

export type Project = {
  id: number;
  name: string;
  assignedUsers: User[];
};


export const dummyProjects : Project[] = [
    {
        id: 0,
        name: "Project A",
        assignedUsers: []
    },
    {
        id: 1,
        name: "Project B",
        assignedUsers: []
    },
    {
        id: 2,
        name: "Project C",
        assignedUsers: []
    },
    {
        id: 3,
        name: "Project D",
        assignedUsers: []
    },
    {
        id: 4,
        name: "Project E",
        assignedUsers: []
    },
    {
        id: 5,
        name: "Project F",
        assignedUsers: []
    }
]
