"use client";

import { ArrowDown, Code2, Link2, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent-purple)" }}
            >
              Economics &amp; Data Science
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Rashelle Belokon</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-6 font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Master&apos;s in Economics · Northeastern University
            </p>

            <p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
              style={{ color: "var(--text-muted)" }}
            >
              Economics Master&apos;s student with a Bachelor&apos;s in Business
              Administration and Economics. Passionate about leveraging machine
              learning for econometrics and statistical analysis, with career
              goals in the actuarial and insurance space.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="gradient-bg px-6 py-3 rounded-full text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                style={{
                  boxShadow: "0 0 20px color-mix(in srgb, var(--accent-pink) 30%, transparent)",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-80"
                style={{
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                  backgroundColor: "var(--bg-card)",
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href="mailto:belokon.r@northeastern.edu"
                className="p-3 rounded-full transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rashelle-belokon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                }}
                aria-label="LinkedIn"
              >
                <Link2 size={18} />
              </a>
              <a
                href="https://github.com/rashelle-belokon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-muted)",
                }}
                aria-label="GitHub"
              >
                <Code2 size={18} />
              </a>
            </div>
          </div>

          {/* Headshot placeholder */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-md"
                style={{
                  background: "linear-gradient(135deg, var(--accent-pink), var(--accent-purple))",
                }}
              />
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, var(--accent-pink), var(--accent-purple))",
                }}
              >
                RB
              </div>
              {/* Replace the div above with an <img> once you have a headshot */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 animate-bounce"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
