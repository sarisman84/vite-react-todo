interface CategorySubmitButtonProps {
  handleSubmit: () => void;
}

function CategorySubmitButton(ctx: CategorySubmitButtonProps) {
  return (
    <div className="flex justify-center">
      <button
        onClick={ctx.handleSubmit}
        className="p-2 bg-accent-200 hover:bg-accent-400 rounded-md inline-flex justify-center"
      >
        <label className="text-text-900">Create Task</label>
      </button>
    </div>
  );
}

export default CategorySubmitButton;
