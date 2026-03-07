import { Mail, ArrowRight } from "lucide-react";

export function NewsletterBanner() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
            <Mail size={22} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl text-white mb-3" style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
              Stay in the loop
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Get the best stories delivered to your inbox every week. No spam, ever.
            </p>
          </div>
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/10 text-white placeholder-gray-500 text-sm px-4 py-3 rounded-full outline-none focus:border-white/30 transition-colors duration-200"
            />
            <button className="flex items-center gap-2 bg-white text-black text-sm px-5 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap" style={{ fontWeight: 600 }}>
              Subscribe
              <ArrowRight size={14} />
            </button>
          </div>
          <p className="text-xs text-gray-600">
            Join 12,000+ readers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
