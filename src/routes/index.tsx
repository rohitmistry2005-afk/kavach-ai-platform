import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Brain,
  Clock,
  MapPin,
  Users,
  Sparkles,
  MessageSquareText,
  Mic,
  Network,
  Target,
  TrendingUp,
  FileText,
  CheckCircle2,
  PhoneCall,
  Database,
  Award,
  Radio,
} from "lucide-react";
import heroImg from "@/assets/kavach-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] font-sans text-[#475467] antialiased">
      <Navbar />
      <Hero />
      <InfoStrip />
      <Capabilities />
      <Footer />
    </div>
  );
}

function ShieldLogo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#C7AE7D] to-[#B88943] text-white shadow-md ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white fill-none stroke-current stroke-[2.2]" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "Features", "Solutions", "Why KAVACH AI", "Resources", "About Us", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-6 py-3.5"
        style={{
          background: scrolled ? "rgba(8, 16, 30, 0.92)" : "rgba(8, 16, 30, 0.08)",
          backdropFilter: scrolled ? "blur(28px)" : "blur(18px)",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "blur(18px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled ? "0 12px 40px rgba(0, 0, 0, 0.35)" : "none",
          transition: "all 480ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="flex items-center gap-3">
          <ShieldLogo />
          <div className="leading-tight">
            <div className="text-[15px] font-extrabold tracking-tight text-white">
              KAVACH <span className="text-[#C89A47]">AI</span>
            </div>
            <div className="text-[11px] font-medium text-white/70">Kolkata Police Intelligence Platform</div>
          </div>
        </div>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                  i === 0 ? "text-[#C89A47]" : "text-white hover:text-white/80"
                }`}
              >
                {link}
                {i === 0 && (
                  <span className="absolute inset-x-3.5 -bottom-1 h-[2.5px] rounded-full bg-[#C89A47]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/register"
            className="hidden items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20 md:inline-flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C89A47] text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            Kolkata Police
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C89A47] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#b08436] shadow-md shadow-[#C89A47]/20"
          >
            Login <ArrowRight className="h-4 w-4 text-white ml-0.5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0B1525]">
      {/* Background image & gradient scrim so full image is clearly visible */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Kolkata skyline with Howrah Bridge and Victoria Memorial"
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-center opacity-90"
        />
        {/* Left side text readability scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #08111D 0%, rgba(8, 17, 29, 0.92) 32%, rgba(11, 21, 37, 0.65) 55%, rgba(11, 21, 37, 0.2) 80%, transparent 100%)",
          }}
        />
        {/* Bottom smooth transition to page content */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#FAF8F4]/50 to-[#FAF8F4]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-32 pb-24 lg:pt-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C7AE7D]/40 bg-[#0B1525]/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D8C095] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#B88943]" />
            AI-POWERED. INTELLIGENCE DRIVEN.
          </div>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[70px]">
            Smarter Intelligence.
            <br />
            Safer <span className="text-[#C7AE7D]">Kolkata.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80">
            KAVACH AI empowers Kolkata Police with AI-driven insights, predictive
            analytics, and real-time intelligence to prevent crime, solve cases
            faster, and protect communities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#B88943] px-7 py-4 text-[15px] font-bold text-white transition hover:bg-[#A17331] shadow-lg shadow-[#B88943]/25"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 rounded-2xl border border-[#C7AE7D] bg-white/5 px-6 py-4 text-[15px] font-bold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C7AE7D] bg-white/10">
                <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
              </span>
              Watch Demo
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/90">
              <CheckCircle2 className="h-4 w-4 text-[#C7AE7D]" />
              Trusted by Kolkata Police
            </div>
            <div className="flex -space-x-2">
              {["#1e3a5f", "#2d5a3d", "#5c2018", "#9b4423", "#0c2340"].map((c, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1525] text-[10px] font-bold text-white shadow-sm"
                  style={{ background: c }}
                >
                  {["AR", "SK", "MP", "DB", "RC"][i]}
                </div>
              ))}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0B1525] bg-[#C7AE7D] text-[10px] font-bold text-[#0B1525]">
                +482
              </div>
            </div>
            <div className="text-xs">
              <div className="font-bold text-white">+482 Officers</div>
              <div className="text-white/60">Using KAVACH AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoStrip() {
  const items = [
    { icon: ShieldCheck, title: "Secure & Trusted", desc: "End-to-end encryption and data protection", tint: "#FAF8F4", color: "#B88943" },
    { icon: Brain, title: "AI-Powered", desc: "Advanced ML models and NLP insights", tint: "#FAF8F4", color: "#2563EB" },
    { icon: Clock, title: "Real-Time Intelligence", desc: "Live updates, alerts, and actionable insights", tint: "#FAF8F4", color: "#16A34A" },
    { icon: MapPin, title: "City-Wide Coverage", desc: "Intelligence across all police stations in Kolkata", tint: "#FAF8F4", color: "#F59E0B" },
    { icon: Users, title: "Built for Kolkata Police", desc: "Designed to meet real operational needs", tint: "#FAF8F4", color: "#B88943" },
  ];
  return (
    <section className="relative -mt-16 bg-[#FAF8F4] pb-6 pt-0">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 rounded-[22px] border border-[#ECE6DA] bg-white p-2.5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`flex items-start gap-3.5 p-5 ${i < items.length - 1 ? "md:border-r md:border-[#ECE6DA]/70" : ""}`}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#ECE6DA]"
                  style={{ background: it.tint, color: it.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[14px] font-extrabold text-[#101828]">{it.title}</div>
                  <div className="mt-1 text-[12px] leading-snug text-[#475467]">{it.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const cards = [
    { icon: MessageSquareText, title: "AI Investigation Assistant", desc: "Ask anything. Get instant answers from your crime database using natural language.", tint: "rgba(37, 99, 235, 0.08)", color: "#2563EB" },
    { icon: Mic, title: "Voice-Based Investigation", desc: "Hands-free intelligence search in English, Bengali & Hindi for faster field operations.", tint: "rgba(184, 137, 67, 0.1)", color: "#B88943" },
    { icon: Network, title: "Criminal Network Intelligence", desc: "Visualize relationships between criminals, phones, vehicles, and locations.", tint: "rgba(22, 163, 74, 0.1)", color: "#16A34A" },
    { icon: Target, title: "Crime Hotspot Map", desc: "Interactive heatmaps to identify high-risk areas and emerging crime zones.", tint: "rgba(220, 38, 38, 0.08)", color: "#DC2626" },
    { icon: TrendingUp, title: "Predictive Crime Analytics", desc: "Predict future crime trends and hotspots using advanced AI/ML models.", tint: "rgba(245, 158, 11, 0.1)", color: "#F59E0B" },
    { icon: FileText, title: "Smart FIR Analysis & Similar Case Detection", desc: "Upload FIRs and find similar cases, patterns, and key insights instantly.", tint: "rgba(37, 99, 235, 0.08)", color: "#2563EB" },
  ];

  return (
    <section className="relative bg-[#F5F1E8] py-24 border-t border-[#ECE6DA]/60">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#B88943]">
            POWERFUL CAPABILITIES
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#101828] sm:text-5xl">
            Everything You Need for Intelligent Policing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475467]">
            From AI investigation assistance to predictive analytics, KAVACH AI provides
            end-to-end tools to support <span className="font-bold text-[#101828]">every step of the policing</span> workflow.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-[22px] border border-[#ECE6DA] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECE6DA]"
                  style={{ background: c.tint, color: c.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[17px] font-extrabold leading-snug text-[#101828]">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-[#475467]">
                  {c.desc}
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#B88943] transition-all hover:gap-2.5 hover:text-[#A17331]"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ECE6DA]/15 bg-[#0B1525] py-10 text-white">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 lg:flex-row">
        {/* Left emblem */}
        <div className="flex items-center gap-3.5">
          <ShieldLogo />
          <div>
            <div className="text-base font-extrabold tracking-wide text-white">KOLKATA POLICE</div>
            <div className="text-xs font-semibold text-[#D8C095]">Safe City. Secure Future.</div>
          </div>
        </div>

        {/* Stats strip matching exact design */}
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4 lg:gap-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C7AE7D]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-white">150+</div>
              <div className="text-[11px] font-medium text-white/60">Police Stations Covered</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C7AE7D]">
              <Database className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-white">10M+</div>
              <div className="text-[11px] font-medium text-white/60">Data Records Analyzed</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C7AE7D]">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-white">98%</div>
              <div className="text-[11px] font-medium text-white/60">Accuracy in Predictions</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#C7AE7D]">
              <Radio className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-lg font-black text-white">24/7</div>
              <div className="text-[11px] font-medium text-white/60">Intelligence Operations</div>
            </div>
          </div>
        </div>

        {/* Emergency Helpline CTA */}
        <button className="flex items-center gap-3.5 rounded-2xl bg-[#B88943] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#A17331] shadow-lg shadow-[#B88943]/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20">
            <PhoneCall className="h-4 w-4 text-white" />
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/80">Emergency Helpline</div>
            <div className="text-sm font-extrabold text-white">100 / 112</div>
          </div>
          <ArrowRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </footer>
  );
}

