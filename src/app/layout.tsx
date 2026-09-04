import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "相続した不動産の手続き・税・分割・放棄を、原典と確認日がわかる形で整理するメディア。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "相続手続き・相続税・遺産分割・相続放棄を、原典と確認日つきで整理します。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">相</span>
              <span>相続手続きナビ</span>
            </Link>
            <nav aria-label="メインナビゲーション">
              <Link href="/first-steps">最初の手続き</Link>
              <Link href="/tax">相続税</Link>
              <Link href="/division">遺産分割</Link>
              <Link href="/renunciation">相続放棄</Link>
              <Link href="/verification">検証方針</Link>
              <Link href="/operator">運営情報</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <div>
              <p className="footer-brand">相続手続きナビ</p>
              <p className="footer-note">原典をたどれる、相続手続きの入口。</p>
            </div>
            <nav className="footer-links" aria-label="フッターナビゲーション">
              <Link href="/verification">検証方針</Link>
              <Link href="/operator">運営情報</Link>
              <Link href="/privacy">プライバシーポリシー</Link>
              <Link href="/contact">連絡先</Link>
            </nav>
          </div>
          <p className="copyright">© 相続手続きナビ</p>
        </footer>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
