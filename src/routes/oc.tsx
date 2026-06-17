import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight, LogIn } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  ProductNav,
  ProductFooter,
  ProductCTA,
  DEMO_FORM_URL,
  fadeUp,
  slideIn,
  stagger,
} from "@/components/product-shared";

export const Route = createFileRoute("/oc")({
  head: () => ({
    meta: [
      { title: "MultiCode ОС — Управление вагонным парком" },
      {
        name: "description",
        content:
          "Платформа для управления вагонным парком. Комплексное решение для автоматизации деятельности операторов железнодорожного транспорта.",
      },
      { property: "og:title", content: "MultiCode ОС — Управление вагонным парком" },
      {
        property: "og:description",
        content:
          "Платформа для управления вагонным парком. Комплексное решение для автоматизации деятельности операторов железнодорожного транспорта.",
      },
    ],
  }),
  component: OCPage,
});

const stats = [
  { value: "Более 100 тысяч", label: "оперируемых вагонов под управлением системы" },
  { value: "До 80%", label: "рутинных операций выполняется автоматически без участия оператора" },
  { value: "до 10%", label: "оптимизация порожнего пробега" },
];

const processSteps = [
  {
    num: "01",
    title: "Получение заявки",
    desc: "Клиент создаёт заявку через единый интерфейс или менеджер вносит её самостоятельно.",
  },
  {
    num: "02",
    title: "Подбор вагона",
    desc: "ИИ автоматически подбирает оптимальный вагон под маршрут.",
  },
  {
    num: "03",
    title: "Аналитика",
    desc: "Мониторинг в реальном времени на каждом этапе перевозки.",
  },
  {
    num: "04",
    title: "Закрытие отчётного периода",
    desc: "Автоматическая генерация актов, отчётов и финансовых документов.",
  },
];

const features = [
  {
    title: "Высокий уровень автоматизации",
    desc: "До 80% рутинных операций выполняется автоматически — без участия оператора.",
  },
  {
    title: "Единое окно ввода информации",
    desc: "Данные вводятся один раз — система сама распределяет их по всем процессам.",
  },
  {
    title: "Адаптивность под бизнес-процессы",
    desc: "Гибкая настройка под любую модель работы оператора — без кастомного кода.",
  },
];

const beforeAfter = [
  {
    before: "Коммуникации через почту и мессенджеры",
    after: "Единое окно — все заявки в одном месте",
  },
  {
    before: "Ручное ведение таблиц и Excel-файлов",
    after: "Автоматический расчёт, отчёты и документы",
  },
  {
    before: "Долгое согласование между отделами",
    after: "До 80% операций выполняется автоматически",
  },
  {
    before: "Ошибки и дублирование при вводе данных",
    after: "Один ввод — данные распределяются сами",
  },
  {
    before: "Нет единой картины по состоянию парка",
    after: "Дислокация и аналитика в реальном времени",
  },
];

const tabData = [
  {
    id: "requests",
    label: "Управление заявками",
    heading: "Управляйте заявками в своей компании эффективно!",
    items: [
      "Контроль статуса каждой заявки",
      "Автоматическое формирование план/факта",
      "Контроль вагонов и их связь с заявками",
      "Автоматическая рассылка для клиентов",
    ],
  },
  {
    id: "planning",
    label: "Планирование перевозок с ИИ",
    heading: "Интеллектуальное планирование маршрутов",
    items: [
      "AI-подбор оптимального вагона под маршрут",
      "Учёт порожнего пробега и загрузки",
      "Прогнозирование времени доставки",
      "Автоматическая оптимизация парка",
    ],
  },
  {
    id: "analytics",
    label: "Аналитика в реальном времени",
    heading: "Полная картина перевозки на каждом этапе",
    items: [
      "Мониторинг дислокации вагонов",
      "Статусы перевозок в реальном времени",
      "Отклонения от плана с уведомлениями",
      "Дашборды и отчёты по KPI",
    ],
  },
  {
    id: "communication",
    label: "Взаимодействие и коммуникации",
    heading: "Единое пространство для всех участников",
    items: [
      "Внутренний чат между отделами",
      "Автоматические уведомления клиентам",
      "История переписки по каждой заявке",
      "Интеграция с внешними системами",
    ],
  },
  {
    id: "closing",
    label: "Закрытие отчётного периода",
    heading: "Автоматическое формирование документов",
    items: [
      "Генерация актов и отчётов",
      "Финансовые документы по перевозкам",
      "Сверка с контрагентами",
      "Экспорт в 1С и другие системы",
    ],
  },
  {
    id: "fleet",
    label: "Управление вагонным парком",
    heading: "Единый реестр вагонов, контейнеров и локомотивов",
    items: [
      "Полная история движения и ремонтов",
      "Контроль технического состояния",
      "Учёт собственности и аренды",
      "Планирование ТО и ремонта",
    ],
  },
];

