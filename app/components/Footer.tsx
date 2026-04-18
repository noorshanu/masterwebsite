import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-[#3a4a44]/12 bg-[linear-gradient(180deg,#deeadf_0%,#d5e3d5_100%)] px-6 py-12 text-[#3a4a44]/85"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight text-[#3a4a44]">
            LOGO
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3a4a44]/80">
            We craft premium websites, dashboards, eCommerce platforms, and
            store management apps with high-end UX and reliable engineering.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f7d52]">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="transition-colors hover:text-[#3a4a44]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-[#3a4a44]"
                href="#why-choose-us"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-[#3a4a44]" href="#reviews">
                Client Reviews
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5f7d52]">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-sm text-[#3a4a44]/80">
            <p>hello@premiumstudio.com</p>
            <p>+1 (000) 000-0000</p>
            <p>Global remote delivery</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#3a4a44]/12 pt-5 text-xs text-[#3a4a44]/65 lg:px-10">
        <p>2026 Premium Studio. Crafted for ambitious brands.</p>
      </div>
    </footer>
  );
};

export default Footer;