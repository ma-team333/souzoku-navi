"use client";

/**
 * ④相続メディア CTA その1: 本文・ハブのインライン査定 CTA。
 *
 * sobatan estate-lens `src/components/souzoku/cta/AssessInlineCta.tsx`
 * （issue #746）の移植。cta_id 規約は維持する（portfolio #8 補遺）。
 *
 * ④での差異:
 * - 遷移先は①R-SICの査定フォーム（外部遷移）。`R_SIC_ORIGIN` + `/assess`。
 * - `returnTo` は①内部ルート用の契約のため付与しない。
 * - 計測は④プロパティへ `assessment_check_started` を送る（entity=souzoku）。
 *   リード実績は①のフォーム送信成功時に①プロパティへ `generate_lead`
 *   として記録される（portfolio #9 / #15 / #8 補遺）。
 *   `cta_id` はクエリ `?cta_id=` で①のフォームまで輸送する（portfolio #15 契約）。
 */

import { trackCtaClick } from "@/lib/analytics";
import { R_SIC_ORIGIN } from "@/lib/site";

/** 計測上この CTA を一意に識別する ID（sobatan #746 から維持）。 */
export const ASSESS_INLINE_CTA_ID = "souzoku_assess_inline";

export const ASSESS_INLINE_CTA_HEADING =
  "今の相場を知ってから、進め方を決める";
export const ASSESS_INLINE_CTA_LABEL = "無料AI査定を試す";

export interface AssessInlineCtaProps {
  /** 市区町村コード。指定すると査定フォームに prefill される。 */
  cityCode?: string;
  /** 計測の出現箇所ラベル（例: "souzoku_first_steps_hub"）。 */
  entryPoint?: string;
  /** 見出しレベル。本文 H2 の下なら H3（既定）。 */
  headingLevel?: 2 | 3;
}

function buildAssessHref(cityCode?: string): string {
  const params = new URLSearchParams();
  params.set("cta_id", ASSESS_INLINE_CTA_ID);
  if (cityCode) params.set("city", cityCode);
  return `${R_SIC_ORIGIN}/assess?${params.toString()}`;
}

export function AssessInlineCta({
  cityCode,
  entryPoint = "souzoku_hub",
  headingLevel = 3,
}: AssessInlineCtaProps) {
  const href = buildAssessHref(cityCode);
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <section
      className="cta-card"
      aria-label="無料AI査定のご案内"
      data-cta-id={ASSESS_INLINE_CTA_ID}
    >
      <p className="cta-eyebrow">無料・登録不要ではじめられます</p>
      <Heading className="cta-heading">{ASSESS_INLINE_CTA_HEADING}</Heading>
      <p className="cta-lead">
        相続した土地は、まず今の相場を把握すると次の判断がぶれません。成約データをもとにAIが目安をご案内します。
      </p>
      <a
        href={href}
        onClick={() => {
          trackCtaClick("assessment_check_started", {
            ctaId: ASSESS_INLINE_CTA_ID,
            entryPoint,
            destination: href,
          });
        }}
        className="cta-button"
      >
        {ASSESS_INLINE_CTA_LABEL}
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
