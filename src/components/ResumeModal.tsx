import { useEffect, useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, MapPin, Phone, Github, Linkedin, Sparkles } from 'lucide-react';
import { PORTFOLIO_INFO, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
${PORTFOLIO_INFO.fullName}
${PORTFOLIO_INFO.role} | ${PORTFOLIO_INFO.university}
Email: ${PORTFOLIO_INFO.email}
Location: ${PORTFOLIO_INFO.location}
GitHub: ${PORTFOLIO_INFO.githubUrl}
LinkedIn: ${PORTFOLIO_INFO.linkedinUrl}

EDUCATION:
Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence & Data Science)
${PORTFOLIO_INFO.university}, Bengaluru (2025 - 2029)

CORE SKILLS:
- Languages & Core: Python, SQL, DSA
- Data Science & ML: Pandas, NumPy, Scikit-learn, EDA, Statistical Modeling
- Data Visualization: Matplotlib, Seaborn
- Hardware & Systems: Arduino, Embedded Systems, IoT, Bluetooth Transceivers

KEY PROJECTS:
1. Smart Helmet System (IoT Prototype - Rider safety & ignition lock)
2. Bluetooth Controlled RC Car (Embedded Arduino & L298N motor driver)
3. Menu-Driven 2D Graphics Editor (Procedural 2D matrix transformations)

CERTIFICATIONS:
- Data Analysis with Python (Cognitive Class / IBM)
- Data Visualization with Python (Cognitive Class / IBM)
- Python 101 for Data Science (IBM Skills Network)
- Ignite Full Program (Ignite Academy)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="resume-viewer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0a0e17]/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-[#0d121c] border border-[#232e42] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Action Bar */}
        <div className="p-4 sm:p-5 bg-[#131926]/90 border-b border-[#232e42] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f2fe]" />
            <span className="font-display text-base sm:text-lg font-bold text-[#e4e8f3]">
              Curriculum Vitae • {PORTFOLIO_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg bg-[#1c2436] hover:bg-[#263045] text-xs font-code text-[#6ff6ff] flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy resume text to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#00f2fe]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#00f2fe] hover:bg-[#6ff6ff] text-[#00373d] text-xs font-code font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#1c2436] text-[#9ba7c0] hover:text-[#e4e8f3] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#0a0e17]/60">
          {/* Header */}
          <div className="border-b border-[#232e42]/80 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#e4e8f3]">
                {PORTFOLIO_INFO.fullName}
              </h2>
              <p className="font-code text-sm text-[#00f2fe]">
                B.Tech Student — Artificial Intelligence &amp; Data Science
              </p>
              <p className="text-xs text-[#9ba7c0]">
                {PORTFOLIO_INFO.university}, Bengaluru
              </p>
            </div>

            <div className="flex flex-col gap-1 text-xs text-[#9ba7c0] font-code">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00f2fe]" />
                {PORTFOLIO_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00f2fe]" />
                {PORTFOLIO_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-[#00f2fe]" />
                github.com/duggasanibhanuprakashreddy-cmyk
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-[#e4e8f3] uppercase tracking-wider text-[#00f2fe] flex items-center gap-2">
              <span>Education</span>
              <span className="h-px flex-1 bg-[#232e42]" />
            </h3>
            <div className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-bold text-sm text-[#e4e8f3]">
                  Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering
                </h4>
                <span className="font-code text-xs text-[#6ff6ff] bg-[#1c2436] px-2 py-0.5 rounded">
                  2025 – 2029
                </span>
              </div>
              <p className="text-xs text-[#00f2fe] font-medium">
                Specialization: Artificial Intelligence &amp; Data Science
              </p>
              <p className="text-xs text-[#9ba7c0]">
                {PORTFOLIO_INFO.university}, Bengaluru, Karnataka
              </p>
              <p className="text-xs text-[#9ba7c0] pt-1">
                Coursework: Data Structures, Algorithms, Python Programming, Applied Mathematics, Database Systems, IoT.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-[#e4e8f3] uppercase tracking-wider text-[#00f2fe] flex items-center gap-2">
              <span>Technical Toolset</span>
              <span className="h-px flex-1 bg-[#232e42]" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-[#0d121c] border border-[#232e42]/60">
                <span className="font-code text-[#6ff6ff] font-semibold block mb-1">
                  Programming &amp; Databases
                </span>
                <span className="text-[#9ba7c0]">
                  Python (NumPy, Pandas), SQL, Data Structures &amp; Algorithms
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0d121c] border border-[#232e42]/60">
                <span className="font-code text-[#d0bcff] font-semibold block mb-1">
                  Data Science &amp; ML
                </span>
                <span className="text-[#9ba7c0]">
                  Exploratory Data Analysis (EDA), Scikit-learn, Regression, Classification
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0d121c] border border-[#232e42]/60">
                <span className="font-code text-[#91e8ff] font-semibold block mb-1">
                  Visualization
                </span>
                <span className="text-[#9ba7c0]">
                  Matplotlib, Seaborn, Interactive Dashboards
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#0d121c] border border-[#232e42]/60">
                <span className="font-code text-[#6ff6ff] font-semibold block mb-1">
                  Hardware &amp; IoT
                </span>
                <span className="text-[#9ba7c0]">
                  Embedded Microcontrollers (Arduino), Bluetooth HC-05, Actuators, Sensors
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-[#e4e8f3] uppercase tracking-wider text-[#00f2fe] flex items-center gap-2">
              <span>Projects</span>
              <span className="h-px flex-1 bg-[#232e42]" />
            </h3>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-[#e4e8f3]">
                      {proj.title}
                    </h4>
                    <span className="font-code text-[10px] text-[#6ff6ff] bg-[#1c2436] px-2 py-0.5 rounded">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#9ba7c0]">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-code text-[10px] px-2 py-0.5 rounded bg-[#131926] text-[#6ff6ff]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-bold text-[#e4e8f3] uppercase tracking-wider text-[#00f2fe] flex items-center gap-2">
              <span>Certifications</span>
              <span className="h-px flex-1 bg-[#232e42]" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.id}
                  className="p-3 rounded-lg bg-[#0d121c] border border-[#232e42]/60 flex items-center justify-between"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#e4e8f3]">
                      {c.title}
                    </span>
                    <span className="text-[10px] text-[#9ba7c0]">
                      {c.organization} • {c.partnerBadge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
