import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Star,
  Check,
  Train,
  MapPin,
  BarChart3,
  Shield,
  Radio,
  Cpu,
  Globe,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import processDiscovery from "@/assets/process-discovery.jpg";
import processDesign from "@/assets/process-design.jpg";
import processBuild from "@/assets/process-build.jpg";
import processLaunch from "@/assets/process-launch.jpg";
import mapFrame from "@/assets/map-frame.png";
import logo from "@/assets/logo.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import mediaDigitalBusiness from "@/assets/media-digitalbusiness.svg";
import mediaForbes from "@/assets/forbes.png";
import mediaAtameken from "@/assets/Atameken_Business.webp";
import clientQaztemir from "@/assets/client-qaztemir.png";
import clientUtyCargo from "@/assets/client-utycargo.png";
import clientKazzinc from "@/assets/client-kazzinc-new.svg";
import clientTranco from "@/assets/client-tranco.png";
import clientAtasu from "@/assets/client-atasu.svg";
import clientPmk from "@/assets/client-pmk.png";
import clientEastcom from "@/assets/client-eastcom.png";
import clientArlantrans from "@/assets/client-arlantrans.png";
import clientAdy from "@/assets/client-ady.png";
import clientLogotransenergy from "@/assets/client-logotransenergy.png";

declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.webp" {
  const src: string;
  export default src;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Multicode — IT-решения для железнодорожной индустрии" },
      {
        name: "description",
        content:
          "Комплексная платформа автоматизации для ЖД-операторов. Управление вагонным парком, цифровизация станций, аналитика на базе ИИ.",
      },
      { property: "og:title", content: "Multicode — Digital Railway Solutions" },
      {
        property: "og:description",
        content: "IT-решения для ЖД-операторов: управление парком, цифровизация станций, аналитика.",
      },
    ],
  }),
  component: Index,
});

function useHeroScrolled(threshold = 0.85) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > window.innerHeight * threshold);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle, { passive: true });
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [threshold]);
  return scrolled;
}

