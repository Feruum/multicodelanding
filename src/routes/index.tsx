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
import processDiscovery from "@/assets/process-discovery.jpg";
import processDesign from "@/assets/process-design.jpg";
import processBuild from "@/assets/process-build.jpg";
import processLaunch from "@/assets/process-launch.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

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

/* ---------- Animation helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function ServiceCard({
  title,
  description,
  art,
}: {
  title: string;
  description: string;
  art: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-3xl bg-white p-3 shadow-[0_10px_40px_-20px_rgba(15,30,60,0.15)] ring-1 ring-black/[0.04]"
    >
      <div className="relative h-[280px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#dbe8ff] to-[#eef4ff]">
        {art}
      </div>
      <div className="px-4 pt-5 pb-4">
        <h3
          className="text-[22px] font-semibold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[15px] text-foreground/55">{description}</p>
      </div>
    </motion.div>
  );
}

function EcomArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-6">
      <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] shadow ring-1 ring-black/5">
        <span className="font-semibold text-[#2f7fff]">141</span>{" "}
        <span className="text-foreground/60">Orders Today</span>
      </div>
      <div className="flex items-end gap-3">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-24 -rotate-6 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5"
        >
          <div className="h-20 rounded-md bg-gradient-to-br from-slate-700 to-slate-900" />
          <div className="mt-2 text-[9px] font-semibold">UFL Backpack</div>
          <div className="text-[8px] text-foreground/50">Lightweight</div>
          <div className="mt-1 text-[10px] font-bold">$200</div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="w-28 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5"
        >
          <div className="h-20 rounded-md bg-gradient-to-br from-[#a8c5ff] to-[#dce8ff]" />
          <div className="mt-2 text-[9px] font-semibold">Cloudstrike X1</div>
          <div className="text-[8px] text-foreground/50">All day comfort</div>
          <div className="mt-1 text-[10px] font-bold">$128</div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="w-24 rotate-6 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5"
        >
          <div className="h-20 rounded-md bg-gradient-to-br from-[#ffd9b8] to-[#ffe9d4]" />
          <div className="mt-2 text-[9px] font-semibold">Smart Headphone</div>
          <div className="text-[8px] text-foreground/50">Premium audio</div>
          <div className="mt-1 text-[10px] font-bold">$128</div>
        </motion.div>
      </div>
    </div>
  );
}

function SLAArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute top-5 left-6 rounded-full bg-white px-3 py-1 text-[11px] shadow ring-1 ring-black/5">
        <span className="font-semibold text-[#2f7fff]">99.9%</span>{" "}
        <span className="text-foreground/60">Uptime</span>
      </div>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] shadow ring-1 ring-black/5">
        <span className="font-semibold text-[#2f7fff]">24/7</span>{" "}
        <span className="text-foreground/60">Support</span>
      </div>
      <div className="absolute top-5 right-6 rounded-full bg-white px-3 py-1 text-[11px] shadow ring-1 ring-black/5">
        <span className="font-semibold text-[#2f7fff]">&lt;1</span>{" "}
        <span className="text-foreground/60">Response</span>
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative mt-6 flex h-32 w-44 items-center justify-center rounded-2xl bg-gradient-to-b from-white to-[#dde9ff] shadow-xl ring-1 ring-white"
      >
        <Mail className="absolute inset-0 m-auto h-20 w-20 text-[#a8c5ff]" strokeWidth={1.2} />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f96ff] to-[#2f7fff] shadow-lg">
          <Check className="h-7 w-7 text-white" strokeWidth={3} />
        </div>
      </motion.div>
    </div>
  );
}

function DevArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 280" fill="none" preserveAspectRatio="none">
        <path d="M70 80 L150 140 M150 140 L230 80 M150 140 L70 200 M150 140 L230 200" stroke="#b8cfff" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-8 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5"
      >
        <Atom className="h-6 w-6 text-[#61dafb]" />
      </motion.div>
      <div className="absolute bottom-8 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-400 to-green-700" />
      </div>
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        <span className="text-3xl font-bold text-[#2f7fff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>in</span>
      </div>
      <div className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-md">
        <span className="text-lg font-bold text-white">N</span>
      </div>
      <div className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3c873a] shadow-md">
        <span className="text-[10px] font-bold text-white">node</span>
      </div>
    </div>
  );
}

function DesignArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute top-4 right-6 rounded-md bg-white px-2 py-1 text-[10px] shadow ring-1 ring-black/5">
        <span className="font-semibold">Depth</span> <span className="text-foreground/50">5.0</span>
      </div>
      <div className="absolute top-12 left-1/2 rounded-md bg-[#ff3d8b] px-2 py-1 text-[10px] font-semibold text-white shadow">
        Web Design
      </div>
      <div className="flex items-center gap-2">
        <motion.div whileHover={{ scale: 1.1 }} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
          <Type className="h-7 w-7 text-foreground" />
        </motion.div>
        <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 shadow-lg" />
        <motion.div whileHover={{ scale: 1.1 }} className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
          <div className="h-7 w-7 rounded-full border-4 border-[#2f7fff]" />
        </motion.div>
      </div>
      <div className="absolute bottom-6 flex items-center gap-2">
        <div className="flex gap-1 rounded-full bg-white px-2 py-1 shadow ring-1 ring-black/5">
          {["#2f7fff", "#7c3aed", "#f59e0b", "#ef4444"].map((c) => (
            <div key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="rounded-full bg-[#2f7fff] px-3 py-1 text-[10px] font-semibold text-white shadow">UI/UX Design</div>
      </div>
    </div>
  );
}

function HostingArt() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 280" fill="none" preserveAspectRatio="none">
        <path d="M0 140 L100 140 M200 140 L300 140 M150 0 L150 80 M150 200 L150 280" stroke="#b8cfff" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-white shadow-2xl ring-1 ring-black/5"
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="zapGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7fb6ff" />
              <stop offset="100%" stopColor="#2f7fff" />
            </linearGradient>
          </defs>
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="url(#zapGrad)" stroke="url(#zapGrad)" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative mx-auto mt-32 max-w-6xl px-6">
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
          Not a generic agency. A studio with a{" "}
          <span className="font-bold">contractual commitment</span> to performance.
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href="#book"
          className="self-start rounded-xl bg-gradient-to-b from-[#4f96ff] to-[#2f7fff] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(47,127,255,0.6)] hover:opacity-95"
        >
          Book a strategy call
        </motion.a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        <ServiceCard title="E-Commerce Systems" description="Keep files, briefs, and updates in one living workspace" art={<EcomArt />} />
        <ServiceCard title="Enterprise SLA" description="Keep files, briefs, and updates in one living workspace" art={<SLAArt />} />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="mt-5 grid gap-5 md:grid-cols-3"
      >
        <ServiceCard title="Custom Development" description="Tailored systems engineered around your workflow" art={<DevArt />} />
        <ServiceCard title="UI/UX Design" description="Keep files, briefs, and updates in one living workspace" art={<DesignArt />} />
        <ServiceCard title="Lightning Fast Hosting" description="Skip the fluff—get the most important takeaways from any video in seconds." art={<HostingArt />} />
      </motion.div>
    </section>
  );
}

function CEOSection() {
  const cards = [
    { n: "01", title: "Szymon is on the kickoff call. Always", desc: "Not introduced halfway through. From day one — understanding your business, your users, your constraints.", tag: "From day one" },
    { n: "02", title: "Every strategic decision goes through him.", desc: "Not introduced halfway through. From day one — understanding your business, your users, your constraints.", tag: "CEO sign-off required" },
    { n: "03", title: "His name is on the contract", desc: "CEO involvement is a written contractual condition. If it doesn't happen, the terms are breached.", tag: "Contractually binding" },
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
            CEO-led strategy. On every project.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[15px] leading-relaxed text-foreground/60">
            Most agencies delegate strategy to a project manager after the contract is signed. At Invette,{" "}
            <span className="font-semibold text-foreground">Szymon Til — founder and CEO — is personally involved in every project above 30,000 PLN.</span>{" "}
            Not as a figurehead. On the calls. Reviewing the work. Accountable.
          </motion.p>
        </div>
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-sm ring-1 ring-black/[0.05]">
          <span className="h-2 w-2 rounded-full bg-[#2f7fff]" />
          CEO involvement is a contractual condition - to a sales promise
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
            <div className="text-[18px] font-bold text-[#2f7fff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.n}</div>
            <h3 className="mt-3 text-[20px] font-semibold leading-tight tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/55">{c.desc}</p>
            <div className="my-5 h-px bg-foreground/10" />
            <div className="flex items-center gap-2 text-[13px]">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#2f7fff]">
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

function FAQSection() {
  const faqs = [
    { q: "How does the CEO-led model work in practice?", a: ["Szymon joins the kickoff call and stays accountable through delivery. Strategic decisions require his sign-off."] },
    { q: "What does Lighthouse 90+ contractually guranteed mean?", a: [
      "15 people — 8-9 senior designers, 3-4 developers, an AI engineer, a PM, and operations support. All work is done in-house with no outsourcing to third parties.",
      "Every designer on the team has worked on funded startups, so they understand the pace and expectations.",
      "We're structured to handle multiple projects simultaneously without spreading thin — you're not competing for attention with ten other clients.",
    ] },
    { q: "Which platforms do you specialise in?", a: ["Shopify, WooCommerce, Magento for e-commerce. Next.js, React, Node for custom builds."] },
    { q: "How do I start with invette.dev", a: ["Book a strategy call. We'll review your goals, then send a scoped proposal within 48 hours."] },
    { q: "What's included in the SLA package?", a: ["99.9% uptime guarantee, 24/7 monitoring, <1 hour response time on critical incidents."] },
  ];
  return (
    <section id="book" className="relative mt-32">
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
          Frequently Asked Questions
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-md text-center text-[15px] text-foreground/60">
          Trusted by next-gen startups and established enterprises.
        </motion.p>
        <motion.div variants={fadeUp} className="mx-auto mt-10 max-w-2xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white px-6 shadow-[0_4px_20px_-10px_rgba(15,30,60,0.1)] ring-1 ring-black/[0.03]"
              >
                <AccordionTrigger className="py-5 text-left text-[16px] font-semibold hover:no-underline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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

function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <a href="#top" className="text-[18px] font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="text-[#2f7fff]">in</span>
          <span className="text-foreground">vette.dev</span>
        </a>
        <ul className="flex items-center gap-6 text-[14px] text-foreground/60">
          <li><a href="#services" className="hover:text-foreground">Services</a></li>
          <li><a href="#work" className="hover:text-foreground">Work</a></li>
          <li><a href="#about" className="hover:text-foreground">About</a></li>
          <li><a href="#book" className="hover:text-foreground">Contract</a></li>
        </ul>
        <p className="text-[13px] text-foreground/50">© 2026 invette.dev — All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- Logo Marquee ---------- */
