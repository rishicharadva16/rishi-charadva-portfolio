import { GraduationCap } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <FadeIn>
          <div className="relative rounded-2xl border border-border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Bachelor of Computer Applications — Data Science
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    2024 – 2027
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Atmiya University · CGPA: 9.64 / 10 (4th Semester)
                </p>
                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Database Management",
                      "Statistics",
                      "Python Programming",
                      "Machine Learning Basics",
                      "Data Visualization",
                    ].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}