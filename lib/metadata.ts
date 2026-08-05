import type { Metadata } from "next";
import { site } from "./constants";
import { campaignImages } from "./images";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: campaignImages.heroHome.src,
          width: campaignImages.heroHome.width,
          height: campaignImages.heroHome.height,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [campaignImages.heroHome.src],
    },
  };
}
