import Image from "next/image";

export default function TechnologyItem({ image_url, image_alt, text, image_style }: {
    image_url: string;
    image_alt: string;
    text: string;
    image_style?: React.CSSProperties;
}) {
    return (
        <div className="flex flex-col items-center bg-[rgb(243,245,247)] p-4 rounded-xl
">
            <Image
                src={image_url}
                alt={image_alt}
                width={50}
                height={50}
                className="mb-2"
                style={image_style}
            />
            <p className="text-lg font-medium">{text}</p>
        </div>
    );
}
