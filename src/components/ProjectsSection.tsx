import { ShieldAlert, Car, Palette, Github, Info, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS, PORTFOLIO_INFO } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const getProjectIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'HardHat':
        return <ShieldAlert className={`w-6 h-6 ${colorClass}`} />;
      case 'Car':
        return <Car className={`w-6 h-6 ${colorClass}`} />;
      case 'Palette':
        return <Palette className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <ShieldAlert className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#070a10]/70 border-y border-[#232e42]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
              Engineering Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
              Selected Projects
            </h2>
            <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
              Hands-on software and embedded engineering systems solving tangible real-world challenges.
            </p>
          </div>

          <a
            id="projects-all-repos-link"
            href={PORTFOLIO_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg bg-[#131926] border border-[#232e42] text-[#e4e8f3] hover:text-[#00f2fe] font-code text-xs flex items-center gap-2 self-start md:self-auto transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Explore All Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3 Large Premium Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => {
            const isCyan = project.badgeType === 'cyan';
            const isPurple = project.badgeType === 'purple';
            const badgeBg = isCyan
              ? 'bg-[#00f2fe]/10 text-[#6ff6ff] border-[#00f2fe]/20'
              : isPurple
              ? 'bg-[#571bc1]/20 text-[#d0bcff] border-[#571bc1]/30'
              : 'bg-[#91e8ff]/15 text-[#91e8ff] border-[#91e8ff]/30';

            const cardBorder = isCyan
              ? 'hover:border-[#00f2fe]/60'
              : isPurple
              ? 'hover:border-[#d0bcff]/60'
              : 'hover:border-[#91e8ff]/60';

            const iconColor = isCyan
              ? 'text-[#00f2fe]'
              : isPurple
              ? 'text-[#d0bcff]'
              : 'text-[#91e8ff]';

            const detailsBtn = isCyan
              ? 'bg-[#00f2fe]/15 hover:bg-[#00f2fe]/25 text-[#6ff6ff] border-[#00f2fe]/30'
              : isPurple
              ? 'bg-[#571bc1]/25 hover:bg-[#571bc1]/35 text-[#d0bcff] border-[#571bc1]/30'
              : 'bg-[#91e8ff]/15 hover:bg-[#91e8ff]/25 text-[#91e8ff] border-[#91e8ff]/30';

            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-[#0d121c] border border-[#232e42] ${cardBorder} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#131926] flex items-center justify-center shadow-inner">
                      {getProjectIcon(project.iconName, iconColor)}
                    </div>
                    <span
                      className={`font-code text-[10px] px-2.5 py-1 rounded-full border ${badgeBg}`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-[#e4e8f3] group-hover:text-[#00f2fe] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#9ba7c0] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-code text-xs px-2.5 py-1 rounded bg-[#131926] text-[#9ba7c0] border border-[#232e42]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#232e42]/60 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg bg-[#131926] hover:bg-[#1c2436] border border-[#232e42] text-[#e4e8f3] text-center font-code text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>
                  <button
                    onClick={() => onSelectProject(project)}
                    className={`flex-1 py-2 rounded-lg border text-center font-code text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${detailsBtn}`}
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
