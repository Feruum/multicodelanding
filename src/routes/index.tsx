import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ChevronDown,
  TrendingUp,
  Star,
  Zap,
  Package,
  X,
  FileText,
  Folder,
  Globe,
  Check,
  Mail,
  Server,
  Type,
  Atom,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "invette.dev — Digital Products built to a Higher Standard" },
      {
        name: "description",
        content:
          "Strategy, UX research, and engineering — with Lighthouse 90+ written into every contract as an acceptance criterion.",
      },
      { property: "og:title", content: "invette.dev — Digital Products" },
      {
        property: "og:description",
        content: "Strategy, UX research, and engineering for E-Commerce, Startups, and B2B.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contract", href: "#faq" },
  ];
  return (
    <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur px-5 py-3 shadow-[0_4px_30px_rgba(15,30,60,0.06)] ring-1 ring-black/[0.04]">
        <a href="#top" className="text-[20px] font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="text-[#2f7fff]">in</span>
          <span className="text-foreground">vette.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-[15px] text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="rounded-xl bg-black px-5 py-2.5 text-[14px] font-medium text-white hover:bg-black/85 transition"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}

function HeroIcon() {
  return (
    <span className="inline-flex align-middle mx-3 h-[0.95em] w-[0.95em] items-center justify-center rounded-[22%] bg-gradient-to-br from-[#7fb6ff] to-[#2f7fff] shadow-[0_10px_25px_-8px_rgba(47,127,255,0.7)] ring-1 ring-white/40">
      <TrendingUp className="h-[55%] w-[55%] text-white" strokeWidth={3} />
    </span>
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
    <div className="rounded-3xl bg-gradient-to-b from-white to-[#e6efff] p-6 shadow-[0_10px_40px_-15px_rgba(47,127,255,0.25)] ring-1 ring-white/60">
      <div className="h-[260px] flex items-center justify-center">{children}</div>
      <h3 className="mt-2 text-[22px] font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-foreground/60">{description}</p>
    </div>
  );
}

function PlatformPill({ bg, label, color }: { bg: string; label: string; color: string }) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl text-[11px] font-bold shadow-md ring-1 ring-black/5"
      style={{ background: bg, color }}
    >
      {label}
    </div>
  );
}

function ECommerceArt() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="h-16 w-16 rounded-2xl bg-white shadow-md ring-1 ring-[#dce7ff] flex items-center justify-center">
        <span className="text-2xl font-bold"><span className="text-[#2f7fff]">in</span></span>
      </div>
      <svg className="my-2" width="160" height="40" viewBox="0 0 160 40" fill="none">
        <path d="M80 0 V12 M80 12 H20 V28 M80 12 H140 V28 M80 12 V28" stroke="#9bbcff" strokeDasharray="3 3" strokeWidth="1.5" />
      </svg>
      <div className="flex gap-5">
        <PlatformPill bg="#fff1ea" label="M" color="#f26322" />
        <PlatformPill bg="#e8fbe6" label="S" color="#5e8e3e" />
        <PlatformPill bg="#f1e8ff" label="woo" color="#7c4bcc" />
      </div>
    </div>
  );
}

function StartupArt() {
  const Row = ({ icon, name, size }: { icon: React.ReactNode; name: string; size: string }) => (
    <div className="flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur px-3 py-2 shadow-sm ring-1 ring-white">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef3ff] text-[#2f7fff]">{icon}</div>
      <div className="flex-1">
        <div className="text-[13px] font-medium">{name}</div>
        <div className="text-[11px] text-foreground/50">{size}</div>
      </div>
      <X className="h-4 w-4 text-foreground/30" />
    </div>
  );
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-x-6 top-0 space-y-2">
        <Row icon={<FileText className="h-4 w-4" />} name="Pitch Deck" size="24.32 MB" />
        <Row icon={<Folder className="h-4 w-4" />} name="Traction" size="8.16 MB" />
        <Row icon={<Globe className="h-4 w-4" />} name="Website" size="46.88 MB" />
      </div>
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2" width="180" height="90" viewBox="0 0 180 90" fill="none">
        <path d="M10 30 L90 10 L170 30 L170 80 L10 80 Z" fill="#f4f7fd" stroke="#d6e2f5" />
        <path d="M10 30 L90 50 L170 30" fill="#fafbfe" stroke="#d6e2f5" />
      </svg>
    </div>
  );
}

function B2BArt() {
  const Row = ({ title, sub, tag, tagColor }: { title: string; sub: string; tag: string; tagColor: string }) => (
    <div className="flex items-center gap-3 rounded-xl bg-white/80 backdrop-blur px-3 py-2.5 shadow-sm ring-1 ring-white">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef3ff]">
        <Zap className="h-4 w-4 text-[#2f7fff]" fill="#2f7fff" />
      </div>
      <div className="flex-1">
        <div className="text-[13px] font-semibold">{title}</div>
        <div className="text-[11px] text-foreground/50">{sub}</div>
      </div>
      <span className="rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ background: tagColor + "20", color: tagColor }}>{tag}</span>
    </div>
  );
  return (
    <div className="w-full space-y-2 px-3">
      <Row title="Value Clarity" sub="Communicated In Seconds" tag="Clear" tagColor="#2f9e6e" />
      <Row title="Trust Signal" sub="Secure And Reliable" tag="Strong" tagColor="#2f9e6e" />
      <Row title="Load Speed" sub="Page Loads In 1.2s" tag="Fast" tagColor="#2f9e6e" />
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-background">
      <Nav />

      <main className="relative pt-40 pb-24">
        {/* radial glow */}
        <div className="hero-glow pointer-events-none absolute inset-x-0 top-32 h-[700px]" />

        <section className="relative mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[14px] shadow-sm ring-1 ring-black/[0.04]">
            <span className="font-medium">5.0 Rating</span>
            <Star className="h-4 w-4 text-[#00b67a]" fill="#00b67a" />
            <span className="text-foreground/80">Trustpilot</span>
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Digital Products build to a
            <br />
            Higher<HeroIcon />Standard
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-foreground/55">
            Strategy, UX research, and engineering — with Lighthouse 90+ written into every contract as an acceptance criterion
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="#book"
              className="rounded-xl bg-gradient-to-b from-[#4f96ff] to-[#2f7fff] px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(47,127,255,0.6)] hover:opacity-95"
            >
              Book a strategy call
            </a>
            <a
              href="#work"
              className="rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-foreground shadow-sm ring-1 ring-black/[0.06] hover:bg-white/80"
            >
              See Our Work
            </a>
          </div>
        </section>

        <section id="work" className="relative mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <CardShell
            title="E-Commerce"
            description="Made to help online stores look trusted and easy to buy from. Clear design helps customers decide faster"
          >
            <ECommerceArt />
          </CardShell>
          <CardShell
            title="Pre-Speed Startup"
            description="Show your idea, product, and progress in a simple and clear way. Help investors understand your startup quickly"
          >
            <StartupArt />
          </CardShell>
          <CardShell
            title="B2B"
            description="Build trust with a clean and professional website. Make your business look reliable from the first visit"
          >
            <B2BArt />
          </CardShell>
        </section>

        <ServicesSection />
        <CEOSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
