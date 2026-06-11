import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/animated-heading";
import { SectionHeader } from "@/components/site-shell";
import { createPageMetadata } from "./seo";
import { companyStats, images, productGroups, supplySteps } from "./content";

export const metadata = createPageMetadata({
  description:
    "ООО Центр Снабжения поставляет свежие фрукты, овощи и консервированную овощную продукцию для торговых компаний, сетей, ресторанов и предприятий общественного питания.",
  path: "/",
  keywords: [
    "оптовые поставки москва",
    "свежие овощи и фрукты для бизнеса",
    "консервация оптом"
  ]
});

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[calc(100svh-8rem)] overflow-hidden bg-primary text-white">
        <Image
          alt="Ряды свежих овощей и фруктов на оптовом складе"
          className="image-contrast object-cover opacity-56"
          fill
          priority
          sizes="100vw"
          src={images.hero}
          unoptimized
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <Badge className="mb-6 border-white/20 bg-white text-primary hover:bg-white">
              оптовая торговля фруктами и овощами
            </Badge>
            <AnimatedHeading
              as="h1"
              className="text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl"
              text="Свежие фрукты, овощи и консервация для вашего бизнеса"
            />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Поставляем свежие фрукты, овощи и консервированную овощную продукцию для
              торговых компаний, сетей, ресторанов и предприятий общественного питания
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-transparent border-2 border-white text-white hover:bg-white/50" size="lg" variant="secondary">
                <Link href="/products">Смотреть продукцию</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent border-2 border-white text-white hover:bg-white/50"
                size="lg"
                variant="outline"
              >
                <Link href="/contacts">Запросить прайс</Link>
              </Button>
            </div>
          </div>
          <div className="mt-12 grid max-w-5xl border-y border-white/18 sm:grid-cols-3">
            {companyStats.slice(0, 3).map((item) => (
              <div className="border-white/18 py-5 sm:border-r sm:px-5 last:sm:border-r-0" key={item.label}>
                <div className="text-3xl font-semibold">{item.value}</div>
                <div className="mono-label mt-2 text-xs text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <SectionHeader
          eyebrow="ассортимент"
          title="Основные категории продукции."
          text="Предлагаем сезонный и круглогодичный ассортимент с учетом задач и объема закупки."
        />
        <div className="container-grid mt-10 grid gap-4 md:grid-cols-2">
          {productGroups.map((item) => (
            <Card key={item.title} className="rounded-md border-border bg-card shadow-none">
              <CardHeader>
                <Badge className="w-fit bg-muted text-foreground hover:bg-muted">{item.accent}</Badge>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-muted-foreground">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border produce-shadow">
            <Image
              alt="Коробки с овощами и фруктами перед оптовой отгрузкой"
              className="image-contrast object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={images.logistics}
              unoptimized
            />
          </div>
          <div>
            <Badge variant="outline">операционный маршрут</Badge>
            <AnimatedHeading
              as="h2"
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              text="Надёжные поставки — от получения заказа до доставки с гарантией высокого качества и свежести продукции."
            />
            <ol className="mt-8 grid border-t border-border">
              {supplySteps.map((step, index) => (
                <li className="grid grid-cols-[56px_1fr] gap-4 border-b border-border py-5" key={step}>
                  <span className="mono-label text-sm text-muted-foreground">0{index + 1}</span>
                  <p className="leading-7 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-grid grid gap-6 border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">быстрый старт</Badge>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Расскажите, что именно нужно вашему бизнесу
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              Подберем ассортимент, согласуем условия поставки и предложим удобный формат сотрудничества
            </p>
          </div>
          <Button asChild size="lg" className={'bg-transparent border-2 border-black text-black hover:bg-black/10'}>
            <Link href="/contacts" className={'decoration-0'}>Связаться с нами</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
