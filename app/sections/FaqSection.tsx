'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: '無料トライアル期間中に費用が発生することはありますか？',
    answer: 'いいえ、無料トライアル期間中に自動で課金されることはありません。クレジットカードの登録も不要ですので、安心してすべての機能をお試しいただけます。',
  },
  {
    question: '契約プランは導入後に変更できますか？',
    answer: 'はい、管理画面からいつでもプランの変更（アップグレード・ダウングレード）が可能です。組織の成長やご利用規模の変化に合わせて柔軟に対応いたします。',
  },
  {
    question: 'セキュリティ体制やデータの保管について教えてください。',
    answer: 'すべての通信はSSL/TLSにより暗号化されており、金融機関レベルのセキュリティ基盤と自動バックアップ体制を整えています。安心してお使いいただけます。',
  },
  {
    question: 'ITツールの操作が得意でないメンバーでも使いこなせますか？',
    answer: 'はい、マニュアル不要で直感的に操作できる画面設計を追求しています。また、導入時のオンラインレクチャーや充実したチャットサポートもご用意しております。',
  },
  {
    question: '最低利用期間や解約時の違約金はありますか？',
    answer: '最低利用期間や解約時の違約金・手数料は一切ございません。月額契約の場合は、当月限りのご解約も管理画面よりいつでもお手続きいただけます。',
  },
  {
    question: '導入までにどれくらいの期間がかかりますか？',
    answer: 'アカウント発行後、最短即日からすぐにご利用いただけます。初期設定や既存データの移行作業が必要な場合も、専門スタッフがサポートいたします。',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* セクションの見出し（H2見出し統一・強調） */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sky-600 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 mb-5 tracking-tight leading-tight">
            よくあるご質問
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            ご検討中の企業様から寄せられる代表的なご質問にお答えします。
          </p>
        </div>

        {/* アコーディオンリスト */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 md:px-8 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-bold text-slate-900 text-base md:text-lg leading-snug">
                    <span className="text-sky-600 font-black text-xl">Q.</span>
                    {item.question}
                  </span>
                  
                  {/* アコーディオン開閉矢印アイコン */}
                  <span
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sky-50 text-sky-600' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* 回答（開閉表示） */}
                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 text-slate-600 text-sm md:text-base border-t border-slate-100 pt-4">
                    <p className="leading-relaxed font-medium">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}