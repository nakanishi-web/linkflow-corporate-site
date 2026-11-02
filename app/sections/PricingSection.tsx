'use client';

import React from 'react';

export default function PricingSection() {
  const handlePlanSelect = (
    event: React.MouseEvent<HTMLAnchorElement>,
    plan: 'starter' | 'standard' | 'professional',
  ) => {
    event.preventDefault();

    const url = new URL(window.location.href);
    url.searchParams.delete('source');
    url.searchParams.set('plan', plan);
    url.hash = 'contact';
    window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event('linkflow:plan-selected'));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションの見出し（H2強化） */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sky-600 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-5 tracking-tight leading-tight">
            透明性のある柔軟な料金プラン
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            企業の成長スピードやチームの規模に合わせて、無駄なく最適なプランをお選びいただけます。
          </p>
        </div>

        {/* 料金カードのグリッド (3カラム) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto items-stretch pt-4">
          
          {/* プラン1: スターター */}
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-9 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <h3 className="text-xl font-bold text-slate-900">スターター</h3>
              <p className="text-slate-500 text-sm mt-1.5 font-medium">少人数で基本機能を試したいチームに</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-black text-slate-900">¥1,980</span>
                <span className="text-slate-500 text-xs sm:text-sm ml-2 font-medium">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-200/60 pt-6 font-medium">
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> 顧客データ一元管理</li>
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> 基本タスク管理</li>
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> メールサポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="?plan=starter#contact"
                onClick={(event) => handlePlanSelect(event, 'starter')}
                className="block w-full text-center py-3.5 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 bg-white hover:bg-slate-100 transition-colors shadow-sm"
              >
                無料で試してみる
              </a>
            </div>
          </div>

          {/* プラン2: スタンダード（一番人気・強力な主張） */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 shadow-2xl shadow-sky-500/15 border-2 border-sky-500 flex flex-col justify-between relative lg:-translate-y-4 z-10">
            {/* 一番人気バッジ */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-sky-400">
              ★ 一番人気プラン
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">スタンダード</h3>
              <p className="text-slate-500 text-sm mt-1.5 font-medium">リアルタイム共有と業務効率化を本格化</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">¥3,980</span>
                <span className="text-slate-500 text-xs sm:text-sm ml-2 font-medium">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700 border-t border-sky-100 pt-6">
                <li className="flex items-center font-bold text-sky-700"><span className="text-sky-600 font-black mr-2.5">✓</span> スターターの全機能</li>
                <li className="flex items-center font-bold text-sky-700"><span className="text-sky-600 font-black mr-2.5">✓</span> ダッシュボード・売上グラフ分析</li>
                <li className="flex items-center font-semibold"><span className="text-sky-600 font-black mr-2.5">✓</span> リアルタイム活動ログ</li>
                <li className="flex items-center font-semibold"><span className="text-sky-600 font-black mr-2.5">✓</span> 優先チャットサポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="?plan=standard#contact"
                onClick={(event) => handlePlanSelect(event, 'standard')}
                className="block w-full text-center py-4 px-4 rounded-xl bg-sky-600 text-white font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/30 text-base"
              >
                無料で試してみる
              </a>
            </div>
          </div>

          {/* プラン3: プロフェッショナル */}
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-9 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <h3 className="text-xl font-bold text-slate-900">プロフェッショナル</h3>
              <p className="text-slate-500 text-sm mt-1.5 font-medium">組織全体の管理とセキュリティを強化</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-black text-slate-900">¥7,980</span>
                <span className="text-slate-500 text-xs sm:text-sm ml-2 font-medium">/ 月・1ID（税抜）</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-600 border-t border-slate-200/60 pt-6 font-medium">
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> スタンダードの全機能</li>
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> 高度な権限管理・監査ログ</li>
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> 専任担当による導入支援</li>
                <li className="flex items-center"><span className="text-sky-600 font-black mr-2.5">✓</span> 24時間サポート</li>
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="?plan=professional#contact"
                onClick={(event) => handlePlanSelect(event, 'professional')}
                className="block w-full text-center py-3.5 px-4 rounded-xl border border-slate-300 font-bold text-slate-700 bg-white hover:bg-slate-100 transition-colors shadow-sm"
              >
                お問い合わせ
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}