import { useEffect, useState } from "react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 glass border-b transition-colors " +
        (scrolled ? "border-white/10" : "border-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-black text-xl md:text-2xl tracking-tight">2.07</span>
          <span className="font-light text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">
            Studio
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={"block h-px w-6 bg-white transition-transform " + (open ? "translate-y-[7px] rotate-45" : "")}
          />
          <span className={"block h-px w-6 bg-white transition-opacity " + (open ? "opacity-0" : "")} />
          <span
            className={"block h-px w-6 bg-white transition-transform " + (open ? "-translate-y-[7px] -rotate-45" : "")}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 glass">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-white/80 hover:text-white py-1"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}