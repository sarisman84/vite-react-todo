import { useState } from "react";

interface AddTodoFormArgs {
    onSubmit : (title: string) => void;
}


function AddTodoForm({onSubmit} : AddTodoFormArgs) {

    const [input, setInput] = useState("")

    function handleSubmit(result : React.SubmitEvent<HTMLFormElement>) {
        result.preventDefault();

        //If input is empty, exit
        if (!input.trim()){
            return;
        }

        onSubmit(input);
        setInput("");
    }


    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className="rounded-s-md grow border border-slate-100 bg-white p-2"
            />
            <button
                type="submit"
                className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
                Add
            </button>
        </form>
    )
}

export default AddTodoForm;
