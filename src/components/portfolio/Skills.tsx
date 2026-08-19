import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Code2, Database, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: Database,
    title: "Data Science",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn (Basic)",
      "Power BI",
      "Excel",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Streamlit"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I'm learning and working with"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}