import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/animated-heading";
import { PageIntro, SectionHeader } from "@/components/site-shell";
import { createPageMetadata } from "../seo";
import { images, productGroups } from "../content";

export const metadata: Metadata = createPageMetadata({
  title: "Продукция",
  description:
    "Ассортимент ООО Центр Снабжения: свежие фрукты, свежие овощи и консервированная овощная продукция для оптовых закупок и регулярных поставок",
  path: "/products",
  keywords: [
    "яблоки оптом",
    "бананы оптом",
    "картофель оптом",
    "овощная консервация оптом"
  ]
});

const formats = [
  "свежие фрукты",
  "свежие овощи",
  "консервированные овощи",
  "сезонные позиции",
  "круглогодичный ассортимент",
  "индивидуальные условия поставок"
];

export default function ProductsPage() {
  return (
    <main>
      <PageIntro
        alt="Свежие овощи и фрукты крупным планом"
        eyebrow="продукция"
        image={images.fresh}
        text="Предлагаем широкий ассортимент свежих фруктов, овощей и консервированной продукции для регулярных и сезонных закупок"
        title="Продукция для бизнеса с гибкими условиями поставок"
      />

      <section className="section-block">
        <SectionHeader
          eyebrow="каталог"
          title="Основные товарные направления"
          text="Состав поставки подбирается по сезону, объему заявки и потребностям конкретного клиента"
        />
        <div className="container-grid mt-10 grid gap-4 md:grid-cols-2">
          {productGroups.map((item, index) => (
            <Card key={item.title} className="rounded-md border-border bg-card shadow-none">
              <CardHeader className="gap-4">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="outline">0{index + 1}</Badge>
                  <span className="mono-label text-xs text-muted-foreground">оптовая группа</span>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{item.text}</p>
                <div className="mt-6 border-t border-border pt-4">
                  <span className="mono-label text-xs text-muted-foreground">{item.accent}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge variant="outline">форматы</Badge>
            <AnimatedHeading
              as="h2"
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              text="Ассортимент под разные форматы закупок"
            />
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Готовы адаптироваться под индивидуальные потребности клиентов и предложить удобные условия поставки
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {formats.map((format) => (
                <span
                  className="rounded-md border border-border bg-background px-4 py-3 text-sm font-medium"
                  key={format}
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden rounded-lg border border-border produce-shadow">
            <Image
              alt="Консервированные овощи и фрукты на складе"
              className="image-contrast object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={images.canned}
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
