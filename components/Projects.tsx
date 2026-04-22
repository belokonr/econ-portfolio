"use client";

import { Code2 } from "lucide-react";
import { useState } from "react";

interface TechDetail {
  name: string;
  role: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  techDetails: TechDetail[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "High-Dimensional GDP Growth Forecasting with Regularized Regression",
    description:
      "Forecasts 5-year average GDP per capita growth across 120+ countries using 50+ World Development Indicators, illustrating how OLS breaks down in high-dimensional settings and how Ridge and Lasso regularization recover reliable out-of-sample predictive performance.",
    tags: ["Python", "scikit-learn", "matplotlib"],
    techDetails: [
      {
        name: "Python",
        role: "Data pipeline, feature engineering, and end-to-end model training",
      },
      {
        name: "scikit-learn",
        role: "Ridge & Lasso regression, k-fold cross-validation, StandardScaler",
      },
      {
        name: "matplotlib",
        role: "Coefficient path plots and prediction vs. actual visualizations",
      },
    ],
    github:
      "https://github.com/belokonr/ECON5200-Applied-Data-Analytics-in-Economics/blob/main/lab16/lab16.ipynb",
  },
  {
    title: "The Architecture of Dimensionality: Hedonic Pricing & the FWL Theorem",
    description:
      "Constructs a multivariate hedonic pricing model on synthetic California real estate data and manually proves the Frisch-Waugh-Lovell (FWL) theorem, demonstrating how OLS mechanically isolates partial effects by partialling out shared covariance among regressors.",
    tags: ["Python", "scikit-learn", "NLTK", "Plotly"],
    techDetails: [
      {
        name: "Python",
        role: "Model construction and algebraic FWL proof via matrix operations",
      },
      {
        name: "scikit-learn",
        role: "OLS via LinearRegression, residual extraction, R² scoring",
      },
      {
        name: "NLTK",
        role: "Text preprocessing for feature extraction from property descriptions",
      },
      {
        name: "Plotly",
        role: "Interactive scatter plots of partial regression relationships",
      },
    ],
    github:
      "https://github.com/belokonr/ECON5200-Applied-Data-Analytics-in-Economics/blob/main/lab13/lab13.ipynb",
  },
  {
    title: "Time Series Diagnostics & Advanced Decomposition",
    description:
      "Develops a robust diagnostic and decomposition framework for time series analysis, addressing common specification errors in seasonal-trend decomposition and stationarity testing while extending standard methods to handle multi-seasonal patterns, structural breaks, and trend uncertainty quantification.",
    tags: ["Python", "Prophet", "statsmodels", "pandas"],
    techDetails: [
      {
        name: "Python",
        role: "Orchestration of the decomposition pipeline and diagnostic tests",
      },
      {
        name: "Prophet",
        role: "Multi-seasonal decomposition with trend uncertainty estimation",
      },
      {
        name: "statsmodels",
        role: "ADF/KPSS stationarity tests, STL decomposition, structural break detection",
      },
      {
        name: "pandas",
        role: "Time series indexing, resampling, and rolling window statistics",
      },
    ],
    github:
      "https://github.com/belokonr/ECON5200-Applied-Data-Analytics-in-Economics/blob/main/lab20/lab_ch20_diagnostic.ipynb",
  },
];

const uniqueTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
const filterOptions = ["All", ...uniqueTags];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        height: "320px",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderColor: hovered
          ? "color-mix(in srgb, var(--accent-purple) 55%, var(--border-color))"
          : "var(--border-color)",
        boxShadow: hovered
          ? "0 12px 40px color-mix(in srgb, var(--accent-purple) 15%, transparent)"
          : "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Default card face */}
      <div className="absolute inset-0 p-6 flex flex-col gap-3">
        <div className="flex-1 min-h-0 overflow-hidden">
          <h3
            className="text-base font-bold mb-2 leading-snug"
            style={{
              color: "var(--text-primary)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--text-muted)",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--accent-purple) 15%, transparent)",
                color: "var(--accent-purple)",
                border:
                  "1px solid color-mix(in srgb, var(--accent-purple) 30%, transparent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="pt-3 flex items-center"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--text-muted)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Code2 size={13} />
              View Notebook
            </a>
          )}
          <span
            className="ml-auto text-xs italic"
            style={{ color: "color-mix(in srgb, var(--text-muted) 50%, transparent)" }}
          >
            Hover to explore
          </span>
        </div>
      </div>

      {/* Tech detail overlay — slides up on hover */}
      <div
        className="absolute inset-0 p-6 flex flex-col gap-4"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "2px solid var(--accent-pink)",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "var(--accent-pink)" }}
        >
          Technologies Used
        </p>

        <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
          {project.techDetails.map((tech) => (
            <div key={tech.name} className="flex gap-3 items-start">
              <span
                className="text-xs font-bold shrink-0"
                style={{ color: "var(--accent-purple)", width: "88px" }}
              >
                {tech.name}
              </span>
              <span
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {tech.role}
              </span>
            </div>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-80 mt-auto pt-3"
            style={{
              borderTop: "1px solid var(--border-color)",
              color: "var(--accent-pink)",
            }}
          >
            <Code2 size={13} />
            Open Notebook on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-pink)" }}
          >
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            Projects
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Data science and econometrics projects combining statistical rigor
            with practical impact.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filterOptions.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90"
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, var(--accent-pink), var(--accent-purple))",
                        color: "white",
                        boxShadow:
                          "0 0 16px color-mix(in srgb, var(--accent-pink) 35%, transparent)",
                      }
                    : {
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-muted)",
                      }
                }
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center py-16 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No projects match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
