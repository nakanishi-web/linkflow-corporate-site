import React from 'react';

export default function DashboardSection() {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* セクションの見出し（前後のセクションと統一） */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            直感的なダッシュボード
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            必要な情報がひと目でわかり、迷わずスマートにチームの状況を把握できます。
          </p>
        </div>

        {/* ブラウザ風モックアップ枠 */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* ブラウザの上部バー */}
          <div className="bg-slate-100 px-4 py-3 flex items-center space-x-2 border-b border-slate-200">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="ml-4 text-xs text-slate-400 bg-white px-3 py-1 rounded border border-slate-200 w-64 text-center">
              https://app.linkflow.co.jp/dashboard
            </div>
          </div>

          {/* ダッシュボードの中身（ダーク調の管理画面イメージ） */}
          <div className="p-6 md:p-8 bg-slate-900 text-white">
            
            {/* 上部カード（3カラムのスタッツ） */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm">今月の売上総額</p>
                <p className="text-2xl font-bold mt-1">¥4,850,000</p>
                <span className="text-emerald-400 text-xs mt-1 inline-block">↑ 先月比 +12%</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm">進行中プロジェクト</p>
                <p className="text-2xl font-bold mt-1">24件</p>
                <span className="text-blue-400 text-xs mt-1 inline-block">全社稼働中</span>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <p className="text-slate-400 text-sm">タスク完了率</p>
                <p className="text-2xl font-bold mt-1">94.2%</p>
                <span className="text-emerald-400 text-xs mt-1 inline-block">順調</span>
              </div>
            </div>

            {/* メインのグラフ＆アクティビティエリア */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* 左側：売上推移グラフ風プレビュー (2カラム分) */}
              <div className="lg:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-bold text-slate-200">月別売上・案件推移</h4>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">2026年度</span>
                </div>
                {/* グラフのバー表現 */}
                <div className="h-40 flex items-end justify-between gap-2 pt-4 border-b border-slate-700">
                  <div className="w-full bg-sky-500/20 hover:bg-sky-500/40 rounded-t h-[40%] transition-all"></div>
                  <div className="w-full bg-sky-500/20 hover:bg-sky-500/40 rounded-t h-[60%] transition-all"></div>
                  <div className="w-full bg-sky-500/20 hover:bg-sky-500/40 rounded-t h-[55%] transition-all"></div>
                  <div className="w-full bg-sky-500/20 hover:bg-sky-500/40 rounded-t h-[80%] transition-all"></div>
                  <div className="w-full bg-sky-500/20 hover:bg-sky-500/40 rounded-t h-[70%] transition-all"></div>
                  <div className="w-full bg-sky-500 rounded-t h-[95%] transition-all shadow-lg shadow-sky-500/20"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>5月</span><span>6月</span><span>7月</span><span>8月</span><span>9月</span><span className="text-sky-400 font-bold">10月(今月)</span>
                </div>
              </div>

              {/* 右側：リアルタイム活動ログ (1カラム分) */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h4 className="text-sm font-bold text-slate-200 mb-4">リアルタイム活動ログ</h4>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-900/50 p-2.5 rounded border border-slate-700/50">
                    <span className="text-sky-400 font-medium">佐藤 健太</span> が商談ステータスを更新
                    <p className="text-slate-400 text-[10px] mt-0.5">株式会社A様 - 契約締結 (2分前)</p>
                  </div>
                  <div className="bg-slate-900/50 p-2.5 rounded border border-slate-700/50">
                    <span className="text-sky-400 font-medium">鈴木 美咲</span> が新しいタスクを追加
                    <p className="text-slate-400 text-[10px] mt-0.5">B社サポート対応 (15分前)</p>
                  </div>
                  <div className="bg-slate-900/50 p-2.5 rounded border border-slate-700/50">
                    <span className="text-sky-400 font-medium">高橋 一郎</span> が顧客メモを保存
                    <p className="text-slate-400 text-[10px] mt-0.5">C社ヒアリング完了 (1時間前)</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}