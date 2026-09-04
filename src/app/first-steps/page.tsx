import type { Metadata } from "next";
import { AssessInlineCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "最初の手続き",
  description:
    "相続が発生したあとの届出・相続登記など、最初に整える手続きの流れを原典つきで整理します。",
  alternates: { canonical: "/first-steps" },
};

export default function FirstStepsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">FIRST STEPS</p>
        <h1>最初の手続き</h1>
        <p className="lede">
          相続が発生したあとに必要な届出や登記を、順番に整理します。法令や官公庁の手続案内を原典とする掲載方針です。
        </p>
      </div>
      <div className="prose">
        <div className="info-card">
          <h2>掲載を準備しています</h2>
          <p>現在はサイトの情報設計と検証フローを先行公開しています。手続きの解説は、法令・官公庁の手続案内を原典確認したうえで順次追加します。</p>
        </div>
        <h2>掲載する内容</h2>
        <ul>
          <li>相続発生後の届出・期限の全体像</li>
          <li>相続登記の流れと必要書類</li>
          <li>法定相続情報一覧図などの活用</li>
          <li>法務局・官公庁の手続案内への原典リンクと確認日</li>
        </ul>
        <div className="notice">手続きの可否や期限は、個別の事情で変わります。掲載内容だけで判断せず、原典および専門家にご確認ください。</div>
        <AssessInlineCta entryPoint="souzoku_first_steps_hub" />
      </div>
    </div>
  );
}
