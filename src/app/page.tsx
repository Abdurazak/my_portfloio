'use client'
import Link from 'next/link'
import { LucideGithub, LucideLinkedin } from 'lucide-react';
import './globals.css';
import { useEffect, useState } from "react";
import TechnologyExperience from './ui/about/technology_experience';
import ProjectSectionFeatured from './ui/project/project_section_featured';
import ProjectList from './ui/project/project_list';
import TestimonialList from './ui/testimonials/testimonial_list';


export default function Home() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(entry.target.id);

          const url = new URL(window.location.href)
          url.hash = sectionId
          window.history.replaceState({}, "", url.toString())
        }
      }
      );
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }

  }, []);
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }


  return (
    <main className="container mx-auto px-4 py-8 font-gilroy">
      <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md flex items-center justify-between">
        {/* Name/Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            Abdurazak Abrar
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="bg-gray-50 rounded-full px-6 py-2">
          <ul className="flex space-x-8">
            <li>
              <a href="#about" onClick={scrollToSection('about')} className={`flex items-center hover:text-black ${activeSection === "about" ? "text-black font-medium" : "text-gray-700"
                }`}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={scrollToSection('projects')} className={`flex items-center hover:text-black ${activeSection === "projects" ? "text-black font-medium" : "text-gray-700"
                }`}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-layout-grid"
                  >
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                </span>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollToSection('contact')} className={`flex items-center hover:text-black ${activeSection === "contact" ? "text-black font-medium" : "text-gray-700"
                }`}>
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://github.com/Abdurazak" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <LucideGithub className="w-6 h-6 text-gray-800 hover:text-black" />
          </Link>
          <Link href="https://www.linkedin.com/in/abdurazak-abrar-4445818a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LucideLinkedin className="w-6 h-6 text-gray-800 hover:text-black" />
          </Link>
        </div>
      </nav>
      <div className="pt-32">
        <div className="flex justify-center min-h-screen">
          <div className='text-center'>
            <h2 className='text-4xl font-bold'>Hi, I&#39;m Abdurazak Abrar</h2>
            <p>Senior Software Engineer | Flutter & Fullstack Specialist</p>
            <span className='w-screen block mt-10'>I design and develop intuitive, high-performance applications that simplify financial processes, enhance user experiences, and deliver clean, mobile-friendly UI across platforms.</span>
            <div className="flex gap-4 mt-6 justify-center"> <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-700 transition" onClick={scrollToSection('projects')}> 🚀 View Projects </button> <a href='https://docs.google.com/document/d/1lsQFVyaCYpq5GBGiI16yPXYpUPTgJzPI/export?format=pdf'>
              <button className="border px-6 py-2 rounded-full font-semibold hover:bg-gray-100 cursor-pointer transition"> ⬇️ Download Resume </button>
            </a></div>
          </div>
        </div>


        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">What I do</h2>
            <p className="text-lg mx-auto">
              I&#39;m a senior Flutter developer with 10+ years of experience building scalable, user-friendly apps for fintech and other industries. I specialize in clean UI/UX, mobile-first design, and seamless backend integration using Flutter and .NET. I&#39;ve worked on loan management, ride-sharing, and delivery systems—always focused on making complex tools easier to use. I’m passionate about clean architecture, smart collaboration, and using AI tools to boost productivity.
            </p>
            <TechnologyExperience />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen w-3/4 flex flex-col items-center m-auto">
          <ProjectSectionFeatured image_url={'/images/bejae_feature_graphic.jpg'} image_alt={'Bejae Feature Image'} description={"Translated complex Figma designs into pixel-perfect, responsive Flutter UI for Bejae's device financing platform while architecting a scalable, feature-based structure that enhanced user engagement, modularity, and onboarding efficiency."} />
          <ProjectList projects={[
            {
              title: "Bejae",
              description: "Delivered responsive Flutter UI/UX for Bejae's device financing app using complex Figma designs, feature-based architecture, Flutter BLoC, and Dio for backend integration.",
              project_url: "https://play.google.com/store/apps/details?id=com.bejae.app"
            },
            {
              title: "EasyLoans Platform",
              description: "Redesigned UI/UX and implemented responsive design using Flutter. Built a full client reporting system using .NET Core backend and Flutter frontend.",
              project_url: "https://easyloans.co.za/"
            },
            {
              title: "Chegebeya Merchant App",
              description: "Developed the merchant app for the Chegebeya B2B platform and enhanced admin portal using Next.js and Tailwind CSS.",
              project_url: "https://chegebeya.com/"
            },
            {
              title: "Wanza Express",
              description: "Led full-stack development of courier and manifest systems using Next.js, PostgreSQL, Docker, and Keycloak-based auth.",
              project_url: "https://wanzaexpress.com/"
            },
            {
              title: "News & Entertainment App",
              description: "Rebuilt and redesigned a Flutter news app using feature-based architecture, Flutter BLoC, and Dio integration.",
              project_url: "https://addisradioperspective.wordpress.com/"
            },
            {
              title: "Axumite Ride",
              description: "Built driver and passenger ride-sharing apps using Flutter, with modular BLoC architecture and Dio integration.",
            },
            {
              title: "GIZ Training App",
              description: "Created a training management app for GIZ Ethiopia with SQLite offline storage and MQTT real-time messaging.",
            },
            {
              title: "SAMS-DSS",
              description: "Developed a beekeeping support app (SAMS-DSS) with secure Auth0 authentication and clean Flutter UI.",
            },
            {
              title: "Easy Telecom",
              description: "Automated Ethio Telecom's USSD services in Flutter and added ML Kit-powered recharge card scanning.",
            },
            {
              title: "Criboo",
              description: "Built an Airbnb-style app for guest house discovery using Java and a mobile-first design.",
            }
          ]} />



        </section>

        <section id="projects" className="min-h-screen w-3/4 flex flex-col items-center m-auto">
          {/* ...existing project code... */}
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="w-full max-w-5xl">
            <TestimonialList testimonials={[
              {
                avatarUrl: "/images/jacques.jpeg",
                name: "Jacques Opperman",
                title: "Project Manager, Bitventure Consulting Ltd",
                text: `I have worked with Abdu from October 2023 on custom new software development. His pre-dominant focus was on front-end UI design in flutter.

He has an impeccable work ethic, exceptional eye for design and UI/UX engagement. He grasps design and functional concepts extremely quickly, only matched by his delivery time.

I would strongly urge any potential employer to seriously consider this designer and would endorse and recommend him any day.`
              },
              {
                avatarUrl: "/images/leroux.jpeg",
                name: "Leroux Breed",
                title: "Head of Software Development, Bitventure Consultin Ltd",
                text: `What really stood out about Abdu was his professionalism and reliability. He was never late for a single meeting, communicated clearly, and always took ownership of his work. He integrated effortlessly with the rest of the team,
contributing not just code but also valuable input during discussions and
planning sessions. His dedication helped drive the project forward and played
a big part in its success.`
              },
              {
                avatarUrl: "/images/dagim.jpeg",
                name: "Dagim Feyessa",
                title: "Senior Software Engineer, Bitventure Consulting Ltd",
                text: `Abdulrazak Abrar is an exemplary Senior Mobile Developer, highly recommended by Dagim Feyessa, Project Lead at Bitventure, with whom he collaborated for over 7 years. He consistently demonstrated outstanding leadership, exceptional code quality, and a strong work ethic, effectively solving complex problems and building robust systems. His dedication and team-player attitude make him a valuable asset.`
              }
            ]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg mb-6">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}
