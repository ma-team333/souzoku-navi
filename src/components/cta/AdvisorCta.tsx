"use client";

/**
 * ④相続メディア CTA その3: セクション末尾の相談導線。
 *
 * sobatan estate-lens `src/components/souzoku/cta/AdvisorCta.tsx`
 * （issue #746）の移植。cta_id 規約は維持する（portfolio #8 補遺）。
 * 遷移先は①R-SICの相談フロー（外部遷移）。計測は④プロパティへ
 * `consultation_cta_clicked`（entity=souzoku）。
 */

import { trackCtaClick } from "@/lib/analytics";
import { R_SIC_ORIGIN } from "@/lib/site";

/** 計測上この CTA を一意に識別する ID（sobatan #746 から維持）。 */
export const ADVISOR_CTA_ID = "souzoku_advisor";

/** 既定の遷移先（①R-SICの既存ルート）。 */
export const ADVISOR_DEFAULT_HREF = `${R_SIC_ORIGIN}/chat`;

export const ADVISOR_CTA_HEADING = "記事を読んでも迷うときは、人に聞く";
export const ADVISOR_CTA_LABEL = "相談先を探す";

export interface AdvisorCtaProps {
  /** 遷移先。既定は①R-SICの `/chat`。 */
  href?: string;
  /** 計測の出現箇所ラベル。 */
  entryPoint?: string;
}

export function AdvisorCta({
  href = ADVISOR_DEFAULT_HREF,
  entryPoint = "souzoku_section_tail",
}: AdvisorCtaProps) {
  return (
    <section
      className="cta-card cta-row"
      aria-label="相談先のご案内"
      data-cta-id={ADVISOR_CTA_ID}
    >
      <div className="cta-row-text">
        <h3 className="cta-heading">{ADVISOR_CTA_HEADING}</h3>
        <p className="cta-lead">
          登記・税・売却は担当が分かれます。相続の状況に合わせて、どこに聞けばよいかを整理します。
        </p>
      </div>
      <a
        href={href}
        onClick={() => {
          trackCtaClick("consultation_cta_clicked", {
            ctaId: ADVISOR_CTA_ID,
            entryPoint,
            destination: href,
          });
        }}
        className="cta-button"
      >
        {ADVISOR_CTA_LABEL}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
