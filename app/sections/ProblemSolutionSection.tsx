import React from 'react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
            PROBLEM & SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
            こんなお悩み、抱えていませんか？
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            日々の業務で分散する顧客情報や非効率な管理。LinkFlowがすべてスマートに解決します。
          </p>
        </div>

        {/* 課題 ＆ 解決 カードグリッド */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* 左側：課題カード (Before) */}
          <div className="lg:col-span-5 bg-slate-50/90 rounded-3xl p-8 sm:p-10 shadow-lg shadow-slate-200/60 border border-slate-200/80 flex flex-col justify-between relative overflow-hidden h-full">
            <div>
              {/* バッジ */}
              <div className="inline-block mb-6">
                <span className="px-3 py-1 text-xs font-bold text-rose-600 bg-rose-100/80 rounded-md border border-rose-200/60 shadow-sm">
                  導入前の課題
                </span>
              </div>

              {/* カードタイトル */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-6">
                点在する顧客データに、時間と手間を取られていませんか？
              </h3>

              {/* リスト */}
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium">エクセルやチャットツールに顧客情報がバラバラに散ばり、必要なデータを捜すだけで時間がかかっている</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium">特定のスタッフしか顧客のやり取りやステータスを把握できておらず、チーム全体でスムーズに共有できていない</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3">✕</span>
                  <span className="text-sm sm:text-base font-medium">データ集計や資料作成に膨大な手間がかかり、本来の業務が圧迫されている</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 中央：太く淡い矢印 */}
          <div className="lg:col-span-2 flex items-center justify-center my-4 lg:my-0">
            <div className="text-sky-300 transform rotate-90 lg:rotate-0">
              <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* 右側：解決カード (After) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-sky-500/25 border border-sky-400/30 text-white flex flex-col justify-between relative overflow-hidden h-full">
            <div>
              {/* バッジ */}
              <div className="inline-block mb-6">
                <span className="px-3 py-1 text-xs font-bold text-sky-950 bg-amber-300 rounded-md shadow-sm">
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
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-md">✓</span>
                  <span className="text-sm sm:text-base font-medium">営業・サポート・マーケティングの全データをLinkFlowに一元化。欲しい情報に秒でアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-md">✓</span>
                  <span className="text-sm sm:text-base font-medium">誰が・いつ・どんな対応をしたかが一目で分かり、担当者不在時でもスマートに引き継ぎ・連携が可能に</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white text-sky-600 flex items-center justify-center font-black text-sm mt-0.5 mr-3 shadow-md">✓</span>
                  <span className="text-sm sm:text-base font-medium">面倒な集計作業を自動化し、見やすいダッシュボードでチームの業務効率を最大化</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}