function Nav({ scrolled }: { scrolled: boolean }) {
  const links = [
    { label: "Продукты", href: "#products" },
    { label: "Клиенты", href: "#clients" },
    { label: "О компании", href: "#about" },
    { label: "Вопросы", href: "#faq" },
  ];
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[min(1100px,calc(100%-2rem))] -translate-x-1/2">
      <nav
        className={cn(
          "flex items-center justify-between rounded-2xl px-5 py-3 transition-colors duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur shadow-[0_4px_30px_rgba(15,30,60,0.06)] ring-1 ring-black/[0.04]"
            : "bg-black/20 backdrop-blur-md ring-1 ring-white/10",
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Multicode"
            className={cn(
              "h-6 w-auto brightness-0 transition",
              scrolled ? "" : "invert",
            )}
          />
        </a>
        <ul
          className={cn(
            "hidden md:flex items-center gap-7 text-[15px]",
            scrolled ? "text-foreground/80" : "text-white/80",
          )}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "transition-colors",
                  scrolled ? "hover:text-foreground" : "hover:text-white",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={cn(
            "rounded-xl px-5 py-2.5 text-[14px] font-medium transition",
            scrolled
              ? "bg-black text-white hover:bg-black/90"
              : "bg-white text-black hover:bg-white/90",
          )}
        >
          Связаться
        </a>
      </nav>
    </header>
  );
}

function CardShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-white to-[#e6efff] p-6 shadow-[0_10px_40px_-15px_rgba(59,107,196,0.25)] ring-1 ring-white/60">
      <div className="h-[260px] flex items-center justify-center">{children}</div>
      <h3
        className="mt-2 text-[22px] font-semibold tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">{description}</p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ProductIcon({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-[#dce7ff]">
        <Icon className="h-8 w-8 text-[#3b6bc4]" />
      </div>
      <span className="text-[12px] font-semibold text-foreground/60">{label}</span>
    </div>
  );
}

function ProductCard({
  title,
  description,
  features,
  icon: Icon,
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b6bc4]/10 text-[#3b6bc4]">
        <Icon className="h-7 w-7" />
      </div>
      <h3
        className="mt-5 text-[22px] font-semibold tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-foreground/55">{description}</p>
      <ul className="mt-5 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-[14px] text-foreground/60">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-[#3b6bc4]/10">
              <Check className="h-3.5 w-3.5 text-[#3b6bc4]" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-2xl text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Не типовые интеграторы. Команда, которая понимает ЖД изнутри.
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href="#contact"
          className="self-start rounded-xl bg-[#3b6bc4] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(59,107,196,0.5)] hover:bg-[#2d5cb8]"
        >
          Связаться
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        <ProductCard
          title="MultiCode ОС"
          description="Платформа для управления вагонным парком. Учет, маршрутизация, ремонт и интеграция с внешними системами."
          features={[
            "Управление вагонным парком",
            "Автоматизация операций",
            "Аналитика и отчетность",
            "Интеграция с системами",
          ]}
          icon={Train}
        />
        <ProductCard
          title="Multicode СТ"
          description="Industrial IT-решение для цифровой трансформации станций. Полный операционный цикл от прибытия до отправления."
          features={[
            "Сокращение простоев на 50–70%",
            "100% контроль парка",
            "Мониторинг в реальном времени",
            "Цифровая экосистема",
          ]}
          icon={Radio}
        />
        <ProductCard
          title="Другие решения"
          description="Индивидуальные IT-продукты для железнодорожной индустрии под задачи вашего бизнеса."
          features={[
            "Цифровизация станций",
            "Системы безопасности",
            "Аналитика на базе ИИ",
            "Кастомная интеграция",
          ]}
          icon={Cpu}
        />
      </motion.div>
    </section>
  );
}

function WorkSection() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="relative mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-3"
    >
      <motion.div variants={fadeUp}>
        <CardShell
          title="Управление парком"
          description="Единый реестр вагонов, контейнеров и локомотивов с полной историей движения и ремонтов."
        >
          <div className="flex items-center justify-center gap-6">
            <ProductIcon icon={Train} label="Вагоны" />
            <ProductIcon icon={BarChart3} label="Аналитика" />
            <ProductIcon icon={Globe} label="Маршруты" />
          </div>
        </CardShell>
      </motion.div>
      <motion.div variants={fadeUp}>
        <CardShell
          title="Цифровые станции"
          description="Автоматизация прибытия, маневров, погрузки и отправления. Меньше простоев и ручного ввода."
        >
          <div className="flex items-center justify-center gap-6">
            <ProductIcon icon={Radio} label="СТ" />
            <ProductIcon icon={MapPin} label="Пути" />
            <ProductIcon icon={Shield} label="Контроль" />
          </div>
        </CardShell>
      </motion.div>
      <motion.div variants={fadeUp}>
        <CardShell
          title="ИИ-аналитика"
          description="Прогнозирование прибытия, выявление узких мест и оптимизация использования подвижного состава."
        >
          <div className="flex items-center justify-center gap-6">
            <ProductIcon icon={Cpu} label="ИИ" />
            <ProductIcon icon={BarChart3} label="Отчеты" />
            <ProductIcon icon={Mail} label="Оповещения" />
          </div>
        </CardShell>
      </motion.div>
    </motion.section>
  );
}

function StatsSection() {
  const stats = [
    { value: "50–70%", label: "Сокращение простоев" },
    { value: "100%", label: "Видимость парка" },
    { value: "24/7", label: "Мониторинг станций" },
    { value: "10+", label: "Крупнейших операторов" },
  ];
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="grid gap-6 rounded-3xl bg-foreground/[0.03] p-10 ring-1 ring-black/[0.04] md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="text-center">
            <div
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#3b6bc4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-[14px] text-foreground/60">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function GeographySection() {
  return (
    <section id="geography" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Работаем по всему рынку СНГ
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 text-[15px] text-foreground/60">
          Решения для операторов в Казахстане, Узбекистане, Кыргызстане и других странах региона.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
      >
        <img
          src={mapFrame}
          alt="География присутствия Multicode в странах СНГ"
          loading="lazy"
          className="w-full"
        />
      </motion.div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { n: "01", title: "Аудит", desc: "Изучаем процессы, данные и ограничения оператора.", img: processDiscovery },
    { n: "02", title: "Проектирование", desc: "Проектируем архитектуру и интерфейсы под реальные задачи.", img: processDesign },
    { n: "03", title: "Разработка", desc: "Ведем разработку итерациями с ежедневной демонстрацией.", img: processBuild },
    { n: "04", title: "Внедрение", desc: "Запускаем пилот, обучаем персонал и сопровождаем 24/7.", img: processLaunch },
  ];
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#3b6bc4]"
        >
          Наш процесс
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          От идеи до промышленной эксплуатации.
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="relative mt-12 grid gap-5 md:grid-cols-4"
      >
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
          >
            <div className="mb-5 -mx-6 -mt-6 aspect-[4/3] overflow-hidden bg-[#eef4ff]">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4f7fd6] to-[#3b6bc4] text-[13px] font-bold text-white shadow-md">
              {s.n}
            </div>
            <h3
              className="mt-5 text-[18px] font-semibold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-foreground/55">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="absolute top-11 -right-3 hidden h-px w-6 bg-foreground/15 md:block" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const cards = [
    {
      n: "01",
      title: "Специализация на ЖД",
      desc: "Не адаптируем универсальные шаблоны. Строим решения под язык, регламенты и скорость железнодорожной отрасли.",
      tag: "Отраслевой фокус",
    },
    {
      n: "02",
      title: "Промышленная надежность",
      desc: "Работаем с крупнейшими операторами СНГ. SLA, 24/7 и контроль качества на каждом этапе.",
      tag: "SLA 24/7",
    },
    {
      n: "03",
      title: "Собственная разработка",
      desc: "Команда разработчиков, аналитиков и UX-дизайнеров внутри компании. Без аутсорса критичных компетенций.",
      tag: "In-house",
    },
  ];
  return (
    <section id="about" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
      >
        <div className="max-w-2xl">
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Multicode — технологический партнер для ЖД-операторов.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-foreground/60"
          >
            Мы создаем IT-продукты, которые переводят управление вагонным парком и станциями на новый уровень: от
            ручных таблиц и телефонных переговоров к единой цифровой платформе с прозрачной аналитикой.
          </motion.p>
        </div>
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-sm ring-1 ring-black/[0.05]"
        >
          <span className="h-2 w-2 rounded-full bg-[#3b6bc4]" />
          Работаем с 2019 года
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {cards.map((c) => (
          <motion.div
            key={c.n}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
          >
            <div
              className="text-[18px] font-bold text-[#3b6bc4]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {c.n}
            </div>
            <h3
              className="mt-3 text-[20px] font-semibold leading-tight tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {c.title}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/55">{c.desc}</p>
            <div className="my-5 h-px bg-foreground/10" />
            <div className="flex items-center gap-2 text-[13px]">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#3b6bc4]">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
              {c.tag}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function TestimonialsSection() {
  const items = [
    {
      quote:
        "После внедрения MultiCode ОС мы перестали терять вагоны в учете. Видимость парка выросла до 100%, а простои сократились на треть.",
      name: "Азамат Ергалиев",
      role: "Директор по логистике, Qaztemirtrans",
      avatar: avatar1,
    },
    {
      quote:
        "Multicode СТ заменил нам телефонные переговоры на диспетчерскую систему. Теперь станция работает как единый организм.",
      name: "Данияр Сулейменов",
      role: "Главный диспетчер, Eastcomtrans",
      avatar: avatar2,
    },
    {
      quote:
        "Команда говорит на языке железной дороги. Не нужно объяснять, что такое маршрут, вагон-цистерна или простой на пути.",
      name: "Петр Иванов",
      role: "CTO, Tranco",
      avatar: avatar3,
    },
  ];
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Доверие крупнейших операторов.
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {items.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#f5b400]" fill="#f5b400" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/75">"{t.quote}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-foreground/[0.08] pt-4">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div>
                <div className="text-[14px] font-semibold">{t.name}</div>
                <div className="text-[12px] text-foreground/50">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function MediaSection() {
  const items = [
    { href: "https://digitalbusiness.kz", logo: mediaDigitalBusiness, alt: "DigitalBusiness.kz" },
    { href: "https://forbes.kz", logo: mediaForbes, alt: "Forbes Kazakhstan" },
    { href: "https://www.youtube.com", logo: mediaAtameken, alt: "Atameken Business" },
  ];
  return (
    <section id="media" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Медиа о нас
        </motion.h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {items.map((item) => (
          <motion.a
            key={item.alt}
            variants={fadeUp}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-40 items-center justify-center rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04] transition hover:-translate-y-1"
          >
            <img src={item.logo} alt={item.alt} className="max-h-12 max-w-[80%] object-contain" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

function ClientsSection() {
  const logos = [
    { src: clientQaztemir, alt: "Qaztemirtrans" },
    { src: clientUtyCargo, alt: "UTY Cargo" },
    { src: clientKazzinc, alt: "Kazzinc" },
    { src: clientTranco, alt: "Tranco" },
    { src: clientAtasu, alt: "Atasu Group" },
    { src: clientPmk, alt: "ПМК" },
    { src: clientEastcom, alt: "Eastcomtrans" },
    { src: clientArlantrans, alt: "Арлантранс" },
    { src: clientAdy, alt: "ADY" },
    { src: clientLogotransenergy, alt: "ЛогоТрансЭнерджи" },
  ];
  const doubled = [...logos, ...logos];
  return (
    <section id="clients" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#3b6bc4]"
        >
          Нам доверяют
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Крупнейшие операторы рынка СНГ.
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-8 pr-8"
        >
          {doubled.map((l, i) => (
            <div
              key={i}
              className="flex h-20 w-44 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/[0.04]"
            >
              <img src={l.src} alt={l.alt} className="max-h-10 max-w-full object-contain" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Какие продукты предлагает Multicode?",
      a: [
        "MultiCode ОС — управление вагонным парком. Multicode СТ — цифровизация станций. Также разрабатываем индивидуальные решения под задачи заказчика.",
      ],
    },
    {
      q: "С какими операторами вы работаете?",
      a: [
        "Qaztemirtrans, UTY Cargo, Kazzinc, Tranco, Atasu Group, Eastcomtrans, ADY и другие крупные игроки рынка СНГ.",
      ],
    },
    {
      q: "Можно ли интегрировать с нашими системами?",
      a: [
        "Да. Мы предусматриваем интеграцию через API, EDI и прямой обмен файлами с существующими учетными и ERP-системами оператора.",
      ],
    },
    {
      q: "Как начать сотрудничество?",
      a: [
        "Оставьте заявку или свяжитесь с нами. Мы проведем аудит, подготовим коммерческое предложение и запустим пилотный проект.",
      ],
    },
    {
      q: "Есть ли поддержка после запуска?",
      a: [
        "Да. Мы предоставляем SLA, техническую поддержку 24/7, обновления и обучение персонала заказчика.",
      ],
    },
  ];
  return (
    <section id="faq" className="relative mt-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-b from-[#d9e7ff] to-[#eaf1ff] px-6 py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Часто задаваемые вопросы
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-3 max-w-md text-center text-[15px] text-foreground/60"
        >
          Ответы на ключевые вопросы о продуктах и внедрении.
        </motion.p>
        <motion.div variants={fadeUp} className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white px-6 shadow-[0_4px_20px_-10px_rgba(15,30,60,0.1)] ring-1 ring-black/[0.03]"
              >
                <AccordionTrigger
                  className="py-5 text-left text-[16px] font-semibold hover:no-underline"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span>
                    <span className="text-foreground/40">0{i + 1}.</span>
                    <span className="ml-2">{f.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pb-5 text-[14px] leading-relaxed text-foreground/60">
                  {f.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[#3b6bc4] px-8 py-20 text-center"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <h2
          className="relative text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Переведите управление парком на новый уровень.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/75">
          Свяжитесь с нами по любым вопросам. Менеджер поможет выбрать решение и подготовит коммерческое предложение.
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:info@multicode.tech"
            className="rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#3b6bc4] shadow-[0_10px_30px_-10px_rgba(10,21,48,0.3)] transition-transform hover:-translate-y-0.5"
          >
            info@multicode.tech
          </a>
          <a
            href="#products"
            className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Наши продукты
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/[0.06] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Multicode" className="h-5 w-auto brightness-0" />
        </a>
        <ul className="flex items-center gap-6 text-[14px] text-foreground/60">
          <li>
            <a href="#products" className="hover:text-foreground">
              Продукты
            </a>
          </li>
          <li>
            <a href="#clients" className="hover:text-foreground">
              Клиенты
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-foreground">
              О компании
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-foreground">
              Контакты
            </a>
          </li>
        </ul>
        <p className="text-[13px] text-foreground/50">© 2026 Multicode — все права защищены.</p>
      </div>
    </footer>
  );
}

function Index() {
  const scrolled = useHeroScrolled();
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background">
      <Nav scrolled={scrolled} />
      <Hero />
      <main className="relative pb-24">
        <WorkSection />
        <ProductsSection />
        <StatsSection />
        <GeographySection />
        <ProcessSection />
        <AboutSection />
        <ClientsSection />
        <TestimonialsSection />
        <MediaSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
