interface TagListContext {
  title: string;
  tag: string;
}

function TagList(ctx: TagListContext) {
  return (
    <p className="flex justify-around w-40 text-text-900 text-sm items-center">
      {ctx.title}:
      <label className="bg-accent-100 rounded-md py-0.5 px-1 font-bold shadow">
        {ctx.tag}
      </label>
    </p>
  );
}

export default TagList;
