"use client";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "SQL", level: 80, category: "Programming" },
  { name: "pandas", level: 85, category: "Data Analysis" },
  { name: "scikit-learn", level: 80, category: "Machine Learning" },
  { name: "Plotly", level: 75, category: "Visualization" },
  { name: "Git", level: 75, category: "Tools" },
];

const categories = ["Programming", "Data Analysis", "Machine Learning", "Visualization", "Tools"];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {skill.name}
        </span>
        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          {skill.level}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: "color-mix(in srgb, var(--accent-purple) 15%, var(--bg-secondary))" }}
      >
        <div
          className="h-full rounded-full gradient-bg"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const grouped = categories.reduce<Record<string, Skill[]>>((acc, cat) => {
    const filtered = skills.filter((s) => s.category === cat);
    if (filtered.length > 0) acc[cat] = filtered;
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-purple)" }}
          >
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text inline-block">
            Skills
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Technical tools and languages I use for data analysis, machine
            learning, and econometric modeling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(grouped).map(([category, categorySkills]) => (
            <div
              key={category}
              className="rounded-2xl p-6 flex flex-col gap-5"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--accent-pink)" }}
              >
                {category}
              </h3>
              {categorySkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          ))}

          {/* Additional skills as badges */}
          <div
            className="rounded-2xl p-6 flex flex-col gap-4 md:col-span-2"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h3
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "var(--accent-pink)" }}
            >
              Additional Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Econometrics",
                "Statistical Modeling",
                "Regression Analysis",
                "Time Series",
                "A/B Testing",
                "Data Cleaning",
                "NumPy",
                "Matplotlib",
                "Jupyter",
                "Excel",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent-pink) 12%, transparent)",
                    color: "var(--accent-pink)",
                    border:
                      "1px solid color-mix(in srgb, var(--accent-pink) 25%, transparent)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
