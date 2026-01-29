export interface Todo {
    id: number,
    title: string,
    completed: boolean,
};

export const dummyData: Todo[] = [
    {
        id: 1,
        title: "Test 1",
        completed: false,
    },
    {
        id: 2,
        title: "Test 2",
        completed: true,
    }
];