"use client";

import { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

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
    mobile: ""
  });

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Freelance", value: "freelance" },
    { label: "Full Time", value: "full-time" },
    { label: "Contract", value: "contract" },
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
        error = "Enter a valid email";
    }

    if (name === "message") {
      if (!value.trim()) error = "Message cannot be empty";
      else if (value.length < 10)
        error = "Message must be at least 10 characters";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validate = () => {
    const newErrors: any = {};

    if (!form.type.trim()) newErrors.type = "Type is required";
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
      newErrors.email = "Enter a valid email";

    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    else if (form.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        throw new Error("Failed");
      }

      setForm({ name: "", email: "", message: "", type: "full-time", mobile: "" });
      setErrors({ name: "", email: "", message: "", type: "", mobile: "" });

      alert("Message sent successfully 🚀");
    } catch (err) {
      alert("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#05060a] text-white relative overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Contact
        </p>

        <h2 className="text-5xl font-black mb-8">
          Let’s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Great
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="mt-14 space-y-6 text-left">
          <div className="relative" ref={dropdownRef}>
            {/* Trigger */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`w-full flex justify-between items-center rounded-2xl px-6 py-4 outline-none cursor-pointer
    bg-white/5 backdrop-blur-xl border 
    ${errors.type ? "border-red-500" : "border-white/10"}
    focus:border-cyan-500 transition text-gray-300`}
            >
              <span>
                {options.find((o) => o.value === form.type)?.label ||
                  "Select Hiring Type"}
              </span>

              <RiArrowDownSLine className={`transition ${open ? "rotate-180" : ""}`} />

            </button>

            {errors.type && (
              <p className="text-red-400 text-sm mt-2">{errors.type}</p>
            )}

            {/* Dropdown */}
            {open && (
              <div
                className="absolute z-50 mt-3 w-full rounded-2xl 
      bg-[#0b0d14] border border-white/10 
      backdrop-blur-xl overflow-hidden shadow-xl"
              >
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setForm({ ...form, type: opt.value });
                      setOpen(false);
                    }}
                    className={`w-full text-left px-6 py-3 hover:bg-white/5 transition cursor-pointer
            ${form.type === opt.value
                        ? "text-cyan-400"
                        : "text-gray-300"
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full rounded-2xl px-6 py-4 outline-none 
              bg-white/5 backdrop-blur-xl border 
              ${errors.name ? "border-red-500" : "border-white/10"}
              focus:border-cyan-500 transition`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          {form.type === "freelance" && (
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={form.mobile}
                onChange={(e) =>
                  setForm({ ...form, mobile: e.target.value })
                }
                className={`w-full rounded-2xl px-6 py-4 outline-none 
      bg-white/5 backdrop-blur-xl border 
      ${errors.mobile ? "border-red-500" : "border-white/10"}
      focus:border-cyan-500 transition`}
              />

              {errors.mobile && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.mobile}
                </p>
              )}
            </div>
          )}
          {/* Email */}
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full rounded-2xl px-6 py-4 outline-none 
              bg-white/5 backdrop-blur-xl border 
              ${errors.email ? "border-red-500" : "border-white/10"}
              focus:border-cyan-500 transition`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Message"
              className={`w-full rounded-2xl px-6 py-4 outline-none 
              bg-white/5 backdrop-blur-xl border 
              ${errors.message ? "border-red-500" : "border-white/10"}
              focus:border-cyan-500 transition`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">
                {errors.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 rounded-full cursor-pointer
                       bg-gradient-to-r from-cyan-500 to-blue-600 
                       hover:from-cyan-400 hover:to-blue-500 
                       transition text-black font-semibold 
                       shadow-lg shadow-cyan-500/20
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}