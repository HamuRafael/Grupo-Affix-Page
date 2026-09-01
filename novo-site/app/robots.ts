export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/php/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
