import { useEffect } from 'react';
import { X, Github, CheckCircle, Cpu, AlertTriangle, Lightbulb } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0a0e17]/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d121c] border border-[#232e42] p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#131926] border border-[#232e42] text-[#9ba7c0] hover:text-[#e4e8f3] hover:border-[#00f2fe]/40 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-code text-xs px-2.5 py-0.5 rounded-full bg-[#00f2fe]/10 text-[#6ff6ff] border border-[#00f2fe]/30 font-semibold">
              {project.badge}
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#e4e8f3]">
            {project.title}
          </h3>
          <p className="text-sm text-[#9ba7c0] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem Statement Box */}
        <div className="mb-6 p-4 rounded-xl bg-[#131926]/80 border border-[#232e42] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#ffb4ab]">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-code text-xs uppercase tracking-wider font-semibold">
              Problem Statement
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#e4e8f3] leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Technical Solution Box */}
        <div className="mb-6 p-4 rounded-xl bg-[#131926]/80 border border-[#00f2fe]/30 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#00f2fe]">
            <Lightbulb className="w-4 h-4" />
            <span className="font-code text-xs uppercase tracking-wider font-semibold">
              Technical Solution
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#e4e8f3] leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-code text-xs uppercase tracking-wider text-[#9ba7c0] mb-3">
            Key Architectural Highlights
          </h4>
          <div className="space-y-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e4e8f3]">
                <CheckCircle className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="font-code text-xs uppercase tracking-wider text-[#9ba7c0] mb-3">
            Technologies &amp; Modules
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-code text-xs px-3 py-1 rounded-lg bg-[#131926] border border-[#232e42] text-[#6ff6ff]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#232e42]/60">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#00f2fe] text-[#00373d] font-code text-xs font-semibold flex items-center gap-2 hover:bg-[#6ff6ff] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Open Repository</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#131926] border border-[#232e42] hover:bg-[#1c2436] font-code text-xs text-[#9ba7c0] transition-colors cursor-pointer"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
}
