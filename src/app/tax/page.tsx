import type { Metadata } from "next";
import { AssessInlineCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "相続税",
  description:
    "相続税の申告要否・控除・土地評価など、税務の論点を原典つきで整理します。",
  alternates: { canonical: "/tax" },
};

export default function TaxPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">INHERITANCE TAX</p>
        <h1>相続税</h1>
        <p className="lede">
          申告が必要かどうかの考え方から、控除や不動産の評価まで。国税庁などの原典と確認日つきで整理します。
        </p>
      </div>
      <div className="prose">
        <div className="info-card">
          <h2>掲載を準備しています</h2>
          <p>現在はサイトの情報設計と検証フローを先行公開しています。税務の解説は、国税庁・税務署の公表情報を原典確認したうえで順次追加します。</p>
        </div>
        <h2>掲載する内容</h2>
        <ul>
          <li>申告の要否を判断する考え方の整理</li>
          <li>控除など制度の論点一覧</li>
          <li>路線価などを用いた土地評価の読み方</li>
          <li>国税庁・税務署の公表情報への原典リンクと確認日</li>
        </ul>
        <div className="notice">税務の判断は、個別の財産構成で変わります。掲載内容だけで判断せず、原典および税理士などの専門家にご確認ください。</div>
        <AssessInlineCta entryPoint="souzoku_tax_hub" />
      </div>
    </div>
  );
}
