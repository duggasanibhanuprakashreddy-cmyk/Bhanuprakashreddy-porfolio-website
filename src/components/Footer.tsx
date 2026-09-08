import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070a10] border-t border-[#232e42]/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#00f2fe]/60 via-[#232e42] to-[#d0bcff]/60 flex items-center justify-center">
              <img
                src={PORTFOLIO_INFO.monogramUrl}
                alt="BP Monogram"
                className="w-full h-full object-cover rounded-[10px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold text-[#e4e8f3]">
                {PORTFOLIO_INFO.name.toUpperCase()}
              </span>
              <span className="font-code text-[11px] text-[#9ba7c0]">
                {PORTFOLIO_INFO.university} • {PORTFOLIO_INFO.role}
              </span>
            </div>
          </div>

          {/* Copyright & Location */}
          <div className="flex flex-col items-center md:items-start text-xs text-[#9ba7c0]">
            <p>© {new Date().getFullYear()} {PORTFOLIO_INFO.fullName}.</p>
            <p>Artificial Intelligence &amp; Data Science Portfolio.</p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#9ba7c0] hover:text-[#00f2fe] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#9ba7c0] hover:text-[#0077b5] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#9ba7c0] hover:text-[#00f2fe] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-[#131926] border border-[#232e42] hover:border-[#00f2fe]/60 text-[#9ba7c0] hover:text-[#00f2fe] flex items-center justify-center transition-all cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
