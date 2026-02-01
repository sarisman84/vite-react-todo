interface TagListContext {
  title: string;
  tag: string;
}

function TagList(ctx: TagListContext) {
  return (
    <p className="flex justify-around w-40 text-slate-500 text-sm items-center">
      {ctx.title}:
      <label className="bg-white rounded-md py-0.5 px-1 font-bold">
        {ctx.tag}
      </label>
    </p>
  );
}

export default TagList;
