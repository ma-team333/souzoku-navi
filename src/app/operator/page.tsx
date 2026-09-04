import type { Metadata } from "next";
import { operator } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営情報",
  description: "相続手続きナビの運営情報。",
  alternates: { canonical: "/operator" },
};

export default function OperatorPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">ABOUT THE OPERATOR</p>
        <h1>運営情報</h1>
        <p className="lede">このサイトの運営主体と、情報提供にあたっての立場を明記します。</p>
      </div>
      <div className="prose">
        <table className="meta-table">
          <tbody>
            <tr><th scope="row">運営者名</th><td>{operator.name}</td></tr>
            <tr><th scope="row">所在地</th><td>{operator.address}</td></tr>
            <tr><th scope="row">連絡手段</th><td>{operator.email}</td></tr>
            <tr><th scope="row">事業内容</th><td>相続手続きに関する情報提供</td></tr>
          </tbody>
        </table>
        <h2>グループ内での位置づけ</h2>
        <p>
          本サイトは、不動産の相場・売却実務、権利関係、空き家・補助金などの情報メディアと同一の運営グループに属します。運営グループの詳細は、上記の運営者情報をご確認ください。なお、運営グループの媒体一覧へのリンクは設置していません（リンク規律の方針によるものです）。
        </p>
        <h2>本サイトの領土</h2>
        <p>
          本サイトは相続の手続き・税・分割・放棄を扱います。売却実務・相場の話題、空き家の物理的な処分や補助金の話題は、それぞれ専門のサイトが扱うため、本サイトでは深く扱いません。
        </p>
        <div className="notice">運営者名・所在地・連絡先は、公開前に運営者が確定した情報へ差し替えます。サイト名・ドメインは仮称であり、正式確定後に更新します。掲載情報は手続きの結果を保証するものではありません。</div>
      </div>
    </div>
  );
}
