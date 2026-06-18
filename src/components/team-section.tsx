import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import anuarPhoto from "@/assets/team-anuar-new.jpg";
import zangirPhoto from "@/assets/team-zangir.jpg";
import almatPhoto from "@/assets/team-almat.jpg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ануар Сарсембинов",
    role: "Founder & CEO",
    bio: "Сооснователь Smart System Technologies. Выпускник Назарбаев Университета и Politecnico di Milano. Стратегия, партнёрства, развитие компании.",
    imageSrc: anuarPhoto,
  },
  {
    id: "2",
    name: "Зангир Икласов",
    role: "AI Research Advisor",
    bio: "PhD в машинном обучении (MBZUAI). Профессор AI, автор публикаций в NeurIPS и ACL. 172 цитирования, h-index 7. Исследования RL и LLM.",
    imageSrc: zangirPhoto,
  },
  {
    id: "3",
    name: "Алмат Шакенов",
    role: "AI/ML Engineer",
    bio: "Сооснователь. Production ML, компьютерное зрение, RAG-системы и LLM. Выпускник Назарбаев Университета.",
    imageSrc: almatPhoto,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TeamSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const isDraggingRef = React.useRef(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const dragStart = React.useRef({ x: 0, scrollLeft: 0 });
  const lastPointerX = React.useRef(0);
  const velocityRef = React.useRef(0);
  const momentumRef = React.useRef<number | null>(null);

  const cancelMomentum = React.useCallback(() => {
    if (momentumRef.current !== null) {
      cancelAnimationFrame(momentumRef.current);
      momentumRef.current = null;
    }
  }, []);

  const startMomentum = React.useCallback(
    (velocity: number) => {
      const container = scrollContainerRef.current;
      if (!container) return;
      let v = velocity;
      const friction = 0.93;
      const step = () => {
        if (isDraggingRef.current) {
          momentumRef.current = null;
          return;
        }
        v *= friction;
        container.scrollLeft += v;
        if (Math.abs(v) > 0.5) {
          momentumRef.current = requestAnimationFrame(step);
        } else {
          momentumRef.current = null;
        }
      };
      cancelMomentum();
      momentumRef.current = requestAnimationFrame(step);
    },
    [cancelMomentum],
  );

  React.useEffect(() => () => cancelMomentum(), [cancelMomentum]);

  const checkScrollability = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
      }
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const scroll = (direction: "left" | "right") => {
    cancelMomentum();
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const container = scrollContainerRef.current;
    if (!container || e.button !== 0) return;
    cancelMomentum();
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, scrollLeft: container.scrollLeft };
    lastPointerX.current = e.clientX;
    velocityRef.current = 0;
    container.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const delta = e.clientX - lastPointerX.current;
    velocityRef.current = velocityRef.current * 0.6 + delta * 0.4;
    container.scrollLeft = dragStart.current.scrollLeft - (e.clientX - dragStart.current.x);
    lastPointerX.current = e.clientX;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container && e.pointerId !== undefined && container.hasPointerCapture(e.pointerId)) {
      container.releasePointerCapture(e.pointerId);
    }
    if (Math.abs(velocityRef.current) > 1) {
      startMomentum(velocityRef.current * 1.4);
    }
  };

  return (
    <section id="team" className="relative mx-auto mt-20 max-w-6xl px-6 md:mt-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideIn}
        className="flex items-end justify-between gap-6"
      >
        <div>
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] font-display"
          >
            Наша команда
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-xl text-[15px] leading-relaxed text-foreground/60"
          >
            Инженеры и исследователи ИИ, создающие продукты на стыке машинного обучения и отраслевых
            задач.
          </motion.p>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Прокрутить влево"
            className={cn(
              "rounded-full bg-white p-2 text-foreground shadow-sm ring-1 ring-black/[0.05] transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30",
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Прокрутить вправо"
            className={cn(
              "rounded-full bg-white p-2 text-foreground shadow-sm ring-1 ring-black/[0.05] transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30",
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </motion.div>

      <div
        ref={scrollContainerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          "mt-10 flex snap-x snap-proximity gap-5 overflow-x-auto scrollbar-hide px-0",
          isDragging ? "cursor-grabbing select-none" : "cursor-grab",
        )}
      >
        {teamMembers.map((member) => (
          <div key={member.id} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
            <div
              className={cn(
                "group h-full overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-20px_rgba(15,30,60,0.12)] ring-1 ring-black/[0.04] transition-all duration-300 ease-in-out",
                isDragging
                  ? "pointer-events-none"
                  : "cursor-pointer hover:-translate-y-1 hover:shadow-[0_15px_50px_-20px_rgba(15,30,60,0.15)]",
              )}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#eef4ff]">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[18px] font-semibold tracking-tight font-display">
                  {member.name}
                </h3>
                <p className="mt-1 text-[14px] font-medium text-[#3b6bc4]">{member.role}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/55">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
