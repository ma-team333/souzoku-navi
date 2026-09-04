# GSC URL-prefix property 手順

対象は起動ホスト（Vercel production URL。現行は本チケット解決コメント参照）。ブランド・ドメイン確定後は確定ホストへ切り替える。カスタムドメイン移行後のDomain propertyは別手順（リンク憲法 第4条）とする。

## 人間ゲート

1. Google Search Consoleで「プロパティを追加」を開く。
2. 「URLプレフィックス」を選び、起動ホスト（`https://<現行production URL>/`）を入力する。
3. 推奨されるHTMLタグまたはHTMLファイル方式で所有権を確認する。Vercelへ設定できる方法を選ぶ。
4. 所有権確認後、起動ホストの `/sitemap.xml` をサイトマップとして送信する。

## エージェント確認

- `curl -I <起動ホスト>` がHTTPSで応答すること
- `/robots.txt` が同じsitemap URLを指すこと
- `/sitemap.xml` に公開ページが含まれること
- canonicalが現行の起動ホストを基準に生成されること

確認日と結果は、このファイルまたは起動チケットのコメントへ追記する。GA4の確認は `docs/measurement.md` に従う。

r-sic.com（①）からの301移行とGSCでの相続関連URL監視は portfolio #29 の範囲（リンク憲法 第4条: 1:1・1ホップ・301明示）。
