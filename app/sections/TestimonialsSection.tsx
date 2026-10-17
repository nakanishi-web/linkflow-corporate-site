import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      industry: '製造業 / 100名規模',
      companyType: '精密機器メーカー A社',
      person: '佐藤 様',
      position: '営業本部 部長',
      avatarBg: 'bg-sky-100 text-sky-600',
      beforeTask: '営業ごとに顧客情報が分散し、属人化が深刻',
      afterEffect: '情報の一元化により、引き継ぎ作業時間が50%削減',
      comment:
        '以前は各営業が個別のエクセルで顧客情報を管理しており、引継ぎや進捗共有に膨大な時間がかかっていました。LinkFlow導入後は全員が同じ画面でリアルタイムに進捗を把握できるようになり、チーム全体の業務効率が劇的に向上しました。',
      metric: '引き継ぎ時間 50%削減',
    },
    {
      industry: 'IT・サービス業 / 30名規模',
      companyType: 'Webマーケティング支援 B社',
      person: 'S・M 様',
      position: '代表取締役',
      avatarBg: 'bg-indigo-100 text-indigo-600',
      beforeTask: '過去に導入したSaaSが難しく社内に定着しなかった',
      afterEffect: 'マニュアル不要の操作性で、全社定着率100%を達成',
      comment:
        '以前別のツールを導入した際は、設定の複雑さとマニュアル作成の負担で定着に失敗した経験がありました。LinkFlowはとにかく画面が直感的で、ITツールが得意でないメンバーも初日から迷わず使いこなせています。',
      metric: '社内定着率 100%',
    },
    {
      industry: '専門サービス業 / 50名規模',
      companyType: '経営コンサルティング C社',
      person: '高橋 様',
      position: '業務推進部 リーダー',
      avatarBg: 'bg-emerald-100 text-emerald-600',
      beforeTask: '月末の集計・レポート作成に毎月15時間以上を費やしていた',
      afterEffect: 'リアルタイムダッシュボードで、集計作業が完全に自動化',
      comment:
        'ダッシュボード機能の利便性が非常に高いです。これまで月末に手動で行っていた集計・資料化作業が一瞬で完結するようになり、本来注力すべきクライアントへの提案業務に時間を使えるようになりました。',
      metric: '月15時間の作業削減',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
            CASE STUDY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
            導入事例・活用成果
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            さまざまな業界の中小企業様が、LinkFlowで業務効率化と成果創出を実現しています。
          </p>
        </div>

        {/* 事例カード一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* 業界規模 ＆ 定量成果タグ */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    {item.industry}
                  </span>
                  <span className="text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                    {item.metric}
                  </span>
                </div>

                {/* 課題 ➔ 成果のビフォーアフター構造 */}
                <div className="mb-6 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-500">
                    <span className="font-bold text-slate-400 shrink-0">課題:</span>
                    <span>{item.beforeTask}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-900 font-semibold">
                    <span className="font-bold text-sky-600 shrink-0">成果:</span>
                    <span>{item.afterEffect}</span>
                  </div>
                </div>

                {/* 実際のコメント */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  「{item.comment}」
                </p>
              </div>

              {/* プロフィール領域（実務で使えるアバター・属性表記） */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center shrink-0`}
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {item.companyType}
                  </div>
                  <div className="text-xs text-slate-500">
                    {item.position} {item.person}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}