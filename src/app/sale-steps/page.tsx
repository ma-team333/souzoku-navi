import type { Metadata } from "next";
import Link from "next/link";
import { AssessInlineCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "相続不動産を売るまでの流れ",
  description:
    "相続した不動産を売るとき、名義の確認から決済・引渡しまでの流れと、判断が分かれるポイントを整理します。",
  alternates: { canonical: "/sale-steps" },
};

const STEPS = [
  {
    no: "01",
    title: "名義・相続人の確認",
    body: "誰名義か、相続人は誰かを先に確定します。未登記のまま進めると売却の途中で手間戻りします。",
    href: "/first-steps",
    hrefLabel: "最初の手続きを確認",
  },
  {
    no: "02",
    title: "相場・査定を取る",
    body: "価格の根拠(母数・集計期間・条件)を確認したうえで査定を受けます。1社だけで判断せず、根拠を比べます。",
    href: null,
    hrefLabel: null,
  },
  {
    no: "03",
    title: "売却方法の比較",
    body: "仲介(市場で売る)か買取(業者が直接買う)か。手取り・時間・手間の軸で比べます。",
    href: null,
    hrefLabel: null,
  },
  {
    no: "04",
    title: "媒介契約の締結",
    body: "一般媒介か専属専属媒介か。契約期間・報酬・販売活動の範囲を確認してから署名します。",
    href: null,
    hrefLabel: null,
  },
  {
    no: "05",
    title: "売買契約・決済・引渡し",
    body: "買主が見つかったら売買契約。残代金の受領と所有権移転登記、現況引き渡しまでが売却の一連です。",
    href: null,
    hrefLabel: null,
  },
  {
    no: "06",
    title: "税務の確認",
    body: "譲渡があった年は確定申告が原則。取得費や適用できる特例は、売る前から確認しておきます。",
    href: "/sale-tax",
    hrefLabel: "税・取得費の確認を見る",
  },
];

export default function SaleStepsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">SALE STEPS</p>
        <h1>相続不動産を売るまでの流れ</h1>
        <p className="lede">
          査定から決済まで、途中途中で「進め方を選ぶ場面」があります。流れと、判断が分かれるポイントを分けて整理します。
        </p>
      </div>
      <div className="prose">
        <h2>全体の流れ</h2>
        <div className="section-grid">
          {STEPS.map((step) => (
            <div className="info-card" key={step.no}>
              <span className="number">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.href ? (
                <p>
                  <Link href={step.href}>{step.hrefLabel} <span aria-hidden="true">→</span></Link>
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <h2>判断が分かれるポイント</h2>
        <div className="info-card">
          <h3>価格の根拠を確かめる</h3>
          <p>
            査定額は提示されて終わりではなく、どの範囲のどのデータから出た数字かを確認します。成約事例の母数と集計期間が示せるかを、最初の確認項目にしてください。
          </p>
        </div>
        <div className="info-card">
          <h3>売り方を比べてから契約する</h3>
          <p>
            仲介と買取は、手取り・所要時間・手続きの負担が違います。1社の提案だけで売り方を固定せず、少なくとも2通りの試算を並べて比べます。
          </p>
        </div>
        <div className="info-card">
          <h3>契約書は署名前に読む</h3>
          <p>
            媒介契約・売買契約とも、解除条件・報酬・引渡し条件の記載を署名前に確認します。読んで意味がわからない条項は、その場で説明を求めます。
          </p>
        </div>

        <div className="notice">
          売却の可否や条件は、名義・共有の状況・住宅ローンなどの個別の事情で変わります。掲載内容は一般的な流れであり、契約の判断は専門家への確認を前提としてください。
        </div>

        <AssessInlineCta entryPoint="souzoku_sale_steps" />

        <h2>関連する手続き</h2>
        <div className="section-grid">
          <Link className="info-card" href="/first-steps">
            <span className="number">STEP 0</span>
            <h3>最初の手続き</h3>
            <p>売却の前に整える届出と相続登記の流れ。</p>
          </Link>
          <Link className="info-card" href="/sale-tax">
            <span className="number">TAX</span>
            <h3>税・取得費の確認</h3>
            <p>売ったときの税と、取得費の調べ方。</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
