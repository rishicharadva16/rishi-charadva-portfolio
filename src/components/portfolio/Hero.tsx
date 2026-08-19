import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { FadeIn } from "./FadeIn";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.100)_0%,transparent_55%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <FadeIn>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent">
            Hi, I'm
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Rishi Charadva
          </h1>
          <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
            Aspiring Data Scientist
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building data-driven solutions using Python, SQL, Machine Learning,
            and Data Analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="/rishi-charadva-resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-accent/10"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm">
              <img
                src={profileImg}
                alt="Rishi Charadva portrait"
                width={480}
                height={480}
                className="h-[320px] w-[320px] object-cover sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}