import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
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

export const Route = createFileRoute("/ct")({
  head: () => ({
    meta: [
      { title: "Multicode СТ — Цифровизация станционных процессов" },
      {
        name: "description",
        content:
          "Система для цифровой трансформации железнодорожных станций и промышленных предприятий. Автоматизация технологических процессов, мониторинг в реальном времени и интеллектуальное управление движением.",
      },
      { property: "og:title", content: "Multicode СТ — Цифровизация станционных процессов" },
      {
        property: "og:description",
        content:
          "Система для цифровой трансформации железнодорожных станций. Автоматизация процессов, мониторинг в реальном времени, AI-управление движением.",
      },
    ],
  }),
  component: CTPage,
});

const stats = [
  {
    value: "50–70%",
    label: "сокращение простоев вагонов благодаря автоматическому планированию движения",
  },
  {
    value: "100%",
    label: "цифровой охват станционных операций — от прибытия до отправления состава",
  },
  { value: "до 80%", label: "снижение ошибок персонала за счёт автоматизации ручных операций" },
];

const processSteps = [
  {
    num: "01",
    title: "Прибытие состава",
    desc: "Автоматическая регистрация прибытия, идентификация вагонов и формирование натурного листа.",
  },
  {
    num: "02",
    title: "Маневровая работа",
    desc: "Цифровое планирование маневров, управление локомотивами и контроль путевого развития.",
  },
  {
    num: "03",
    title: "Погрузка / выгрузка",
    desc: "Мониторинг грузовых операций, учёт норм простоя и контроль погрузочных ресурсов.",
  },
  {
    num: "04",
    title: "Отправление и отчётность",
    desc: "Автоматическое формирование перевозочных документов и закрытие смены.",
  },
];

const features = [
  {
    title: "100% цифровой охват процессов",
    desc: "Все станционные операции — от приёма до отправления — ведутся в единой цифровой среде.",
  },
  {
    title: "Мониторинг в реальном времени",
    desc: "Актуальная картина движения на станции: позиция каждого вагона, занятость путей, загрузка локомотивов.",
  },
  {
    title: "AI-оптимизация расписания",
    desc: "Интеллектуальные алгоритмы формируют оптимальный план работы станции, сокращая простои.",
  },
];

const beforeAfter = [
  {
    before: "Бумажные натурные листы и ручной ввод",
    after: "Автоматическое формирование цифровых документов",
  },
  {
    before: "Диспетчер не видит картину в реальном времени",
    after: "Единый экран — все вагоны, пути и локомотивы",
  },
  {
    before: "Ошибки персонала при управлении маневрами",
    after: "Цифровые задания снижают ошибки до 80%",
  },
  {
    before: "Долгое согласование с внешними системами",
    after: "EDI-интеграция ускоряет обмен документами",
  },
  {
    before: "Нет аналитики по простоям и расходам",
    after: "Автоматические отчёты по смене и за период",
  },
];

const tabData = [
  {
    id: "trains",
    label: "Операции с поездами",
    subheading: "Автоматизация и сквозной учет",
    description:
      "Этот модуль переводит регистрацию составов из ручного ввода в автоматизированный режим, исключая ошибки в документации.",
    items: [
      {
        title: "Автоматизация ТГНЛ",
        desc: "Загрузка первичных данных КТЖ и формирование расширенных натурных листов с интеграцией внешних API",
      },
      {
        title: "Интеллектуальная нумерация",
        desc: "Автоматическое присвоение номеров поездов по прибытию и отправлению, например 7130-001-0031",
      },
      {
        title: "Валидация данных",
        desc: "Проверка НЛП на соответствие весовым нормам и технологическим ограничениям",
      },
    ],
  },
  {
    id: "dislocation",
    label: "Управление дислокацией",
    subheading: "Путевое развитие в реальном времени",
    description:
      "Контроль занятости путей, позиций вагонов и локомотивов на станции в едином цифровом пространстве.",
    items: [
      {
        title: "Графическая схема станции",
        desc: "Визуализация путевого развития с актуальным положением каждого вагона",
      },
      {
        title: "Контроль занятости путей",
        desc: "Автоматический расчёт свободных и занятых путей с уведомлениями",
      },
      {
        title: "История перемещений",
        desc: "Полный журнал маневровых операций с временными метками",
      },
    ],
  },
  {
    id: "wagon-service",
    label: "Вагонная служба",
    subheading: "Учёт технического состояния",
    description:
      "Контроль технического состояния вагонов, планирование ремонтов и учёт неисправностей.",
    items: [
      {
        title: "Учёт неисправностей",
        desc: "Регистрация и отслеживание технических замечаний по каждому вагону",
      },
      {
        title: "Планирование ТО",
        desc: "Автоматическое формирование графика технического обслуживания",
      },
      {
        title: "Контроль сроков",
        desc: "Уведомления о приближении сроков планового ремонта и освидетельствования",
      },
    ],
  },
  {
    id: "downtime",
    label: "Аналитика простоев",
    subheading: "Контроль и оптимизация",
    description:
      "Автоматический учёт простоев вагонов на станции с детализацией по причинам и операциям.",
    items: [
      {
        title: "Учёт норм простоя",
        desc: "Сравнение фактического времени простоя с нормативами по каждой операции",
      },
      {
        title: "Причины простоев",
        desc: "Классификация и анализ причин задержек с детальными отчётами",
      },
      {
        title: "KPI станции",
        desc: "Ключевые показатели эффективности в реальном времени и за период",
      },
    ],
  },
  {
    id: "gid",
    label: "ГИД и Ретроспектива",
    subheading: "График исполненного движения",
    description:
      "Визуализация исполненного графика движения поездов с возможностью ретроспективного анализа.",
    items: [
      {
        title: "Исполненный график",
        desc: "Графическое представление фактического движения поездов по времени",
      },
      {
        title: "Сравнение план/факт",
        desc: "Наложение планового графика на исполненный для анализа отклонений",
      },
      {
        title: "Архив данных",
        desc: "Хранение истории движения с возможностью поиска и фильтрации",
      },
    ],
  },
];

