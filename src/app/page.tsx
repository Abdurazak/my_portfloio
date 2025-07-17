'use client'
import Link from 'next/link'
import { LayoutGrid, LucideGithub, LucideLinkedin, Mail, MessageSquare, User } from 'lucide-react';
import './globals.css';
import { useEffect, useState } from "react";
import ContactSection from './ui/contact/contact_section';
import AboutSection from './ui/about/about_section';
import ProjectSection from './ui/project/project_section';
import TestimonialsSection from './ui/testimonials/testimonials_section';
import CustomNav from './ui/common/custom_nav';


export default function Home() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter(entry => entry.isIntersecting);
      if (visible.length > 0) {
        // Sort by top position (closest to top of viewport)
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const sectionId = visible[0].target.id;
        setActiveSection(sectionId);

        const url = new URL(window.location.href);
        url.hash = sectionId;
        window.history.replaceState({}, "", url.toString());
      }
    };

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
      <CustomNav items={[
        {
          section: 'about',
          icon: User,
          label: 'About',
        },
        {
          section: 'projects',
          icon: LayoutGrid,
          label: 'Projects',
        },
        {
          section: 'testimonials',
          icon: MessageSquare,
          label: 'Testimonials',
        },
        {
          section: 'contact',
          icon: Mail,
          label: 'Contact',
        },
      ]} />
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
        <AboutSection />

        {/* Projects Section */}

        <ProjectSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
