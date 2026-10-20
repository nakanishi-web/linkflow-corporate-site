import React from 'react';

// 上段（3社）
const TOP_LOGOS = [
  {
    name: 'Tech Industry Inc.',
    color: 'text-indigo-600 hover:text-indigo-700',
    iconColor: 'text-indigo-600',
    fontStyle: 'font-black text-base sm:text-lg tracking-tight',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: 'NEXT SOLUTIONS',
    color: 'text-rose-600 hover:text-rose-700',
    iconColor: 'text-rose-600',
    fontStyle: 'font-extrabold text-sm sm:text-base tracking-wider',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    name: 'Global Consulting',
    color: 'text-amber-600 hover:text-amber-700',
    iconColor: 'text-amber-600',
    fontStyle: 'font-bold text-base sm:text-lg tracking-normal',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" />
      </svg>
    ),
  },
];

// 下段（2社）
const BOTTOM_LOGOS = [
  {
    name: 'SOKEN SYSTEMS',
    color: 'text-emerald-600 hover:text-emerald-700',
    iconColor: 'text-emerald-600',
    fontStyle: 'font-extrabold text-sm sm:text-base tracking-tight',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    name: 'ARK Technology',
    color: 'text-cyan-600 hover:text-cyan-700',
    iconColor: 'text-cyan-600',
    fontStyle: 'font-bold text-base sm:text-lg tracking-tight',
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
      </svg>
    ),
  },
];

// 数値実績データ
const STATS = [
  { label: '累計導入企業数', value: '500', unit: '社+' },
  { label: '契約継続率', value: '99.2', unit: '%' },
  { label: '平均工数削減率', value: '45', unit: '%' },
];

export default function LogoSection() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 見出し */}
        <p className="text-center text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase mb-8 sm:mb-10">
          ＼ 多くの成長企業・チームにご導入いただいています ／
        </p>

        {/* 企業ロゴ一覧（上段3社 / 下段2社） */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-14">
          {/* 上段：3社 */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {TOP_LOGOS.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center transition-transform hover:scale-105 duration-200 cursor-default ${logo.color} ${logo.fontStyle}`}
              >
                <span className={logo.iconColor}>{logo.icon}</span>
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* 下段：2社 */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {BOTTOM_LOGOS.map((logo, index) => (
              <div
                key={index}
                className={`flex items-center transition-transform hover:scale-105 duration-200 cursor-default ${logo.color} ${logo.fontStyle}`}
              >
                <span className={logo.iconColor}>{logo.icon}</span>
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 数値実績 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center text-sky-700 font-extrabold">
                <span className="text-4xl sm:text-5xl tracking-tight">{stat.value}</span>
                <span className="text-xl sm:text-2xl ml-1 text-sky-600">{stat.unit}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}