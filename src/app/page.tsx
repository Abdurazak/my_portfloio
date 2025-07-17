'use client'
import Link from 'next/link'
import { LayoutGrid, LucideGithub, LucideLinkedin, Mail, MessageSquare, User } from 'lucide-react';
import './globals.css';
import { useEffect, useRef, useState } from "react";
import ContactSection from './ui/contact/contact_section';
import AboutSection from './ui/about/about_section';
import ProjectSection from './ui/project/project_section';
import TestimonialsSection from './ui/testimonials/testimonials_section';
import CustomNav from './ui/common/custom_nav';


export default function Home() {

  const [activeSection, setActiveSection] = useState('about');
  const projectsSectionRef = useRef<HTMLElement>(null);

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

  const handleViewProjectsClick = () => {
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('projects');
    } else {
      console.warn("Project section ref is not attached!");
    }
  };


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
      ]} activeSection={activeSection} />
      <div className="pt-32">

        {/* About Section */}
        <AboutSection onViewProjectsClick={handleViewProjectsClick} />

        {/* Projects Section */}

        <ProjectSection ref={projectsSectionRef} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
