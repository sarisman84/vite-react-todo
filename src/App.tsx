import TodoItem from "./components/todo-items"
import { dummyData } from "./data/todos"

function App() {

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-4xl text-center">
        Your Todo
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <p key={todo.id}>
              <TodoItem item={todo}/>
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
