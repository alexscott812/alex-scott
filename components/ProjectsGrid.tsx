import type Project from '../types/Project';

const ProjectsGrid = ({ projects = [] }: { projects: Project[] }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map(project => (
        <div key={project.id} className="overflow-hidden rounded-xl border-2 border-gray-100 dark:border-gray-900">
          <img className="h-48 min-w-full object-cover" src={project.image} alt={project.title} />
          <div className="p-4">
            <h3 className="pb-2 text-xl font-semibold dark:text-gray-100">{project.title}</h3>
            <p className="pb-4 dark:text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(technology => (
                <span key={technology} className="inline-block rounded bg-violet-100 dark:bg-violet-950 dark:bg-opacity-75 px-2 py-1 text-xs font-semibold uppercase text-violet-600 dark:text-violet-400">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;