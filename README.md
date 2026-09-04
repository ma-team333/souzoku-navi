# 相続手続きナビ（仮称）

相続した不動産の手続き・税・分割・放棄を、原典と確認日つきで整理するNext.jsサイトです。

サイト名・リポジトリ名・Vercel project名はすべて仮称（`souzoku-navi`）。ブランドとドメインは
[portfolio #8 分離設計](https://github.com/ma-team333/portfolio/issues/8) の人間ゲートで確定する
（候補: souzoku-korekara.jp / souzoku-navi.jp / souzoku-media.jp / souzoku-tetsuzuki.jp）。

## Development

```bash
npm install
npm run dev
```

環境変数は `.env.example` を参照してください。`NEXT_PUBLIC_GA_ID` が無い場合、GA4タグは読み込まれません。

## Scope

- サイト骨格・運営情報・ポリシー・検証方針・計測仕様を公開。
- 領土は手続き軸（相続手続き・税・分割・放棄）に限定（portfolio #8）。売却実務・相場は①R-SIC、物理処分・補助金は③Akiyaの領土。
- 記事コンテンツの移植と r-sic からの301移行は [portfolio #29](https://github.com/ma-team333/portfolio/issues/29)。
- 送客CTA（①R-SIC査定ファネルへの遷移）は `src/components/cta/`。cta_id 規約は sobatan #746 から維持。
