import type { Todo } from "../data/todos";

export interface TodoItemArgs {
    item: Todo
}

function TodoItem({item} : TodoItemArgs) {
    return (
        <div>
            <label className="flex items-center gap-2 border rounded-md p-2 border-white bg-gray-50 hover:bg-slate-200 hover:border-slate-200">
                <input 
                type="checkbox"
                className="scale-125"
                />
                <span className={item.completed ? "line-through text-gray-400" : ""}>
                    {item.title}
                </span>
            </label>
        </div>
    )
}

export default TodoItem;