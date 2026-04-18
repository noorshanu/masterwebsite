"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const easeLuxury = [0.22, 1, 0.36, 1] as const;

/** All frames mounted once (fixed src) — avoids decode flashes from swapping src on 2 images. */
const PANDA_FRAMES = Array.from(
  { length: 25 },
  (_, i) => `/panda/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`,
);

/** Plain letterbox behind frames (no fog / overlays). */
const FRAME_HOLD_CLASS = "bg-black";

/** Shared framing so crops stay stable frame-to-frame (object-cover + fixed anchor) */
const FRAME_IMG_CLASS =
  "pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_44%] [transform:translateZ(0)] [backface-visibility:hidden]";

/** Linear mix between frames — matches scrubbing video. */
function linearMix(t: number) {
  return Math.min(1, Math.max(0, t));
}

function PandaFrameLayer({
  index,
  frameProgress,
}: {
  index: number;
  frameProgress: MotionValue<number>;
}) {
  const max = PANDA_FRAMES.length - 1;
  const opacity = useTransform(frameProgress, (v) => {
    const c = Math.min(max, Math.max(0, v));
    const low = Math.floor(c);
    const high = Math.min(Math.ceil(c), max);
    if (high === low) {
      return index === low ? 1 : 0;
    }
    if (index === low) {
      return 1 - linearMix(c - low);
    }
    if (index === high) {
      return linearMix(c - low);
    }
    return 0;
  });

  return (
    <motion.img
      src={PANDA_FRAMES[index]}
      alt=""
      width={1200}
      height={960}
      loading="eager"
      decoding="async"
      fetchPriority={index === 0 ? "high" : index < 4 ? "high" : "low"}
      className={FRAME_IMG_CLASS}
      style={{ opacity, zIndex: index }}
    />
  );
}

function PandaScrollFrames({
  frameProgress,
  prefersReducedMotion,
}: {
  frameProgress: MotionValue<number>;
  prefersReducedMotion: boolean | null;
}) {
  const reduced = Boolean(prefersReducedMotion);

  useEffect(() => {
    if (reduced) return;
    PANDA_FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [reduced]);

  if (reduced) {
    return (
      <img
        src="/panda.png"
        alt=""
        className={`${FRAME_IMG_CLASS} z-[6]`}
        width={1200}
        height={960}
        decoding="async"
        fetchPriority="high"
      />
    );
  }

  return (
    <>
      {PANDA_FRAMES.map((_, index) => (
        <PandaFrameLayer
          key={PANDA_FRAMES[index]}
          index={index}
          frameProgress={frameProgress}
        />
      ))}
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.65,
      ease: easeLuxury,
    },
  }),
};

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const reduced = Boolean(prefersReducedMotion);
  const maxFrame = PANDA_FRAMES.length - 1;

  /** Linear in scroll progress = video-style scrub through the clip. */
  const frameTarget = useTransform(scrollYProgress, (p) => {
    const x = Math.min(1, Math.max(0, p));
    return x * maxFrame;
  });

  /** Tight spring: follows smoothed scroll closely, like a synced player. */
  const frameIndex = useSpring(frameTarget, {
    stiffness: reduced ? 4800 : 140,
    damping: reduced ? 100 : 44,
    mass: reduced ? 0.05 : 0.28,
    restDelta: 0.00008,
    restSpeed: 0.00008,
  });

  return (
    <section className="relative pb-6">
      <div
        ref={scrollRef}
        className="relative h-[320vh] md:h-[400vh] lg:h-[440vh]"
      >
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden pb-24 pt-4 md:pb-28 lg:pt-8">
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 xl:max-w-[90rem] xl:px-14">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.38fr)] lg:gap-10 xl:gap-14">
              <div className="max-w-xl lg:max-w-lg">
                <motion.h1
                  className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#3a4a44] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0}
                >
                  Experience the Art of Luxury.
                </motion.h1>
                <motion.p
                  className="mt-6 text-base leading-relaxed text-[#3a4a44]/85 sm:text-lg"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={1}
                >
                  Discover unparalleled elegance and sophistication with our
                  bespoke services.
                </motion.p>
                <motion.div
                  className="mt-10 flex flex-wrap items-center gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={2}
                >
                  <motion.a
                    href="#contact"
                    className="inline-flex rounded-full bg-[#3a4a44] px-8 py-3.5 text-sm font-semibold text-white shadow-md"
                    whileHover={{
                      scale: 1.015,
                      backgroundColor: "#5f7d52",
                      boxShadow:
                        "0 12px 28px -8px rgba(58, 74, 68, 0.45), 0 0 0 1px rgba(127, 160, 100, 0.35)",
                    }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.38, ease: easeLuxury }}
                  >
                    Get Started
                  </motion.a>
                  <motion.a
                    href="#why-choose-us"
                    className="inline-flex rounded-full border-2 border-[#3a4a44] bg-transparent px-8 py-3.5 text-sm font-semibold text-[#3a4a44]"
                    whileHover={{
                      scale: 1.015,
                      borderColor: "#7cb85c",
                      color: "#3d5234",
                      backgroundColor: "rgba(124, 184, 92, 0.12)",
                      boxShadow: "0 10px 24px -10px rgba(95, 125, 82, 0.35)",
                    }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.38, ease: easeLuxury }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
              </div>

              <div className="relative mx-auto w-[70%] max-w-full lg:justify-self-stretch lg:pl-2 xl:pl-8">
                <div
                  className={`relative w-full min-h-[min(40.6vh,364px)] overflow-hidden rounded-xl sm:min-h-[min(44.8vh,420px)] lg:min-h-[min(61.6vh,658px)] lg:max-w-none xl:min-h-[min(63vh,717px)] ${FRAME_HOLD_CLASS}`}
                  aria-hidden
                >
                  <PandaScrollFrames
                    frameProgress={frameIndex}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