const faqs = [
  {
    q: "Как подключиться к системе?",
    a: [
      "Мы интегрируемся с вашим сервисом дислокации, и предоставляем доступ к системе. Процесс занимает от 1 до 2 недель в зависимости от объёма данных.",
    ],
  },
  {
    q: "У меня уже есть учётные системы для управления вагонным парком, как я могу работать с вами?",
    a: [
      "Мы поддерживаем интеграцию с существующими учётными системами через API. Наши специалисты проанализируют вашу текущую инфраструктуру и предложат оптимальный вариант интеграции.",
    ],
  },
  {
    q: "Сколько это будет стоить?",
    a: [
      "Стоимость зависит от размера парка, количества пользователей и требуемых модулей. Мы подготовим индивидуальное коммерческое предложение после демонстрации — оставьте заявку через форму на этой странице.",
    ],
  },
  {
    q: "Я беспокоюсь о сохранности данных, что вы можете мне предложить?",
    a: [
      "Данные хранятся на защищённых серверах с шифрованием. Мы предоставляем разграничение доступа по ролям, журнал действий пользователей и резервное копирование. При необходимости возможна on-premise развёртка.",
    ],
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a2f52] pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2f52] via-[#1a2f52] to-[#0f1e38]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[14px] font-medium uppercase tracking-wider text-[#5b8def]">
            Управление вагонным парком
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white font-display">
            MultiCode ОС
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
            Платформа для управления вагонным парком. Комплексное решение для автоматизации
            деятельности операторов железнодорожного транспорта.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={DEMO_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1a2f52] transition-transform hover:-translate-y-0.5"
            >
              Запросить Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://login.multicode.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <LogIn className="h-4 w-4" />
              Войти в систему
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative mx-auto mt-24 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid gap-8 md:grid-cols-3"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={slideIn}
            className="border-t-2 border-[#3b6bc4]/20 pt-6"
          >
            <p className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-foreground font-display">
              {s.value}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/55">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="max-w-2xl"
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
          Система полностью закрывает весь операционный цикл
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/55">
          От первой заявки до закрытия отчётного периода — всё в одном месте без переключений.
        </p>
      </motion.div>
      <div className="mt-12">
        {processSteps.map((step, i) => (
          <motion.div
            key={step.num}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className={i === 0 ? "" : "border-t border-foreground/10"}
          >
            <div className="grid grid-cols-[auto_1fr] gap-6 py-8 md:grid-cols-[120px_1fr] md:gap-12">
              <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-none text-foreground/15 font-display">
                {step.num}
              </span>
              <div>
                <h3 className="text-[20px] font-semibold tracking-tight font-display">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/55">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="max-w-2xl"
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
          Ключевые возможности
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3b6bc4]/10 text-[#3b6bc4]">
              <Check className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="mt-5 text-[20px] font-semibold tracking-tight font-display">
              {f.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/55">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="max-w-2xl"
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
          До и после внедрения
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/55">
          Как меняется работа оператора при переходе на MultiCode ОС.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04]"
      >
        <div className="grid grid-cols-2 border-b border-foreground/10 bg-foreground/[0.02] px-4 py-3 text-[12px] font-semibold uppercase tracking-wider sm:px-6 sm:py-4 sm:text-[13px]">
          <span className="text-foreground/40">До</span>
          <span className="text-[#3b6bc4]">После</span>
        </div>
        {beforeAfter.map((row, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className={i === 0 ? "" : "border-t border-foreground/10"}
          >
            <div className="grid grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
              <div className="flex items-start gap-2 sm:gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/20" />
                <p className="text-[13px] leading-relaxed text-foreground/45 sm:text-[15px]">
                  {row.before}
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3b6bc4]" strokeWidth={2.5} />
                <p className="text-[13px] leading-relaxed text-foreground/80 sm:text-[15px]">
                  {row.after}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function TabsSection() {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-6xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="max-w-2xl"
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
          Функциональные модули
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/55">
          Каждый модуль работает самостоятельно и в единой экосистеме системы.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10"
      >
        <Tabs defaultValue="requests">
          <TabsList className="flex h-auto flex-wrap gap-1 rounded-2xl bg-muted p-2">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-xl px-3 py-2 text-[13px] sm:px-4 sm:text-[14px] data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-[22px] font-semibold tracking-tight font-display">
                    {tab.heading}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {tab.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-foreground/70"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#3b6bc4]/10">
                          <Check className="h-3.5 w-3.5 text-[#3b6bc4]" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex min-h-[200px] items-center justify-center rounded-2xl bg-foreground/[0.03] ring-1 ring-foreground/5 sm:min-h-[300px]">
                  <p className="text-[13px] font-medium uppercase tracking-wider text-foreground/30">
                    app.multicode.tech
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 max-w-3xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
      >
        <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display">
          Частые вопросы
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-8"
      >
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
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
    </section>
  );
}

function OCPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <ProductNav />
      <Hero />
      <main className="relative pb-24">
        <StatsSection />
        <ProcessSection />
        <FeaturesSection />
        <BeforeAfterSection />
        <TabsSection />
        <FAQSection />
        <ProductCTA
          heading="Готовы автоматизировать управление вашим парком?"
          description="Покажем систему в действии, ответим на все вопросы и рассчитаем стоимость под ваш парк."
        />
      </main>
      <ProductFooter />
    </div>
  );
}
