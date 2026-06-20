import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_KEY) {
      setResult('Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file (see README).');
      return;
    }

    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.target);

    // Use the access key from environment
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data && data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        setResult((data && data.message) || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setResult("An error occurred while sending the message.");
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-20 max-w-7xl mx-auto">
      <div className="glass-card p-8 md:p-12 rounded-3xl grid md:grid-cols-2 gap-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a2be2]/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00f0ff]/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div>
          <h2 className="text-4xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex items-center gap-4 text-xl">
            <div className="p-4 bg-[#00f0ff]/10 rounded-2xl text-[#00f0ff]">
              <Mail size={24} />
            </div>
            <span>Contact me directly via the form!</span>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <input type="hidden" name="subject" value="New Submission from DS Portfolio" />
          
          <div className="space-y-4">
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Your Name" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] transition-colors"
            />
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Your Email" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] transition-colors"
            />
            <textarea 
              name="message" 
              required 
              rows="5"
              placeholder="Your Message..." 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f0ff] transition-colors resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send size={18} />
          </button>
          
          {result && (
            <p className={`text-center font-medium ${result.includes('success') ? 'text-green-400' : 'text-yellow-400'}`}>
              {result}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
