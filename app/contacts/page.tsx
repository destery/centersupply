import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/animated-heading";
import { PageIntro } from "@/components/site-shell";
import { createPageMetadata } from "../seo";
import { siteConfig } from "../seo";
import { contacts, images } from "../content";

export const metadata: Metadata = createPageMetadata({
  title: "Контакты",
  description:
    "Контакты ООО Центр Снабжения: телефон, адрес в Москве, email для товаров и продаж, а также отдельный email для счетов и бухгалтерии",
  path: "/contacts",
  keywords: [
    "контакты центр снабжения",
    "info@centersupply.ru",
    "accounting@centersupply.ru",
    "телефон поставщика овощей и фруктов"
  ]
});

const requestItems = [
  "интересующие позиции",
  "объем и формат поставки",
  "адрес и желаемые сроки"
];

export default function ContactsPage() {
  return (
    <main>
      <PageIntro
        alt="Свежие томаты и овощи для поставки"
        eyebrow="контакты"
        image={images.contact}
        text="По вопросам товаров и продаж пишите на основной email, а по счетам и бухгалтерии используйте отдельный адрес"
        title="Контакты для сотрудничества и рабочих вопросов"
      />

      <section className="section-block">
        <div className="container-grid grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge variant="outline">заявка</Badge>
            <AnimatedHeading
              as="h2"
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              text="Чтобы быстрее подготовить ответ, пришлите:"
            />
            <div className="mt-8 grid border-t border-border">
              {requestItems.map((item, index) => (
                <div className="grid grid-cols-[44px_1fr] gap-4 border-b border-border py-5" key={item}>
                  <span className="mono-label text-sm text-muted-foreground">0{index + 1}</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant={"default"} className={'text-white'}>
                <a href={`mailto:${siteConfig.salesEmail}`} className={"text-inherit"}>Написать по продажам</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">Вернуться к продукции</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((item) => (
              <Card key={item.label} className="rounded-md border-border bg-card shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl">{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a className="font-semibold text-foreground transition hover:text-accent" href={item.href}>
                    {item.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-white">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-border produce-shadow">
            <Image
              alt="Корзины со свежими овощами"
              className="image-contrast object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={images.hero}
              unoptimized
            />
          </div>
          <div>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">ориентир</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Москва, ул. Краснопролетарская, д. 7.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              Работаем с бизнес-клиентами и готовы предложить лучшие решения для вашего бизнеса
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
