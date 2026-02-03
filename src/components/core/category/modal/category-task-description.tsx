interface CategoryTaskDescriptionProps {
  input: string;
  setInput: (value: string) => void;
}

function CategoryTaskDescription(ctx: CategoryTaskDescriptionProps) {
  return (
    <>
      <p className="text-text font-bold h-3">Description</p>
      <form className="flex gap-2 items-center grow">
        <textarea
          value={ctx.input}
          onChange={(e) => ctx.setInput(e.target.value)}
          placeholder="Example"
          className="flex rounded-md grow bg-background-100 p-2 w-auto overflow-y-auto pb-20 shadow"
        />
      </form>
    </>
  );
}

export default CategoryTaskDescription;
