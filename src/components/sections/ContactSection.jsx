import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import { sendContactForm } from "./contactService";


export const ContactSection = () => {
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("idle");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setStatusType("loading");
        setStatusMessage("Sending message...");

        try {
            const responseText = await sendContactForm(formData);

            if (responseText.trim().toLowerCase() === "success") {
                form.reset();
                setStatusType("success");
                setStatusMessage("Thank you for contacting us. We will get back to you shortly.");
                return;
            }

            setStatusType("error");
            setStatusMessage(responseText || "There was an error submitting the form. Please try again later.");
        } catch (error) {
            setStatusType("error");
            setStatusMessage(error instanceof Error ? error.message : "There was an error submitting the form. Please try again later.");
        }
    };

    return(
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
            <RevealOnScroll>

                <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col justify-center">
                        <div className="section-eyebrow text-cyan-300/80">Contact</div>
                        <h2 className="section-title mt-3 text-3xl sm:text-4xl font-bold text-white md:text-5xl">
                            Let us create something that feels sharp and memorable.
                        </h2>
                        <p className="mt-5 max-w-xl leading-8 text-slate-400">
                            If you need a website, a redesign, or help turning an idea into a polished interface, send a message and I will reply with the next practical step.
                        </p>

                        <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 sm:grid-cols-2">
                            <div className="glass-panel rounded-2xl p-5">
                                <div className="text-sm text-slate-400">Response</div>
                                <div className="mt-1 text-lg font-semibold text-white">Fast, direct, and clear</div>
                            </div>
                            <div className="glass-panel rounded-2xl p-5">
                                <div className="text-sm text-slate-400">Focus</div>
                                <div className="mt-1 text-lg font-semibold text-white">Web design and development</div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel rounded-[2rem] p-5 sm:p-6 md:p-8">
                        <form id="contact-form" className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">Name</label>
                                <input type="text" 
                                id="name" name="name" 
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/10" placeholder="Your name" 
                                required/>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">Email</label>
                                <input type="email" 
                                id="email" 
                                name="email" 
                                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/10" placeholder="you@example.com" 
                                required/>
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">Message</label>
                                <textarea
                                 id="message" 
                                 name="message"
                                 required
                                 rows={5} 
                                 className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-2.5 sm:py-3 text-white transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/10" placeholder="Tell me about your project.."/>
                            </div>

                            <button type="submit" 
                            className="w-full rounded-2xl bg-cyan-400 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_18px_40px_rgba(34,211,238,0.22)]">Send message</button>

                            {statusMessage ? (
                                <p
                                    aria-live="polite"
                                    className={`rounded-2xl border px-4 py-3 text-sm font-medium ${statusType === "success"
                                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                                        : statusType === "error"
                                            ? "border-rose-400/20 bg-rose-400/10 text-rose-300"
                                            : "border-cyan-400/20 bg-cyan-400/10 text-cyan-100"
                                        }`}
                                >
                                    {statusMessage}
                                </p>
                            ) : null}
                        </form>
                    </div>
                </div>

            </RevealOnScroll>
        </section>
    );
};