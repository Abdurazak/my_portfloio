import Link from 'next/link'
import { LucideGithub, LucideLinkedin } from 'lucide-react';
import './globals.css';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="flex items-center justify-between">
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
              <Link href="/about" className="flex items-center text-gray-700 hover:text-black">
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
              </Link>
            </li>
            <li>
              <Link href="/projects" className="flex items-center text-gray-700 hover:text-black">
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
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center text-gray-700 hover:text-black">
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
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <LucideGithub className="w-6 h-6 text-gray-800 hover:text-black" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LucideLinkedin className="w-6 h-6 text-gray-800 hover:text-black" />
          </Link>
        </div>
      </nav>
    </main>
  )
}
