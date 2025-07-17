import { LucideGithub, LucideIcon, LucideLinkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


interface NavItem {
    section: string;
    icon: LucideIcon;
    label: string;
}

interface CustomNavProps {
    items: NavItem[];
    activeSection: string;
}

export default function CustomNav({ items,activeSection }: CustomNavProps) {
    const [selectedSection, setselectedSection] = useState(activeSection);

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
                setselectedSection(sectionId);

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
        <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md flex items-center justify-between h-16">
            <div>
                <Link href="/" className="text-2xl font-bold">
                    Abdurazak Abrar
                </Link>
            </div>

            <div className="bg-gray-50 rounded-full px-6 py-2">
                <ul className="flex space-x-8">
                    {items.map((item) => (
                        <li key={item.section}>
                            <a
                                href={`#${item.section}`}
                                className={`flex items-center hover:text-black ${selectedSection === item.section ? "text-black font-medium" : "text-gray-700"
                                    }`}
                                onClick={() => scrollToSection?.(item.section)}
                            >
                                <span className="mr-2">
                                    <item.icon size={16} />
                                </span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex space-x-4">
                <Link href="https://github.com/Abdurazak" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <LucideGithub className="w-6 h-6 text-gray-800 hover:text-black" />
                </Link>
                <Link href="https://www.linkedin.com/in/abdurazak-abrar-4445818a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <LucideLinkedin className="w-6 h-6 text-gray-800 hover:text-black" />
                </Link>
            </div>
        </nav>
    );
}