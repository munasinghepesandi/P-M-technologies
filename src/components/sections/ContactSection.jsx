import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { sendContactForm } from "./contactService";

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

const inputClass =
  "w-full rounded-xl border border-white/[0.09] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-500/15 disabled:opacity-50";

export const ContactSection = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType]       = useState("idle");
  const [isSubmitting, setIsSubmitting]   = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form     = event.currentTarget;
    const formData = new FormData(form);
    const payload  = {
      name:    String(formData.get("name")    || "").trim(),
      email:   String(formData.get("email")   || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setIsSubmitting(true);
    setStatusType("loading");
    setStatusMessage("Sending your message…");

    try {
      const responseText = await sendContactForm(payload);

      if (responseText.trim().toLowerCase() === "success") {
        form.reset();
        setStatusType("success");
        setStatusMessage("Message sent! I'll get back to you shortly. 🎉");
      } else {
        setStatusType("error");
        setStatusMessage(responseText || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusType("error");
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    { Icon: LocationIcon, label: "Based in",       value: "Sri Lanka 🇱🇰" },
    { Icon: ClockIcon,    label: "Response time",  value: "Within 24 hours" },
    { Icon: MailIcon,     label: "Open to",        value: "Freelance & Full-time" },
  ];

  const statusColors = {
    success: "border-green-500/20 bg-green-500/8 text-green-300",
    error:   "border-red-500/20   bg-red-500/8   text-red-300",
    loading: "border-blue-500/20  bg-blue-500/8  text-blue-300",
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <RevealOnScroll>
        <div className="mx-auto max-w-7xl grid gap-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">

          {/* ── Left: Info ── */}
          <div>
            <div className="section-eyebrow text-blue-400/80">Get In Touch</div>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Let's build something{" "}
              <span className="gradient-text">great together.</span>
            </h2>
            <p className="mt-5 max-w-md leading-8 text-slate-400 text-sm">
              Open to freelance projects, collaborations, and full-time opportunities. Send me a message and I'll reply as soon as possible.
            </p>

            <div className="mt-8 space-y-3">
              {infoItems.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-blue-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/15 text-blue-400">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-sm font-medium text-slate-200">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Name + Email side by side on sm+ */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input type="text" id="name" name="name" required disabled={isSubmitting} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" required disabled={isSubmitting} className={inputClass} placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows={6}
                  disabled={isSubmitting}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or opportunity…"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center !rounded-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon />
                  </>
                )}
              </button>

              {statusMessage && (
                <p
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm font-medium text-center ${statusColors[statusType] ?? statusColors.loading}`}
                >
                  {statusMessage}
                </p>
              )}

            </form>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
