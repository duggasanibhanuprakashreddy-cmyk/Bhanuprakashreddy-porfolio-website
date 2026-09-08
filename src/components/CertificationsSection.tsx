import { BarChart3, LineChart, Code2, Rocket, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function CertificationsSection() {
  const getCertIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className={`w-5 h-5 ${colorClass}`} />;
      case 'LineChart':
        return <LineChart className={`w-5 h-5 ${colorClass}`} />;
      case 'Code2':
        return <Code2 className={`w-5 h-5 ${colorClass}`} />;
      case 'Rocket':
        return <Rocket className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Award className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section
      id="certifications"
      className="py-20 lg:py-28 bg-[#070a10]/70 border-y border-[#232e42]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
            Credentials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            Certifications &amp; Training
          </h2>
          <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
            Verified course completions and technical credentials across Python programming and data sciences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isCyan = cert.accentColor === 'cyan';
            const isPurple = cert.accentColor === 'purple';
            const badgeBg = isCyan
              ? 'bg-[#00f2fe]/10 text-[#6ff6ff] border-[#00f2fe]/20'
              : isPurple
              ? 'bg-[#571bc1]/20 text-[#d0bcff] border-[#571bc1]/30'
              : 'bg-[#91e8ff]/15 text-[#91e8ff] border-[#91e8ff]/30';

            const cardHoverBorder = isCyan
              ? 'hover:border-[#00f2fe]/60'
              : isPurple
              ? 'hover:border-[#d0bcff]/60'
              : 'hover:border-[#91e8ff]/60';

            const iconColor = isCyan
              ? 'text-[#00f2fe]'
              : isPurple
              ? 'text-[#d0bcff]'
              : 'text-[#91e8ff]';

            const partnerColor = isCyan
              ? 'text-[#00f2fe]'
              : isPurple
              ? 'text-[#d0bcff]'
              : 'text-[#91e8ff]';

            return (
              <div
                key={cert.id}
                className={`p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] ${cardHoverBorder} transition-all duration-300 flex flex-col justify-between shadow-sm group hover:-translate-y-1`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#131926] flex items-center justify-center">
                      {getCertIcon(cert.iconName, iconColor)}
                    </div>
                    <span
                      className={`font-code text-[10px] px-2 py-0.5 rounded border font-semibold ${badgeBg}`}
                    >
                      Completed
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#e4e8f3] group-hover:text-[#00f2fe] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[#9ba7c0] leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#232e42]/60 flex items-center justify-between">
                  <span className="font-code text-xs text-[#9ba7c0]">
                    {cert.organization}
                  </span>
                  <span className={`font-code text-xs font-medium ${partnerColor}`}>
                    {cert.partnerBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
