import type { Metadata } from "next";
import Link from "next/link";
import { AdvisorCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "相続不動産の税・取得費をどう確認するか",
  description:
    "相続した不動産を売るときに確認する税の種類、取得費の調べ方、特例の要件確認を、目的ごとに整理します。",
  alternates: { canonical: "/sale-tax" },
};

export default function SaleTaxPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">SALE &amp; TAX</p>
        <h1>相続不動産の税・取得費をどう確認するか</h1>
        <p className="lede">
          「相続したときの税」と「売ったときの税」は目的が違います。取得費・路線価・特例と売却価格を、目的を分けて確認します。
        </p>
      </div>
      <div className="prose">
        <h2>確認する税は、目的が違う</h2>
        <div className="section-grid">
          <div className="info-card">
            <span className="number">01</span>
            <h3>相続税(取得したとき)</h3>
            <p>
              相続があったときに申告・納付の要否を判定する税です。基礎控除の枠内かどうかで要否が分かれるため、まず申告要否の確認から始めます。
            </p>
          </div>
          <div className="info-card">
            <span className="number">02</span>
            <h3>譲渡所得税(売ったとき)</h3>
            <p>
              不動産を譲渡して利益(譲渡益)が出たときの所得税・住民税です。譲渡のあった年の確定申告が原則で、計算の鍵になるのが「取得費」です。
            </p>
          </div>
          <div className="info-card">
            <span className="number">03</span>
            <h3>その他の税・費用</h3>
            <p>
              登記の登録免許税、保有中の固定資産税など。発生する場面が違うため、いつ何がかかるかを分けて把握します。
            </p>
          </div>
        </div>

        <h2>取得費の調べ方</h2>
        <div className="info-card">
          <h3>手元の記録から始める</h3>
          <p>
            被相続人が土地や建物を取得したときの売買契約書・建築契約書・領収書などが取得費の基本の証拠です。実家の書類整理と並行して探します。
          </p>
        </div>
        <div className="info-card">
          <h3>記録が見つからないとき</h3>
          <p>
            取得時の取引価格がわからない場合は、売買契約書等代わりの計算(概算取得費)や、固定資産税評価額・路線価をもとにした確認が行われる仕組みです。どの方法が自分のケースで使えるかは、税務署や税理士への確認が前提です。
          </p>
        </div>
        <div className="info-card">
          <h3>路線価は評価の材料</h3>
          <p>
            路線価(財産評価用の土地の価格)は相続税の評価や概算取得費の計算に使われる材料で、相場そのものではありません。国税庁の路線価図と、査定に出た数字は目的が違うことを分けて扱います。
          </p>
        </div>

        <h2>特例は、要件の確認が先</h2>
        <p>
          被相続人の居住用財産(家)を売るときには3,000万円の特別控除など、負担を大きく減らす制度があります(租税特別措置法)。ただし適用できるかは要件次第で、
          「要件に当てはまるか」を国税庁タックスアンサーや税理士など原典・専門家で確認してから当てはめて判断します。
        </p>

        <div className="notice">
          税額や適用可否は、取得の時期と価格・居住の状況・申告期限などの個別の事情で変わります。掲載内容だけで判断せず、国税庁の原典および税理士にご確認ください。
        </div>

        <AdvisorCta entryPoint="souzoku_sale_tax" />

        <h2>関連する手続き</h2>
        <div className="section-grid">
          <Link className="info-card" href="/tax">
            <span className="number">TAX</span>
            <h3>相続税</h3>
            <p>申告要否・控除・土地評価など、相続のときの税の論点。</p>
          </Link>
          <Link className="info-card" href="/sale-steps">
            <span className="number">STEPS</span>
            <h3>売るまでの流れ</h3>
            <p>査定から決済まで、判断が分かれるポイント。</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
