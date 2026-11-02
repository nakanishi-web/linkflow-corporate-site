import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー（H2見出しの強調） */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-sky-600 uppercase">
            PROBLEM & SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-5 tracking-tight leading-tight">
            こんなお悩み、抱えていませんか？
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            日々の業務で分散する顧客情報や非効率な管理。LinkFlowがすべてスマートに解決します。
          </p>
        </div>

        {/* 課題 ＆ 解決 カードグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* 左側：課題カード (Before) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden h-full">
            <div>
              {/* バッジ */}
              <div className="inline-block mb-6">
                <span className="px-3.5 py-1.5 text-xs font-bold text-rose-700 bg-rose-100/90 rounded-md border border-rose-200/80">
                  導入前の課題
                </span>
              </div>

              {/* カードタイトル */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-6">
                点在する顧客データに、時間と手間を取られていませんか？
              </h3>

              {/* リスト */}
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">エクセルやチャットツールに顧客情報がバラバラに散らばり、必要なデータを探すだけで時間がかかっている</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">特定のスタッフしか顧客のやり取りやステータスを把握できておらず、チーム全体でスムーズに共有できていない</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">データ集計や資料作成に膨大な手間がかかり、本来の業務が圧迫されている</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 中央：太く淡い矢印 */}
          <div className="lg:col-span-2 flex items-center justify-center my-2 lg:my-0">
            <div className="text-sky-400 transform rotate-90 lg:rotate-0">
              <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* 右側：解決カード (After) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 shadow-xl shadow-sky-600/20 border border-sky-400/30 text-white flex flex-col justify-between relative overflow-hidden h-full">
            <div>
              {/* バッジ */}
              <div className="inline-block mb-6">
                <span className="px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-amber-300 rounded-md shadow-sm">
                  LinkFlowの解決
                </span>
              </div>

              {/* カードタイトル */}
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-6">
                LinkFlowで、すべての顧客情報をひとつにスマート集約
              </h3>

              {/* リスト */}
              <ul className="space-y-4 text-sky-50">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-sm">✓</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">営業・サポート・マーケティングの全データをLinkFlowに一元化。欲しい情報に秒でアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-sm">✓</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">誰が・いつ・どんな対応をしたかが一目で分かり、担当者不在時でもスマートに引き継ぎ・連携が可能に</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-sm">✓</span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">面倒な集計作業を自動化し、見やすいダッシュボードでチームの業務効率を最大化</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}