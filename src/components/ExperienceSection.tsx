import { TIMELINE_ITEMS } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
            Academic Trajectory
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            Experience &amp; Learning
          </h2>
          <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
            Formal undergraduate immersion, engineering problem tracks, and progressive mastery in AI/DS domains.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-[#232e42]">
          {TIMELINE_ITEMS.map((item, index) => {
            const isCyan = item.accentColor === 'cyan';
            const circleColor = isCyan ? 'border-[#00f2fe]' : 'border-[#d0bcff]';
            const dotColor = isCyan ? 'bg-[#00f2fe]' : 'bg-[#d0bcff]';
            const badgeColor = isCyan ? 'text-[#6ff6ff]' : 'text-[#d0bcff]';

            return (
              <div
                key={item.id}
                className={`relative ${index < TIMELINE_ITEMS.length - 1 ? 'mb-12' : ''}`}
              >
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-[#0d121c] border-2 ${circleColor} flex items-center justify-center`}
                >
                  <div className={`w-2 h-2 rounded-full ${dotColor}`} />
                </div>

                {/* Timeline card */}
                <div className="p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] flex flex-col gap-3 shadow-md hover:border-[#00f2fe]/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`font-code text-xs ${badgeColor} bg-[#1c2436] px-2.5 py-1 rounded font-semibold`}
                    >
                      {item.period}
                    </span>
                    {item.location && (
                      <span className="font-code text-[11px] text-[#9ba7c0]">
                        {item.location}
                      </span>
                    )}
                    {item.status && (
                      <span className="font-code text-[11px] text-[#6ff6ff] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-ping" />
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#e4e8f3]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#9ba7c0] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-code text-xs px-2.5 py-0.5 rounded bg-[#131926] text-[#e4e8f3] border border-[#232e42]/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
