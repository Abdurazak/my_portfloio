'use client'

import { LayoutGrid, Mail, MessageSquare, User } from 'lucide-react';
import './globals.css';
import { useEffect, useRef, useState } from "react";
import ContactSection from './ui/contact/contact_section';
import AboutSection from './ui/about/about_section';
import ProjectSection from './ui/project/project_section';
import TestimonialsSection from './ui/testimonials/testimonials_section';
import CustomNav from './ui/common/custom_nav';
import Introduction from './ui/introduction/introduction';


export default function Home() {

  const [activeSection, setActiveSection] = useState('about');
  const projectsSectionRef = useRef<HTMLElement>(null);

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
        {/* Introduction Section */}
        <Introduction onViewProjectsClick={handleViewProjectsClick} />

        {/* About Section */}
        <AboutSection />

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
