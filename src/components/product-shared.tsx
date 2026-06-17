import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const DEMO_FORM_URL =
  "https://forms.clickup.com/9007017493/f/8cdrbgn-1452/Q8UT8QHW0UAF6X3WM7";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
export const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function ProductNav() {
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[min(1100px,calc(100%-2rem))] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl bg-white/95 px-5 py-3 shadow-[0_4px_30px_rgba(15,30,60,0.06)] ring-1 ring-black/[0.04] backdrop-blur">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Multicode" className="h-6 w-auto brightness-0" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            className="hidden text-[15px] text-foreground/60 transition-colors hover:text-foreground sm:inline"
          >
            ← На главную
          </Link>
          <a
            href={DEMO_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#3b6bc4] px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#2d5cb8]"
          >
            Запросить Demo
          </a>
        </div>
      </nav>
    </header>
  );
}

export function ProductFooter() {
  return (
    <footer className="mt-16 border-t border-black/[0.06] bg-background md:mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Multicode" className="h-5 w-auto brightness-0" />
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed text-foreground/50">
              IT-решения для железнодорожной индустрии
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-foreground/40">
              Навигация
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-foreground/60">
              <li>
                <Link to="/" className="hover:text-foreground">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/oc" className="hover:text-foreground">
                  MultiCode ОС
                </Link>
              </li>
              <li>
                <Link to="/ct" className="hover:text-foreground">
                  Multicode СТ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-foreground/40">
              Контакты
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-foreground/60">
              <li>
                <a href="mailto:info@multicode.tech" className="hover:text-foreground">
                  info@multicode.tech
                </a>
              </li>
              <li>Астана, ул. Кунаева 10</li>
              <li>БЦ «Эмеральд»</li>
              <li>
                <a href="tel:+77009710760" className="hover:text-foreground">
                  +7 (700) 971 07 60
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-foreground/40">
              Документы
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-foreground/60">
              <li>Публичная оферта</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-black/[0.06] pt-6">
          <p className="text-[13px] text-foreground/50">
            © 2026 ТОО «MultiCode». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

type CTAProps = {
  heading: string;
  description: string;
  buttonLabel?: string;
};

export function ProductCTA({ heading, description, buttonLabel = "Заказать демо →" }: CTAProps) {
  return (
    <section className="relative mx-auto mt-20 max-w-6xl px-6 md:mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[#3b6bc4] px-6 py-12 md:px-8 md:py-20"
      >
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white font-display">
            {heading}
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/75">{description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={DEMO_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#3b6bc4] shadow-[0_10px_30px_-10px_rgba(10,21,48,0.3)] transition-transform hover:-translate-y-0.5"
            >
              {buttonLabel}
            </a>
            <a
              href="mailto:info@multicode.tech"
              className="text-[15px] font-medium text-white/80 transition hover:text-white"
            >
              или напишите нам: info@multicode.tech
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
