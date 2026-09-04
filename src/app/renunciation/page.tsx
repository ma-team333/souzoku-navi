import type { Metadata } from "next";
import { AssessInlineCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "相続放棄",
  description:
    "相続放棄の要件・手順・効果を、裁判所の案内など原典つきで整理します。",
  alternates: { canonical: "/renunciation" },
};

export default function RenunciationPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">RENUNCIATION</p>
        <h1>相続放棄</h1>
        <p className="lede">
          負担を引き受けないための制度です。要件・手順・効果を、裁判所の案内を原典として整理します。
        </p>
      </div>
      <div className="prose">
        <div className="info-card">
          <h2>掲載を準備しています</h2>
          <p>現在はサイトの情報設計と検証フローを先行公開しています。放棄の解説は、裁判所の手続案内を原典確認したうえで順次追加します。</p>
        </div>
        <h2>掲載する内容</h2>
        <ul>
          <li>相続放棄の要件と効果の整理</li>
          <li>申述の手順と必要書類</li>
          <li>制度の期限など、押さえるべき論点</li>
          <li>裁判所の手続案内への原典リンクと確認日</li>
        </ul>
        <div className="notice">放棄の可否や影響は、個別の事情で変わります。掲載内容だけで判断せず、原典および専門家にご確認ください。</div>
        <AssessInlineCta entryPoint="souzoku_renunciation_hub" />
      </div>
    </div>
  );
}
