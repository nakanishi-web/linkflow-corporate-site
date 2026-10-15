import React from 'react';

export default function LogoSection() {
  const companies = [
    { name: 'Tech Industry Inc.', label: 'テックインダストリー' },
    { name: 'NEXT SOLUTIONS', label: 'ネクストソリューションズ' },
    { name: 'Global Consulting', label: 'グローバルコンサルティング' },
    { name: 'SOKEN SYSTEMS', label: '創研システムズ' },
    { name: 'ARK Technology', label: 'アークテクノロジー' },
  ];

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
          多くの成長企業・チームにご導入いただいています
        </p>

        {/* ロゴ一覧（カード枠と背景のコントラストを強化） */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-300 hover:border-slate-400 transition-all duration-300 shadow-sm"
            >
              <span className="font-bold text-slate-700 tracking-tight text-sm sm:text-base text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        {/* 定量実績（薄い線を消し、適切な余白で配置） */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">500社+</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">累計導入企業数</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">99.2%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">契約継続率</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-sky-600">45%削減</p>
            <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">平均工数削減率</p>
          </div>
        </div>
      </div>
    </section>
  );
}