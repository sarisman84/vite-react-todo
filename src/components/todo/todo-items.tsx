import { Trash2 } from "lucide-react";
import type { Todo } from "../../data/todos";

export interface TodoItemArgs {
    item: Todo;
    itemUpdated : (id : number, completed : boolean) => void;
    itemDeleted : (id : number) => void;
}

function TodoEntry({item, itemUpdated, itemDeleted} : TodoItemArgs) {
    return (
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-white bg-gray-50 hover:bg-slate-200 hover:border-slate-200 grow">
                <input 
                type="checkbox"
                className="scale-125"
                checked={item.completed}
                onChange={(e) => itemUpdated(item.id, e.target.checked)}
                />
                <span className={item.completed ? "line-through text-gray-400" : ""}>
                    {item.title}
                </span>
            </label>
            <button className="p-2"
            onClick={() => itemDeleted(item.id)}>
                <Trash2 size={20} className="text-gray-500 hover:text-slate-900"/>
            </button>
        </div>
    )
}

export default TodoEntry;