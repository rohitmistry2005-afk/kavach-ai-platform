import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, ArrowRight, Lock, User, Sparkles, Key, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/kavach-hero.jpg";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const navigate = useNavigate();
  const [badgeId, setBadgeId] = useState("KP-8842");
  const [password, setPassword] = useState("••••••••••••");
  const [division, setDivision] = useState("Salt Lake Division (East Zone)");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate({ to: "/dashboard" });
    }, 600);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1525] font-sans antialiased">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Kolkata skyline"
          className="h-full w-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(11, 21, 37, 0.85) 0%, rgba(8, 17, 29, 0.96) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 py-12">
        {/* Main Auth Card */}
        <div className="w-full max-w-md rounded-[24px] border border-[#ECE6DA]/20 bg-[#0B1525]/90 p-8 shadow-2xl backdrop-blur-2xl">
          {/* Header & Logo */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C7AE7D] to-[#B88943] text-white shadow-lg shadow-[#B88943]/30">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h1 className="mt-4 text-2xl font-black tracking-tight text-white">
              KAVACH <span className="text-[#B88943]">AI</span>
            </h1>
            <p className="mt-1 text-xs font-semibold text-[#D8C095]">
              Kolkata Police Intelligence Platform
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#C7AE7D]/30 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/80">
              <Sparkles className="h-3 w-3 text-[#B88943]" />
              Secure Officer Authentication Portal
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Officer Badge ID / Rank
              </label>
              <div className="relative mt-1.5">
                <User className="absolute left-3.5 top-3.5 h-4 w-4 text-[#C7AE7D]" />
                <input
                  type="text"
                  value={badgeId}
                  onChange={(e) => setBadgeId(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-sm font-semibold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none focus:ring-1 focus:ring-[#B88943]"
                  placeholder="e.g. KP-8842 (DCP. Arindam Roy)"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Assigned Division
              </label>
              <div className="relative mt-1.5">
                <ShieldCheck className="absolute left-3.5 top-3.5 h-4 w-4 text-[#C7AE7D]" />
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-[#0B1525] py-3 pl-10 pr-4 text-sm font-semibold text-white focus:border-[#B88943] focus:outline-none focus:ring-1 focus:ring-[#B88943]"
                >
                  <option value="Salt Lake Division (East Zone)">Salt Lake Division (East Zone)</option>
                  <option value="Headquarters (Lalbazar)">Headquarters (Lalbazar)</option>
                  <option value="Central Division">Central Division</option>
                  <option value="South Division">South Division</option>
                  <option value="North & North Suburb">North & North Suburb</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70">
                Encryption Password
              </label>
              <div className="relative mt-1.5">
                <Key className="absolute left-3.5 top-3.5 h-4 w-4 text-[#C7AE7D]" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-sm font-semibold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none focus:ring-1 focus:ring-[#B88943]"
                  required
                />
              </div>
            </div>

            {/* Account Info Box */}
            <div className="flex items-center justify-between rounded-xl border border-[#C7AE7D]/20 bg-white/5 p-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B88943] text-xs font-bold text-white">
                  AR
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">DCP. Arindam Roy</div>
                  <div className="text-[10px] text-white/60">Salt Lake Division</div>
                </div>
              </div>
              <span className="flex items-center gap-1 rounded-md bg-[#16A34A]/20 px-2 py-0.5 text-[10px] font-bold text-[#16A34A]">
                <CheckCircle2 className="h-3 w-3" /> Verified
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#B88943] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#B88943]/25 transition hover:bg-[#A17331] active:scale-[0.99]"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Authenticating Officer Credentials...
                </>
              ) : (
                <>
                  Sign In & Launch Intelligence Platform
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-white/50">
            Authorized Personnel Only • End-to-End Encrypted
            <br />
            © {new Date().getFullYear()} Kolkata Police Department
          </div>
        </div>
      </div>
    </div>
  );
}
