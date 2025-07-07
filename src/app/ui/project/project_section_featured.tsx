import Image from "next/image";
import Link from "next/link";
import { LucidePlay } from "lucide-react";

export default function ProjectSectionFeatured({ image_url, image_alt, description }: {
    image_url: string;
    image_alt: string;
    description: string;
}) {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
            <Image width={500} height={600} alt={image_alt} src={image_url} className="rounded-lg shadow-lg" />
            <div>
                <p className='text-lg text-gray-800 max-w-xl text-center md:text-left'>{description}</p>
                <Link
                    href="https://play.google.com/store/apps/details?id=et.assetfinance.assetfinance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition duration-200">
                    <LucidePlay className="mr-2 text-white text-lg" />
                    View Apps on Play Store
                </Link>
            </div>
        </div>
    );
}
