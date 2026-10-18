import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      q: '無料トライアル期間中に費用が発生することはありますか？',
      a: 'いいえ、無料トライアル期間中に自動で課金されることはありません。クレジットカードの登録も不要ですので、安心してお試しいただけます。',
    },
    {
      q: '契約プランは導入後に変更できますか？',
      a: 'はい、管理画面からいつでもプランの変更（アップグレード・ダウングレード）が可能です。組織の成長やご利用規模に合わせて柔軟に対応いたします。',
    },
    {
      q: 'セキュリティ体制やデータの保管について教えてください。',
      a: 'すべての通信は暗号化（SSL/TLS）されており、金融機関レベルのセキュリティ基盤とデータバックアップ体制を整えています。安心してご利用ください。',
    },
    {
      q: 'ITツールの操作が得意でないメンバーでも使いこなせますか？',
      a: 'はい、マニュアル不要で直感的に操作できる画面設計を追求しています。また、導入時のレクチャーやチャットサポートもご用意しております。',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider bg-sky-100 px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
            よくあるご質問
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            ご検討中の企業様から寄せられる代表的なご質問にお答えします。
          </p>
        </div>

        {/* Q&A リスト */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-sky-600 font-extrabold text-lg sm:text-xl shrink-0 font-mono">
                  Q.
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}