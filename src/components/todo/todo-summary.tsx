import type { Todo } from "../../data/todos";

interface TodoSummaryArgs{
    entries: Todo[],
    deleteAllCompleted: () => void;
}

function TodoSummary({entries, deleteAllCompleted}: TodoSummaryArgs) {
    const completedTodos = entries.filter(item => item.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                 {entries.length-completedTodos.length} / {entries.length} tasks left.
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-red-500 hover:underline font-medium">
                    Delete all completed tasks
                </button>
            )}
        </div>
    )
}

export default TodoSummary;