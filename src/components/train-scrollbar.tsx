import { useEffect, useRef, useState, useCallback } from "react";
import trainImg from "@/assets/train-another-transparent.png";
import railwayImg from "@/assets/railway-another-transparent.png";

const THUMB_WIDTH = 12; // Tailwind w-3 = 12px
const THUMB_HEIGHT = Math.round((1802 / 137) * THUMB_WIDTH); // full train aspect ratio
const GAP = 20; // top/bottom margin for the track

export function TrainScrollbar() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [inHero, setInHero] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const hero = document.getElementById("top");
    setScrollHeight(doc.scrollHeight);
    setClientHeight(window.innerHeight);
    setScrollTop(doc.scrollTop);
    setInHero(hero ? doc.scrollTop < hero.offsetTop + hero.offsetHeight : false);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const maxScroll = Math.max(1, scrollHeight - clientHeight);
  const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
  const trackLength = Math.max(1, clientHeight - GAP * 2 - THUMB_HEIGHT);
  const thumbTop = GAP + progress * trackLength;

  const handleTrackClick = (e: React.MouseEvent) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clickY = e.clientY - rect.top;
    const ratio = (clickY - THUMB_HEIGHT / 2) / trackLength;
    window.scrollTo({
      top: Math.max(0, Math.min(maxScroll, ratio * maxScroll)),
      behavior: "smooth",
    });
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = true;
    const startY = e.clientY;
    const startScroll = window.scrollY;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!draggingRef.current) return;
      const deltaY = ev.clientY - startY;
      const ratio = deltaY / trackLength;
      window.scrollTo({
        top: Math.max(0, Math.min(maxScroll, startScroll + ratio * maxScroll)),
      });
    };

    const handleMouseUp = () => {
      draggingRef.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleThumbTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    draggingRef.current = true;
    const startY = e.touches[0].clientY;
    const startScroll = window.scrollY;

    const handleTouchMove = (ev: TouchEvent) => {
      if (!draggingRef.current) return;
      const deltaY = ev.touches[0].clientY - startY;
      const ratio = deltaY / trackLength;
      window.scrollTo({
        top: Math.max(0, Math.min(maxScroll, startScroll + ratio * maxScroll)),
      });
    };

    const handleTouchEnd = () => {
      draggingRef.current = false;
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  // Hide on pages that are not scrollable or while inside the hero section
  if (scrollHeight <= clientHeight || inHero) return null;

  return (
    <div className="fixed inset-y-5 right-0 z-[100] flex w-3 flex-col">
      {/* Railway track */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-3 overflow-hidden rounded-full"
        style={{
          backgroundImage: `url(${railwayImg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      />

      {/* Clickable track */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="absolute inset-y-0 right-0 w-3 cursor-pointer rounded-full"
        aria-hidden="true"
      />

      {/* Train thumb */}
      <div
        className="absolute right-0 w-3 cursor-grab active:cursor-grabbing transition-transform duration-75 hover:scale-110"
        style={{ top: thumbTop, height: THUMB_HEIGHT }}
        onMouseDown={handleThumbMouseDown}
        onTouchStart={handleThumbTouchStart}
        aria-hidden="true"
      >
        <img
          src={trainImg}
          alt=""
          draggable={false}
          className="h-full w-full object-cover object-right-top drop-shadow-lg"
        />
      </div>
    </div>
  );
}
