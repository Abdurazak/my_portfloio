import ProjectItem from "./project_item";

export interface Project {
    title: string;
    description: string;
    project_url?: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
    return (
        <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        title={project.title}
                        description={project.description}
                        project_url={project.project_url}
                    />
                ))}
            </div>
        </div>
    );
}

