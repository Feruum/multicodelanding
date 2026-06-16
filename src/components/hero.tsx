import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero.mp4";

declare module "*.mp4" {
  const src: string;
  export default src;
}

const serif = "font-serif-hero";

/* ---------- Full-screen railway video with fade loop ---------- */
function FadingLoopVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef(0);
  const fadingRef = useRef(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const FADE = 0.5;
    v.style.opacity = "0";
    v.muted = true;
    v.playsInline = true;

    const tick = () => {
      const dur = v.duration;
      const t = v.currentTime;
      if (dur && isFinite(dur)) {
        let opacity = 1;
        if (t < FADE) opacity = t / FADE;
        else if (t > dur - FADE) opacity = Math.max(0, (dur - t) / FADE);
        if (!fadingRef.current) v.style.opacity = String(opacity);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnded = () => {
      fadingRef.current = true;
      v.style.opacity = "0";
      setTimeout(() => {
        try {
          v.currentTime = 0;
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } catch {}
        fadingRef.current = false;
      }, 100);
    };

    const onLoaded = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };

    v.addEventListener("ended", onEnded);
    v.addEventListener("loadedmetadata", onLoaded);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="h-full w-full object-cover transition-opacity duration-100"
        style={{ opacity: 0 }}
      />
    </div>
  );
}

/* ---------- Aethera-style hero (dark, centered, with our video) ---------- */
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <FadingLoopVideo />

      {/* subtle vignette / overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />

      {/* Center content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[13px] text-white/90 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          <span>Системы в работе</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`${serif} mx-auto mt-6 max-w-5xl text-5xl font-normal sm:text-6xl md:text-7xl lg:text-8xl`}
          style={{
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            textWrap: "balance",
          }}
        >
          IT-решения для{" "}
          <em
            className="not-italic"
            style={{ color: "rgba(255,255,255,0.62)", fontStyle: "italic" }}
          >
            железной дороги
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          style={{ textWrap: "balance" }}
        >
          Комплексная платформа автоматизации для ЖД-операторов. Управление
          вагонным парком, цифровизация станций, аналитика на базе ИИ.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-10 py-4 text-base font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Связаться
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.22em] text-white/60"
        >
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white drift" />
            с 2019
          </span>
          <span className="hidden sm:inline">/</span>
          <span className="hidden sm:inline">IT для железнодорожной отрасли</span>
        </motion.div>
      </div>
    </section>
  );
}
