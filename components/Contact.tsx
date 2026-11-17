"use client";

import { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMail, FiMapPin, FiGithub, FiCheckCircle, FiAlertCircle, FiPhone } from "react-icons/fi";

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
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const options = [
    { label: "Full Time Opportunity", value: "full-time" },
    { label: "Contract / Project", value: "contract" },
    { label: "Freelance Consultation", value: "freelance" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // ⚡ realtime validation
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

    if (!form.type.trim()) newErrors.type = "Hiring type is required";
    if (!form.name.trim()) newErrors.name = "Name is required";

    if (form.type === "freelance") {
      if (!form.mobile.trim()) {
        newErrors.mobile = "Mobile number is required for freelance inquiries";
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
        text: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
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
    <section
      id="contact"
      className="py-32 px-6 bg-[#08070d] text-white relative overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
              Exceptional
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Have a frontend engineering role, high-concurrency FinTech/Crypto project, or conversational AI platform in mind? Let’s connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Direct contact cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/30 transition duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Prefer email or direct phone contact? Feel free to reach out directly.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919666096524"
                  className="flex items-center gap-3.5 text-gray-300 hover:text-violet-400 transition-colors p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone</p>
                    <p className="text-sm font-medium">+91 96660 96524</p>
                  </div>
                </a>

                <a
                  href="mailto:chanduvarma57@gmail.com"
                  className="flex items-center gap-3.5 text-gray-300 hover:text-violet-400 transition-colors p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <FiMail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium truncate">chanduvarma57@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-gray-300 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="text-sm font-medium">Hyderabad, India</p>
                  </div>
                </div>

                <a
                  href="https://github.com/SharathMengani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-gray-300 hover:text-violet-400 transition-colors p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <FiGithub size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">GitHub</p>
                    <p className="text-sm font-medium">github.com/SharathMengani</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type Select */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className={`w-full flex justify-between items-center rounded-2xl px-6 py-4 outline-none cursor-pointer
                    bg-white/5 backdrop-blur-xl border 
                    ${errors.type ? "border-red-500" : "border-white/10"}
                    focus:border-violet-500 transition text-gray-300`}
                >
                  <span>
                    {options.find((o) => o.value === form.type)?.label ||
                      "Select Hiring Type"}
                  </span>
                  <RiArrowDownSLine
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {errors.type && (
                  <p className="text-red-400 text-xs mt-1.5 ml-2">{errors.type}</p>
                )}

                {open && (
                  <div
                    className="absolute z-50 mt-2 w-full rounded-2xl 
                      bg-[#0e0d17] border border-white/10 
                      backdrop-blur-xl overflow-hidden shadow-2xl"
                  >
                    {options.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setForm({ ...form, type: opt.value });
                          setOpen(false);
                        }}
                        className={`w-full text-left px-6 py-3.5 hover:bg-white/10 transition cursor-pointer text-sm
                          ${form.type === opt.value
                            ? "text-violet-400 font-semibold bg-violet-950/40"
                            : "text-gray-300"
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Name */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full rounded-2xl px-6 py-4 outline-none 
                    bg-white/5 backdrop-blur-xl border 
                    ${errors.name ? "border-red-500" : "border-white/10"}
                    focus:border-violet-500 transition text-white placeholder-gray-500 text-sm`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 ml-2">{errors.name}</p>
                )}
              </div>

              {/* Mobile if freelance */}
              {form.type === "freelance" && (
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your 10-digit Mobile Number"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                    className={`w-full rounded-2xl px-6 py-4 outline-none 
                      bg-white/5 backdrop-blur-xl border 
                      ${errors.mobile ? "border-red-500" : "border-white/10"}
                      focus:border-violet-500 transition text-white placeholder-gray-500 text-sm`}
                  />
                  {errors.mobile && (
                    <p className="text-red-400 text-xs mt-1.5 ml-2">{errors.mobile}</p>
                  )}
                </div>
              )}

              {/* Email */}
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className={`w-full rounded-2xl px-6 py-4 outline-none 
                    bg-white/5 backdrop-blur-xl border 
                    ${errors.email ? "border-red-500" : "border-white/10"}
                    focus:border-violet-500 transition text-white placeholder-gray-500 text-sm`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 ml-2">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project, timeline, or requirement..."
                  className={`w-full rounded-2xl px-6 py-4 outline-none 
                    bg-white/5 backdrop-blur-xl border 
                    ${errors.message ? "border-red-500" : "border-white/10"}
                    focus:border-violet-500 transition text-white placeholder-gray-500 text-sm resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 ml-2">{errors.message}</p>
                )}
              </div>

              {/* Inline Feedback Banner */}
              {feedback && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-2xl border text-sm ${feedback.type === "success"
                    ? "bg-violet-500/10 border-violet-500/30 text-violet-300"
                    : "bg-red-500/10 border-red-500/30 text-red-300"
                    }`}
                >
                  {feedback.type === "success" ? (
                    <FiCheckCircle size={18} className="shrink-0" />
                  ) : (
                    <FiAlertCircle size={18} className="shrink-0" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-full cursor-pointer
                           bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600
                           hover:opacity-95 transition text-white font-bold 
                           shadow-lg shadow-violet-600/25
                           disabled:opacity-60 disabled:cursor-not-allowed text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  "Send Message 🚀"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
