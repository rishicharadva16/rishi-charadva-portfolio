import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "rishisoni1607@gmail.com",
    href: "mailto:rishisoni1607@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rishicharadva16",
    href: "https://github.com/rishicharadva16",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rishicharadva",
    href: "https://www.linkedin.com/in/rishi-charadva1607/"

  },
  { icon: MapPin, label: "Location", value: "Rajkot, Gujarat, India.", href: null },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent — I'll get back to you soon.");
    }, 600);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-secondary/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have an internship opportunity, a question, or just want to say hi? Drop a message."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                Contact information
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Feel free to reach out through any of the channels below.
              </p>
              <ul className="mt-6 space-y-4">
                {info.map(({ icon: Icon, label, value, href }) => {
                  const Wrapper: any = href ? "a" : "div";
                  return (
                    <li key={label}>
                      <Wrapper
                        {...(href
                          ? { href, target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="flex items-start gap-4 rounded-xl border border-transparent p-3 transition hover:border-border hover:bg-secondary"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {label}
                          </p>
                          <p className="truncate text-sm font-medium text-foreground">
                            {value}
                          </p>
                        </div>
                      </Wrapper>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-border bg-background p-8 shadow-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input required placeholder="Your name" className="rounded-lg" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input required placeholder="What's this about?" className="rounded-lg" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="rounded-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full rounded-full sm:w-auto"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}