import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// I will provide these IDs from my EmailJS dashboard.
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const schema = z.object({
  user_name: z.string().trim().min(2, "Please enter your full name").max(100),
  user_email: z.string().trim().email("Enter a valid email").max(255),
  service_type: z.string().min(1, "Please pick a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

const SERVICES = [
  "Web & App Development",
  "Digital Marketing & SEO",
  "Graphic Design & Branding",
  "Content Strategy",
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const parsed = schema.safeParse({
      user_name: fd.get("user_name"),
      user_email: fd.get("user_email"),
      service_type: fd.get("service_type"),
      message: fd.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);
    try {
      if (
        SERVICE_ID.startsWith("YOUR_") ||
        TEMPLATE_ID.startsWith("YOUR_") ||
        PUBLIC_KEY.startsWith("YOUR_")
      ) {
        await new Promise((r) => setTimeout(r, 800));
        toast.success("Message ready — add your EmailJS keys to send for real.");
        formRef.current.reset();
        return;
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      toast.success("Message sent. We'll be in touch shortly.");
      formRef.current.reset();
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-3 text-base text-white placeholder:text-white/40 transition-colors";

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="grid gap-6 md:gap-8 max-w-2xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">Full Name</span>
          <input name="user_name" type="text" required className={inputCls} placeholder="John Doe" />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">Email</span>
          <input name="user_email" type="email" required className={inputCls} placeholder="hello@domain.com" />
        </label>
      </div>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Service Interest</span>
        <select
          name="service_type"
          required
          defaultValue=""
          className={inputCls + " appearance-none cursor-pointer"}
        >
          <option value="" disabled className="bg-black">
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-black">
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-xs uppercase tracking-[0.2em] text-white/60">Message</span>
        <textarea
          name="message"
          required
          rows={4}
          className={inputCls + " resize-none"}
          placeholder="Tell us about your project..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex items-center justify-center gap-3 self-start mt-2 px-8 py-4 bg-white text-black font-semibold uppercase tracking-[0.2em] text-sm transition-all hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </motion.form>
  );
}