import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: p1,
    name: "Student Performance Predictor",
    description:
      "A machine learning model that predicts student exam performance based on study habits and background factors. Built as a hands-on regression project.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Machine Learning"],
    github: "#",
  },
  {
    image: p2,
    name: "Sales Data Dashboard",
    description:
      "An interactive dashboard that explores sales data with filters, KPIs, and category breakdowns to surface trends across regions and months.",
    tech: ["Python", "Pandas", "Power BI", "SQLite"],
    github: "#",
  },
  {
    image: p3,
    name: "Movie Recommendation System",
    description:
      "A content-based recommender that suggests similar movies from a public dataset using cosine similarity on movie metadata.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built while learning"
          description="A small collection of practical projects that reflect where I am in my Data Science journey."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-full"
                    >
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}