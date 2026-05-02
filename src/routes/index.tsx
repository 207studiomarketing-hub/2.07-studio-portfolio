import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Megaphone, Palette, PenTool, ArrowUpRight, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import MagneticButton from "@/components/MagneticButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "2.07 Studio — Where Idea Takes Shape" },
      {
        name: "description",
        content:
          "2.07 Studio is a digital marketing & creative agency crafting brands, websites, and content that take shape.",
      },
      { property: "og:title", content: "2.07 Studio — Where Idea Takes Shape" },
      {
        property: "og:description",
        content:
          "Web & app development, digital marketing, branding, and content strategy — built with conviction.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const SERVICES = [
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "High-performance websites and applications engineered for speed, scale, and elegance.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    desc: "Strategy-led campaigns and search optimization that compound into measurable growth.",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    desc: "Identity systems and visual languages that make brands unmistakable.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    desc: "Editorial thinking, narrative, and content that earns attention and trust.",
  },
];

const PROJECTS = [
  {
    title: "Monolith — Brand Identity",
    tag: "Branding",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    span: "md:row-span-2",
  },
  {
    title: "Northwave — Web Platform",
    tag: "Development",
    img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Atlas Studios — Campaign",
    tag: "Marketing",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Vertex — Editorial",
    tag: "Content",
    img: "https://images.unsplash.com/photo-1542219550-37153d387c27?auto=format&fit=crop&w=1200&q=80",
    span: "md:row-span-2",
  },
  {
    title: "Form & Function",
    tag: "Branding",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
  {
    title: "Black Box — App",
    tag: "Development",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
    span: "",
  },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const words = ["WHERE", "IDEA", "TAKES", "SHAPE", "!!"];
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-grain min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60 mb-6 md:mb-10"
        >
          — Digital Marketing & Creative Studio
        </motion.p>

        <h1 className="font-black leading-[0.9] tracking-tight text-[14vw] md:text-[10vw] lg:text-[9rem] uppercase">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.18em] last:mr-0">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md text-white/70 text-base md:text-lg leading-relaxed">
            We design brands, build digital products, and grow audiences for ambitious companies that refuse to look like
            everyone else.
          </p>
          <MagneticButton href="#contact" className="self-start">
            <span className="inline-flex items-center gap-3 border border-white px-7 py-4 uppercase text-xs tracking-[0.3em] font-semibold hover:bg-white hover:text-black transition-colors">
              Start a project <ArrowUpRight className="w-4 h-4" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">01 — Services</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase max-w-3xl">
                What we do, <br className="hidden md:block" /> obsessively well.
              </h2>
            </div>
            <p className="max-w-sm text-white/60">
              Four disciplines, one team. Each project ships with the same attention to craft.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative bg-black p-8 md:p-10 h-full transition-all duration-500 hover:bg-white hover:text-black hover:scale-[1.02] hover:z-10">
                <s.icon className="w-10 h-10 mb-10 stroke-[1.5]" />
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-black/50 mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">{s.title}</h3>
                <p className="text-sm text-white/60 group-hover:text-black/70 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4">02 — Selected Work</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Work that ships.</h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[260px] md:auto-rows-[300px] gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href="#contact"
                className={"group relative block w-full h-full overflow-hidden bg-white/5 " + p.span}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  <span className="self-start text-[10px] uppercase tracking-[0.3em] border border-white/40 px-3 py-1">
                    {p.tag}
                  </span>
                  <div className="flex items-end justify-between gap-4 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight max-w-[70%]">{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <Reveal>
          <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-white/50">03 — About</p>
        </Reveal>
        <div className="md:col-span-9 space-y-8">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.05]">
              We're a small studio with one obsession: <span className="text-white/40">turning ideas into things people remember.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 text-white/70 max-w-3xl">
              <p>
                Founded on the belief that great work happens at the intersection of strategy and craft, 2.07 Studio
                partners with founders, marketers, and product teams to build brands and digital products that punch
                above their weight.
              </p>
              <p>
                No bloated decks. No filler. Just sharp thinking, clean execution, and a relentless focus on the details
                that move the needle.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-white/10 max-w-2xl">
              {[
                { n: "60+", l: "Projects shipped" },
                { n: "12", l: "Industries served" },
                { n: "100%", l: "In-house team" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-5xl font-black">{s.n}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/50">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-4 text-center">04 — Contact</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase text-center leading-[0.95] mb-6">
            Let's build <br /> something <span className="text-white/40">unforgettable.</span>
          </h2>
          <p className="text-center text-white/60 max-w-xl mx-auto mb-14">
            Tell us about your project. We reply within one business day.
          </p>
        </Reveal>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-black text-xl">2.07</span>
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">Studio</span>
        </div>
        <div className="flex items-center gap-6 text-white/60 text-sm">
          <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> hello@207.studio</span>
          <span className="hidden md:inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Worldwide</span>
        </div>
        <div className="flex items-center gap-4">
          {[Instagram, Twitter, Linkedin].map((Ic, i) => (
            <a key={i} href="#" aria-label="social" className="text-white/60 hover:text-white transition-colors">
              <Ic className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-6 text-[11px] uppercase tracking-[0.2em] text-white/30">
        © {new Date().getFullYear()} 2.07 Studio — All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
