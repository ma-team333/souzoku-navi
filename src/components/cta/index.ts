/**
 * 相続メディア CTA 3種のバレル。
 * sobatan estate-lens `src/components/souzoku/cta/`（issue #746）からの移植。
 * `SeeAllArticlesLink` は sobatan 内部ナビゲーションのため移植対象外
 * （portfolio #8 補遺の移植対象は変換CTA 3種）。
 */

export {
  AssessInlineCta,
  ASSESS_INLINE_CTA_ID,
  ASSESS_INLINE_CTA_HEADING,
  ASSESS_INLINE_CTA_LABEL,
  type AssessInlineCtaProps,
} from "./AssessInlineCta";

export {
  DiagnosisAsideCta,
  DIAGNOSIS_ASIDE_CTA_ID,
  DIAGNOSIS_ASIDE_CTA_HEADING,
  DIAGNOSIS_ASIDE_CTA_LABEL,
  DIAGNOSIS_DEFAULT_HREF,
  type DiagnosisAsideCtaProps,
} from "./DiagnosisAsideCta";

export {
  AdvisorCta,
  ADVISOR_CTA_ID,
  ADVISOR_CTA_HEADING,
  ADVISOR_CTA_LABEL,
  ADVISOR_DEFAULT_HREF,
  type AdvisorCtaProps,
} from "./AdvisorCta";
