import { ProjectList } from "./components/project-list";
import { ProjectSearch } from "./components/project-search";

function HomePage() {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <ProjectSearch />
        <ProjectList />
      </div>
    </div>
  );
}

export default HomePage;
