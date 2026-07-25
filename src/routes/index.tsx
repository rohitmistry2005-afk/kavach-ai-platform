import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Brain,
  Clock,
  MapPin,
  Users,
  Sparkles,
  Activity,
  BellRing,
  Lock,
  MessageSquareText,
  Mic,
  Network,
  Target,
  TrendingUp,
  FileText,
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/kavach-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
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
      className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${className}`}
      style={{
        background: "var(--gradient-primary)",
        boxShadow: "0 8px 24px -6px rgb(37 99 235 / 0.6)",
      }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </div>
  );
}

function Navbar() {
  const links = ["Home", "Features", "Solutions", "Why KAVACH AI", "Resources", "About Us", "Contact"];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl border border-white/10 px-5 py-3"
        style={{
          background: "rgba(7, 20, 35, 0.55)",
          backdropFilter: "blur(24px) saturate(160%)",
          boxShadow: "0 10px 40px -10px rgb(0 0 0 / 0.5)",
        }}
      >
        <div className="flex items-center gap-3">
          <ShieldLogo />
          <div className="leading-tight">
            <div className="text-[15px] font-bold tracking-tight text-white">
              KAVACH <span className="text-[color:var(--accent)]">AI</span>
            </div>
            <div className="text-[11px] font-medium text-white/60">Kolkata Police Intelligence Platform</div>
          </div>
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  i === 0 ? "text-[color:var(--accent)]" : "text-white/75 hover:text-white"
                }`}
              >
                {link}
                {i === 0 && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-[color:var(--accent)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <button className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 md:inline-flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
            </span>
            Kolkata Police
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
          >
            Login <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <img
          src={heroImg}
          alt="Kolkata skyline at golden hour with Howrah Bridge and Victoria Memorial"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[color:var(--primary)]/10 mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgb(37 99 235 / 0.35), transparent)" }} />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 pt-32 pb-24 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered. Intelligence Driven.
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[72px]">
              Smarter Intelligence.
              <br />
              Safer{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Kolkata.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
              KAVACH AI empowers Kolkata Police with AI-driven insights, predictive
              analytics, and real-time intelligence to prevent crime, solve cases
              faster, and protect communities.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button
                className="group inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-[15px] font-semibold text-white transition hover:opacity-95"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
              >
                Explore Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-[15px] font-semibold text-white backdrop-blur transition hover:bg-white/10">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                </span>
                Watch Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="inline-flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--accent)]" />
                Trusted by Kolkata Police
              </div>
              <div className="flex -space-x-2">
                {["#1e3a5f", "#2d5a3d", "#5c2018", "#9b4423", "#0c2340", "#3b6fa0"].map((c, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white/90"
                    style={{ background: c }}
                  >
                    {["AR", "SK", "MP", "DB", "RC", "NG"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">+482 Officers</div>
                <div className="text-white/60">Using KAVACH AI</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="ml-auto max-w-md">
              <div
                className="glass-light rounded-3xl p-6"
                style={{ boxShadow: "var(--shadow-glass)" }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--success)] opacity-70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--success)]" />
                      </span>
                      <span className="text-sm font-semibold text-slate-700">Live System Status</span>
                    </div>
                    <div className="mt-1 text-lg font-bold text-slate-900">All Systems Operational</div>
                  </div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "rgb(37 99 235 / 0.08)" }}
                  >
                    <ShieldCheck className="h-5 w-5 text-[color:var(--primary)]" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-3">
                  <StatusTile icon={<Activity className="h-4 w-4" />} label="Real-time Monitoring" tint="rgb(34 197 94 / 0.12)" color="#16A34A" />
                  <StatusTile icon={<Brain className="h-4 w-4" />} label="AI-Powered Insights" tint="rgb(139 92 246 / 0.12)" color="#7C3AED" />
                  <StatusTile icon={<BellRing className="h-4 w-4" />} label="Predictive Alerts" tint="rgb(245 158 11 / 0.14)" color="#D97706" />
                  <StatusTile icon={<Lock className="h-4 w-4" />} label="Secure & Trusted" tint="rgb(37 99 235 / 0.12)" color="#2563EB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusTile({ icon, label, tint, color }: { icon: React.ReactNode; label: string; tint: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: tint, color }}
      >
        {icon}
      </div>
      <div className="text-[11px] font-medium leading-tight text-slate-600">{label}</div>
    </div>
  );
}

