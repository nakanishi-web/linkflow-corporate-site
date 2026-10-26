import React from 'react';
import { 
  Bell, ChevronDown, TrendingUp, CheckCircle2, Clock, ArrowUpRight,
  Zap, ShieldCheck, BarChart3, Smartphone, Search, Filter,
  UserRound, Plus, LayoutDashboard, BriefcaseBusiness, Signal, Wifi, BatteryFull
} from 'lucide-react';

export default function DashboardSection() {
  return (
    <section className="py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションの見出し */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            DASHBOARD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900">
            直感的なダッシュボード
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            必要な情報がひと目でわかり、迷わずスマートにチームの状況を把握できます。PC・スマホ完全対応。
          </p>
        </div>

        {/* モックアップ配置エリア */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_200px] items-center gap-8 max-w-6xl mx-auto mb-20">
          
          {/* 1. メイン：PCブラウザ風モックアップ */}
          <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-200 overflow-hidden p-2 sm:p-3">
            
            {/* ブラウザの上部バー ＋ アプリ内ヘッダー */}
            <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between rounded-t-lg mb-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-2 text-[11px] text-slate-300 bg-slate-700 px-3 py-0.5 rounded border border-slate-600 w-48 sm:w-56 text-center truncate">
                  https://app.linkflow.co.jp/dashboard
                </div>
              </div>
              <div className="hidden sm:flex items-center space-x-3 text-slate-300">
                <span className="bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-sky-500/30">
                  プラン: スタンダード
                </span>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* ダッシュボードの中身（ライトテーマ） */}
            <div className="p-4 sm:p-6 md:p-8 bg-slate-50 text-slate-900 rounded-xl space-y-6">
              
              {/* 組織・切り替えバー */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 text-xs shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700">表示チーム:</span>
                  <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-semibold flex items-center gap-1 cursor-pointer">
                    営業本部・全体 <ChevronDown className="w-3 h-3 text-slate-500" />
                  </span>
                </div>
                <div className="text-slate-500 text-[11px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-500 shrink-0" /> 最終同期: 1分前（リアルタイム更新中）
                </div>
              </div>

              {/* 上部カード（3カラムのスタッツ） */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 text-xs font-semibold">今月の売上総額</p>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-2xl font-black mt-1 text-slate-900">¥4,850,000</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-emerald-700 bg-emerald-50 font-bold text-[10px] px-2 py-0.5 rounded border border-emerald-200">
                      +12% 伸長
                    </span>
                    <span className="text-slate-400 text-[10px]">目標達成率: 97%</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-sky-500"></div>
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 text-xs font-semibold">進行中プロジェクト</p>
                    <span className="text-[10px] bg-sky-50 text-sky-700 px-1.5 py-0.5 rounded font-bold">全社稼働</span>
                  </div>
                  <p className="text-2xl font-black mt-1 text-slate-900">24 <span className="text-sm font-normal text-slate-500">件</span></p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sky-700 bg-sky-50 font-bold text-[10px] px-2 py-0.5 rounded border border-sky-200">
                      遅延 0件
                    </span>
                    <span className="text-slate-400 text-[10px]">平均稼働日数: 14日</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                  <div className="flex justify-between items-start">
                    <p className="text-slate-500 text-xs font-semibold">タスク完了率</p>
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  </div>
                  <p className="text-2xl font-black mt-1 text-slate-900">94.2%</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-indigo-700 bg-indigo-50 font-bold text-[10px] px-2 py-0.5 rounded border border-indigo-200">
                      順調（先週比 +2.1%）
                    </span>
                  </div>
                </div>
              </div>

              {/* メインのグラフ＆アクティビティエリア */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 左側：売上推移グラフ (2カラム分) */}
                <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">月別売上・案件推移</h4>
                      <p className="text-[11px] text-slate-400">直近半期の売上実績および予測データ</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-bold border border-slate-200">月別</span>
                      <span className="text-[11px] bg-white text-slate-400 px-2.5 py-1 rounded font-semibold border border-slate-200 hover:bg-slate-50 cursor-pointer">四半期</span>
                    </div>
                  </div>
                  
                  {/* グラフのバー表現 */}
                  <div className="relative h-44 flex items-end justify-between gap-2 sm:gap-3 pt-6 px-2 border-b border-slate-200">
                    <div className="absolute inset-x-0 top-6 border-t border-slate-100 border-dashed"></div>
                    <div className="absolute inset-x-0 top-16 border-t border-slate-100 border-dashed"></div>
                    <div className="absolute inset-x-0 top-28 border-t border-slate-100 border-dashed"></div>

                    <div className="w-full bg-slate-300/80 hover:bg-slate-300 rounded-t h-[40%] transition-all relative group"></div>
                    <div className="w-full bg-slate-300/80 hover:bg-slate-300 rounded-t h-[60%] transition-all relative group"></div>
                    <div className="w-full bg-slate-300/80 hover:bg-slate-300 rounded-t h-[55%] transition-all relative group"></div>
                    <div className="w-full bg-slate-300/80 hover:bg-slate-300 rounded-t h-[80%] transition-all relative group"></div>
                    <div className="w-full bg-slate-300/80 hover:bg-slate-300 rounded-t h-[70%] transition-all relative group"></div>
                    
                    {/* 今月のバー */}
                    <div className="w-full bg-sky-500 rounded-t h-[95%] transition-all shadow-md shadow-sky-500/20 relative group">
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-[10px] px-2 py-0.5 rounded-md whitespace-nowrap shadow-xs font-bold border border-sky-400">
                        ¥4.85百万
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-slate-500 mt-3 font-semibold">
                    <span>5月</span><span>6月</span><span>7月</span><span>8月</span><span>9月</span><span className="text-sky-600 font-bold flex items-center gap-0.5">10月(今月) <ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                </div>

                {/* 右側：リアルタイム活動ログ (1カラム分) */}
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-sm font-bold text-slate-800">リアルタイム活動ログ</h4>
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-100">Live</span>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60 hover:border-sky-300 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-sky-500"></span> 佐藤 健太
                          </span>
                          <span className="text-[10px] text-slate-400">2分前</span>
                        </div>
                        <p className="text-slate-600 pl-3.5">商談ステータスを更新: <span className="text-sky-600 font-semibold">株式会社A様 - 契約締結</span></p>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60 hover:border-sky-300 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 鈴木 美咲
                          </span>
                          <span className="text-[10px] text-slate-400">15分前</span>
                        </div>
                        <p className="text-slate-600 pl-3.5">新しいタスクを追加: <span className="text-slate-800 font-medium">B社サポート対応</span></p>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60 hover:border-sky-300 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-slate-800 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-500"></span> 高橋 一郎
                          </span>
                          <span className="text-[10px] text-slate-400">1時間前</span>
                        </div>
                        <p className="text-slate-600 pl-3.5">顧客メモを保存: <span className="text-slate-800 font-medium">C社ヒアリング完了</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                    <span className="text-[11px] text-sky-600 font-bold hover:underline cursor-pointer">
                      すべての活動ログを見る →
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 2. スマホ版モックアップ */}
          <div className="hidden lg:flex w-[200px] h-[400px] bg-slate-900 p-2 rounded-[36px] shadow-2xl border-4 border-slate-800 flex-col justify-between">
            {/* ノッチ */}
            <div className="w-14 h-3 bg-slate-800 rounded-b-md mx-auto flex items-center justify-center shrink-0">
              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
            </div>

            {/* スマホ画面（縦長アスペクト比） */}
            <div className="bg-slate-50 rounded-[26px] px-3 pt-2 text-[10px] text-slate-800 flex-1 flex flex-col overflow-hidden border border-slate-200">
              <div className="flex-1 space-y-2 overflow-hidden">
                <div className="flex justify-between items-center text-[8px] font-semibold text-slate-700">
                  <span>9:41</span>
                  <span className="flex items-center gap-0.5 text-slate-500">
                    <Signal className="w-2.5 h-2.5" />
                    <Wifi className="w-2.5 h-2.5" />
                    <BatteryFull className="w-3 h-3" />
                  </span>
                </div>

                <div className="flex justify-between items-center pb-1.5 border-b border-slate-200">
                  <div>
                    <span className="font-black text-sky-600 text-xs">LinkFlow</span>
                    <span className="ml-1.5 text-[8px] text-slate-400">営業チーム</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-3 h-3 text-slate-500" />
                    <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-[8px] font-bold">佐</div>
                  </div>
                </div>

                {/* スマホ検索バー */}
                <div className="bg-white p-1.5 rounded-md border border-slate-200 flex items-center gap-1.5 text-slate-400 text-[9px]">
                  <Search className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="truncate">商談を検索...</span>
                  <Plus className="w-3 h-3 text-sky-600 ml-auto shrink-0" />
                </div>

                {/* ステータスサマリー */}
                <div className="bg-white p-2 rounded-md border border-slate-200 shadow-2xs space-y-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-slate-700">商談管理</span>
                    <Filter className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 bg-slate-50 p-1 rounded">
                    <span>進行中: <strong>3件</strong></span>
                    <span className="text-sky-600 font-bold">¥35.2万</span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-2/3 bg-sky-500 rounded-full"></div>
                  </div>
                </div>

                {/* リスト表示 */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-700">最近の商談</span>
                  <span className="text-[8px] text-sky-600 font-semibold">すべて見る</span>
                </div>
                <div className="space-y-1">
                  <div className="bg-white p-1.5 rounded border-l-2 border-sky-500 shadow-2xs">
                    <div className="flex justify-between items-center gap-1">
                      <p className="font-bold text-slate-800 truncate text-[9px]">株式会社テクノロジーズ</p>
                      <span className="text-[7px] text-sky-700 bg-sky-50 px-1 rounded shrink-0">提案中</span>
                    </div>
                    <p className="text-[8px] text-slate-400 mt-0.5">佐藤 健太 · 本日 14:00</p>
                  </div>
                  <div className="bg-white p-1.5 rounded border-l-2 border-emerald-500 shadow-2xs">
                    <div className="flex justify-between items-center gap-1">
                      <p className="font-bold text-slate-800 truncate text-[9px]">ネクストマーケティング</p>
                      <span className="text-[7px] text-emerald-700 bg-emerald-50 px-1 rounded shrink-0">進行中</span>
                    </div>
                    <p className="text-[8px] text-slate-400 mt-0.5">鈴木 美咲 · 明日 10:30</p>
                  </div>
                  <div className="bg-white p-1.5 rounded border-l-2 border-amber-400 shadow-2xs">
                    <div className="flex justify-between items-center gap-1">
                      <p className="font-bold text-slate-800 truncate text-[9px]">青空ソリューションズ</p>
                      <span className="text-[7px] text-amber-700 bg-amber-50 px-1 rounded shrink-0">要確認</span>
                    </div>
                    <p className="text-[8px] text-slate-400 mt-0.5">高橋 一郎 · 10/28 11:00</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-around items-center border-t border-slate-200 bg-white -mx-3 mt-1 px-1 py-1.5">
                <div className="flex flex-col items-center gap-0.5 text-sky-600">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span className="text-[7px] font-semibold">ホーム</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <BriefcaseBusiness className="w-3.5 h-3.5" />
                  <span className="text-[7px]">商談</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400 relative">
                  <Bell className="w-3.5 h-3.5" />
                  <span className="text-[7px]">通知</span>
                  <span className="absolute top-0 right-0 w-1 h-1 bg-rose-500 rounded-full"></span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-slate-400">
                  <UserRound className="w-3.5 h-3.5" />
                  <span className="text-[7px]">マイページ</span>
                </div>
              </div>

              {/* インジケーターバー */}
              <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-1 shrink-0"></div>
            </div>
          </div>

        </div>

        {/* 下部機能ハイライト */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="p-2 bg-sky-100 text-sky-600 rounded-lg shrink-0 mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">リアルタイムデータ連携</h4>
              <p className="text-xs text-slate-600 mt-1">現場の更新がダッシュボードへ即座に反映され、最新状況を常時把握できます。</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg shrink-0 mt-0.5">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">一目でわかる集計レポート</h4>
              <p className="text-xs text-slate-600 mt-1">集計作業は一切不要。売上やプロジェクトの進捗を自動でグラフ可視化します。</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg shrink-0 mt-0.5">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">PC・スマホ完全対応</h4>
              <p className="text-xs text-slate-600 mt-1">外出先のスマートフォンからも、社内PCと同等の操作性で快適に運用可能です。</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}