const faqs = [
  {
    q: "Как быстро можно внедрить систему?",
    a: [
      "Стандартный срок внедрения Multicode СТ составляет 2–3 месяца. Это включает интеграцию с вашей инфраструктурой, настройку под технологический процесс станции и обучение персонала.",
    ],
  },
  {
    q: "Работает ли система с существующими учётными системами?",
    a: [
      "Да, мы поддерживаем интеграцию с большинством распространённых учётных систем через API и EDI-протоколы. Наши специалисты проведут анализ совместимости и предложат оптимальный вариант интеграции.",
    ],
  },
  {
    q: "Можно ли работать без подключения к интернету?",
    a: [
      "Система поддерживает локальный режим работы с последующей синхронизацией при появлении связи. Критические операции доступны офлайн, а данные автоматически выгружаются на сервер при восстановлении подключения.",
    ],
  },
  {
    q: "Сколько это стоит?",
    a: [
      "Стоимость зависит от количества станций, объёма операций и требуемых модулей. Мы подготовим индивидуальное коммерческое предложение после демонстрации — оставьте заявку через форму на этой странице.",
    ],
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#15263d] pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#15263d] via-[#15263d] to-[#0a1828]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[14px] font-medium uppercase tracking-wider text-[#4a8fbf]">
            Цифровизация станционных процессов
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white font-display">
            Multicode СТ
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/70">
            Система для цифровой трансформации железнодорожных станций и промышленных предприятий.
            Автоматизация технологических процессов, мониторинг в реальном времени и
            интеллектуальное управление движением.
          </p>
          <div className="mt-8">
            <a
              href={DEMO_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#15263d] transition-transform hover:-translate-y-0.5"
            >
              Запросить Demo
              <ArrowRight className="h-4 w-4" />
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
            className="border-t-2 border-[#4a8fbf]/20 pt-6"
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
          Система полностью закрывает весь операционный цикл станции
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-foreground/55">
          От прибытия состава до отправления и закрытия смены — всё в одном цифровом пространстве.
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
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4a8fbf]/10 text-[#4a8fbf]">
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
          Как меняется работа станции при переходе на Multicode СТ.
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
          <span className="text-[#4a8fbf]">После</span>
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
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4a8fbf]" strokeWidth={2.5} />
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
          Каждый модуль покрывает отдельный технологический процесс станции.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10"
      >
        <Tabs defaultValue="trains">
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
                  <p className="text-[13px] font-semibold uppercase tracking-wider text-[#4a8fbf]">
                    {tab.subheading}
                  </p>
                  <h3 className="mt-3 text-[24px] font-semibold tracking-tight font-display">
                    {tab.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">
                    {tab.description}
                  </p>
                  <div className="mt-6 space-y-5">
                    {tab.items.map((item) => (
                      <div key={item.title} className="border-l-2 border-[#4a8fbf]/20 pl-4">
                        <p className="text-[15px] font-semibold text-foreground/80">{item.title}</p>
                        <p className="mt-1 text-[14px] leading-relaxed text-foreground/50">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
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

function CTPage() {
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
          heading="Готовы к цифровой трансформации станции?"
          description="Покажем систему в действии, ответим на все вопросы и подготовим коммерческое предложение."
        />
      </main>
      <ProductFooter />
    </div>
  );
}