function InfoStrip() {
  const items = [
    { icon: ShieldCheck, title: "Secure & Trusted", desc: "End-to-end encryption and data protection", tint: "rgb(37 99 235 / 0.10)", color: "#2563EB" },
    { icon: Brain, title: "AI-Powered", desc: "Advanced ML models and NLP insights", tint: "rgb(139 92 246 / 0.10)", color: "#7C3AED" },
    { icon: Clock, title: "Real-Time Intelligence", desc: "Live updates, alerts, and actionable insights", tint: "rgb(34 197 94 / 0.12)", color: "#16A34A" },
    { icon: MapPin, title: "City-Wide Coverage", desc: "Intelligence across all police stations in Kolkata", tint: "rgb(245 158 11 / 0.14)", color: "#D97706" },
    { icon: Users, title: "Built for Kolkata Police", desc: "Designed to meet real operational needs", tint: "rgb(239 68 68 / 0.10)", color: "#DC2626" },
  ];
  return (
    <section className="relative -mt-16 bg-[color:var(--surface)] pb-2 pt-0">
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className="grid grid-cols-1 gap-0 rounded-3xl border border-slate-200/70 bg-white p-2 md:grid-cols-5"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className={`flex items-start gap-4 p-6 ${i < items.length - 1 ? "md:border-r md:border-slate-100" : ""}`}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: it.tint, color: it.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-slate-900">{it.title}</div>
                  <div className="mt-1 text-[13px] leading-snug text-slate-500">{it.desc}</div>
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
    { icon: MessageSquareText, title: "AI Investigation Assistant", desc: "Ask anything. Get instant answers from your crime database using natural language.", tint: "rgb(37 99 235 / 0.10)", color: "#2563EB" },
    { icon: Mic, title: "Voice-Based Investigation", desc: "Hands-free intelligence search in English, Bengali & Hindi for faster field operations.", tint: "rgb(139 92 246 / 0.10)", color: "#7C3AED" },
    { icon: Network, title: "Criminal Network Intelligence", desc: "Visualize relationships between criminals, phones, vehicles, and locations.", tint: "rgb(16 185 129 / 0.12)", color: "#059669" },
    { icon: Target, title: "Crime Hotspot Map", desc: "Interactive heatmaps to identify high-risk areas and emerging crime zones.", tint: "rgb(239 68 68 / 0.10)", color: "#DC2626" },
    { icon: TrendingUp, title: "Predictive Crime Analytics", desc: "Predict future crime trends and hotspots using advanced AI/ML models.", tint: "rgb(245 158 11 / 0.14)", color: "#D97706" },
    { icon: FileText, title: "Smart FIR Analysis & Similar Case Detection", desc: "Upload FIRs and find similar cases, patterns, and key insights instantly.", tint: "rgb(56 189 248 / 0.14)", color: "#0284C7" },
  ];

  return (
    <section className="relative bg-[color:var(--surface)] py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[color:var(--primary)]">
            Powerful Capabilities
          </div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need for Intelligent Policing
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            From AI investigation assistance to predictive analytics, KAVACH AI provides
            end-to-end tools to support{" "}
            <span className="font-semibold text-slate-700">every step of the policing</span> workflow.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--primary)]/30"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: c.color }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: c.tint, color: c.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-[17px] font-bold leading-snug text-slate-900">
                  {c.title}
                </h3>
                <p className="relative mt-2.5 text-[14px] leading-relaxed text-slate-500">
                  {c.desc}
                </p>
                <a
                  href="#"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[color:var(--primary)] transition-all hover:gap-2.5"
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
    <footer className="border-t border-white/5 bg-background py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <ShieldLogo />
          <div className="leading-tight">
            <div className="text-sm font-bold text-white">KAVACH AI</div>
            <div className="text-[11px] text-white/50">Kolkata Police Intelligence Platform</div>
          </div>
        </div>
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} KAVACH AI. Built for the Kolkata Police Force.
        </div>
      </div>
    </footer>
  );
}
