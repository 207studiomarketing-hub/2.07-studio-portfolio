import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

type Section = { heading: string; body: React.ReactNode };

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}

export default function LegalPage({ eyebrow, title, updated, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="relative">
        {/* Hero */}
        <section className="relative border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>

            <p className="mt-10 text-[11px] uppercase tracking-[0.35em] text-white/50">
              {eyebrow}
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]"
            >
              {title}
            </motion.h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              {intro}
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-white/40">
              Last updated · {updated}
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="relative">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="md:col-span-4 lg:col-span-3">
              <div className="md:sticky md:top-28">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                  Contents
                </p>
                <ol className="space-y-2 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.heading}>
                      <a
                        href={`#section-${i + 1}`}
                        className="text-white/60 hover:text-white transition-colors flex gap-3"
                      >
                        <span className="text-white/30 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Content */}
            <article className="md:col-span-8 lg:col-span-9 space-y-14">
              {sections.map((s, i) => (
                <div key={s.heading} id={`section-${i + 1}`} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {s.heading}
                    </h2>
                  </div>
                  <div className="text-white/70 leading-relaxed space-y-4 text-[15px]">
                    {s.body}
                  </div>
                </div>
              ))}

              <div className="pt-10 border-t border-white/10">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to 2.07 Studio
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Footer strip */}
        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span>© {new Date().getFullYear()} 2.07 Studio — All rights reserved.</span>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
