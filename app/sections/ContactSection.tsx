'use client';

import React, { useEffect, useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const planInquiryDefaults: Record<string, { type: string; details: string }> = {
      starter: {
        type: 'demo',
        details: 'スタータープランの無料トライアル・導入のご相談を承ります。',
      },
      standard: {
        type: 'demo',
        details: 'スタンダードプランの無料トライアル・導入のご相談を承ります。',
      },
      professional: {
        type: 'estimate',
        details: 'プロフェッショナルプランの個別お見積り・導入支援についてご相談を承ります。',
      },
    };

    const syncPlanFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);

      if (searchParams.get('source') === 'general') {
        setInquiryType('');
        setDetails('');
        return;
      }

      const plan = searchParams.get('plan');
      const defaults = plan ? planInquiryDefaults[plan] : undefined;

      if (!defaults) return;

      setInquiryType(defaults.type);
      setDetails(defaults.details);
    };

    syncPlanFromUrl();
    window.addEventListener('linkflow:plan-selected', syncPlanFromUrl);
    window.addEventListener('popstate', syncPlanFromUrl);

    return () => {
      window.removeEventListener('linkflow:plan-selected', syncPlanFromUrl);
      window.removeEventListener('popstate', syncPlanFromUrl);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">
            CONTACT
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            導入に関するご質問、お見積りのご依頼、無料デモ体験のご希望など、<br className="hidden sm:inline" />
            専門スタッフが迅速にご回答いたします。
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
          {submitted ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                お問い合わせを受け付けました
              </h3>
              <p className="text-slate-600 text-sm">
                内容を確認の上、3営業日以内に担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="株式会社LinkFlow"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  お問い合わせ種別 <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm text-slate-700 bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="plan">料金プランについて</option>
                  <option value="estimate">導入検討・お見積りのご相談</option>
                  <option value="demo">無料デモ・資料請求</option>
                  <option value="spec">機能・仕様に関する質問</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  お問い合わせ詳細
                </label>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="ご検討中のご利用人数や、確認したい機能などをご記入ください。"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition text-sm"
                ></textarea>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-xl shadow-md transition-colors"
                >
                  送信する
                </button>
                <p className="text-xs text-slate-500 mt-3">
                  通常3営業日以内に担当者よりご返信いたします。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}