# 相続手続きナビ 起動チェックリスト

リンク憲法 v1（[docs/link-constitution.md](https://github.com/ma-team333/portfolio/blob/main/docs/link-constitution.md)）の新Entity起動時チェックリストへの適合記録を含む。
エージェント作業と人間ゲートを分け、未確定の運営情報を公開しない。

## エージェント側（完了）

- [x] `souzoku-navi` リポジトリを作成（仮称。ブランド確定後にリネーム）
- [x] Vercel project を作成し、productionへデプロイ（現行URLは本チケット解決コメント参照）
- [x] 他Entityのテンプレートを共有しない独自レイアウトを実装（靛藍×明朝。③の緑×Gothicと別系統）
- [x] 手続き軸ハブ `/first-steps` `/tax` `/division` `/renunciation` を設置（portfolio #8 領土決定）
- [x] `/verification` に原典URL・確認日・derived claims・最終更新日・公開前判定の方針を記載
- [x] `/operator` `/privacy` `/contact` を設置
- [x] `NEXT_PUBLIC_GA_ID` のenv guard、`trackCtaClick` / `trackGenerateLead` 仕様を実装
- [x] 送客CTA 3種を sobatan #746 から移植し、cta_id 規約を維持（portfolio #8 補遺）
- [x] URL-prefix GSCの手順を `docs/gsc-url-prefix.md` に記録

## リンク憲法 適合記録

### 起動時チェックリスト（憲法末尾）

1. [x] レジストリ割当確定（第1条）— ④領土=手続き軸（相続手続き・税・分割・放棄）は portfolio #8 で確定、レジストリ #2 へ提供済み。売却実務・相場→①、物理処分・補助金→③、権利訳あり→② に書かない
2. [x] 運営情報・ポリシー類設置（第3条）— `/operator` `/privacy` `/contact`。取引への関与がないため特商法表記は対象外
3. [x] verify/監修フロー設置（第5条）— `/verification`。原典+確認日、derived明示、最終更新日、人間判定ゲート。監修の漸進（第5条5）はマップ霧の監修体制に従う
4. [x] テンプレート・計測プロパティの独自化（第6条）— 別repo・別Vercel project・別GA4プロパティ。配色・組版・レイアウト構造を①②③と差別化
5. [ ] 起動30日後: PBN検証リスト初回実施（公開後。人間ゲート側で実施）

### 第2条（ジャーニー基準）

- [x] 横断リンク（①への送客CTA）は本文・ハブ本文内のみ。ヘッダー・フッター・サイドバーに横断リンクなし
- [x] 1ページあたりの横断リンク: ハブ1本（AI査定のみ。診断・相談CTAは #29 の記事移植時にaside/セクション末尾へ配置）
- [x] アンカーは自然文（「無料AI査定を試す」等）。完全一致キーワードアンカーなし
- [x] ホームは横断リンク0本

### 第6条 PBN検証リスト（起動時点）

- [x] 横断リンク比率: 全9ルート中CTA設置4ページ×1本。横断リンク0本のページ >85% を満たす
- [x] アンカー多様性: 完全一致キーワードアンカー無し
- [x] 内容重複: 他Entityとの同一/類似記事なし（領土排他）
- [x] テンプレート非共通: 独自レイアウト
- [x] インフラ分離: 別リポジトリ/別プロジェクト/別GA4プロパティ（GSCは人間ゲートで新規）
- [x] サイトワイド横断リンクゼロ
- [x] 対価のある外部リンク: 現時点でなし（提携CTA実装時は rel="sponsored" と明示を #18 ゲート後に検討）
- [ ] 成長の整合・固有データによる被リンク: 公開後の継続項目

## 人間ゲート（公開前に実施）

- [ ] ブランド・ドメインの確定（portfolio #8 候補: souzoku-korekara.jp 等4件）。確定時に repo / Vercel project のリネーム、`SITE_NAME`・`NEXT_PUBLIC_SITE_URL` 更新を行う
- [ ] 運営者名・所在地・連絡先を確定し、Vercel環境変数へ設定
- [ ] プライバシーポリシーの最終文面を確定
- [ ] GA4でsouzoku用プロパティを作成し、測定IDを発行
- [ ] VercelのProductionへ `NEXT_PUBLIC_GA_ID` を設定して再デプロイ
- [ ] GA4でCTAイベントを確認し、`generate_lead` は接線後にkey eventへ登録
- [ ] GSC URL-prefix property（起動ホスト）を確認し、sitemapを送信
- [ ] 実サイトで運営情報・ポリシー・検証方針・sitemapを確認
- [ ] 起動30日後: PBN検証リスト初回実施

カスタムドメインへの移行は portfolio #8 の人間ゲートで別途起票する。移行時は1:1の301、内部リンク・canonical・sitemap監査、GSC移行（リンク憲法 第4条）を実施する。
