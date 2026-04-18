"use client";

import { motion, useReducedMotion } from "framer-motion";

const easePremium = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    title: "Website Development",
    description:
      "High-converting brand websites with clean architecture, smooth motion, and fast performance.",
  },
  {
    title: "Dashboard Development",
    description:
      "Data-rich admin and analytics dashboards designed for clarity, speed, and confident decisions.",
  },
  {
    title: "eCommerce Development",
    description:
      "Premium storefront experiences optimized for trust, conversion, and seamless checkout journeys.",
  },
  {
    title: "Store Management App",
    description:
      "Modern management apps for inventory, operations, and team workflows with polished UX.",
  },
];

const reasons = [
  "Strategy-first approach aligned to business outcomes",
  "Premium UI craft with detail-oriented execution",
  "Reliable delivery with scalable engineering standards",
];

const reviews = [
  {
    name: "Sarah Collins",
    role: "Founder, Atelier House",
    quote:
      "They transformed our online presence into a premium digital experience that reflects our brand perfectly.",
  },
  {
    name: "David Nguyen",
    role: "Operations Lead, Nova Retail",
    quote:
      "From dashboard architecture to final interactions, every part felt thoughtful, smooth, and enterprise ready.",
  },
  {
    name: "Emma Walker",
    role: "Director, Cedar Commerce",
    quote:
      "The eCommerce build and store app gave us a huge leap in performance, design quality, and team productivity.",
  },
];

const sectionTitle = "font-serif text-3xl font-semibold tracking-tight text-[#3a4a44] sm:text-4xl";

const imagePlaceholder =
  "relative overflow-hidden rounded-[1.75rem] border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(208,225,207,0.65))] p-6 shadow-[0_20px_50px_-20px_rgba(58,74,68,0.35)] backdrop-blur-[8px]";

export default function PremiumSections() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-7xl space-y-24 px-6 pb-20 pt-12 md:space-y-28 lg:px-10">
      <section id="services" className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: easePremium }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5f7d52]">
            Services
          </p>
          <h2 className={`${sectionTitle} mt-3 max-w-3xl`}>
            Premium digital products built to scale and impress.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group rounded-[1.75rem] border border-white/60 bg-[rgba(255,255,255,0.36)] p-7 shadow-[0_20px_45px_-20px_rgba(58,74,68,0.35)] backdrop-blur-[10px]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.62,
                delay: index * 0.08,
                ease: easePremium,
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -8,
                      scale: 1.01,
                      boxShadow: "0 24px 56px -18px rgba(58,74,68,0.42)",
                    }
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f7d52]">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-[#3a4a44]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#3a4a44]/80 sm:text-base">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="why-choose-us" className="grid gap-7 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: easePremium }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5f7d52]">
            Why Choose Us
          </p>
          <h2 className={`${sectionTitle} mt-3`}>
            Design excellence with serious technical execution.
          </h2>
          <ul className="mt-7 space-y-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="rounded-2xl border border-white/55 bg-white/35 px-5 py-4 text-sm text-[#3a4a44]/85 backdrop-blur-[8px] sm:text-base"
              >
                {reason}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className={imagePlaceholder}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: easePremium }}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -6, scale: 1.01, transition: { duration: 0.45 } }
          }
        >
          <div className="flex min-h-[280px] items-center justify-center rounded-[1.15rem] border border-dashed border-[#5f7d52]/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(222,235,221,0.7))] text-center">
            <p className="px-6 font-serif text-2xl text-[#3a4a44]/75">
              Image Placeholder
            </p>
          </div>
        </motion.div>
      </section>

      <section id="cta">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,rgba(58,74,68,0.96),rgba(95,125,82,0.95))] px-8 py-12 shadow-[0_28px_70px_-26px_rgba(58,74,68,0.65)] sm:px-12 md:py-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: easePremium }}
        >
          <div className="pointer-events-none absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7e5d5]">
                Ready to launch
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Build a premium product your audience remembers.
              </h2>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex w-fit rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#3a4a44]"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      boxShadow: "0 14px 40px -16px rgba(255,255,255,0.75)",
                    }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.35, ease: easePremium }}
            >
              Book a Discovery Call
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section id="reviews" className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.62, ease: easePremium }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5f7d52]">
            Client Reviews
          </p>
          <h2 className={`${sectionTitle} mt-3 max-w-2xl`}>
            Trusted by teams who care deeply about quality.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              className="rounded-[1.5rem] border border-white/60 bg-[rgba(255,255,255,0.36)] p-6 shadow-[0_20px_45px_-24px_rgba(58,74,68,0.4)] backdrop-blur-[10px]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.58,
                delay: index * 0.09,
                ease: easePremium,
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.32 } }
              }
            >
              <p className="text-sm leading-relaxed text-[#3a4a44]/85">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-6 font-semibold text-[#3a4a44]">{review.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-[#5f7d52]">
                {review.role}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
