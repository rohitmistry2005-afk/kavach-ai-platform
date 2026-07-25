import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, ArrowRight, User, Mail, Phone, Lock, Sparkles, Building2, Key, CheckCircle2, AlertCircle } from "lucide-react";
import { sql, initDb } from "@/lib/db";

export const Route = createFileRoute("/register")({
  component: RegisterComponent,
});

function RegisterComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    badgeId: "",
    fullName: "",
    rankDesignation: "Assistant Commissioner of Police",
    assignedDivision: "Salt Lake Division (East Zone)",
    phone: "",
    email: "",
    password: "",
    policeCode: "KP-VERIFIED-2024",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // 1. Ensure table exists in PostgreSQL
      await initDb();

      // 2. Insert new officer record into Neon PostgreSQL
      await sql`
        INSERT INTO officers (
          badge_id, full_name, rank_designation, assigned_division, phone, email, password, police_code
        ) VALUES (
          ${formData.badgeId.toUpperCase()},
          ${formData.fullName},
          ${formData.rankDesignation},
          ${formData.assignedDivision},
          ${formData.phone},
          ${formData.email.toLowerCase()},
          ${formData.password},
          ${formData.policeCode}
        );
      `;

      // Store current user info in localStorage for live dashboard greeting
      localStorage.setItem(
        "kavach_user",
        JSON.stringify({
          badgeId: formData.badgeId.toUpperCase(),
          fullName: formData.fullName,
          rankDesignation: formData.rankDesignation,
          assignedDivision: formData.assignedDivision,
        })
      );

      setSuccessMsg("Officer registration successful! Saving details to PostgreSQL...");

      setTimeout(() => {
        navigate({ to: "/dashboard" });
      }, 1000);
    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.message?.includes("unique") || err.message?.includes("duplicate")) {
        setErrorMsg("Officer Badge ID or Email is already registered in the database.");
      } else {
        setErrorMsg(`Database error: ${err.message || "Failed to register officer in PostgreSQL"}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B1525] font-sans antialiased text-white">
      {/* Subtle Background Scrim */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08111D] via-[#0B1525] to-[#15243A] opacity-95" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 py-12">
        {/* Card */}
        <div className="w-full max-w-xl rounded-[24px] border border-[#ECE6DA]/20 bg-[#0B1525]/90 p-8 shadow-2xl backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C7AE7D] to-[#B88943] text-white shadow-lg shadow-[#B88943]/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-black tracking-tight text-white">
                  KOLKATA POLICE <span className="text-[#B88943]">REGISTRATION</span>
                </h1>
                <p className="text-xs font-semibold text-[#D8C095]">
                  Officer Enrollment & Database Profile
                </p>
              </div>
            </div>
            <Link
              to="/login"
              className="text-xs font-bold text-[#C7AE7D] hover:underline"
            >
              Already Registered? Login →
            </Link>
          </div>

          {/* Subtitle */}
          <div className="mt-4 rounded-xl border border-[#C7AE7D]/30 bg-white/5 p-3 text-xs font-semibold text-white/80">
            <div className="flex items-center gap-2 text-[#D8C095] font-bold">
              <Sparkles className="h-4 w-4 text-[#B88943]" />
              PostgreSQL Neon Database Sync
            </div>
            Fill in official police details below to enroll into the Kolkata Police Intelligence network.
          </div>

          {/* Error / Success Notifications */}
          {errorMsg && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {successMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleRegister} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Officer Badge ID *
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="text"
                    name="badgeId"
                    value={formData.badgeId}
                    onChange={handleChange}
                    placeholder="e.g. KP-9042"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Full Officer Name *
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. DCP. Arindam Roy"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Rank / Designation
                </label>
                <select
                  name="rankDesignation"
                  value={formData.rankDesignation}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-[#0B1525] py-2.5 px-3 text-xs font-bold text-white focus:border-[#B88943] focus:outline-none"
                >
                  <option value="Deputy Commissioner of Police">Deputy Commissioner of Police (DCP)</option>
                  <option value="Assistant Commissioner of Police">Assistant Commissioner of Police (ACP)</option>
                  <option value="Inspector-in-Charge">Inspector-in-Charge (IC)</option>
                  <option value="Sub-Inspector">Sub-Inspector (SI)</option>
                  <option value="Intelligence Officer">Intelligence Officer</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Assigned Division
                </label>
                <select
                  name="assignedDivision"
                  value={formData.assignedDivision}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-[#0B1525] py-2.5 px-3 text-xs font-bold text-white focus:border-[#B88943] focus:outline-none"
                >
                  <option value="Salt Lake Division (East Zone)">Salt Lake Division (East Zone)</option>
                  <option value="Headquarters (Lalbazar)">Headquarters (Lalbazar)</option>
                  <option value="Central Division">Central Division</option>
                  <option value="South Division">South Division</option>
                  <option value="North & North Suburb">North & North Suburb</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Official Phone *
                </label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98300 12345"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Official Email *
                </label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="officer@kolkatapolice.gov.in"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Account Password *
                </label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white placeholder-white/40 focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70">
                  Police Security Passcode
                </label>
                <div className="relative mt-1">
                  <Key className="absolute left-3 top-3 h-4 w-4 text-[#C7AE7D]" />
                  <input
                    type="text"
                    name="policeCode"
                    value={formData.policeCode}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/15 bg-white/5 py-2.5 pl-9 pr-3 text-xs font-bold text-white focus:border-[#B88943] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#B88943] py-3.5 text-xs font-extrabold text-white shadow-lg shadow-[#B88943]/30 transition hover:bg-[#A17331] active:scale-[0.99]"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Connecting to PostgreSQL & Saving Profile...
                </>
              ) : (
                <>
                  Save Officer Profile & Complete Enrollment
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-5 border-t border-white/10 pt-3 text-center text-[10px] text-white/50">
            Connected Database: Neon PostgreSQL (neondb) • Encrypted Security Protocol
          </div>
        </div>
      </div>
    </div>
  );
}
