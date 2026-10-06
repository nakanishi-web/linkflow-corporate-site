import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* セクションの見出し */}
        <div className="text-center mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            LinkFlowの3つの特徴
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            日々の業務をスムーズにし、チームのパフォーマンスを最大化する機能
          </p>
        </div>

        {/* 3カラムの機能カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 機能①：データ集約・一元管理 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                散らばる顧客データをひとつに。<br />全情報を「一元管理」
              </h3>
              <p className="text-sm text-sky-600 mb-4 font-medium">
                エクセルやチャットツールを行き来する必要はもうありません。
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                営業、サポート、マーケティングなど、社内に点在していた顧客とのやり取りやステータスをLinkFlowに集約。誰が・いつ・どんな対応をしたかがチーム全員ですぐに把握でき、情報の探し回るムダをゼロにします。
              </p>
            </div>
          </div>

          {/* 機能②：リアルタイムチーム共有 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                担当者不在でも迷わない。<br />「リアルタイムチーム共有」
              </h3>
              <p className="text-sm text-sky-600 mb-4 font-medium">
                「あの件どうなった？」をなくし、最新状況を即座に共有。
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                最新の顧客状況がリアルタイムで更新されるため、担当者が不在のときでも他のメンバーがすぐに正確な対応が可能に。組織全体で顧客資産を共有し、チームの対応力を底上げします。
              </p>
            </div>
          </div>

          {/* 機能③：スマートダッシュボード */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">
                面倒な集計作業から解放。<br />「スマートダッシュボード」
              </h3>
              <p className="text-sm text-sky-600 mb-4 font-medium">
                見やすいグラフと自動レポートで、的確な意思決定を加速。
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                日々の活動データや進捗状況を自動で集計し、視覚的なダッシュボードに表示。会議資料やレポート作成に膨大な時間を費やす必要はもうありません。数値の現状がひと目で分かります。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}