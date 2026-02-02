interface TagProps {
  value: string;
}

function Label(ctx: TagProps) {
  return (
    <label className="bg-accent-100 rounded-md py-0.5 px-1 font-bold shadow text-center text-sm">
      {ctx.value}
    </label>
  );
}

export default Label;
