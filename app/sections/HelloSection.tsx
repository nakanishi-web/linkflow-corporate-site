import React from 'react';
import Image from 'next/image';

export default function HelloSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/30 to-white py-14 sm:py-20">
      {/* 背景の柔らかなグラデーション光 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-300/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* 左側：キャッチコピー ＆ CTA */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* カテゴリバッジ */}
            <div className="inline-block mb-4">
              <span className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-sky-700 bg-white shadow-sm rounded-full border border-sky-200">
                次世代クラウドCRM「LinkFlow」
              </span>
            </div>

            {/* メインキャッチコピー */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight mb-5">
              顧客情報を、<br />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                チームの力
              </span>
              に変える。
            </h1>

            {/* サブテキスト */}
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              営業・サポート・マーケティングを一元管理。<br className="hidden sm:inline" />
              業務効率と顧客満足を同時に高めるクラウドCRM。
            </p>

            {/* CTAボタン ＋ マイクロコピー */}
            <div className="flex flex-col items-center lg:items-start gap-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-9 py-4 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/40 transition-all duration-200 text-center text-lg"
              >
                無料で試してみる
              </a>
              <span className="text-xs font-medium text-slate-500">
                ※1分で登録完了・クレジットカード登録不要
              </span>
            </div>
          </div>

          {/* 右側：メインビジュアル（イラスト裏のカードを鮮やかブルーに変更してメリハリを強化） */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xl relative p-2 sm:p-4">
              
              {/* イラスト裏のアクセント背景カード（ここを鮮やかなブルーパネルに変更します） */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/90 to-blue-700 rounded-3xl border border-sky-500 shadow-2xl shadow-sky-900/10 -rotate-2 transform scale-105"></div>
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-3xl border border-white/50 rotate-1 transform scale-100"></div>

              {/* イラスト本体 */}
              <div className="relative rounded-2xl overflow-hidden border border-white shadow-inner">
                <Image
                  src="/images/SaaS_LPメイン.png"
                  alt="LinkFlow メインビジュアル"
                  width={650}
                  height={480}
                  className="w-full h-auto rounded-2xl object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}