import { useState, FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Internship Opportunity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate brief network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="font-code text-xs uppercase tracking-widest text-[#00f2fe]">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#e4e8f3]">
            Let's Connect
          </h2>
          <p className="text-[#9ba7c0] max-w-xl text-sm sm:text-base">
            Open to internships, research projects, open-source collaborations, and engineering discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Email card */}
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] flex flex-col gap-3 shadow-md">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#131926] flex items-center justify-center text-[#00f2fe]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-[#1c2436] hover:bg-[#263045] text-xs font-code text-[#6ff6ff] flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00f2fe]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="font-code text-xs text-[#9ba7c0] uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PORTFOLIO_INFO.email}`}
                  className="text-sm sm:text-base font-semibold text-[#e4e8f3] hover:text-[#00f2fe] transition-colors break-all"
                >
                  {PORTFOLIO_INFO.email}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-[#232e42] flex items-center gap-4 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#131926] flex items-center justify-center text-[#00f2fe] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-code text-xs text-[#9ba7c0] uppercase tracking-wider">
                  Location
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#e4e8f3]">
                  {PORTFOLIO_INFO.location}
                </span>
              </div>
            </div>

            {/* Status & Availability card */}
            <div className="p-6 rounded-2xl bg-[#131926]/70 border border-[#00f2fe]/30 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00f2fe]" />
                <span className="font-code text-xs text-[#6ff6ff] uppercase tracking-wider font-semibold">
                  Status: Available
                </span>
              </div>
              <p className="text-xs text-[#9ba7c0] leading-relaxed">
                Currently actively considering software engineering &amp; data science internships, mentorship connections, and project collaborations.
              </p>
            </div>
          </div>

          {/* Right: Functional Message Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0d121c] border border-[#232e42] shadow-xl">
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#e4e8f3]">
                  Message Sent!
                </h3>
                <p className="text-sm text-[#9ba7c0] max-w-md">
                  Thank you for reaching out, <strong className="text-[#e4e8f3]">{formData.name}</strong>. Your message regarding "{formData.topic}" has been logged, and I will reply to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Internship Opportunity', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#131926] border border-[#232e42] hover:border-[#00f2fe]/50 text-xs font-code text-[#6ff6ff] transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-[#e4e8f3]">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#9ba7c0]">
                    Fill in the details below to start a conversation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="font-code text-xs text-[#9ba7c0]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#131926] border border-[#232e42] text-sm text-[#e4e8f3] focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="font-code text-xs text-[#9ba7c0]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-2.5 rounded-xl bg-[#131926] border border-[#232e42] text-sm text-[#e4e8f3] focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-topic"
                    className="font-code text-xs text-[#9ba7c0]"
                  >
                    Topic / Category
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#131926] border border-[#232e42] text-sm text-[#e4e8f3] focus:outline-none focus:border-[#00f2fe]/60 transition-colors cursor-pointer"
                  >
                    <option value="Internship Opportunity">Internship Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Research / AI Discussion">Research / AI Discussion</option>
                    <option value="Other Inquiries">Other Inquiries</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="font-code text-xs text-[#9ba7c0]"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-2.5 rounded-xl bg-[#131926] border border-[#232e42] text-sm text-[#e4e8f3] focus:outline-none focus:border-[#00f2fe]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-3 rounded-xl bg-[#00f2fe] text-[#00373d] font-code text-sm font-semibold tracking-wide hover:bg-[#6ff6ff] shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_28px_rgba(0,242,254,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#00373d] border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message</span>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
