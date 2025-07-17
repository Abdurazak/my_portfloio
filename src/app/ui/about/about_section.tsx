import TechnologyExperience from "./technology_experience";


interface AboutSectionProps {
  onViewProjectsClick: () => void;
}

export default function AboutSection({ onViewProjectsClick }: AboutSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div>
        <div className='text-center'>
          <h2 className='text-4xl font-bold'>Hi, I&#39;m Abdurazak Abrar</h2>
          <p>Senior Software Engineer | Flutter & Fullstack Specialist</p>
          <span className='w-screen block mt-10'>I design and develop intuitive, high-performance applications that simplify financial processes, enhance user experiences, and deliver clean, mobile-friendly UI across platforms.</span>
          <div className="flex gap-4 mt-6 justify-center"> <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-700 transition" onClick={onViewProjectsClick}> 🚀 View Projects </button> <a href='https://docs.google.com/document/d/1lsQFVyaCYpq5GBGiI16yPXYpUPTgJzPI/export?format=pdf'>
            <button className="border px-6 py-2 rounded-full font-semibold hover:bg-gray-100 cursor-pointer transition"> ⬇️ Download Resume </button>
          </a></div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">What I do</h2>
        <p className="text-lg mx-auto">
          I&apos;m a senior Flutter developer with 10+ years of experience building scalable, user-friendly apps for fintech and other industries. I specialize in clean UI/UX, mobile-first design, and seamless backend integration using Flutter and .NET. I&apos;ve worked on loan management, ride-sharing, and delivery systems—always focused on making complex tools easier to use. I’m passionate about clean architecture, smart collaboration, and using AI tools to boost productivity.
        </p>
        <TechnologyExperience />
      </div>
    </section>
  );
}
