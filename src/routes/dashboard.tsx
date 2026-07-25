import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Search,
  Bell,
  Menu,
  Maximize2,
  Mic,
  Send,
  SlidersHorizontal,
  Plus,
  Minus,
  FileText,
  CheckCircle2,
  Activity,
  Brain,
  Lock,
  User,
  Share2,
  MapPin,
  TrendingUp,
  Sparkles,
  MessageSquareText,
  ChevronDown,
  PhoneCall,
  Award,
  Clock,
  Users,
  AlertTriangle,
  Radio,
  FileSpreadsheet,
  Settings as SettingsIcon,
  Layers,
  BarChart3,
  Check,
  X,
  FileCode2,
  LogOut,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  component: DashboardComponent,
});

function DashboardComponent() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [chatInput, setChatInput] = useState("");

  // Dynamic user profile from PostgreSQL session
  const [officerUser, setOfficerUser] = useState({
    fullName: "DCP. Arindam Roy",
    badgeId: "KP-8842",
    rankDesignation: "Deputy Commissioner of Police",
    assignedDivision: "Salt Lake Division",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("kavach_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setOfficerUser({
          fullName: parsed.fullName || "DCP. Arindam Roy",
          badgeId: parsed.badgeId || "KP-8842",
          rankDesignation: parsed.rankDesignation || "Deputy Commissioner of Police",
          assignedDivision: parsed.assignedDivision || "Salt Lake Division",
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const [chatMessages, setChatMessages] = useState([
    {
      sender: "user",
      name: "You",
      time: "10:24 AM",
      text: "Show all robbery cases reported in Salt Lake in the last 3 months.",
    },
    {
      sender: "ai",
      name: "KAVACH AI",
      time: "10:24 AM",
      text: "I found 23 robbery cases in Salt Lake between Apr 21 – Jul 21, 2024.",
      details: [
        "12 cases solved (52.2%)",
        "8 cases under investigation",
        "3 cases with identified suspects",
      ],
      prompt: "Would you like me to show the details?",
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = {
      sender: "user",
      name: "You",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      text: chatInput,
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      const aiReply = {
        sender: "ai",
        name: "KAVACH AI",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text: `Analysis complete for "${userMsg.text}". Found 5 relevant intelligence matches across Salt Lake & Lake Town stations.`,
        details: [
          "FIR #2024-5891 logged at 09:15 AM",
          "2 suspects tracked via ANPR cameras on E.M. Bypass",
          "Cross-referenced with repeat offender database",
        ],
        prompt: "Generating automated suspect mapping report...",
      };
      setChatMessages((prev) => [...prev, aiReply]);
    }, 800);
  };

  // Sample data for Recharts crime trend graph
  const trendData = [
    { day: "Jul 15", actual: 300, predicted: 300 },
    { day: "Jul 16", actual: 560, predicted: 500 },
    { day: "Jul 17", dayName: "Jul 17", actual: 420, predicted: 450 },
    { day: "Jul 18", actual: 600, predicted: 580 },
    { day: "Jul 19", actual: 440, predicted: 430 },
    { day: "Jul 20", actual: null, predicted: 590 },
    { day: "Jul 21", actual: null, predicted: 710 },
  ];

  return (
    <div className="flex min-h-screen bg-[#FAF8F4] font-sans text-[#475467] antialiased">
      {/* 1. SIDEBAR */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-[265px] flex-col justify-between bg-[#0B1525] p-5 text-white shadow-xl">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#C7AE7D] to-[#B88943] text-white shadow-md shadow-[#B88943]/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-white">
                KAVACH <span className="text-[#B88943]">AI</span>
              </div>
              <div className="text-[10px] font-medium text-white/60">
                Kolkata Police Intelligence Platform
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 space-y-1">
            {[
              { id: "Dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "AI Assistant", label: "AI Investigation Assistant", icon: MessageSquareText },
              { id: "Voice", label: "Voice Investigation", icon: Mic },
              { id: "Hotspots", label: "Crime Hotspot Map", icon: MapPin },
              { id: "Network", label: "Criminal Network", icon: Share2 },
              { id: "FIR", label: "FIR Analysis", icon: FileText },
              { id: "Predictive", label: "Predictive Analytics", icon: TrendingUp },
              { id: "Similar", label: "Similar Crime Search", icon: Layers },
              { id: "Reports", label: "Reports & Analytics", icon: FileSpreadsheet },
              { id: "Alerts", label: "Alerts & Notifications", icon: Bell },
              { id: "Settings", label: "Settings", icon: SettingsIcon },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#C7AE7D] to-[#B88943] text-white shadow-md font-extrabold"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#C7AE7D]"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer - Kolkata Police Branding */}
        <div className="border-t border-white/10 pt-4">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-3.5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C7AE7D] text-[#0B1525] font-black text-xs">
                KP
              </div>
              <div>
                <div className="text-xs font-black tracking-wide text-white">KOLKATA POLICE</div>
                <div className="text-[10px] font-semibold text-[#D8C095]">Safe City. Secure Future.</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 pl-[265px]">
        {/* 2. TOP HEADER */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#ECE6DA] bg-[#FAF8F4]/90 px-8 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="rounded-xl border border-[#ECE6DA] bg-white p-2 text-[#475467] hover:bg-[#F5F1E8]">
              <Menu className="h-4 w-4" />
            </button>

            {/* Global Search Bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-[#667085]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything... (e.g. FIR, Crime, Accused, Vehicle)"
                className="w-[400px] rounded-xl border border-[#ECE6DA] bg-white py-2 pl-10 pr-12 text-xs font-semibold text-[#101828] placeholder-[#667085] focus:border-[#B88943] focus:outline-none focus:ring-1 focus:ring-[#B88943] shadow-sm"
              />
              <span className="absolute right-3 rounded border border-[#ECE6DA] bg-[#F5F1E8] px-1.5 py-0.5 text-[10px] font-bold text-[#667085]">
                ⌘K
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Live System Status Badge */}
            <div className="flex items-center gap-2 rounded-full border border-[#ECE6DA] bg-[#F5F1E8] px-3.5 py-1.5 text-xs font-bold text-[#101828] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A]" />
              </span>
              <span>Live System Status</span>
              <span className="text-[11px] font-semibold text-[#16A34A]">All Systems Operational</span>
            </div>

            {/* Notification Bell */}
            <button className="relative rounded-xl border border-[#ECE6DA] bg-white p-2 text-[#101828] shadow-sm hover:bg-[#F5F1E8]">
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#DC2626] text-[9px] font-bold text-white">
                12
              </span>
            </button>

            {/* Profile Pill */}
            <div className="flex items-center gap-3 rounded-xl border border-[#ECE6DA] bg-white px-3 py-1.5 shadow-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B88943] text-xs font-black text-white">
                {officerUser.fullName.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div className="leading-tight">
                <div className="text-xs font-black text-[#101828]">{officerUser.fullName} 🎖️</div>
                <div className="text-[10px] font-medium text-[#667085]">{officerUser.assignedDivision}</div>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("kavach_user");
                  window.location.href = "/login";
                }}
                title="Sign Out Officer"
                className="ml-1 rounded-lg p-1 text-[#667085] hover:bg-[#F5F1E8] hover:text-[#DC2626] transition"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="p-8 space-y-6">
          {/* 3. GREETING & ACTION BAR */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-2xl font-black text-[#101828]">
                Good Morning, {officerUser.fullName} 👋
              </h1>
              <p className="mt-1 text-xs font-semibold text-[#667085]">
                Stay informed. Stay ahead. Stay safe.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-[#B88943] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#B88943]/20 hover:bg-[#A17331] transition">
                <Plus className="h-4 w-4" /> Quick FIR Analysis
              </button>
              <button className="flex items-center gap-2 rounded-xl border border-[#ECE6DA] bg-white px-5 py-2.5 text-xs font-bold text-[#101828] shadow-sm hover:bg-[#F5F1E8] transition">
                <FileText className="h-4 w-4 text-[#B88943]" /> Generate Report
              </button>
            </div>
          </div>

          {/* 4. SIX SUMMARY METRIC CARDS */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              {
                title: "Total Registered Crimes",
                value: "7,842",
                change: "↑ 12.5%",
                desc: "vs last 3 months",
                icon: FileText,
                tint: "#F5F1E8",
                iconColor: "#B88943",
                changeColor: "#16A34A",
              },
              {
                title: "Active Investigations",
                value: "1,247",
                change: "↑ 8.7%",
                desc: "vs last 3 months",
                icon: Users,
                tint: "rgba(37, 99, 235, 0.1)",
                iconColor: "#2563EB",
                changeColor: "#16A34A",
              },
              {
                title: "Repeat Offenders",
                value: "342",
                change: "↑ 15.3%",
                desc: "vs last 3 months",
                icon: User,
                tint: "rgba(216, 192, 149, 0.25)",
                iconColor: "#B88943",
                changeColor: "#16A34A",
              },
              {
                title: "AI Alerts",
                value: "28",
                change: "↑ 30.9%",
                desc: "vs last 3 months",
                icon: Bell,
                tint: "rgba(220, 38, 38, 0.1)",
                iconColor: "#DC2626",
                changeColor: "#DC2626",
              },
              {
                title: "Crime Hotspots",
                value: "16",
                change: "High Risk",
                desc: "High Risk Zones",
                icon: MapPin,
                tint: "rgba(245, 158, 11, 0.1)",
                iconColor: "#F59E0B",
                changeColor: "#F59E0B",
              },
              {
                title: "Solved Cases",
                value: "3,421",
                change: "↑ 18.6%",
                desc: "vs last 3 months",
                icon: ShieldCheck,
                tint: "rgba(37, 99, 235, 0.1)",
                iconColor: "#2563EB",
                changeColor: "#16A34A",
              },
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[18px] border border-[#ECE6DA] bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-[#667085] leading-snug truncate">
                      {card.title}
                    </span>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-xl"
                      style={{ background: card.tint, color: card.iconColor }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2 text-2xl font-black text-[#101828]">{card.value}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px]">
                    <span className="font-extrabold" style={{ color: card.changeColor }}>
                      {card.change}
                    </span>
                    <span className="text-[#667085] font-medium">{card.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. MIDDLE ROW - 3 CARDS */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* CARD 1: AI INVESTIGATION ASSISTANT */}
            <div className="flex flex-col justify-between rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-4">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                      AI INVESTIGATION ASSISTANT
                    </span>
                    <span className="rounded-md bg-[#B88943]/15 px-2 py-0.5 text-[9px] font-black uppercase text-[#B88943]">
                      BETA
                    </span>
                  </div>
                  <button className="text-[#667085] hover:text-[#101828]">
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="mt-4 space-y-4 max-h-[300px] overflow-y-auto pr-1">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-[#101828]">{msg.name}</span>
                        <span className="text-[10px] text-[#667085]">{msg.time}</span>
                      </div>
                      <div
                        className={`rounded-2xl p-3.5 text-xs leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-[#F5F1E8] text-[#101828] border border-[#ECE6DA]"
                            : "bg-[#FAF8F4] text-[#101828] border border-[#ECE6DA]"
                        }`}
                      >
                        <p>{msg.text}</p>
                        {msg.details && (
                          <ul className="mt-2 space-y-1 font-semibold text-[#475467]">
                            {msg.details.map((d, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#B88943]" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        )}
                        {msg.prompt && (
                          <p className="mt-2 font-bold text-[#B88943]">{msg.prompt}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-[#ECE6DA]">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask follow-up question..."
                    className="w-full rounded-xl border border-[#ECE6DA] bg-[#FAF8F4] py-2.5 pl-3.5 pr-20 text-xs font-semibold text-[#101828] placeholder-[#667085] focus:border-[#B88943] focus:outline-none"
                  />
                  <div className="absolute right-2 flex items-center gap-1">
                    <button type="button" className="rounded-lg p-1.5 text-[#667085] hover:text-[#B88943]">
                      <Mic className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-[#B88943] p-1.5 text-white hover:bg-[#A17331] transition"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* CARD 2: LIVE CRIME HOTSPOT MAP */}
            <div className="rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                      LIVE CRIME HOTSPOT MAP
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-[#16A34A]/10 px-2 py-0.5 text-[10px] font-bold text-[#16A34A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" /> Real-time
                    </span>
                  </div>
                  <button className="text-[#667085] hover:text-[#101828]">
                    <SlidersHorizontal className="h-4 w-4" />
                  </button>
                </div>

                {/* Map SVG & Overlay Canvas */}
                <div className="relative mt-4 h-[300px] w-full overflow-hidden rounded-2xl border border-[#ECE6DA] bg-[#EAF2F8]">
                  {/* Styled Map Graphic Background */}
                  <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 600 350">
                    {/* River Hooghly */}
                    <path
                      d="M 280 0 Q 320 100 290 180 T 330 350"
                      fill="none"
                      stroke="#85C1E9"
                      strokeWidth="32"
                    />
                    {/* Road Network Lines */}
                    <path d="M 0 100 L 600 120" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M 0 220 L 600 200" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M 150 0 L 180 350" stroke="#FFFFFF" strokeWidth="5" />
                    <path d="M 450 0 L 420 350" stroke="#FFFFFF" strokeWidth="5" />
                  </svg>

                  {/* Hotspot Radial Glows */}
                  <div className="absolute top-[80px] left-[380px] h-20 w-20 rounded-full bg-[#DC2626]/35 blur-xl animate-pulse" />
                  <div className="absolute top-[160px] left-[320px] h-16 w-16 rounded-full bg-[#DC2626]/40 blur-lg" />
                  <div className="absolute top-[220px] left-[260px] h-24 w-24 rounded-full bg-[#F59E0B]/35 blur-xl" />

                  {/* Location Pin Labels */}
                  <div className="absolute top-[20px] left-[350px] text-[10px] font-extrabold text-[#101828]">
                    Dum Dum
                  </div>
                  <div className="absolute top-[75px] left-[260px] text-[10px] font-extrabold text-[#101828]">
                    Park Town
                  </div>
                  <div className="absolute top-[75px] left-[390px] rounded bg-[#DC2626] px-1.5 py-0.5 text-[9px] font-extrabold text-white shadow">
                    Salt Lake
                  </div>
                  <div className="absolute top-[150px] left-[340px] text-[10px] font-extrabold text-[#101828]">
                    Lake Town
                  </div>
                  <div className="absolute top-[170px] left-[150px] text-[10px] font-extrabold text-[#101828]">
                    Howrah
                  </div>
                  <div className="absolute top-[230px] left-[300px] text-[10px] font-extrabold text-[#101828]">
                    Park Street
                  </div>
                  <div className="absolute top-[280px] left-[360px] text-[10px] font-extrabold text-[#101828]">
                    Jadavpur
                  </div>

                  {/* Map Pin Icons */}
                  <div className="absolute top-[85px] left-[370px]">
                    <MapPin className="h-5 w-5 text-[#DC2626] fill-[#DC2626]/20" />
                  </div>
                  <div className="absolute top-[165px] left-[310px]">
                    <MapPin className="h-5 w-5 text-[#DC2626] fill-[#DC2626]/20" />
                  </div>
                  <div className="absolute top-[235px] left-[280px]">
                    <MapPin className="h-5 w-5 text-[#F59E0B] fill-[#F59E0B]/20" />
                  </div>

                  {/* Floating Legend Top Right */}
                  <div className="absolute right-3 top-3 rounded-xl border border-[#ECE6DA] bg-white/95 p-3 shadow-md backdrop-blur-sm text-[10px]">
                    <div className="font-bold text-[#101828] mb-1">Crime Type</div>
                    <div className="text-[9px] font-semibold text-[#667085] mb-2">(All Crimes) ∨</div>
                    <div className="space-y-1 font-semibold text-[#101828]">
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#DC2626]" /> High</div>
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#F59E0B]" /> Medium</div>
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#FACC15]" /> Low</div>
                      <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#16A34A]" /> Safe</div>
                    </div>
                  </div>

                  {/* Floating Zoom Controls */}
                  <div className="absolute left-3 bottom-3 flex flex-col rounded-lg border border-[#ECE6DA] bg-white shadow">
                    <button className="p-1.5 hover:bg-[#F5F1E8]"><Plus className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 border-t border-[#ECE6DA] hover:bg-[#F5F1E8]"><Minus className="h-3.5 w-3.5" /></button>
                  </div>

                  {/* Floating Bottom Legend */}
                  <div className="absolute right-3 bottom-3 flex items-center gap-3 rounded-lg border border-[#ECE6DA] bg-white/95 px-3 py-1 text-[10px] font-extrabold text-[#101828] shadow">
                    <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-[#2563EB]" /> Police Stations</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-[#DC2626]" /> Hotspots</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: PREDICTIVE CRIME ANALYTICS */}
            <div className="flex flex-col justify-between rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-3">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3.5">
                  <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                    PREDICTIVE CRIME ANALYTICS
                  </span>
                  <span className="text-[10px] font-bold text-[#667085] cursor-pointer hover:text-[#101828]">
                    7 Days Prediction ∨
                  </span>
                </div>

                {/* Gauge & Top Crimes Grid */}
                <div className="mt-4 grid grid-cols-2 gap-3 items-center">
                  {/* Donut Gauge */}
                  <div className="flex flex-col items-center justify-center p-2 text-center">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#DC2626]">
                      <div className="text-center">
                        <span className="text-2xl font-black text-[#101828]">83</span>
                        <div className="text-[8px] font-black uppercase text-[#DC2626]">High Risk</div>
                      </div>
                    </div>
                    <span className="mt-1 text-[10px] font-bold text-[#667085]">Crime Risk Score</span>
                  </div>

                  {/* Top Predicted Crimes */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="font-bold text-[#101828]">Top Predicted Crimes</div>
                    {[
                      { name: "Robbery", val: "42%", color: "#DC2626" },
                      { name: "Vehicle Theft", val: "28%", color: "#B88943" },
                      { name: "Burglary", val: "18%", color: "#F59E0B" },
                      { name: "Assault", val: "12%", color: "#2563EB" },
                    ].map((c, i) => (
                      <div key={i} className="space-y-0.5">
                        <div className="flex justify-between text-[10px] font-semibold">
                          <span className="text-[#475467]">{c.name}</span>
                          <span className="font-bold text-[#101828]">{c.val}</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-[#F5F1E8]">
                          <div
                            className="h-1.5 rounded-full"
                            style={{ width: c.val, background: c.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recharts Line Trend */}
                <div className="mt-4 pt-3 border-t border-[#ECE6DA]">
                  <div className="flex items-center justify-between text-[10px] font-bold mb-2">
                    <span className="text-[#101828]">Crime Trend Prediction</span>
                    <div className="flex items-center gap-2 text-[9px]">
                      <span className="flex items-center gap-1 text-[#2563EB]">
                        <span className="h-0.5 w-3 bg-[#2563EB]" /> Actual
                      </span>
                      <span className="flex items-center gap-1 text-[#B88943]">
                        <span className="h-0.5 w-3 bg-[#B88943] border-t border-dashed" /> Predicted
                      </span>
                    </div>
                  </div>

                  <div className="h-[90px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trendData}>
                        <XAxis dataKey="day" stroke="#667085" fontSize={9} tickLine={false} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke="#2563EB"
                          strokeWidth={2}
                          dot={false}
                        />
                        <Line
                          type="monotone"
                          dataKey="predicted"
                          stroke="#B88943"
                          strokeWidth={2}
                          strokeDasharray="4 4"
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. BOTTOM ROW - 4 CARDS */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* CARD 1: CRIMINAL NETWORK INTELLIGENCE */}
            <div className="rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-3">
              <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                  CRIMINAL NETWORK INTELLIGENCE
                </span>
                <Share2 className="h-4 w-4 text-[#667085]" />
              </div>

              {/* Node Network Visualizer */}
              <div className="mt-4 flex flex-col items-center justify-center space-y-3 py-2">
                {/* Top Nodes */}
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] border-2 border-[#B88943] text-xs font-bold text-[#101828]">
                      RS
                    </div>
                    <span className="mt-1 text-[10px] font-bold text-[#101828]">Rakesh Shaw</span>
                    <span className="text-[8px] font-semibold text-[#DC2626]">(Accused)</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8] border-2 border-[#C7AE7D] text-xs font-bold text-[#101828]">
                      PD
                    </div>
                    <span className="mt-1 text-[10px] font-bold text-[#101828]">Pintu Das</span>
                    <span className="text-[8px] font-semibold text-[#667085]">(Associate)</span>
                  </div>
                </div>

                {/* Central Kingpin Node */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg font-black text-sm border-2 border-white">
                    SR
                  </div>
                  <span className="mt-1 text-[11px] font-extrabold text-[#101828]">Sujit Roy</span>
                  <span className="text-[9px] font-bold text-[#2563EB]">(Suspected Kingpin)</span>
                </div>

                {/* Bottom Entity Nodes */}
                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-[9px] font-bold border-t border-[#ECE6DA] w-full">
                  <div>
                    <div className="text-[#667085]">Phone</div>
                    <div className="text-[#101828]">98745 63210</div>
                  </div>
                  <div>
                    <div className="text-[#667085]">Vehicle</div>
                    <div className="text-[#101828]">WB-02AJ-7734</div>
                  </div>
                  <div>
                    <div className="text-[#667085]">Location</div>
                    <div className="text-[#101828]">Salt Lake</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: SMART FIR ANALYSIS */}
            <div className="rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                    SMART FIR ANALYSIS
                  </span>
                  <FileText className="h-4 w-4 text-[#B88943]" />
                </div>

                {/* Analyzed File Box */}
                <div className="mt-3 rounded-xl border border-[#ECE6DA] bg-[#FAF8F4] p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DC2626]/10 text-[#DC2626] font-bold text-xs">
                        PDF
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#101828]">FIR_SaltLake_21Jul2024.pdf</div>
                        <div className="text-[10px] text-[#667085]">Uploaded 10:21 AM • 2.4 MB</div>
                      </div>
                    </div>
                    <span className="rounded bg-[#16A34A]/10 px-2 py-0.5 text-[9px] font-bold text-[#16A34A]">
                      Analyzed
                    </span>
                  </div>

                  {/* Extracted Entities */}
                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#ECE6DA] pt-2 text-[10px]">
                    <div>
                      <span className="text-[#667085] font-semibold block">Crime Type</span>
                      <span className="font-bold text-[#101828]">Robbery</span>
                    </div>
                    <div>
                      <span className="text-[#667085] font-semibold block">Victim</span>
                      <span className="font-bold text-[#101828]">S. K. Agarwal</span>
                    </div>
                    <div>
                      <span className="text-[#667085] font-semibold block">Date & Time</span>
                      <span className="font-bold text-[#101828]">21 Jul 2024, 08:30 PM</span>
                    </div>
                    <div>
                      <span className="text-[#667085] font-semibold block">Suspect</span>
                      <span className="font-bold text-[#101828]">2 Unknown Persons</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-3 w-full rounded-xl bg-[#F5F1E8] py-2 text-xs font-bold text-[#B88943] hover:bg-[#FAF8F4] border border-[#ECE6DA]">
                View Full Analysis
              </button>
            </div>

            {/* CARD 3: SIMILAR CRIME SEARCH */}
            <div className="rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                    SIMILAR CRIME SEARCH
                  </span>
                  <button className="text-[10px] font-bold text-[#2563EB] hover:underline">
                    View All
                  </button>
                </div>

                {/* Similarity List */}
                <div className="mt-3 space-y-2.5">
                  {[
                    { id: "FIR_2024_5621", type: "Robbery • Salt Lake", score: "85%" },
                    { id: "FIR_2024_5532", type: "Robbery • Salt Lake", score: "78%" },
                    { id: "FIR_2024_4410", type: "Robbery • Salt Lake", score: "72%" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-[#ECE6DA] bg-[#FAF8F4] p-2.5"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#101828]">{item.id}</div>
                        <div className="text-[10px] text-[#667085]">{item.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] text-[#667085]">Similarity</div>
                        <div className="text-sm font-black text-[#2563EB]">{item.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 4: RECENT ALERTS */}
            <div className="rounded-[22px] border border-[#ECE6DA] bg-white p-5 shadow-sm lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#ECE6DA] pb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-[#101828]">
                    RECENT ALERTS
                  </span>
                  <button className="text-[10px] font-bold text-[#2563EB] hover:underline">
                    View All
                  </button>
                </div>

                {/* Alerts List */}
                <div className="mt-3 space-y-2 text-[11px]">
                  {[
                    { title: "High Risk Zone Detected", loc: "Salt Lake Sector V", time: "10:24 AM", color: "#DC2626" },
                    { title: "Repeat Offender Activity", loc: "New Town Area", time: "09:48 AM", color: "#F59E0B" },
                    { title: "Unusual Vehicle Movement", loc: "Park Circus Area", time: "09:15 AM", color: "#B88943" },
                    { title: "Cyber Fraud Spike", loc: "Ultadanga, Lake Town", time: "08:42 AM", color: "#2563EB" },
                  ].map((alert, i) => (
                    <div key={i} className="flex items-start gap-2.5 rounded-xl border border-[#ECE6DA] bg-[#FAF8F4] p-2">
                      <div className="mt-0.5 h-2 w-2 rounded-full shrink-0" style={{ background: alert.color }} />
                      <div className="flex-1 leading-tight">
                        <div className="font-bold text-[#101828]">{alert.title}</div>
                        <div className="text-[10px] text-[#667085]">{alert.loc}</div>
                      </div>
                      <span className="text-[9px] font-semibold text-[#667085]">{alert.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. FOOTER */}
          <footer className="flex flex-col items-center justify-between gap-2 border-t border-[#ECE6DA] pt-4 text-xs font-semibold text-[#667085] md:flex-row">
            <div>© 2024 KAVACH AI | Kolkata Police Intelligence Platform</div>
            <div className="flex items-center gap-2 text-[#101828]">
              <span>Secure. Intelligent. Together.</span>
              <ShieldCheck className="h-4 w-4 text-[#B88943]" />
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
