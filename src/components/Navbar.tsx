import { useState, useEffect } from 'react';
import { Download, Menu, X, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e17]/90 backdrop-blur-xl border-b border-[#232e42]/80 shadow-lg'
          : 'bg-[#0a0e17]/75 backdrop-blur-md border-b border-[#232e42]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Monogram + Identity */}
        <a
          id="brand-logo-link"
          href="#home"
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#00f2fe]/60 via-[#232e42] to-[#d0bcff]/60 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={PORTFOLIO_INFO.monogramUrl}
              alt="Bhanu Prakash Monogram Logo BP"
              className="w-full h-full object-cover rounded-[10px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base lg:text-lg font-bold tracking-tight text-[#e4e8f3] group-hover:text-[#00f2fe] transition-colors">
              BHANU PRAKASH
            </span>
            <span className="font-code text-[10px] text-[#9ba7c0] uppercase tracking-widest">
              AI &amp; DS Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          id="desktop-nav"
          className="hidden xl:flex items-center gap-1 bg-[#0d121c]/70 border border-[#232e42]/60 px-3 py-1.5 rounded-full backdrop-blur-md"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'text-[#00f2fe] bg-[#1c2436] shadow-sm'
                    : 'text-[#9ba7c0] hover:text-[#e4e8f3] hover:bg-[#131926]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action CTAs & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* GitHub Icon */}
          <a
            id="nav-github-link"
            href={PORTFOLIO_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-[#131926] border border-[#232e42]/70 flex items-center justify-center text-[#9ba7c0] hover:text-[#00f2fe] hover:border-[#00f2fe]/50 transition-all"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Icon */}
          <a
            id="nav-linkedin-link"
            href={PORTFOLIO_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg bg-[#131926] border border-[#232e42]/70 flex items-center justify-center text-[#9ba7c0] hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Resume Download CTA */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#00f2fe] text-[#00373d] font-code text-xs font-semibold tracking-wide hover:bg-[#6ff6ff] shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_28px_rgba(0,242,254,0.5)] transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="xl:hidden w-9 h-9 rounded-lg bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#e4e8f3] hover:text-[#00f2fe] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden bg-[#0d121c]/95 backdrop-blur-2xl border-b border-[#232e42] px-6 py-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1c2436] text-[#00f2fe] font-semibold'
                    : 'text-[#e4e8f3] hover:bg-[#131926]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-3 mt-2 border-t border-[#232e42]/60 flex items-center gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg bg-[#00f2fe] text-[#00373d] font-code text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
