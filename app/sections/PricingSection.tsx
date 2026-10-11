import React from 'react';

export default function PricingSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* セクションの見出し */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            透明性のある柔軟な料金プラン
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            企業の成長スピードやチームの規模に合わせて、無駄なく最適なプランをお選びいただけます。
          </p>
        </div>

        {/* 料金カードのグリッド (3カラム) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* プラン1: スターター */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">スターター</h3>
              <p className="text-slate-500 text-sm mt-1">少人数で基本機能を試したいチームに</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold">¥1,980</span>
                <span className="text-slate-500 text-sm ml-2">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-center">✓ 顧客データ一元管理</li>
                <li className="flex items-center">✓ 基本タスク管理</li>
                <li className="flex items-center">✓ メールサポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                無料で試してみる
              </button>
            </div>
          </div>

          {/* プラン2: スタンダード（一番人気・ハイライト） */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl border-2 border-sky-500 flex flex-col justify-between relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              一番人気
            </div>
            <div>
              <h3 className="text-lg font-bold">スタンダード</h3>
              <p className="text-slate-400 text-sm mt-1">リアルタイム共有と業務効率化を本格化</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold">¥3,980</span>
                <span className="text-slate-400 text-sm ml-2">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                <li className="flex items-center text-sky-400">✓ スターターの全機能</li>
                <li className="flex items-center text-sky-400">✓ ダッシュボード・売上グラフ分析</li>
                <li className="flex items-center">✓ リアルタイム活動ログ</li>
                <li className="flex items-center">✓ 優先チャットサポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3 px-4 rounded-xl bg-sky-500 text-white font-bold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/30">
                無料で試してみる
              </button>
            </div>
          </div>

          {/* プラン3: プロフェッショナル */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">プロフェッショナル</h3>
              <p className="text-slate-500 text-sm mt-1">組織全体の管理とセキュリティを強化</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold">¥7,980</span>
                <span className="text-slate-500 text-sm ml-2">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                <li className="flex items-center">✓ スタンダードの全機能</li>
                <li className="flex items-center">✓ 高度な権限管理・監査ログ</li>
                <li className="flex items-center">✓ 専任担当による導入支援</li>
                <li className="flex items-center">✓ 24時間サポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                お問い合わせ
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}