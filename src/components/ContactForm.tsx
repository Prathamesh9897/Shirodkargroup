import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { set } from "date-fns";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    debugger
    e.preventDefault();

    setSending(true);

    emailjs.send(
      "service_8864u34",
      "template_zh4s6z4",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "lZ36BohOjW5_rfihQ"
    )
      .then(
        () => {
          setSending(false);
          toast.success("Message sent successfully ✅");
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setSending(false);
          toast.error("Something went wrong. Please try again later.");
        }
      )
      .catch(
        () => {
          setSending(false);
          alert("Something went wrong. Please try again later.");
        }
      )



    const trimmed = { name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), message: form.message.trim() };
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (trimmed.name.length > 100 || trimmed.email.length > 255 || trimmed.message.length > 2000) {
      toast.error("Input exceeds maximum length.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body font-medium">Get in Touch</p>
            </div>
            <h2 className="text-display-md md:text-display-lg font-display font-bold mb-7">
              Begin Your <span className="gold-text italic">Journey</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.8] mb-12">
              Whether you're searching for your dream home or ready to list a distinguished property, our team of luxury specialists is here to guide you every step of the way.
            </p>

            <div className="space-y-7">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "inquiries@aurum.com" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "+1 (310) 555-GOLD" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "9100 Wilshire Blvd, Beverly Hills" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:gold-glow transition-shadow duration-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-foreground/75 font-body text-[15px]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            //action="https://formsubmit.co/khadtprathamesh@gmail.com" method="POST"
            onSubmit={handleSubmit}
            className="p-8 md:p-10 lg:p-12 rounded-3xl bg-card border border-border premium-shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2.5 font-body font-medium">Full Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your full name"
                  className="premium-input"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2.5 font-body font-medium">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="premium-input"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2.5 font-body font-medium">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+1 (___) ___-____"
                  className="premium-input"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2.5 font-body font-medium">Message *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us about your dream property..."
                  rows={4}
                  className="premium-input resize-none"
                  maxLength={2000}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full mt-8 premium-btn gold-glow disabled:opacity-60 disabled:pointer-events-none !rounded-xl"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
