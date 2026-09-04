export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://souzoku-navi-theta.vercel.app";
export const SITE_NAME = "相続手続きナビ";
export const ENTITY_ID = "souzoku";
/**
 * ①R-SIC（査定・ガイド・相談ファネルのホスト）。④は①の査定ファネルへの送客源であり、
 * リード計上は①プロパティで行う（portfolio #9: 1 entity = 1 property / #8 分離設計）。
 */
export const R_SIC_ORIGIN = process.env.NEXT_PUBLIC_R_SIC_ORIGIN ?? "https://www.r-sic.com";

export const operator = {
  name: process.env.NEXT_PUBLIC_OPERATOR_NAME ?? "公開前に運営者名を設定してください",
  address: process.env.NEXT_PUBLIC_OPERATOR_ADDRESS ?? "公開前に所在地を設定してください",
  email: process.env.NEXT_PUBLIC_OPERATOR_EMAIL ?? "公開前に連絡先を設定してください",
};
