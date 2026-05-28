import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    es: `${SITE_URL}/es`,
    en: `${SITE_URL}/en`,
  };

  return [
    {
      url: `${SITE_URL}/es`,
      lastModified: new Date(),
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      alternates: { languages },
    },
  ];
}
