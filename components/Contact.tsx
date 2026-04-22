"use client";

import { Mail, Link2, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--accent-pink)" }}
        >
          Let&apos;s Connect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block mb-4">
          Get In Touch
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed mb-12"
          style={{ color: "var(--text-muted)" }}
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation about data and economics. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          <a
            href="mailto:belokon.r@northeastern.edu"
            className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 hover:-translate-y-0.5 group"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "color-mix(in srgb, var(--accent-pink) 50%, var(--border-color))";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px color-mix(in srgb, var(--accent-pink) 10%, transparent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div
              className="p-3 rounded-xl gradient-bg flex-shrink-0"
            >
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                Email
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                belokon.r@northeastern.edu
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/rashelle-belokon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-200 hover:-translate-y-0.5 group"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "color-mix(in srgb, var(--accent-purple) 50%, var(--border-color))";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 30px color-mix(in srgb, var(--accent-purple) 10%, transparent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-color)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="p-3 rounded-xl gradient-bg flex-shrink-0">
              <Link2 size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                LinkedIn
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                rashelle-belokon
              </p>
            </div>
            <ExternalLink size={14} style={{ color: "var(--text-muted)" }} />
          </a>
        </div>

        <a
          href="mailto:belokon.r@northeastern.edu"
          className="inline-block gradient-bg px-8 py-4 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          style={{
            boxShadow: "0 0 25px color-mix(in srgb, var(--accent-pink) 25%, transparent)",
          }}
        >
          Say Hello
        </a>
      </div>

      <footer className="mt-24 text-center text-xs" style={{ color: "var(--text-muted)" }}>
        <p>© {new Date().getFullYear()} Rashelle Belokon. Built with Next.js &amp; Tailwind CSS.</p>
      </footer>
    </section>
  );
}
