import { Github, Linkedin, ExternalLink, Code2, Users } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export default function ConnectSection() {
  return (
    <section className="py-12 bg-[#070a10]/50 border-t border-[#232e42]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GitHub Showcase Card */}
          <a
            id="connect-github-card"
            href={PORTFOLIO_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] hover:border-[#00f2fe]/60 transition-all duration-300 group flex items-center justify-between gap-4 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#e4e8f3] group-hover:text-[#00f2fe] transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-code text-[11px] text-[#00f2fe] uppercase tracking-wider font-semibold">
                  Building in Public
                </span>
                <span className="font-display text-base sm:text-lg font-bold text-[#e4e8f3]">
                  duggasanibhanuprakashreddy-cmyk
                </span>
                <span className="text-xs text-[#9ba7c0]">
                  Follow repositories, commits, and open source explorations
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#9ba7c0] group-hover:text-[#00f2fe] group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>

          {/* LinkedIn Showcase Card */}
          <a
            id="connect-linkedin-card"
            href={PORTFOLIO_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] hover:border-[#0077b5]/60 transition-all duration-300 group flex items-center justify-between gap-4 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#131926] border border-[#232e42] flex items-center justify-center text-[#e4e8f3] group-hover:text-[#0077b5] transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-code text-[11px] text-[#d0bcff] uppercase tracking-wider font-semibold">
                  Professional Network
                </span>
                <span className="font-display text-base sm:text-lg font-bold text-[#e4e8f3]">
                  duggasanibhanuprakashreddy
                </span>
                <span className="text-xs text-[#9ba7c0]">
                  Connect for internships, academic collaborations &amp; ideas
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#9ba7c0] group-hover:text-[#0077b5] group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
