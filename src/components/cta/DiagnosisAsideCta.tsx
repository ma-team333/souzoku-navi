"use client";

/**
 * ④相続メディア CTA その2: 一覧・記事詳細の `<aside>` に置く診断 CTA。
 *
 * sobatan estate-lens `src/components/souzoku/cta/DiagnosisAsideCta.tsx`
 * （issue #746）の移植。cta_id 規約は維持する（portfolio #8 補遺）。
 * 遷移先は①R-SICの「家のこれからガイド」（外部遷移）。計測は④プロパティへ
 * `consultation_cta_clicked`（entity=souzoku）。
 */

import { trackCtaClick } from "@/lib/analytics";
import { R_SIC_ORIGIN } from "@/lib/site";

/** 計測上この CTA を一意に識別する ID（sobatan #746 から維持）。 */
export const DIAGNOSIS_ASIDE_CTA_ID = "souzoku_diagnosis_aside";

/** 既定の遷移先（①R-SICの既存ルート）。 */
export const DIAGNOSIS_DEFAULT_HREF = `${R_SIC_ORIGIN}/guide`;

export const DIAGNOSIS_ASIDE_CTA_HEADING = "あなたの場合の進め方を診断";
export const DIAGNOSIS_ASIDE_CTA_LABEL = "診断をはじめる";

export interface DiagnosisAsideCtaProps {
  /** 遷移先。既定は①R-SICの `/guide`。 */
  href?: string;
  /** 計測の出現箇所ラベル（例: "souzoku_article_aside"）。 */
  entryPoint?: string;
}

export function DiagnosisAsideCta({
  href = DIAGNOSIS_DEFAULT_HREF,
  entryPoint = "souzoku_aside",
}: DiagnosisAsideCtaProps) {
  return (
    <aside
      className="cta-card"
      aria-label="進め方診断のご案内"
      data-cta-id={DIAGNOSIS_ASIDE_CTA_ID}
    >
      <p className="cta-eyebrow">3分・無料</p>
      <h3 className="cta-heading">{DIAGNOSIS_ASIDE_CTA_HEADING}</h3>
      <p className="cta-lead">
        相続登記・分割・売却のどれから着手すべきかは状況で変わります。いくつかの質問で次の一手を整理します。
      </p>
      <a
        href={href}
        onClick={() => {
          trackCtaClick("consultation_cta_clicked", {
            ctaId: DIAGNOSIS_ASIDE_CTA_ID,
            entryPoint,
            destination: href,
          });
        }}
        className="cta-button cta-button--block"
      >
        {DIAGNOSIS_ASIDE_CTA_LABEL}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </aside>
  );
}
