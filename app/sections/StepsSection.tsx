import React from 'react';
import { UserPlus, Settings, Headphones } from 'lucide-react';

export default function StepsSection() {
  const steps = [
    {
      number: '01',
      title: '無料アカウント登録',
      tagline: 'クレカ不要・即時発行',
      image: '/images/01.png',
      description:
        '専用フォームからメールアドレスを入力するだけ。1分でデモ環境を発行し、主要機能をすぐにお試しいただけます。',
      point: '初期費用・解約金 0円',
      icon: <UserPlus className="w-5 h-5 text-sky-600" />,
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      number: '02',
      title: '初期設定・データ連携',
      tagline: 'CSV一括インポート対応',
      image: '/images/02.png',
      description:
        '直感的なウィザードに沿って既存のエクセル顧客データやメンバー情報をインポート。テンプレート選定で即日設定完了。',
      point: 'フォーマット変換機能付き',
      icon: <Settings className="w-5 h-5 text-indigo-600" />,
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      number: '03',
      title: '運用スタート・伴走サポート',
      tagline: 'チャット＆オンライン支援',
      image: '/images/03.png',
      description:
        '登録即日から全機能を利用可能。定着まで専任担当がチャットでしっかりサポートするため、ITが得意でない現場でも安心です。',
      point: '専任担当による導入レクチャーあり',
      icon: <Headphones className="w-5 h-5 text-emerald-600" />,
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            ご利用開始までのカンタン3ステップ
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            複雑な手続きや特別なIT知識は不要です。即日で運用の第一歩を踏み出せます。
          </p>
        </div>

        {/* ステップ一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-sky-200 transition-all group"
            >
              <div>
                {/* ステップ番号 ＆ アイコン */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-slate-300 font-mono tracking-tight group-hover:text-sky-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                </div>

                {/* イラスト画像表示領域 */}
                <div className="w-full h-36 mb-5 rounded-xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-2 shadow-2xs">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* タグ ＆ タイトル */}
                <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded border mb-2 ${step.tagColor}`}>
                  {step.tagline}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* 説明文 */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* 下部の特徴バッジ */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-400">特徴</span>
                <span className="font-bold text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-2xs">
                  {step.point}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}