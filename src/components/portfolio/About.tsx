import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { BarChart3, BrainCircuit, Code2, Lightbulb } from "lucide-react";

const highlights = [
  { icon: BarChart3, label: "Data Analytics" },
  { icon: BrainCircuit, label: "Machine Learning" },
  { icon: Code2, label: "Python Development" },
  { icon: Lightbulb, label: "Real-world Problem Solving" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About Me" title="A student learning by building" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="font-semibold text-foreground">Bachelor of Computer Applications (Data Science)</span> student
                who genuinely enjoys working with data. I spend my days learning
                Python, exploring datasets, and building small projects that
                help me understand how theory turns into real results.
              </p>
              <p>
                My focus is on the fundamentals — writing clean Python, getting
                comfortable with SQL, and using tools like Pandas, NumPy, and
                Scikit-learn to answer everyday questions with data. I'm not
                trying to sound like a senior engineer; I'm a student building
                a foundation.
              </p>
              <p>
                Right now I'm looking for internships and entry-level
                opportunities where I can contribute, learn from experienced
                mentors, and keep growing as a data practitioner.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}