"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <motion.a
          href="#"
          className="font-serif text-xl font-semibold tracking-tight text-[#3a4a44] md:text-2xl"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          LOGO
        </motion.a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.05 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={link.href}
                className="text-sm font-medium text-[#3a4a44]/90 transition-colors hover:text-[#3a4a44]"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex rounded-full border border-white/50 bg-[rgba(255,255,255,0.3)] px-6 py-2.5 text-sm font-medium text-[#3a4a44] shadow-sm backdrop-blur-[10px] transition hover:bg-[rgba(255,255,255,0.45)]"
          >
            Get in touch
          </a>
        </motion.div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[rgba(255,255,255,0.3)] text-[#3a4a44] backdrop-blur-[10px] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[4.5rem] z-40 flex flex-col items-center gap-8 bg-[#e2ece2]/95 px-6 pt-10 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-serif text-2xl text-[#3a4a44]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-2 inline-flex rounded-full border border-white/50 bg-[rgba(255,255,255,0.35)] px-8 py-3 text-sm font-semibold text-[#3a4a44] backdrop-blur-[10px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              onClick={() => setOpen(false)}
            >
              Get in touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
