import React from 'react';
import { MousePointerClick, LayoutGrid, Coins, Check } from 'lucide-react';

type BenefitBase = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  borderAccent: string;
  tagColor: string;
  icon: React.ReactNode;
  checkpoints: string[];
};

type Benefit =
  | (BenefitBase & { type: 'ui'; integrations?: never })
  | (BenefitBase & { type: 'integrations'; integrations: string[] })
  | (BenefitBase & { type: 'cost'; integrations?: never });

export default function ValueBenefitsSection() {
  const benefits: Benefit[] = [
    {
      number: '01',
      title: '誰でも直感的に使えるUI設計',
      subtitle: '導入後の社内定着率 98%',
      description:
        '分厚いマニュアルの読み込みや社内研修は不要。複雑な設定を徹底排除し、ITが苦手な現場スタッフでも初日から迷わず使えるUI/UXを極めました。',
      borderAccent: 'border-sky-500',
      tagColor: 'text-sky-600 bg-sky-100',
      icon: <MousePointerClick className="w-6 h-6 text-sky-500" />,
      type: 'ui',
      checkpoints: [
        '他社：複雑な操作 ➔ LinkFlow：画面を見れば即操作',
        'マニュアル作成・社内研修コストを「ゼロ」に',
        'PC・スマホどちらからでも直感的に運用可能',
      ],
    },
    {
      number: '02',
      title: '既存ツールとのシームレスな連携',
      subtitle: '移行コストを最小限に抑える',
      description:
        'Slack、Chatwork、Google Workspaceなど今お使いのツールとワンクリックで連携。バラバラになりがちな業務データを一元化し、今の業務フローを壊さず導入できます。',
      borderAccent: 'border-indigo-500',
      tagColor: 'text-indigo-600 bg-indigo-100',
      icon: <LayoutGrid className="w-6 h-6 text-indigo-500" />,
      type: 'integrations',
      integrations: ['Slack', 'Chatwork', 'Google Workspace', 'Notion', 'LINE WORKS'],
      checkpoints: [
        '他社：ツールごとのデータ分断 ➔ LinkFlow：全自動連携',
        '既存データのCSV一括インポート対応',
        '自社固有の業務フローを止めることなくスムーズ移行',
      ],
    },
    {
      number: '03',
      title: '圧倒的なコストパフォーマンス',
      subtitle: '必要な機能だけを無駄なく提供',
      description:
        '大手ツールのような過剰な機能や複雑な料金体系はありません。中小企業に本当に必要な機能だけに絞り込むことで、高品質ながら圧倒的な低価格を実現しました。',
      borderAccent: 'border-emerald-500',
      tagColor: 'text-emerald-600 bg-emerald-100',
      icon: <Coins className="w-6 h-6 text-emerald-500" />,
      type: 'cost',
      checkpoints: [
        '他社：高額な初期費用 ➔ LinkFlow：初期費用￥0',
        '使わないオプション機能の強制・押し売りなし',
        '1ユーザーから始められる安心の明朗プラン',
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">
            WHY LINKFLOW
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
            LinkFlow が選ばれる <span className="text-sky-600">3つの理由</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            従来ツールのような無駄を削ぎ落とし、使いやすさと経営成果を両立します。
          </p>
        </div>

        {/* 3つの理由カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border-t-4 ${item.borderAccent} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${item.tagColor}`}>
                    {item.subtitle}
                  </span>
                  <span className="text-3xl font-black text-slate-200">
                    {item.number}
                  </span>
                </div>

                {/* アイコン ＋ タイトル */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* 差別化・ビジュアル比較エリア */}
                <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center justify-center min-h-[95px]">
                  {item.type === 'ui' && (
                    <div className="w-full space-y-1.5">
                      <div className="bg-white p-2 rounded-lg border border-slate-200 text-xs flex justify-between items-center shadow-2xs">
                        <span className="text-slate-400 line-through text-[11px]">他社: マニュアル必須</span>
                        <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-2 py-0.5 rounded">LinkFlow: マニュアル0分</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-sky-500 h-1.5 rounded-full w-full"></div>
                      </div>
                    </div>
                  )}

                  {item.type === 'integrations' && (
                    <div className="w-full text-center">
                      <p className="text-[10px] font-bold text-slate-400 mb-1.5">バラバラなツールを一元化</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {item.integrations.map((tool, i) => (
                          <span key={i} className="bg-white border border-slate-200 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded shadow-2xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.type === 'cost' && (
                    <div className="w-full">
                      <div className="flex justify-between items-center text-xs bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="text-slate-400 text-[11px]">他社: 高額・複雑</div>
                        <div className="font-bold text-emerald-600 text-sm">LinkFlow: 初期￥0〜</div>
                      </div>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-1.5 text-center bg-emerald-50 py-0.5 rounded-full border border-emerald-100">
                        導入・維持コスト 平均50%削減
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* チェックリスト（Checkアイコンを使用） */}
              <div className="pt-4 border-t border-slate-100">
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {item.checkpoints.map((cp, cpIdx) => (
                    <li key={cpIdx} className="flex items-start">
                      <Check className="w-4 h-4 text-sky-500 shrink-0 mr-1.5 mt-0.5" />
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