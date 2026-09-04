import type { Metadata } from "next";
import { operator } from "@/lib/site";

export const metadata: Metadata = {
  title: "連絡先",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">CONTACT</p>
        <h1>連絡先</h1>
        <p className="lede">掲載内容の誤り、制度の更新、その他のお問い合わせを受け付けます。</p>
      </div>
      <div className="prose">
        <div className="info-card">
          <h2>メールでのお問い合わせ</h2>
          <p>{operator.email}</p>
        </div>
        <div className="notice">個別の法律・税務判断や手続きの代理は行いません。該当するご相談は、弁護士・税理士・司法書士などの専門家へご相談ください。</div>
      </div>
    </div>
  );
}
