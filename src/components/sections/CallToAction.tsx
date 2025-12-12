import { useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/container";
import Paragraph from "../shared/Paragraph";

export const CTA = () => {
    const [open, setOpen] = useState(false);
    const [sending, setSending] = useState(false);
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        reason: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        if (!form.name.trim()) return "Please enter your name.";
        if (!form.email.includes("@")) return "Please enter a valid email.";
        if (!form.reason.trim()) return "Please enter your message.";
        return null;
    };

    const showToast = (type: "success" | "error", message: string) => {
        setToast({ type, message });

        setTimeout(() => setToast(null), 3000); // Auto-close after 3 seconds
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            showToast("error", err);
            return;
        }

        setSending(true);

        try {
            const res = await fetch("https://formspree.io/f/xkgdkgjk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            showToast("success", "Message sent successfully 💜");
            setForm({ name: "", email: "", reason: "" });

            setTimeout(() => setOpen(false), 800);
        } catch {
            showToast("error", "Something went wrong. Try again later.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="cta" className="pb-20 relative">
            <Container>
                <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
                            Quick Start your{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent drop-shadow-sm">
                                own AI
                            </span>{" "}
                            Business
                        </h1>

                        <Paragraph className="pt-10">
                            Leverage our AI expertise to build your own solutions. From concept to deployment,
                            we provide the tools and support you need to succeed.
                        </Paragraph>

                        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                            <Button onClick={() => setOpen(true)}>Get In Touch</Button>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => !sending && setOpen(false)}
                    />

                    <div className="relative z-20 w-full max-w-lg rounded-2xl border border-box-border bg-box-bg shadow-lg p-6">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-heading-1">Get In Touch</h3>
                            <button
                                onClick={() => !sending && setOpen(false)}
                                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mt-2 text-sm text-heading-3">
                            Tell us a bit about yourself and why you're reaching out.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                            <div>
                                <label className="block text-sm text-heading-3">Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="
                                        w-full mt-1 px-3 py-2 rounded-lg border border-box-border
    bg-white dark:bg-white/10
    input-text
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    outline-none focus:ring-2 focus:ring-violet-400
                                    "
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-heading-3">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="
                                       w-full mt-1 px-3 py-2 rounded-lg border border-box-border
    bg-white dark:bg-white/10
    input-text
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    outline-none focus:ring-2 focus:ring-violet-400
                                    "
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-heading-3">Reason / Message</label>
                                <textarea
                                    name="reason"
                                    value={form.reason}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full mt-1 px-3 py-2 rounded-lg border border-box-border
    bg-white dark:bg-white/10
    input-text
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    outline-none focus:ring-2 focus:ring-violet-400
                                    "
                                    placeholder="Tell us briefly why you want to connect"
                                />
                            </div>

                            <div className="flex items-center justify-between gap-3">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-violet-600 text-white hover:scale-105 transition disabled:opacity-60"
                                >
                                    {sending ? "Sending..." : "Send Message"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => !sending && setOpen(false)}
                                    className="text-sm underline text-heading-3"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* TOAST NOTIFICATIONS */}
            {toast && (
                <div className="
                    fixed bottom-6 right-6 z-50 
                    px-5 py-3 rounded-lg shadow-lg 
                    text-white text-sm font-medium
                    animate-[slideUp_0.3s_ease-out]
                    "
                    style={{
                        backgroundColor: toast.type === "success" ? "#4ade80" : "#ef4444",
                    }}
                >
                    {toast.message}
                </div>
            )}
        </section>
    );
};

export default CTA;
