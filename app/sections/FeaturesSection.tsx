import React from 'react';
import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      number: '01',
      titleLine1: '散ばる顧客データをひとつに。',
      titleLine2: '全情報を「一元管理」',
      subText: 'エクセルやチャットツールを行き来する必要はもうありません。',
      image: '/images/Dashboard01.jpg',
      description:
        '営業、サポート、マーケティングなど、社内に点在していた顧客とのやり取りやステータスをLinkFlowに集約。誰が・いつ・どんな対応をしたかチーム全員ですぐに把握でき、情報の探し回るムダをゼロにします。',
      checkpoints: [
        'メール・チャットの自動同期',
        '商談履歴のタイムライン表示',
        '権限に応じたアクセス制御',
      ],
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-100',
    },
    {
      number: '02',
      titleLine1: '担当者不在でも迷わない。',
      titleLine2: '「リアルタイムチーム共有」',
      subText: '「あの件どうなった？」をなくし、最新状況を即座に共有。',
      image: '/images/Dashboard02.jpg',
      description:
        '最新の顧客状況がリアルタイムで更新されるため、担当者が不在のときでも他のメンバーがすぐに正確な対応が可能に。組織全体で顧客資産を共有し、チームの対応力を底上げします。',
      checkpoints: [
        '対応ステータスの即時更新',
        'メンション機能でスムーズ連絡',
        '引き継ぎノート・メモ機能',
      ],
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-100',
    },
    {
      number: '03',
      titleLine1: '面倒な集計作業から解放。',
      titleLine2: '「スマートダッシュボード」',
      subText: '見やすいグラフと自動レポートで、的確な意思決定を加速。',
      image: '/images/Dashboard03.jpg',
      description:
        '日々の活動データや進捗状況を自動で集計し、視認性なダッシュボードに表示。会議資料やレポート作成に膨大な時間を費やす必要はありません。数値の現状がひと目で分かります。',
      checkpoints: [
        '売上・案件進捗の自動グラフ化',
        'ワンクリックでレポート出力',
        'チーム別の目標達成率表示',
      ],
      badgeBg: 'bg-sky-50 text-sky-600 border-sky-100',
    },
  ];

  return (
    <section className="py-24 bg-slate-50/60 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            LinkFlowの3つの特徴
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            日々の業務をスムーズにし、チームのパフォーマンスを最大化する機能
          </p>
        </div>

        {/* 3つの特徴カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 番号バッジ */}
                <div className="mb-6">
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl font-black text-lg border ${item.badgeBg}`}>
                    {item.number}
                  </span>
                </div>

                {/* カードタイトル */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3">
                  {item.titleLine1}<br />
                  {item.titleLine2}
                </h3>

                {/* 青文字サブテキスト */}
                <p className="text-sky-600 font-semibold text-sm leading-relaxed mb-6">
                  {item.subText}
                </p>

                {/* イラスト画像エリア */}
                <div className="mb-6 relative w-full aspect-[16/10] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.titleLine2}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 本文 */}
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* できること・チェックポイントリスト */}
              <div className="pt-6 border-t border-slate-100">
                <ul className="space-y-3.5">
                  {item.checkpoints.map((cp, cpIdx) => (
                    <li key={cpIdx} className="flex items-center text-sm sm:text-base font-bold text-slate-800">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-black text-xs mr-3">
                        ✓
                      </span>
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}