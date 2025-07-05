import Image from "next/image";
import TechnologyItem from "./technology_item";

export default function TechnologyExperience({ image_color, image_url }: {
    image_color?: string;
    image_url?: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h2 className="text-3xl font-bold mb-4 text-center">Technology Experience</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
                <TechnologyItem
                    image_url="/images/flutter.svg"
                    image_alt="Flutter Logo"
                    text="Flutter"
                    image_style={{ filter: 'brightness(0) saturate(100%) invert(16%) sepia(98%) saturate(2531%) hue-rotate(192deg) brightness(99%) contrast(101%)' }}
                />
                <TechnologyItem
                    image_url="/images/dart.svg"
                    image_alt="Dart Logo"
                    text="Dart"
                    image_style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(39%) saturate(6152%) hue-rotate(185deg) brightness(85%) contrast(99%)' }}
                />
                <TechnologyItem
                    image_url="/images/firebase.svg"
                    image_alt="Firebase Logo"
                    text="Firebase"
                    image_style={{ filter: 'brightness(0) saturate(100%) invert(19%) sepia(40%) saturate(6498%) hue-rotate(9deg) brightness(103%) contrast(101%)' }}
                />
                <TechnologyItem
                    image_url="/images/nodedotjs.svg"
                    image_alt="Node JS Logo"
                    text="Node JS"
                    image_style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(46%) saturate(485%) hue-rotate(62deg) brightness(91%) contrast(85%)' }}
                />
               { <TechnologyItem
                    image_url="/images/typescript.svg"
                    image_alt="TypeScript Logo"
                    text="Typescript"
                    image_style={{ filter: 'brightness(0) saturate(100%) invert(38%) sepia(73%) saturate(543%) hue-rotate(169deg) brightness(100%) contrast(89%)' }}
                />}
            </div>
        </div>);
}