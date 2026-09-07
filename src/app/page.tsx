import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">SOZOKU PROCEDURE GUIDE</p>
            <h1>相続の次の一歩を、<em>手続き</em>から整える。</h1>
            <p className="lede">
              相続した家や土地をかかえたとき、何を・いつ・どこへ届ければよいのか。手続き・税・分割・放棄を、原典と確認日がわかる形で整理する情報サイトです。
            </p>
          </div>
          <aside className="hero-doc" aria-label="サイトの約束">
            <p className="eyebrow">OUR PROMISE</p>
            <h2>法令の原文まで、たどれる形で。</h2>
            <p>制度名だけで終わらせず、法務局・国税庁・裁判所などの原典へ戻れる情報設計を目指します。</p>
            <ul className="doc-list">
              <li>手続きの流れ・要件・期限を整理</li>
              <li>原典URLと確認日を明記</li>
              <li>推計・集計値は一次情報と区別</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="page">
        <div className="page-header">
          <p className="eyebrow">FOUR PILLARS</p>
          <h2>手続き軸の4つの入口</h2>
          <p className="lede">いま公開しているのは、相続の手続き情報を安全にたどるための骨格です。各テーマの解説は、原典確認を経て順次追加します。</p>
        </div>
        <div className="section-grid section-grid--four">
          <Link className="info-card" href="/first-steps">
            <span className="number">01</span>
            <h3>最初の手続き</h3>
            <p>相続発生後の届出と相続登記。必要な流れを落ちなく整理します。</p>
          </Link>
          <Link className="info-card" href="/tax">
            <span className="number">02</span>
            <h3>相続税</h3>
            <p>申告の要否や控除、土地評価など、税務の論点を原典つきで整理します。</p>
          </Link>
          <Link className="info-card" href="/division">
            <span className="number">03</span>
            <h3>遺産分割</h3>
            <p>分割協議の進め方と、不動産が絡む論点を整理します。</p>
          </Link>
          <Link className="info-card" href="/renunciation">
            <span className="number">04</span>
            <h3>相続放棄</h3>
            <p>放棄の要件・手順と、負担を引き受けないための整理をします。</p>
          </Link>
        </div>
        <div className="page-header" style={{ marginTop: 32 }}>
          <p className="eyebrow">SELLING DECISIONS</p>
          <h2>売却を考えるとき</h2>
          <p className="lede">手続きが整ったら、売り方と税を分けて確認します。相場と査定は、実務を扱う①R-SICへ送ります。</p>
        </div>
        <div className="section-grid" style={{ marginTop: 16 }}>
          <Link className="info-card" href="/sale-steps">
            <span className="number">05</span>
            <h3>売るまでの流れ</h3>
            <p>査定から決済まで、判断が分かれるポイントを整理します。</p>
          </Link>
          <Link className="info-card" href="/sale-tax">
            <span className="number">06</span>
            <h3>税・取得費の確認</h3>
            <p>相続の税と譲渡の税は目的が違います。取得費の調べ方を整理します。</p>
          </Link>
        </div>
        <div className="section-grid" style={{ marginTop: 16 }}>
          <Link className="info-card" href="/verification">
            <span className="number">VERIFICATION</span>
            <h3>検証方針を見る</h3>
            <p>どの情報を掲載し、いつ見直すのか。データの確認フローを公開します。</p>
          </Link>
          <Link className="info-card" href="/operator">
            <span className="number">OPERATOR</span>
            <h3>運営情報を確認</h3>
            <p>このサイトの運営者、所在地、連絡手段、グループ内での位置づけ。</p>
          </Link>
        </div>
        <div className="notice">
          個別の事情に対する法律・税務の判断は、弁護士・税理士などの専門家への相談が必要です。当サイトは手続きの代行や結果を保証するものではありません。
        </div>
      </section>
    </>
  );
}
