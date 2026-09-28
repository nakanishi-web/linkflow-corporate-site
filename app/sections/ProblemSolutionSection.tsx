import React from 'react';

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* セクションの見出し */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            Problem & Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            こんなお悩み、抱えていませんか？
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            日々の業務で分散する顧客情報や非効率な管理。LinkFlowがすべてスマートに解決します。
          </p>
        </div>

        {/* 課題と解決の2カラムレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* 左側：課題（Problem） */}
          <div className="bg-sky-50 p-8 md:p-10 rounded-2xl border border-sky-100 flex flex-col justify-between">
            <div>
              <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                課題
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 leading-snug">
                点在する顧客データに、<br />
                時間と手間を取られていませんか？
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 text-lg">✕</span>
                  <span>エクセルやチャットツールに顧客情報がバラバラに散らばり、必要なデータを探すだけで時間がかかっている</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 text-lg">✕</span>
                  <span>特定のスタッフしか顧客のやり取りやステータスを把握できておらず、チーム全体でスムーズに共有できていない</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 text-lg">✕</span>
                  <span>データ集計や資料作成に膨大な手間がかかり、本来の業務が圧迫されている</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 右側：解決（Solution） */}
          <div className="bg-sky-900 text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                LinkFlowの解決
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white leading-snug">
                LinkFlowで、すべての顧客情報を<br />
                ひとつにスマート集約
              </h3>
              <ul className="space-y-4 text-sky-100 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-amber-400 font-bold mr-3 text-lg">✓</span>
                  <span>営業・サポート・マーケティングの全データをLinkFlowに一元化。欲しい情報に秒でアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 font-bold mr-3 text-lg">✓</span>
                  <span>誰が・いつ・どんな対応をしたかが一目で分かり、担当者不在時でもスマートに引き継ぎ・連携が可能に</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 font-bold mr-3 text-lg">✓</span>
                  <span>面倒な集計作業を自動化し、見やすいダッシュボードでチームの業務効率を最大化</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}