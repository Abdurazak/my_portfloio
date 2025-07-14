import TestimonialItem, { Testimonial } from "./testimonial_item";

export default function TestimonialList({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, idx) => (
        <TestimonialItem key={idx} {...testimonial} />
      ))}
    </div>
  );
}
