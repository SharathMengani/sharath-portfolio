"use client";

import { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiCheckCircle,
  FiAlertCircle,
  FiPhone,
  FiCopy,
  FiCheck,
  FiSend
} from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    type: "full-time",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    type: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const options = [
    { label: "Full Time Engineering Role", value: "full-time" },
    { label: "Technical Lead / Contract", value: "contract" },
    { label: "Architecture Consultation", value: "freelance" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Realtime validation
  const validateField = (name: string, value: string) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Name is required";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Enter a valid email address";
    }

    if (name === "message") {
      if (!value.trim()) error = "Message cannot be empty";
      else if (value.length < 10)
        error = "Message must be at least 10 characters";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.type.trim()) newErrors.type = "Engagement type is required";
    if (!form.name.trim()) newErrors.name = "Name is required";

    if (form.type === "freelance") {
      if (!form.mobile.trim()) {
        newErrors.mobile = "Mobile number is required for consultations";
      } else if (!/^[0-9]{10}$/.test(form.mobile)) {
        newErrors.mobile = "Enter a valid 10-digit mobile number";
      }
    }

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    else if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors as any);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setForm({
        name: "",
        email: "",
        message: "",
        type: "full-time",
        mobile: "",
      });
      setErrors({ name: "", email: "", message: "", type: "", mobile: "" });
      setFeedback({
        type: "success",
        text: "Message sent successfully. I will respond to your inquiry shortly.",
      });
    } catch (err) {
      setFeedback({
        type: "error",
        text: "Failed to send message. Please reach out directly to chanduvarma57@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#09090b] text-zinc-100 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Initiate Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-50">
            Let's Discuss Engineering
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm leading-relaxed">
            Have a senior/lead engineering opportunity, high-concurrency FinTech platform, or conversational AI roadmap? Let's connect.
          </p>
        </div>

        {/* ── Balanced 5/7 Split Grid with Equal Height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Direct Contact Column (5 cols) */}
          <div className="lg:col-span-5 surface-card rounded-2xl p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="text-base font-bold text-zinc-100">
                  Direct Channel
                </h3>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Direct phone, email, and repository links with instant copy-to-clipboard functionality.
              </p>

              {/* Contact List */}
              <div className="space-y-3">

                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <FiMail size={15} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Email Address
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
                        chanduvarma57@gmail.com
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("chanduvarma57@gmail.com", "email")}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors ml-2 shrink-0 text-xs font-mono flex items-center gap-1"
                    title="Copy Email"
                  >
                    {copiedKey === "email" ? (
                      <>
                        <FiCheck className="text-emerald-400" size={13} />
                        <span className="text-[10px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <FiCopy size={13} />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <FiPhone size={15} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Phone / WhatsApp
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-zinc-200">
                        +91 96660 96524
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard("+919666096524", "phone")}
                    className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors ml-2 shrink-0 text-xs font-mono flex items-center gap-1"
                    title="Copy Phone"
                  >
                    {copiedKey === "phone" ? (
                      <>
                        <FiCheck className="text-emerald-400" size={13} />
                        <span className="text-[10px] text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <FiCopy size={13} />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06]">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                    <FiMapPin size={15} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200">
                      Hyderabad, India (IST / UTC+5:30)
                    </div>
                  </div>
                </div>

                {/* GitHub Item */}
                <a
                  href="https://github.com/SharathMengani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.06] hover:border-white/10 hover:bg-zinc-800/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <FiGithub size={15} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Source Code
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-zinc-200 group-hover:text-white transition-colors">
                        github.com/SharathMengani
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500 flex items-center justify-between">
              <span>Status: Active response within 24h</span>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 surface-card rounded-2xl p-7 flex flex-col justify-between h-full">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between h-full">

              <div className="space-y-4">
                {/* Engagement Type Selector */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Engagement Nature
                  </label>
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className={`w-full flex justify-between items-center rounded-lg px-4 py-3 text-xs sm:text-sm font-mono
                      bg-[#09090b] border ${errors.type ? "border-rose-500" : "border-white/10"}
                      focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-zinc-200`}
                  >
                    <span>
                      {options.find((o) => o.value === form.type)?.label || "Select Engagement Nature"}
                    </span>
                    <RiArrowDownSLine className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                  </button>

                  {errors.type && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.type}</p>
                  )}

                  {open && (
                    <div className="absolute z-50 mt-1.5 w-full rounded-lg bg-[#111114] border border-white/10 shadow-2xl overflow-hidden">
                      {options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setForm({ ...form, type: opt.value });
                            setOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-mono hover:bg-zinc-800 transition
                            ${form.type === opt.value ? "text-indigo-400 bg-zinc-900 font-semibold" : "text-zinc-300"}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Vance (Acme Corp)"
                    className={`w-full rounded-lg px-4 py-3 text-xs sm:text-sm font-sans
                      bg-[#09090b] border ${errors.name ? "border-rose-500" : "border-white/10"}
                      focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-zinc-100 placeholder-zinc-600`}
                  />
                  {errors.name && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Mobile if freelance */}
                {form.type === "freelance" && (
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="10-digit mobile number"
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      className={`w-full rounded-lg px-4 py-3 text-xs sm:text-sm font-mono
                        bg-[#09090b] border ${errors.mobile ? "border-rose-500" : "border-white/10"}
                        focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-zinc-100 placeholder-zinc-600`}
                    />
                    {errors.mobile && (
                      <p className="text-rose-400 text-xs mt-1 font-mono">{errors.mobile}</p>
                    )}
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex@acme.com"
                    className={`w-full rounded-lg px-4 py-3 text-xs sm:text-sm font-sans
                      bg-[#09090b] border ${errors.email ? "border-rose-500" : "border-white/10"}
                      focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-zinc-100 placeholder-zinc-600`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Requirement & Architectural Scope
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Provide context regarding the project, timeline, tech stack, or engineering role..."
                    className={`w-full rounded-lg px-4 py-3 text-xs sm:text-sm font-sans
                      bg-[#09090b] border ${errors.message ? "border-rose-500" : "border-white/10"}
                      focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition text-zinc-100 placeholder-zinc-600 resize-none`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Inline Feedback Banner */}
                {feedback && (
                  <div
                    className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-mono ${feedback.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                        : "bg-rose-500/10 border-rose-500/20 text-rose-300"
                      }`}
                  >
                    {feedback.type === "success" ? (
                      <FiCheckCircle size={15} className="shrink-0" />
                    ) : (
                      <FiAlertCircle size={15} className="shrink-0" />
                    )}
                    <span>{feedback.text}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white transition-all font-semibold text-xs sm:text-sm font-mono shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-4"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-3.5 w-3.5 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                    Dispatching Transmission...
                  </span>
                ) : (
                  <>
                    <FiSend size={14} />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
