import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// --- તમારે આ IDs તમારા ડેશબોર્ડ પરથી બદલવાના છે ---
const SERVICE_ID = "service_7u6k1vk";
const TEMPLATE_ID = "template_9yujlhs";
const PUBLIC_KEY = "ZVgBi_QYljY-IdxcW";
const GA_MEASUREMENT_ID = "G-HZHN03564M"; // તમારો G-XXXXXXXXXX ID

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

  // Google Analytics Event Trigger function
  const trackFormSubmission = (status: "success" | "error", service: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submission", {
        event_category: "Contact",
        event_label: service,
        status: status,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const fd = new FormData(formRef.current);
    const serviceSelected = fd.get("service_type") as string;
    
    const parsed = schema.safeParse({
      user_name: fd.get("user_name"),
      user_email: fd.get("user_email"),
      service_type: serviceSelected,
      message: fd.get("message"),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);
    try {
      // Demo Check
      if (SERVICE_ID.startsWith("YOUR_") || PUBLIC_KEY.startsWith("YOUR_")) {
        await new Promise((r) => setTimeout(r, 1200));
        toast.success("Ready! Add your real keys to send emails.");
        formRef.current.reset();
        return;
      }

      // Actual Email Send
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      // Track Success in GA
      trackFormSubmission("success", serviceSelected);
      
      toast.success("Message sent! 2.07 Studio will contact you shortly.");
      formRef.current.reset();
    } catch (err) {
      // Track Error in GA
      trackFormSubmission("error", serviceSelected);
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
      className="grid gap-6 md:gap-8 max-w-2xl mx-auto p-6 bg-black/40 backdrop-blur-sm rounded-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Full Name</span>
          <input name="user_name" type="text" required className={inputCls} placeholder="Your Name" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Email Address</span>
          <input name="user_email" type="email" required className={inputCls} placeholder="email@example.com" />
        </label>
      </div>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">What service are you looking for?</span>
        <select
          name="service_type"
          required
          defaultValue=""
          className={inputCls + " appearance-none cursor-pointer"}
        >
          <option value="" disabled className="bg-zinc-900">Choose a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-zinc-900">{s}</option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Project Brief</span>
        <textarea
          name="message"
          required
          rows={4}
          className={inputCls + " resize-none"}
          placeholder="Describe your vision..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex items-center justify-center gap-3 self-start mt-2 px-10 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-zinc-200 active:scale-95 disabled:opacity-50"
      >
        {loading ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
        ) : (
          <>Send Message <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" /></>
        )}
      </button>
    </motion.form>
  );
}
