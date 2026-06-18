import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Train, Radio, Cpu, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Hero } from "@/components/hero";
import { TeamSection } from "@/components/team-section";
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
        content:
          "IT-решения для ЖД-операторов: управление парком, цифровизация станций, аналитика.",
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
            className={cn("h-6 w-auto brightness-0 transition", scrolled ? "" : "invert")}
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
          Контакты
        </a>
      </nav>
    </header>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ProductCard({
  title,
  description,
  features,
  icon: Icon,
  to,
}: {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  to?: string;
}) {
  const cardClass =
    "group block rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:shadow-[0_15px_50px_-20px_rgba(15,30,60,0.15)]";

  const inner = (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b6bc4]/10 text-[#3b6bc4]">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-[22px] font-semibold tracking-tight font-display">{title}</h3>
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
      {to && (
        <span className="mt-6 flex items-center gap-1.5 text-[14px] font-semibold text-[#3b6bc4]">
          Подробнее
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <motion.div variants={fadeUp}>
        <Link to={to} className={cardClass}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={fadeUp} className={cardClass}>
      {inner}
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-2xl text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display"
        >
          Не типовые интеграторы. Команда, которая понимает ЖД изнутри.
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href="#contact"
          className="self-start rounded-xl bg-[#3b6bc4] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(59,107,196,0.5)] hover:bg-[#2d5cb8]"
        >
          Обсудить проект
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
          to="/oc"
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
          to="/ct"
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
  const capabilities = [
    {
      icon: Train,
      title: "Управление парком",
      desc: "Единый реестр вагонов, контейнеров и локомотивов с полной историей движения и ремонтов.",
    },
    {
      icon: Radio,
      title: "Цифровые станции",
      desc: "Автоматизация прибытия, маневров, погрузки и отправления. Меньше простоев и ручного ввода.",
    },
    {
      icon: Cpu,
      title: "ИИ-аналитика",
      desc: "Прогнозирование прибытия, выявление узких мест и оптимизация использования подвижного состава.",
    },
  ];
  return (
    <section id="work" className="relative mx-auto mt-20 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideIn}
          className="md:col-span-5"
        >
          <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
            Что мы делаем
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/60">
            Три направления, которые покрывают весь цикл работы железнодорожного оператора — от
            учёта вагона до прогнозирования прибытия.
          </p>
        </motion.div>
        <div className="md:col-span-7">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={cn(
                "flex items-start gap-5 py-6",
                i > 0 && "border-t border-foreground/10",
              )}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3b6bc4]/10 text-[#3b6bc4]">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-[20px] font-semibold tracking-tight font-display">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/55">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const facts = [
    { value: "10+", label: "операторов СНГ работают на наших решениях" },
    { value: "с 2019", label: "года на рынке железнодорожного IT" },
    { value: "24/7", label: "техническая поддержка по SLA" },
  ];
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <div className="grid gap-8 rounded-3xl bg-foreground/[0.03] p-6 ring-1 ring-black/[0.04] md:grid-cols-12 md:gap-16 md:p-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideIn}
          className="md:col-span-6"
        >
          <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.03em] font-display">
            Нам доверяют крупнейшие операторы рынка СНГ
          </h2>
        </motion.div>
        <div className="md:col-span-6">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={cn(
                "flex items-baseline gap-5 py-4",
                i > 0 && "border-t border-foreground/10",
              )}
            >
              <span className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-[#3b6bc4] font-display tabular-nums">
                {f.value}
              </span>
              <span className="text-[14px] leading-relaxed text-foreground/60">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeographySection() {
  return (
    <section id="geography" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] font-display"
        >
          Работаем по всему рынку СНГ
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 max-w-xl text-[15px] text-foreground/60">
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
    {
      n: "01",
      title: "Аудит",
      desc: "Изучаем процессы, данные и ограничения оператора.",
      img: processDiscovery,
    },
    {
      n: "02",
      title: "Проектирование",
      desc: "Проектируем архитектуру и интерфейсы под реальные задачи.",
      img: processDesign,
    },
    {
      n: "03",
      title: "Разработка",
      desc: "Ведем разработку итерациями с ежедневной демонстрацией.",
      img: processBuild,
    },
    {
      n: "04",
      title: "Внедрение",
      desc: "Запускаем пилот, обучаем персонал и сопровождаем 24/7.",
      img: processLaunch,
    },
  ];
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] font-display"
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
            <h3 className="mt-5 text-[18px] font-semibold tracking-tight font-display">
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
  const items = [
    {
      title: "Специализация на ЖД",
      desc: "Не адаптируем универсальные шаблоны. Строим решения под язык, регламенты и скорость железнодорожной отрасли.",
    },
    {
      title: "Промышленная надежность",
      desc: "Работаем с крупнейшими операторами СНГ. SLA, 24/7 и контроль качества на каждом этапе.",
    },
    {
      title: "Собственная разработка",
      desc: "Команда разработчиков, аналитиков и UX-дизайнеров внутри компании. Без аутсорса критичных компетенций.",
    },
  ];
  return (
    <section id="about" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
      >
        <div className="max-w-2xl">
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display"
          >
            Multicode — технологический партнер для ЖД-операторов.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-[15px] leading-relaxed text-foreground/60"
          >
            Мы создаем IT-продукты, которые переводят управление вагонным парком и станциями на
            новый уровень: от ручных таблиц и телефонных переговоров к единой цифровой платформе с
            прозрачной аналитикой.
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

      <div className="mt-12">
        {items.map((c, i) => (
          <motion.div
            key={c.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className={cn(
              "flex flex-col gap-4 py-8 md:flex-row md:items-start md:gap-10",
              i > 0 && "border-t border-foreground/10",
            )}
          >
            <span className="text-[clamp(2rem,4vw,3rem)] font-bold leading-none text-[#3b6bc4]/30 font-display tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h3 className="text-[22px] font-semibold leading-tight tracking-tight font-display">
                {c.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/55">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
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
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="md:col-span-7"
        >
          <p className="font-serif-hero text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.3] tracking-[-0.02em] text-foreground/85">
            «{items[0].quote}»
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img
              src={items[0].avatar}
              alt={items[0].name}
              loading="lazy"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div>
              <div className="text-[15px] font-semibold font-display">{items[0].name}</div>
              <div className="text-[13px] text-foreground/50">{items[0].role}</div>
            </div>
          </div>
        </motion.div>
        <div className="md:col-span-5">
          {items.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={cn("py-5", i > 0 && "border-t border-foreground/10")}
            >
              <p className="text-[15px] leading-relaxed text-foreground/75">«{t.quote}»</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="text-[14px] font-semibold">{t.name}</div>
                  <div className="text-[12px] text-foreground/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
    <section id="media" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] font-display"
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
    <section id="clients" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] font-display"
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
          className="flex shrink-0 items-center gap-4 pr-4 sm:gap-8 sm:pr-8"
        >
          {doubled.map((l, i) => (
            <div
              key={i}
              className="flex h-16 w-36 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/[0.04] sm:h-20 sm:w-44 sm:p-4"
            >
              <img
                src={l.src}
                alt={l.alt}
                className="max-h-8 max-w-full object-contain sm:max-h-10"
              />
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
    <section id="faq" className="relative mt-20 md:mt-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-b from-[#d9e7ff] to-[#eaf1ff] px-6 py-12 md:py-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-center text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] font-display"
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
                <AccordionTrigger className="py-5 text-left text-[16px] font-semibold hover:no-underline font-display">
                  {f.q}
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
    <section id="contact" className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[#3b6bc4] px-6 py-12 text-center md:px-8 md:py-20"
      >
        <h2 className="relative text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white font-display">
          Переведите управление парком на новый уровень.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/75">
          Свяжитесь с нами по любым вопросам. Менеджер поможет выбрать решение и подготовит
          коммерческое предложение.
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
    <footer className="mt-16 border-t border-black/[0.06] bg-background md:mt-24">
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
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav scrolled={scrolled} />
      <Hero />
      <main className="relative pb-24">
        <WorkSection />
        <ProductsSection />
        <StatsSection />
        <GeographySection />
        <ProcessSection />
        <AboutSection />
        <TeamSection />
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
