import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/animated-heading";
import { PageIntro, SectionHeader } from "@/components/site-shell";
import { createPageMetadata } from "../seo";
import { images, supplySteps, supplyStepTitles } from "../content";

export const metadata: Metadata = createPageMetadata({
  title: "Поставки",
  description:
    "Организуем поставки свежих фруктов, овощей и консервированной овощной продукции для торговых компаний, сетей, ресторанов и предприятий общественного питания",
  path: "/supply",
  keywords: [
    "поставки овощей и фруктов москва",
    "логистика свежих овощей",
    "оптовые поставки horeca"
  ]
});

const clients = [
  "розничные торговые компании",
  "торговые сети",
  "рестораны",
  "предприятия общественного питания",
  "другие деловые партнеры"
];

export default function SupplyPage() {
  return (
    <main>
      <PageIntro
        alt="Логистический склад и зона отгрузки"
        eyebrow="поставки"
        image={images.logistics}
        text="Организуем поставки так, чтобы продукция прибывала быстро, сохраняла свежесть и соответствовала ожиданиям клиента"
        title="Надежная логистика для регулярных и разовых закупок"
      />

      <section className="section-block">
        <SectionHeader
          eyebrow="процесс"
          title="Надёжные поставки — от получения заказа до доставки"
          text="Каждый этап организован так, чтобы клиент получал качественную продукцию вовремя и с полным комплектом документов."
        />
        <div className="container-grid mt-10 grid gap-4 lg:grid-cols-4">
          {supplySteps.map((step, index) => (
            <article className="rounded-md border border-border bg-card p-6" key={step}>
              <div className="mono-label text-sm text-muted-foreground">этап 0{index + 1}</div>
              <h3 className="mt-5 text-xl font-semibold">{supplyStepTitles[index]}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[390px] overflow-hidden rounded-lg border border-border">
            <Image
              alt="Погрузка коробов на складе"
              className="image-contrast object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={images.company}
              unoptimized
            />
          </div>
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">клиенты</Badge>
            <AnimatedHeading
              as="h2"
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              text="Работаем с разными форматами бизнеса"
            />
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Предлагаем гибкие условия поставок и готовы подстроиться под специфику закупки,
              график работы и формат приемки клиента
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {clients.map((client) => (
                <span className="rounded-md border border-border bg-background px-4 py-3 text-sm font-medium" key={client}>
                  {client}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8" size="lg" style={{color: "#FFF"}}>
              <Link href="/contacts">Обсудить поставку</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
