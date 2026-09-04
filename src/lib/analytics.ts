import { ENTITY_ID } from "@/lib/site";

export type AnalyticsParams = Record<string, string | number | boolean>;

type Gtag = (command: "event", eventName: string, params?: AnalyticsParams) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/**
 * ④固有: 送客CTAのクリック計測。1 entity = 1 property（portfolio #9）により、
 * ④ページ発の送客は④プロパティへ記録する。リード実績（generate_lead）は
 * 遷移先①の査定フォーム送信成功時に①プロパティで計上される（portfolio #15 / #8 補遺）。
 */
export function trackCtaClick(
  eventName: "assessment_check_started" | "consultation_cta_clicked",
  params: { ctaId: string; entryPoint: string; destination: string },
) {
  trackEvent(eventName, {
    entity: ENTITY_ID,
    cta_id: params.ctaId,
    entry_point: params.entryPoint,
    destination: params.destination,
  });
}

/**
 * ③#19 パターンの generate_lead helper。発火契約が確定した送客CTA
 * （提携契約・弁護士7問ゲート portfolio #18 通過後）にのみ接線する。
 * 現時点でプレースホルダー発火は作らない。
 */
export function trackGenerateLead(ctaId: string) {
  trackEvent("generate_lead", { entity: ENTITY_ID, cta_id: ctaId });
}
