import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date("2026-09-04");
  return [
    "",
    "/first-steps",
    "/sale-steps",
    "/sale-tax",
    "/tax",
    "/division",
    "/renunciation",
    "/verification",
    "/operator",
    "/privacy",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: updatedAt,
    changeFrequency: path === "" || path === "/first-steps" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
