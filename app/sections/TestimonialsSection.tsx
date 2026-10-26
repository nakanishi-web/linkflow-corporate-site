import React from 'react';
import { User, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const cases = [
    {
      industry: '製造業 / 100名規模',
      highlight: '引き継ぎ時間 50%削減',
      problem: '営業ごとに顧客情報が分散し、属人化が深刻',
      result: '情報の一元化により、引き継ぎ作業時間が50%削減',
      detail:
        '「以前は各営業が個別のエクセルで顧客情報を管理しており、引継ぎや進捗共有に膨大な時間がかかっていました。LinkFlow導入後は全員が同じ画面でリアルタイムに進捗を把握できるようになり、チーム全体の業務効率が劇的に向上しました。」',
      company: '精密機器メーカー A社',
      role: '営業本部 部長 佐藤 様',
      iconBg: 'bg-sky-100 text-sky-600',
    },
    {
      industry: 'IT・サービス業 / 30名規模',
      highlight: '社内定着率 100%',
      problem: '過去に導入したSaaSが難しく社内に定着しなかった',
      result: 'マニュアル不要の操作性で、全社定着率100%を達成',
      detail:
        '「以前別のツールを導入した際は、設定の複雑さとマニュアル作成の負担で定着に失敗した経験がありました。LinkFlowはとにかく画面が直感的で、ITツールが得意でないメンバーも初日から迷わず使いこなせています。」',
      company: 'Webマーケティング支援 B社',
      role: '代表取締役 S・M 様',
      iconBg: 'bg-indigo-100 text-indigo-600',
    },
    {
      industry: '専門サービス業 / 50名規模',
      highlight: '月15時間の作業削減',
      problem: '月末の集計・レポート作成に毎月15時間以上を費やしていた',
      result: 'リアルタイムダッシュボードで、集計作業が完全に自動化',
      detail:
        '「ダッシュボード機能の利便性が非常に高いです。これまで月末に手動で行っていた集計・資料化作業が一瞬で完結するようになり、本来注力すべきクライアントへの提案業務に時間を使えるようになりました。」',
      company: '経営コンサルティング C社',
      role: '業務推進部 リーダー 高橋 様',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section className="py-24 bg-sky-50/70 text-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* セクション見出し */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            CASE STUDY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            導入事例・活用成果
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            さまざまな業界の中小企業様が、LinkFlowで業務効率化と成果創出を実現しています。
          </p>
        </div>

        {/* 事例カード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 shadow-xs border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-sky-200 transition-all"
            >
              <div className="space-y-4">
                {/* 業界タグ ＆ 成果バッジ（rounded-md で程よい角丸に） */}
                <div className="flex items-center justify-between text-xs gap-2">
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-1.5 rounded-md font-medium">
                    {item.industry}
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold px-3 py-1.5 rounded-md">
                    {item.highlight}
                  </span>
                </div>

                {/* 課題 vs 成果 */}
                <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                  {/* 課題（赤系） */}
                  <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-100 text-slate-800">
                    <span className="font-bold text-rose-600 mr-1.5 inline-flex items-center gap-1.5 shrink-0">
                      <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      課題:
                    </span>
                    <span className="font-medium text-slate-700">{item.problem}</span>
                  </div>

                  {/* 成果（スカイブルー系） */}
                  <div className="p-3 rounded-lg bg-sky-50/70 border border-sky-100 text-slate-900">
                    <span className="font-bold text-sky-700 mr-1.5 inline-flex items-center gap-1.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      成果:
                    </span>
                    <span className="font-bold text-slate-900">{item.result}</span>
                  </div>
                </div>

                {/* お客様の声 */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                  {item.detail}
                </p>
              </div>

              {/* 企業・担当者情報 */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center space-x-3.5">
                <div className={`w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}>
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{item.company}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100 rounded-full blur-[100px] opacity-40"></div>
    </section>
  );
}