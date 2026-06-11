import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedHeading } from "@/components/animated-heading";
import { contacts, navItems } from "@/app/content";
import { siteConfig } from "@/app/seo";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/94 backdrop-blur">
        <div className="mx-auto hidden max-w-7xl items-center justify-between border-b border-border/70 px-4 py-2 text-xs text-muted-foreground sm:flex sm:px-6 lg:px-8">
          <span className="mono-label">B2B / свежая продукция / консервация</span>
          <div className="flex items-center gap-4">
            <a className="transition hover:text-foreground" href={contacts[0].href}>
              {contacts[0].value}
            </a>
            <a className="transition hover:text-foreground" href={contacts[1].href}>
              {contacts[1].value}
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Link className="flex items-center gap-3" href="/" aria-label="На главную">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-sm font-black text-primary-foreground">
              ЦС
            </span>
            <span>
              <span className="block text-base font-semibold leading-none">{siteConfig.name}</span>
              <span className="mono-label text-xs text-muted-foreground">оптовые поставки</span>
            </span>
          </Link>

          <nav className="flex flex-wrap items-center gap-1" aria-label="Основная навигация">
            {navItems.map((item) => (
              <Button asChild key={item.href} size="sm" variant="ghost">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <Badge className="mb-5 border-white/20 bg-white text-primary hover:bg-white">оптовый отдел</Badge>
            <AnimatedHeading
              as="h2"
              className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl"
              text="Свежая продукция и надежные поставки для вашего бизнеса"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-white text-black hover:bg-white/90" variant="default">
                <Link href="/contacts">Запросить прайс</Link>
              </Button>
              <Button className="bg-white text-black hover:bg-white/90" variant="default">
                <Link href="/products" className={"text-black"}>Ассортимент</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-white/72 sm:grid-cols-2">
            {contacts.slice(0, 3).map((item) => (
              <a className="transition hover:text-white" href={item.href} key={item.label}>
                <span className="mono-label block text-xs text-white/44">{item.label}</span>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  text,
  image,
  alt
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate min-h-[48svh] overflow-hidden bg-primary text-white">
      <Image
        alt={alt}
        className="image-contrast object-cover opacity-54"
        fill
        priority
        sizes="100vw"
        src={image}
        unoptimized
      />
      <div className="absolute inset-0 bg-black/58" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <Badge className="mb-5 w-fit border-white/20 bg-white text-primary hover:bg-white">{eyebrow}</Badge>
        <AnimatedHeading
          as="h1"
          className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          text={title}
        />
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">{text}</p>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <Badge variant="outline">{eyebrow}</Badge>
        <AnimatedHeading
          as="h2"
          className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl"
          text={title}
        />
        <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p>
      </div>
      <div aria-hidden="true" className="hidden h-px flex-1 bg-border md:block" />
    </div>
  );
}
