import type { Metadata } from "next";
import { AssessInlineCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "遺産分割",
  description:
    "遺産分割協議の進め方と、不動産が絡む論点を原典つきで整理します。",
  alternates: { canonical: "/division" },
};

export default function DivisionPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">ESTATE DIVISION</p>
        <h1>遺産分割</h1>
        <p className="lede">
          相続人同士の話し合いから、不動産の分け方まで。裁判所や法務局の案内を原典とする掲載方針です。
        </p>
      </div>
      <div className="prose">
        <div className="info-card">
          <h2>掲載を準備しています</h2>
          <p>現在はサイトの情報設計と検証フローを先行公開しています。分割の解説は、裁判所・法務局の案内を原典確認したうえで順次追加します。</p>
        </div>
        <h2>掲載する内容</h2>
        <ul>
          <li>遺産分割協議の進め方と必要書類</li>
          <li>分割割合を巡る論点の整理</li>
          <li>不動産の共有化とその後の管理の論点</li>
          <li>裁判所・法務局の案内への原典リンクと確認日</li>
        </ul>
        <div className="notice">分割の方針は、相続人構成や財産の内容で変わります。掲載内容だけで判断せず、原典および専門家にご確認ください。</div>
        <AssessInlineCta entryPoint="souzoku_division_hub" />
      </div>
    </div>
  );
}
