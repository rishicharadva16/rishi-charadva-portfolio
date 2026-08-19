import { Briefcase, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-secondary/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked and learned" />
        <FadeIn>
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Data Science Intern
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    Jan 2026 – April 2026
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Imbuesoft LLP
                </p>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Built practical data science projects to strengthen Python skills.",
                        "Worked with datasets for cleaning, analysis, and visualization.",
                        "Learned machine learning fundamentals through hands-on implementation.",
                        "Continuously improved problem-solving through real-world projects.",
                      ].map((r) => (
                        <li
                          key={r}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Skills Learned
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Pandas",
                        "SQL",
                        "Power BI",
                        "Communication",
                        "Teamwork",
                      ].map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-6 rounded-2xl border border-border bg-background p-8 shadow-sm">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Medical Assistant - Rajkot
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    Dec 2024 – July 2026
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Forrum Enterprise - Rajkot
                </p>
                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Responsibilities
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Managed daily office operations and administrative tasks.",
                        "Maintained inventory and organized medical stock records.",
                        "Assisted with billing, invoicing, and documentation.",
                        "Coordinated with customers and suppliers regarding orders and deliveries.",
                        "Ensured accurate record keeping and efficient workflow.",
                      ].map((r) => (
                        <li
                          key={r}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      Skills Learned
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Communication",
                        "Time Management",
                        "Attention to Detail",
                        "Customer Service",
                        "Teamwork",
                        "Inventory Management",
                        "Record Keeping",
                        "Billing"
                      ].map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
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