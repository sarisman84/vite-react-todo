import { ProjectList } from "./components/project-list";
import { ProjectSearch } from "./components/project-search";

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-15 grow h-full">
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl">Project Tracker</h1>
      </div>
      <div className="p-5 bg-amber-50 rounded-md shadow ">
        <ProjectSearch />
        <ProjectList />
      </div>
    </div>
  );
}

export default HomePage;
