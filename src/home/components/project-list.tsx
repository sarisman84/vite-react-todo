import { useContext } from "react";
import { Root } from "../../contexts/root-context";
import type { Project } from "../../data/project";

interface ProjectItemProps {
  project: Project;
  onSelect: (project: Project) => void;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <button
      className="flex justify-start ps-4 p-2 hover:bg-slate-300 focus:bg-slate-400"
      onClick={() => props.onSelect(props.project)}
    >
      <p>{props.project.name}</p>
    </button>
  );
}

export function ProjectList() {
  const { cachedProjects, currentProject } = useContext(Root);
  const { projects } = cachedProjects;
  const { setProject } = currentProject;

  return (
    <div className="flex flex-col min-w-xs">
      {projects.map((project, index) => {
        if (index === projects.length - 1) {
          return (
            <ProjectItem
              key={project.id}
              project={project}
              onSelect={setProject}
            />
          );
        }
        return (
          <>
            <ProjectItem project={project} onSelect={setProject} />
            <div className="border-b-2 w-full border-slate-500" />
          </>
        );
      })}
    </div>
  );
}
