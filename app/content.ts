import { siteConfig } from "./seo";

export const navItems = [
  { href: "/", label: "Главная" },
  { href: "/company", label: "Компания" },
  { href: "/products", label: "Продукция" },
  { href: "/supply", label: "Поставки" },
  { href: "/contacts", label: "Контакты" }
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=84",
  company:
    "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=1400&q=82",
  fresh:
    "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=1400&q=82",
  canned:
    "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1400&q=82",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=82",
  contact:
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1400&q=82"
};

export const companyStats = [
  { value: "B2B", label: "работаем с бизнес-клиентами" },
  { value: "опт", label: "свежие фрукты и овощи" },
  { value: "сезон", label: "круглогодичный ассортимент" },
  { value: "гибко", label: "условия поставок под клиента" }
];

export const productGroups = [
  {
    title: "Свежие фрукты",
    text: "Яблоки, бананы, апельсины, мандарины, лимоны, виноград и другие сезонные фрукты",
    accent: "Сезонные и круглогодичные позиции"
  },
  {
    title: "Свежие овощи",
    text: "Картофель, морковь, лук, капуста, помидоры, огурцы, перец и другие сезонные овощи",
    accent: "Ассортимент под регулярные закупки"
  },
  {
    title: "Консервированная продукция",
    text: "Консервированные огурцы, помидоры, кукуруза, горошек и другие консервированные овощи",
    accent: "Гибкие условия поставок"
  }
];

export const supplySteps = [
  "Мы принимаем заявку клиента, согласовываем ассортимент, объёмы, условия поставки и сроки. Для каждого клиента подбирается индивидуальное решение, соответствующее его потребностям и требованиям бизнеса.",
  "Мы сотрудничаем только с проверенными европейскими и международными поставщиками, предлагая сезонную и круглогодичную продукцию, соответствующую самым высоким стандартам качества.",
  "Мы организуем профессиональную комплектацию заказа, контроль температурного режима и логистические процессы, чтобы продукция сохраняла максимальную свежесть и качество на всём пути доставки.",
  "Мы обеспечиваем своевременную доставку продукции, организуем её беспрепятственную приёмку и подготавливаем весь необходимый пакет экспортных, импортных и сопроводительных документов."
];

export const supplyStepTitles = [
  "Приём заказа и анализ потребностей",
  "Отбор продукции и контроль качества",
  "Комплектация заказа и организация логистики",
  "Доставка и оформление документов"
];

export const contacts = [
  {
    label: "Телефон",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[\s()-]/g, "")}`
  },
  {
    label: "Email продаж",
    value: siteConfig.salesEmail,
    href: `mailto:${siteConfig.salesEmail}`
  },
  {
    label: "Email бухгалтерии",
    value: siteConfig.accountingEmail,
    href: `mailto:${siteConfig.accountingEmail}`
  },
  {
    label: "Адрес",
    value: siteConfig.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`
  }
];
