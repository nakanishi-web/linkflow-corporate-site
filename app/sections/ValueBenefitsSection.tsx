import React from 'react';

export default function ValueBenefitsSection() {
  const benefits = [
    {
      number: '01',
      title: '誰でも直感的に使えるUI設計',
      subtitle: '導入後の社内定着率 98%',
      description:
        'マニュアルを読む時間をゼロに。複雑な設定を排除し、誰でも初日から迷わず業務に活用できるUI/UXを極めました。',
      bgLight: 'bg-sky-50',
      borderAccent: 'border-sky-500',
      tagColor: 'text-sky-600 bg-sky-100',
    },
    {
      number: '02',
      title: '既存ツールとのシームレスな連携',
      subtitle: '移行コストを最小限に抑える',
      description:
        'Slack、Chatwork、Google Workspaceなど今お使いのツールとワンクリックで連携。現在の業務フローを壊さずにスムーズに導入できます。',
      bgLight: 'bg-indigo-50',
      borderAccent: 'border-indigo-500',
      tagColor: 'text-indigo-600 bg-indigo-100',
    },
    {
      number: '03',
      title: '圧倒的なコストパフォーマンス',
      subtitle: '必要な機能だけを無駄なく提供',
      description:
        '大手ツールのような過剰な機能や複雑な料金体系はありません。中小企業に本当に必要な機能に絞ることで、高品質ながら導入しやすい価格を実現しました。',
      bgLight: 'bg-emerald-50',
      borderAccent: 'border-emerald-500',
      tagColor: 'text-emerald-600 bg-emerald-100',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
            WHY LINKFLOW
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
            LinkFlow が選ばれる <span className="text-sky-600">3つの理由</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            現場の使いやすさと経営成果を両立する、新しい業務基盤です。
          </p>
        </div>

        {/* 3つの理由カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-t-4 ${item.borderAccent} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${item.tagColor}`}>
                    {item.subtitle}
                  </span>
                  <span className="text-3xl font-black text-slate-200">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}