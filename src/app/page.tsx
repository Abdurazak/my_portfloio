'use client'
import Link from 'next/link'
import { LucideGithub, LucideLinkedin } from 'lucide-react';
import './globals.css';
import { useEffect, useState } from "react";

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
    <main className="container mx-auto px-4 py-8">
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
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg">
              I'm a senior Flutter developer with 10+ years of experience building scalable, user-friendly apps for fintech and other industries. I specialize in clean UI/UX, mobile-first design, and seamless backend integration using Flutter and .NET. I’ve worked on loan management, ride-sharing, and delivery systems—always focused on making complex tools easier to use. I’m passionate about clean architecture, smart collaboration, and using AI tools to boost productivity.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project cards would go here */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p>A brief description of project 1.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p>A brief description of project 2.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p>A brief description of project 3.</p>
              </div>
            </div>
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
