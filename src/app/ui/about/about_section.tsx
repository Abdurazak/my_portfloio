import TechnologyExperience from "./technology_experience";


export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-center">What I do</h2>
        <p className="text-lg mx-auto">
          I&apos;m a senior Flutter developer with 10+ years of experience building scalable, user-friendly apps for fintech and other industries. I specialize in clean UI/UX, mobile-first design, and seamless backend integration using Flutter and .NET. I&apos;ve worked on loan management, ride-sharing, and delivery systems—always focused on making complex tools easier to use. I’m passionate about clean architecture, smart collaboration, and using AI tools to boost productivity.
        </p>
        <TechnologyExperience />
      </div>
    </section>
  );
}
