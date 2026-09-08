import { GraduationCap, Code2, Brain, LineChart, Sparkles } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#070a10]/60 border-y border-[#232e42]/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 text-[#00f2fe]">
            <span className="font-code text-xs uppercase tracking-widest">
              Profile &amp; Background
            </span>
            <span className="h-px w-8 bg-[#00f2fe]/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            About Me
          </h2>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Visual Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-[#0d121c] border border-[#232e42] p-4 shadow-xl flex flex-col gap-4">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#232e42]/60">
                <img
                  src={PORTFOLIO_INFO.portraitUrl}
                  alt="Duggasani Bhanuprakash Reddy portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0a0e17]/85 border border-[#00f2fe]/50 backdrop-blur-md">
                  <span className="font-code text-[10px] text-[#6ff6ff] uppercase font-semibold">
                    Undergrad
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="p-3 rounded-xl bg-[#131926] border border-[#232e42]/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f2fe]"></span>
                  </span>
                  <span className="text-xs text-[#e4e8f3] font-medium">Status</span>
                </div>
                <span className="font-code text-xs text-[#6ff6ff]">
                  Open to internships &amp; collaborations
                </span>
              </div>
            </div>
          </div>

          {/* Right: Verbatim Biographical Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-base sm:text-lg text-[#9ba7c0] leading-relaxed">
              <p>
                I'm a B.Tech student specializing in{' '}
                <strong className="text-[#e4e8f3] font-semibold">
                  Artificial Intelligence &amp; Data Science
                </strong>{' '}
                at{' '}
                <strong className="text-[#e4e8f3] font-semibold">
                  REVA University, Bengaluru
                </strong>
                . I'm passionate about extracting meaningful insights from data and building intelligent solutions to real-world problems.
              </p>
              <p>
                My current focus includes Python programming, data analysis, machine learning fundamentals, data visualization, SQL and IoT &amp; embedded systems. Currently learning Advanced Machine Learning and practical AI applications.
              </p>
            </div>

            {/* Professional Statement Highlight Box */}
            <div className="p-4 rounded-xl bg-[#1c2436]/60 border-l-4 border-[#00f2fe] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#00f2fe] shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-[#e4e8f3] font-medium">
                "{PORTFOLIO_INFO.statementQuote}"
              </p>
            </div>

            {/* 4 Elegant Descriptive Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Metric Card 1 */}
              <div className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 hover:border-[#00f2fe]/50 transition-all flex flex-col gap-1.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#131926] flex items-center justify-center text-[#00f2fe] mb-1 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="font-display text-sm font-semibold text-[#e4e8f3]">
                  B.Tech Artificial Intelligence &amp; Data Science
                </h4>
                <p className="text-xs text-[#9ba7c0]">REVA University, Bengaluru</p>
              </div>

              {/* Metric Card 2 */}
              <div className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 hover:border-[#d0bcff]/50 transition-all flex flex-col gap-1.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#131926] flex items-center justify-center text-[#d0bcff] mb-1 group-hover:scale-105 transition-transform">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-display text-sm font-semibold text-[#e4e8f3]">
                  Python Programming &amp; Data Analysis
                </h4>
                <p className="text-xs text-[#9ba7c0]">Clean code, NumPy &amp; Pandas</p>
              </div>

              {/* Metric Card 3 */}
              <div className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 hover:border-[#91e8ff]/50 transition-all flex flex-col gap-1.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#131926] flex items-center justify-center text-[#91e8ff] mb-1 group-hover:scale-105 transition-transform">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-display text-sm font-semibold text-[#e4e8f3]">
                  AI / ML Fundamentals
                </h4>
                <p className="text-xs text-[#9ba7c0]">Predictive modeling &amp; algorithmic logic</p>
              </div>

              {/* Metric Card 4 */}
              <div className="p-4 rounded-xl bg-[#0d121c] border border-[#232e42]/60 hover:border-[#6ff6ff]/50 transition-all flex flex-col gap-1.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#131926] flex items-center justify-center text-[#6ff6ff] mb-1 group-hover:scale-105 transition-transform">
                  <LineChart className="w-4 h-4" />
                </div>
                <h4 className="font-display text-sm font-semibold text-[#e4e8f3]">
                  Data Analysis &amp; Visualization
                </h4>
                <p className="text-xs text-[#9ba7c0]">Exploratory insight &amp; visual storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
