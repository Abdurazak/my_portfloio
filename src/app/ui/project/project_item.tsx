import Link from "next/link";

export default function ProjectItem({ title, description, project_url }: {
    title: string;
    description: string;
    project_url?: string;
}) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {project_url !== null ? <Link href={project_url ?? ''} className="text-blue-600 hover:underline">
                View Project
            </Link> : <></>}
        </div>
    );
}
