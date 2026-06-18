import type { Metadata } from "next";

export const siteConfig = {
  name: "ООО Центр Снабжения",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://centersupply.ru",
  title: "Центр Снабжения",
  description:
    "Оптовая торговля свежими фруктами, овощами и консервированной овощной продукцией для торговых компаний, сетей, ресторанов и предприятий общественного питания.",
  phone: "+7 (916) 366-19-53",
  salesEmail: "info@centersupply.ru",
  accountingEmail: "accounting@centersupply.ru",
  address:
    "127006, Город Москва, вн.тер.г. муниципальный округ Тверской, ул Краснопролетарская, д. 7, помещ. 4/П",
  ogImage:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=630&q=82",
  keywords: [
    "оптовая торговля продуктами питания",
    "оптовая торговля овощами",
    "оптовая торговля фруктами",
    "свежие овощи оптом",
    "свежие фрукты оптом",
    "консервированные овощи оптом",
    "овощи оптом москва",
    "фрукты оптом москва",
    "поставщик овощей и фруктов",
    "поставки овощей и фруктов",
    "консервированная овощная продукция",
    "плодоовощная продукция",
    "поставки для horeca",
    "поставки для торговых сетей"
  ]
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

function resolveMetaTitle(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.title;
}

type PageMetadataInput = {
  title?: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: PageMetadataInput): Metadata {
  const fullTitle = resolveMetaTitle(title);

  return {
    ...(title ? { title } : {}),
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: path,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Оптовые поставки свежих фруктов, овощей и консервированной продукции"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage]
    }
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.salesEmail,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    postalCode: "127006",
    addressCountry: "RU",
    addressLocality: "Москва",
    streetAddress:
      "ул Краснопролетарская, д. 7, помещ. 4/П, муниципальный округ Тверской"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone,
      email: siteConfig.salesEmail,
      areaServed: "RU",
      availableLanguage: ["ru"]
    },
    {
      "@type": "ContactPoint",
      contactType: "accounting",
      email: siteConfig.accountingEmail,
      areaServed: "RU",
      availableLanguage: ["ru"]
    }
  ],
  areaServed: "RU"
};
