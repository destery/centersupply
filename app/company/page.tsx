import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedHeading } from "@/components/animated-heading";
import { PageIntro, SectionHeader } from "@/components/site-shell";
import { createPageMetadata } from "../seo";
import { companyStats, images } from "../content";

export const metadata: Metadata = createPageMetadata({
  title: "О компании",
  description:
    "ООО Центр Снабжения специализируется на оптовой торговле свежими фруктами, овощами и консервированной овощной продукцией, уделяя внимание качеству, логистике и надежности поставок",
  path: "/company",
  keywords: [
    "о компании центр снабжения",
    "поставщик фруктов и овощей",
    "оптовая компания москва"
  ]
});

const principles = [
  "специализируемся на оптовой торговле свежими фруктами, овощами и консервированной овощной продукцией",
  "работаем с проверенными поставщиками и предлагаем широкий ассортимент сезонной и круглогодичной продукции",
  "уделяем особое внимание логистике, чтобы продукция доставлялась быстро и сохраняла свежесть",
  "нацелены на надежные поставки и долгосрочное сотрудничество с бизнес-клиентами"
];

export default function CompanyPage() {
  return (
    <main>
      <PageIntro
        alt="Оптовый рынок со свежими овощами и фруктами"
        eyebrow="о компании"
        image={images.company}
        text="Наша компания обеспечивает бизнес-клиентов свежими фруктами, овощами и консервированной продукцией с акцентом на качество, логистику и стабильность поставок"
        title="Оптовые поставки продукции для розницы, HoReCa и других деловых партнеров"
      />

      <section className="section-block">
        <div className="container-grid grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <Badge variant="outline">подход</Badge>
            <AnimatedHeading
              as="h2"
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              text="Работаем как надежный партнер по поставкам"
            />
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Выстраиваем поставки так, чтобы клиент получал качественную продукцию вовремя и в нужном объеме
            </p>
          </div>
          <div className="grid border-t border-border">
            {principles.map((item, index) => (
              <div className="grid gap-4 border-b border-border py-6 sm:grid-cols-[88px_1fr]" key={item}>
                <span className="mono-label text-sm text-muted-foreground">принцип 0{index + 1}</span>
                <p className="text-lg leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block bg-white">
        <SectionHeader
          eyebrow="профиль"
          title="Поставки для бизнеса, где важны качество и стабильность"
          text="Сотрудничаем с розничными компаниями, торговыми сетями, ресторанами, предприятиями общественного питания и другими бизнес-клиентами"
        />
        <div className="container-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((item) => (
            <Card key={item.label} className="rounded-md border-border shadow-none">
              <CardHeader>
                <CardTitle className="text-3xl font-semibold">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="mono-label text-xs text-muted-foreground">{item.label}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="container-grid grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-border">
            <Image
              alt="Свежие овощи и фрукты на оптовой выкладке"
              className="image-contrast object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={images.fresh}
              unoptimized
            />
          </div>
          <div className="border-l border-border pl-6">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">контроль партии</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              Подбираем ассортимент под задачи клиента и сопровождаем поставку на каждом этапе
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Гибко подходим к условиям сотрудничества и готовы адаптироваться под индивидуальные
              потребности по ассортименту, объему и формату поставки
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
