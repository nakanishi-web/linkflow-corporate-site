import React from 'react';

export default function StepsSection() {
  const steps = [
    {
      number: '01',
      title: '無料アカウント登録',
      description:
        'フォームからわずか1分で登録完了。クレジットカードの登録は不要で、すぐにお試しいただけます。',
    },
    {
      number: '02',
      title: '初期設定・データ連携',
      description:
        '直感的なチュートリアルに沿って、既存の顧客データやメンバー情報を簡単にインポートします。',
    },
    {
      number: '03',
      title: '運用スタート・サポート',
      description:
        '登録即日から業務で利用可能。不安な点があれば、専任スタッフがチャットでしっかりサポートします。',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
            ご利用開始までのカンタン3ステップ
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            複雑な手続きや特別なIT知識は不要です。即日で運用の第一歩を踏み出せます。
          </p>
        </div>

        {/* ステップ一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-black text-sky-500 mb-4 font-mono">
                  STEP {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
