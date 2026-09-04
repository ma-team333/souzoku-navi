import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "検証方針",
  description:
    "相続手続きナビの手続き・税務情報の検証方針。原典と確認日、推計の区別、更新日、公開前の判定を公開します。",
  alternates: { canonical: "/verification" },
};

export default function VerificationPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">EVIDENCE STANDARD</p>
        <h1>検証方針</h1>
        <p className="lede">相続の手続き情報は、見つけることよりも、確かめてから使えることが大切です。</p>
      </div>
      <div className="prose">
        <h2>原典を起点にする</h2>
        <p>手続きの流れ・要件・期限・税務の論点は、法令・官公庁の手続案内などの一次資料で確認します。各記述には原典URLと確認日を紐づけ、読者が自分で内容を確認できるようにします。</p>
        <h2>推計は推計として示す</h2>
        <p>複数の一次情報を当サイトで集計した数値は、原典そのものの数値と混同しないよう「当サイト集計」などの表示を付けます。検証できない数値・誇大な表現は掲載しません。</p>
        <h2>更新日を残す</h2>
        <p>法令改正・制度の変更を追跡し、最終確認日を表示します。古い情報が残っている可能性がある場合は、手続きの前に原典をご確認ください。</p>
        <h2>公開前の判定</h2>
        <p>機械的な収集・集計の結果は、そのまま公開しません。運営者が原典との一致と掲載範囲を確認し、判定記録を残してから公開します。</p>
      </div>
    </div>
  );
}
