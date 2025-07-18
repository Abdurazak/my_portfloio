import TestimonialList from "./testimonial_list";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="w-full max-w-5xl">
        <TestimonialList testimonials={[
          {
            avatarUrl: "/images/jacques.jpeg",
            name: "Jacques Opperman",
            title: "Project Manager, Bitventure Consulting Ltd",
            text: `I have worked with Abdu from October 2023 on custom new software development. His pre-dominant focus was on front-end UI design in flutter.\n\nHe has an impeccable work ethic, exceptional eye for design and UI/UX engagement. He grasps design and functional concepts extremely quickly, only matched by his delivery time.\n\nI would strongly urge any potential employer to seriously consider this designer and would endorse and recommend him any day.`
          },
          {
            avatarUrl: "/images/leroux.jpeg",
            name: "Leroux Breed",
            title: "Head of Software Development, Bitventure Consultin Ltd",
            text: `What really stood out about Abdu was his professionalism and reliability. He was never late for a single meeting, communicated clearly, and always took ownership of his work. He integrated effortlessly with the rest of the team,\ncontributing not just code but also valuable input during discussions and\nplanning sessions. His dedication helped drive the project forward and played\na big part in its success.`
          },
          {
            avatarUrl: "/images/dagim.jpeg",
            name: "Dagim Feyessa",
            title: "Senior Software Engineer, Bitventure Consulting Ltd",
            text: `I’ve had the pleasure of working with Abdulrazak Abrar for over 7 years, and I can confidently say he is an exemplary Senior Mobile Developer. His leadership, code quality, and work ethic are outstanding. He consistently solved complex problems and built robust systems with precision. Abdulrazak is not only technically strong but also a dedicated team player — a true asset to any project.`
          }
        ]} />
      </div>
    </section>
  );
}
