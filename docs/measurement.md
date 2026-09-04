# 相続手続きナビ 計測仕様 v1

## 基本方針

- Entity ID は `souzoku`（portfolio #9: 1 entity = 1 property）。
- GA4 はポートフォリオの他Entityと分離した通常プロパティを使う。
- `NEXT_PUBLIC_GA_ID` が未設定の環境では解析タグを読み込まない。
- 本番の測定IDはVercelの環境変数へ設定し、設定後に再デプロイする。

## 送客イベント（④プロパティへ記録）

④は①R-SICの査定ファネルへの送客源である（portfolio #8 補遺）。④ページ上のCTAクリックを④プロパティで記録する。

| CTA | cta_id | イベント | 遷移先 | 実装 |
|---|---|---|---|---|
| AI査定（インライン） | `souzoku_assess_inline` | `assessment_check_started` | ① `/assess?cta_id=souzoku_assess_inline[&city=]` | `src/components/cta/AssessInlineCta.tsx` |
| 進め方診断（aside） | `souzoku_diagnosis_aside` | `consultation_cta_clicked` | ① `/guide` | `src/components/cta/DiagnosisAsideCta.tsx` |
| 相談 | `souzoku_advisor` | `consultation_cta_clicked` | ① `/chat` | `src/components/cta/AdvisorCta.tsx` |

- 共通パラメータ: `entity=souzoku` / `cta_id` / `entry_point`（出現箇所。ハブは `souzoku_<hub>_hub`、記事は `souzoku_article_*` を #29 で使用）/ `destination`。
- 発火処理は `src/lib/analytics.ts` の `trackCtaClick` に集約する。
- cta_id 規約は sobatan #746（`src/components/souzoku/cta/`）から移植・維持（portfolio #8 補遺）。
- 査定リンクはクエリ `?cta_id=` で①のフォームまで識別子を輸送する（portfolio #15 の契約）。①のフォーム送信成功時、`generate_lead`（entity=`r_sic`）は①プロパティで発火する。④の送客と①のリードはこの cta_id で突合する。
- `returnTo` は①内部ルート用の契約のため④からは付与しない。

## リードイベント（未接線）

提携契約および弁護士7問ゲート（portfolio #18）通過後、実在するCTAにだけ `generate_lead` を接線する。プレースホルダー発火は作らない。

| 項目 | 値 |
|---|---|
| event name | `generate_lead` |
| `entity` | `souzoku` |
| `cta_id` | CTAごとの固定識別子 |
| key event | GA4管理画面で登録（人間ゲート） |

発火処理は `src/lib/analytics.ts` の `trackGenerateLead` に集約済み。クリックごとの重複発火を避け、送信成功時の1回だけ呼び出す（portfolio #15 で確立した発火点の意味論に従う）。

## 検証

1. GA4 DebugViewでCTAイベントと `entity=souzoku`、`cta_id`、`entry_point` を確認する。
2. GA4のRealtimeで実セッションを確認する。
3. GA4管理画面で `generate_lead` をkey eventへ登録する（接線後）。
4. CTAを追加・配置したPRに発火点・CTA ID・確認結果を記録する。
