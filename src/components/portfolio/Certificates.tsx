import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const certs = [
  {
    name: "Python for Data Science",
    org: "Coursera (Placeholder)",
    date: "2025",
    url: "#",
  },
  {
    name: "SQL for Data Analysis",
    org: "HackerRank (Placeholder)",
    date: "2025",
    url: "#",
  },
  {
    name: "Introduction to Machine Learning",
    org: "Kaggle Learn (Placeholder)",
    date: "2025",
    url: "#",
  },
  {
    name: "Data Visualization with Power BI",
    org: "Microsoft Learn (Placeholder)",
    date: "2026",
    url: "#",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Courses and credentials"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.date}</p>
                <div className="mt-auto pt-4">
                  <Button
                    asChild
                    size="sm"
                    variant="ghost"
                    className="h-8 px-0 text-accent hover:bg-transparent hover:text-primary"
                  >
                    <a href={c.url} target="_blank" rel="noreferrer">
                      View Certificate
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}