function LogoMarquee() {
  const logos = ["TechCrunch", "Forbes", "Wired", "Bloomberg", "Fast Company", "Inc.", "VentureBeat"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="relative mt-16 overflow-hidden"
    >
      <p className="mb-5 text-[12px] uppercase tracking-[0.2em] text-foreground/40">Trusted by teams at</p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-14 pr-14"
        >
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-[22px] font-semibold tracking-tight text-foreground/30"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {l}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ---------- Stats Section ---------- */
function StatsSection() {
  const stats = [
    { value: "120+", label: "Projects shipped" },
    { value: "98%", label: "Client retention" },
    { value: "1.2s", label: "Avg. load time" },
    { value: "90+", label: "Lighthouse score" },
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
            <div className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#2f7fff]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.value}
            </div>
            <div className="mt-1 text-[14px] text-foreground/60">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- Process Section ---------- */
function ProcessSection() {
  const steps = [
    { n: "01", title: "Discovery", desc: "Deep-dive into your business, users, and constraints. Output: written strategy doc.", img: processDiscovery },
    { n: "02", title: "Design Sprint", desc: "Wireframes, prototypes, and visual direction reviewed weekly with the CEO.", img: processDesign },
    { n: "03", title: "Build", desc: "In-house engineering with daily commits. You see progress in real time.", img: processBuild },
    { n: "04", title: "Launch & SLA", desc: "Performance-tested ship, then ongoing 99.9% uptime guarantee.", img: processLaunch },
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
        <motion.p variants={fadeUp} className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2f7fff]">
          Our Process
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A clear path from idea to launch.
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
            <div className="mb-5 -mx-6 -mt-6 aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#eef4ff] to-[#dbe8ff]">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4f96ff] to-[#2f7fff] text-[13px] font-bold text-white shadow-md">
              {s.n}
            </div>
            <h3 className="mt-5 text-[18px] font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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

/* ---------- Testimonials Section ---------- */
function TestimonialsSection() {
  const items = [
    { quote: "Invette didn't just build our store — they rebuilt our conversion funnel. Revenue is up 38% in 90 days.", name: "Marta Kowalski", role: "Founder, Lumio Skincare", avatar: avatar1 },
    { quote: "Szymon was on every call. That's almost unheard of. The strategy work alone paid for the engagement.", name: "Daniel Reyes", role: "CTO, NovaPay", avatar: avatar2 },
    { quote: "Lighthouse 90+ in the contract changed everything. No more debates about performance — it was just delivered.", name: "Priya Shah", role: "Head of Product, Halo", avatar: avatar3 },
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
          Loved by founders who ship.
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

/* ---------- Final CTA ---------- */
function CTASection() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#0b1a4a_0%,#1e3a8a_35%,#3b5fe2_70%,#7c5cff_100%)] px-8 py-20 text-center"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(ellipse at 20% 0%, rgba(124,92,255,0.55), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(56,189,248,0.45), transparent 55%)" }} />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="pointer-events-none absolute top-10 left-10 h-20 w-20 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="pointer-events-none absolute bottom-10 right-10 h-24 w-24 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur"
        />
        <h2
          className="relative text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Ready to build something that ships?
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/70">
          Book a 30-minute strategy call with Szymon. No pitch — just a clear assessment of what's possible.
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#book"
            className="rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0a1530] shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-0.5"
          >
            Book a strategy call
          </a>
          <a
            href="#services"
            className="rounded-xl bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
          >
            See services
          </a>
        </div>
      </motion.div>
    </section>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[14px] shadow-sm ring-1 ring-black/[0.04]"
          >
            <span className="font-medium">5.0 Rating</span>
            <Star className="h-4 w-4 text-[#00b67a]" fill="#00b67a" />
            <span className="text-foreground/80">Trustpilot</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Digital Products build to a
            <br />
            Higher<HeroIcon />Standard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-7 max-w-2xl text-[17px] leading-relaxed text-foreground/55"
          >
            Strategy, UX research, and engineering — with Lighthouse 90+ written into every contract as an acceptance criterion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <a
              href="#book"
              className="rounded-xl bg-gradient-to-b from-[#4f96ff] to-[#2f7fff] px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_25px_-8px_rgba(47,127,255,0.6)] hover:opacity-95 transition-transform hover:-translate-y-0.5"
            >
              Book a strategy call
            </a>
            <a
              href="#work"
              className="rounded-xl bg-white px-6 py-3 text-[15px] font-medium text-foreground shadow-sm ring-1 ring-black/[0.06] hover:bg-white/80 transition-transform hover:-translate-y-0.5"
            >
              See Our Work
            </a>
          </motion.div>

          <LogoMarquee />
        </section>

        <motion.section
          id="work"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-3"
        >
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
        </motion.section>

        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <CEOSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
