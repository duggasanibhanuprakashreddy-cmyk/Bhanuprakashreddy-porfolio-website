import { Terminal, Download, ArrowRight, Github, Linkedin, Mail, Code, Activity, ChevronDown } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-20 overflow-hidden"
    >
      {/* Top Ambient Glow Auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#00f2fe]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#571bc1]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#00f2fe]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Eyebrow with Pulse Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1c2436]/90 border border-[#232e42]/80 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f2fe]"></span>
              </span>
              <span className="font-code text-xs text-[#6ff6ff] uppercase tracking-wider font-semibold">
                {PORTFOLIO_INFO.degreeBadge}
              </span>
            </div>

            {/* Main Heading with Technical Gradient */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e4e8f3] leading-[1.15]">
              Building with Data.
              <br />
              Learning{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#6ff6ff] to-[#d0bcff]">
                AI
              </span>
              .
              <br />
              Creating{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#91e8ff] to-[#00f2fe]">
                Impact
              </span>
              .
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-[#9ba7c0] max-w-2xl leading-relaxed">
              I'm <strong className="text-[#e4e8f3] font-semibold">{PORTFOLIO_INFO.name}</strong> — an Artificial Intelligence &amp; Data Science student passionate about Python, machine learning, data analysis and building practical technology solutions at {PORTFOLIO_INFO.university}, Bengaluru.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="px-6 py-3 rounded-lg bg-[#00f2fe] text-[#00373d] font-code text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_24px_rgba(0,242,254,0.35)] hover:shadow-[0_0_32px_rgba(0,242,254,0.55)] hover:bg-[#6ff6ff] transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="px-6 py-3 rounded-lg bg-[#131926] border border-[#232e42] hover:border-[#00f2fe]/60 text-[#e4e8f3] font-code text-xs sm:text-sm font-medium transition-all flex items-center gap-2 hover:bg-[#1c2436] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                id="hero-lets-connect-btn"
                href="#contact"
                className="group px-4 py-3 font-code text-xs sm:text-sm text-[#9ba7c0] hover:text-[#00f2fe] flex items-center gap-2 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social Icon Links & Micro-status */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#232e42]/60 w-full max-w-md">
              <span className="font-code text-xs text-[#9ba7c0] uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PORTFOLIO_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ba7c0] hover:text-[#00f2fe] transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9ba7c0] hover:text-[#00f2fe] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="text-[#9ba7c0] hover:text-[#00f2fe] transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-[#232e42]">|</span>
              <span className="font-code text-xs text-[#9ba7c0]">
                Bengaluru, IN
              </span>
            </div>
          </div>

          {/* Right Column: Elevated Portrait in Technical Frame (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Backdrop Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00f2fe]/20 via-transparent to-[#d0bcff]/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl p-3 bg-[#0d121c]/90 border border-[#232e42]/80 shadow-2xl backdrop-blur-xl">
              {/* Portrait Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#232e42]/60 shadow-inner group">
                <img
                  src={PORTFOLIO_INFO.portraitUrl}
                  alt="Duggasani Bhanuprakash Reddy - Student in AI & Data Science"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/85 via-transparent to-transparent" />

                {/* Bottom in-frame badge */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#0d121c]/90 border border-[#232e42]/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
                    <span className="text-xs font-semibold text-[#e4e8f3]">
                      REVA University
                    </span>
                  </div>
                  <span className="font-code text-[11px] text-[#6ff6ff] bg-[#1c2436] px-2 py-0.5 rounded">
                    B.Tech AI &amp; DS
                  </span>
                </div>
              </div>

              {/* Floating Technical Chip 1: Python Snippet (Top-Left) */}
              <div className="absolute -top-4 -left-3 sm:-left-6 p-2.5 rounded-xl bg-[#0d121c]/95 border border-[#00f2fe]/40 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1c2436] flex items-center justify-center text-[#00f2fe]">
                  <Code className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-code text-[11px] text-[#e4e8f3] font-semibold">
                    import data_science
                  </span>
                  <span className="font-code text-[9px] text-[#6ff6ff]">
                    Python 3.11
                  </span>
                </div>
              </div>

              {/* Floating Technical Chip 2: Loss Curve / Node Badge (Bottom-Right) */}
              <div className="absolute -bottom-4 -right-3 sm:-right-6 p-2.5 rounded-xl bg-[#0d121c]/95 border border-[#d0bcff]/40 shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#1c2436] flex items-center justify-center text-[#d0bcff]">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-code text-[11px] text-[#d0bcff] font-semibold">
                    loss: 0.042 • acc: 96%
                  </span>
                  <span className="font-code text-[9px] text-[#9ba7c0]">
                    Model Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Indicator */}
        <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center gap-2 text-[#9ba7c0] hover:text-[#00f2fe] transition-colors">
          <a href="#about" className="flex flex-col items-center gap-1 group">
            <span className="font-code text-[10px] uppercase tracking-widest text-[#9ba7c0] group-hover:text-[#00f2fe]">
              Scroll to explore
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce text-[#00f2fe]" />
          </a>
        </div>
      </div>
    </section>
  );
}
