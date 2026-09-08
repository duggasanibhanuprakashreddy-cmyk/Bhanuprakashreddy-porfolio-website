import { useState } from 'react';
import { Terminal, LineChart, BarChart3, Brain, Radio, Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string, colorClass: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal className={`w-6 h-6 ${colorClass}`} />;
      case 'LineChart':
        return <LineChart className={`w-6 h-6 ${colorClass}`} />;
      case 'BarChart3':
        return <BarChart3 className={`w-6 h-6 ${colorClass}`} />;
      case 'Brain':
        return <Brain className={`w-6 h-6 ${colorClass}`} />;
      case 'Radio':
        return <Radio className={`w-6 h-6 ${colorClass}`} />;
      default:
        return <Terminal className={`w-6 h-6 ${colorClass}`} />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    if (!searchTerm.trim()) {
      return cat;
    }
    const q = searchTerm.toLowerCase();
    const matchesCategory = cat.title.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
    const matchingItems = cat.items.filter(
      (item) => item.name.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q)
    );
    if (matchesCategory || matchingItems.length > 0) {
      return {
        ...cat,
        items: matchingItems.length > 0 ? matchingItems : cat.items,
      };
    }
    return null;
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
            Capabilities &amp; Toolsets
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            Technical Stack
          </h2>
          <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
            Categorized overview of computational tools, analytical frameworks, machine learning essentials, and embedded hardware.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ba7c0]" />
            <input
              type="text"
              placeholder="Filter technologies (e.g., Python, Pandas, IoT, Regression)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0d121c] border border-[#232e42] text-sm text-[#e4e8f3] placeholder:text-[#9ba7c0]/60 focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9ba7c0] hover:text-[#e4e8f3]"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 shrink-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-code transition-all shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#00f2fe]/20 text-[#6ff6ff] border border-[#00f2fe]/40'
                  : 'bg-[#131926] text-[#9ba7c0] border border-[#232e42] hover:text-[#e4e8f3]'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-code transition-all shrink-0 ${
                  selectedCategory === c.id
                    ? 'bg-[#00f2fe]/20 text-[#6ff6ff] border border-[#00f2fe]/40'
                    : 'bg-[#131926] text-[#9ba7c0] border border-[#232e42] hover:text-[#e4e8f3]'
                }`}
              >
                {c.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Interactive Categorized Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            if (!cat) return null;
            const isIoT = cat.id === 'iot';
            const colorClass =
              cat.accentColor === 'purple'
                ? 'text-[#d0bcff]'
                : cat.accentColor === 'blue'
                ? 'text-[#91e8ff]'
                : 'text-[#00f2fe]';
            const hoverBorderClass =
              cat.accentColor === 'purple'
                ? 'hover:border-[#d0bcff]/50'
                : cat.accentColor === 'blue'
                ? 'hover:border-[#91e8ff]/50'
                : 'hover:border-[#00f2fe]/50';

            return (
              <div
                key={cat.id}
                className={`p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] ${hoverBorderClass} transition-all duration-300 group flex flex-col justify-between shadow-lg ${
                  isIoT ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#131926] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getIcon(cat.iconName, colorClass)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#e4e8f3] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#9ba7c0] mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className={isIoT ? 'grid grid-cols-1 sm:grid-cols-3 gap-2.5' : 'flex flex-col gap-2.5'}>
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#131926] border border-[#232e42]/60 hover:border-[#232e42] transition-colors"
                      >
                        <span className="font-code text-sm text-[#e4e8f3] font-medium">
                          {item.name}
                        </span>
                        <span
                          className={`font-code text-[10px] bg-[#1c2436] px-2 py-0.5 rounded ${colorClass}`}
                        >
                          {item.tag}
                        </span>
                      </div>
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
