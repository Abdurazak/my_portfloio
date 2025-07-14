import Image from "next/image";

export interface Testimonial {
  avatarUrl: string;
  name: string;
  title: string;
  text: string;
}

export default function TestimonialItem({ avatarUrl, name, title, text }: Testimonial) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-sm mx-auto">
      <Image
        src={avatarUrl}
        alt={name + " avatar"}
        width={64}
        height={64}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-gray-700 italic">“{text}”</p>
    </div>
  );
}
