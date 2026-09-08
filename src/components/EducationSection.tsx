import { GraduationCap, MapPin, Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { LEARNING_STAGES, PORTFOLIO_INFO } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
            Milestones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            Education &amp; Learning Journey
          </h2>
          <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
            Formal institutional curriculum paired with structured, milestone-driven technical exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: REVA University Degree Profile (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0d121c] border border-[#232e42] flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2fe]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-[#131926] flex items-center justify-center text-[#00f2fe]">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="font-code text-xs text-[#6ff6ff] uppercase tracking-wider block mb-1">
                  Bachelor of Technology
                </span>
                <h3 className="font-display text-2xl font-bold text-[#e4e8f3] leading-snug">
                  Computer Science &amp; Engineering
                </h3>
                <p className="text-base text-[#00f2fe] font-medium mt-1">
                  (Artificial Intelligence &amp; Data Science)
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#232e42]/60">
                <div className="flex items-center gap-2 text-sm text-[#e4e8f3]">
                  <span className="font-semibold">{PORTFOLIO_INFO.university}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9ba7c0]">
                  <MapPin className="w-3.5 h-3.5 text-[#00f2fe]" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9ba7c0]">
                  <Calendar className="w-3.5 h-3.5 text-[#00f2fe]" />
                  <span>2025 – 2029 (Undergraduate)</span>
                </div>
              </div>

              <p className="text-sm text-[#9ba7c0] leading-relaxed pt-2">
                Pursuing rigorous foundation in algorithmic structures, computational statistics, relational databases, applied mathematics, and machine learning primitives.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#232e42]/60">
              <span className="font-code text-[11px] text-[#9ba7c0] uppercase tracking-wider block mb-2">
                Core Coursework Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Data Structures', 'Algorithms', 'Python Programming', 'Applied Mathematics', 'Database Systems', 'IoT Fundamentals'].map((course) => (
                  <span
                    key={course}
                    className="font-code text-xs px-2.5 py-1 rounded bg-[#131926] text-[#e4e8f3] border border-[#232e42]/60"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 6-Stage Progressive Roadmap (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="font-code text-xs text-[#9ba7c0] uppercase tracking-wider">
                Progressive Skill Mastery Roadmap
              </span>
              <span className="font-code text-xs text-[#6ff6ff]">
                6 Sequential Tracks
              </span>
            </div>

            {LEARNING_STAGES.map((stage) => {
              const isCompleted = stage.statusType === 'completed';
              const isProficient = stage.statusType === 'proficient';
              const isActive = stage.statusType === 'active';
              const isInProgress = stage.statusType === 'in-progress';

              const statusBadgeStyle = isCompleted
                ? 'bg-[#00f2fe]/10 text-[#6ff6ff] border-[#00f2fe]/30'
                : isProficient
                ? 'bg-[#d0bcff]/15 text-[#d0bcff] border-[#d0bcff]/30'
                : isActive
                ? 'bg-[#00f2fe]/20 text-[#6ff6ff] border-[#00f2fe]/50 font-bold'
                : isInProgress
                ? 'bg-[#1c2436] text-[#91e8ff] border-[#91e8ff]/30'
                : 'bg-[#131926] text-[#9ba7c0] border-[#232e42]';

              return (
                <div
                  key={stage.step}
                  className={`p-4 rounded-xl bg-[#0d121c] border border-[#232e42] hover:border-[#00f2fe]/40 transition-all flex items-center justify-between gap-4 group ${
                    isActive ? 'border-l-4 border-l-[#00f2fe] bg-[#131926]/40' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-code text-sm font-bold text-[#00f2fe]/70 group-hover:text-[#00f2fe] transition-colors">
                      {stage.step}
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-[#e4e8f3]">
                      {stage.title}
                    </span>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span
                      className={`font-code text-xs px-2.5 py-1 rounded-full border ${statusBadgeStyle}`}
                    >
                      {stage.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
