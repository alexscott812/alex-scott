import type Project from '../types/Project';

const ProjectsGrid = ({ projects = [] }: { projects: Project[] }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map(project => (
        <div key={project.id} className="flex flex-col overflow-hidden rounded-xl border-2 border-gray-100 dark:border-gray-800">
          {/* <img className="h-48 min-w-full object-cover" src={project.image} alt={project.title} /> */}
          <div className="h-48 min-w-full object-cover bg-gray-100 dark:bg-gray-800" />
          <div className="p-4">
            <h3 className="pb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="pb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 pb-2">
              {project.technologies.map(technology => (
                <span key={technology} className="inline-block rounded bg-violet-100 dark:bg-violet-950 dark:bg-opacity-75 px-2 py-1 text-xs font-semibold uppercase text-violet-600 dark:text-violet-500">
                  {technology}
                </span>
              ))}
            </div>
            
          </div>
          <div className="mt-auto px-4 pb-4">
            <a
              className="text-violet-600 dark:text-violet-500 hover:underline"
              href={project.prod_link}
              target="_blank"
              rel="noreferrer noopener"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;