"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LinkedInIcon, GitHubIcon, MailIcon, ExternalLinkIcon } from "@/components/icons/social-icons";
import { PROFILE, NAV_LINKS, EXPERIENCE, SKILLS, PERSONAL_PROJECTS, WORK_PROJECTS, EDUCATION } from "@/lib/resume-data";
import { useCountUp, useTypewriter } from "@/lib/hooks";

const HERO_STATS = [
  { target: 5, label: "Years Exp" },
  { target: 30, label: "Features Shipped" },
  { target: 40, label: "API Endpoints" },
] as const;

function StatCard({ target, label }: { target: number; label: string }) {
  const { value, elementRef } = useCountUp(target);
  return (
    <div
      ref={elementRef}
      className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 flex flex-col justify-center items-center hover:border-primary/40 transition-all duration-300 group"
    >
      <span className="text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
        {value}+
      </span>
      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Home() {
  const heroTagline = useTypewriter("I build things for the web.");
  const [projectView, setProjectView] = useState<"grid" | "carousel">("carousel");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const allProjects = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];

  const nextProject = useCallback(() => {
    setCarouselIndex((i) => (i + 1) % allProjects.length);
  }, [allProjects.length]);

  const prevProject = useCallback(() => {
    setCarouselIndex((i) => (i - 1 + allProjects.length) % allProjects.length);
  }, [allProjects.length]);

  useEffect(() => {
    if (projectView !== "carousel") return;
    const timer = setInterval(nextProject, 5000);
    return () => clearInterval(timer);
  }, [projectView, nextProject]);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a href="#about" className="group flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-xs font-bold text-primary-foreground">
                MS
              </span>
              <span className="text-sm font-semibold text-foreground hidden sm:block">matthew szych</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm px-3 py-1.5 rounded-md transition-all ${activeSection === link.toLowerCase() ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-24">
        <div className="mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4 animate-fade-in">
            Software Engineer
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.1] mb-4 text-foreground tracking-tight">
            Matthew
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Szych
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-xl mb-2 min-h-[2rem]">
            {heroTagline}
            <span className="animate-pulse text-primary">|</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          <div className="row-span-2 rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-300 group relative">
            <Image
              src={PROFILE.headshot}
              alt={PROFILE.name}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <div className="row-span-2 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group relative">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <p className="text-sm text-muted-foreground mb-3 uppercase tracking-wider font-medium">About</p>
              <p className="text-foreground leading-relaxed text-sm">
                Full-stack engineer with 5 years building scalable apps, APIs, and cloud-native systems at{" "}
                <span className="text-primary font-semibold">Emprise Technologies</span>.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-2 mt-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-fit"
              >
                {PROFILE.email}
              </a>
              <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium w-fit">
                {PROFILE.location}
              </span>
            </div>
          </div>

          {HERO_STATS.map((stat) => (
            <StatCard key={stat.label} target={stat.target} label={stat.label} />
          ))}

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/5 backdrop-blur-sm p-5 flex flex-col justify-center hover:border-primary/50 transition-all duration-300 group">
            <p className="text-foreground font-semibold mb-1">Let&apos;s connect</p>
            <p className="text-xs text-muted-foreground mb-3">{PROFILE.phone}</p>
            <div className="flex gap-2">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <GitHubIcon />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Career</p>
        <h2 className="text-4xl font-bold mb-12 text-foreground">Experience</h2>

        <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 sm:p-8">
          {EXPERIENCE.map((job, jobIndex) => (
            <div
              key={`${job.company}-${job.title}`}
              className={`relative pl-8 group ${jobIndex < EXPERIENCE.length - 1 ? "pb-10" : ""}`}
            >
              <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border group-last:hidden" />
              <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-primary bg-background shadow-sm shadow-primary/30" />
              <div className="text-sm text-muted-foreground mb-1">{job.dates}</div>
              <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
              <div className="text-primary font-medium mb-1">{job.company}</div>
              {"note" in job && (
                <p className="text-xs text-muted-foreground mb-3">
                  {job.location} • {job.note}
                </p>
              )}
              {"note" in job || <p className="text-xs text-muted-foreground mb-3">{job.location}</p>}
              <ul className="text-muted-foreground text-sm leading-relaxed list-none space-y-2">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="pl-4 border-l-2 border-primary/30 hover:border-primary hover:text-foreground transition-all duration-200"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold text-foreground">Projects</h2>
          </div>
          <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-1">
            <button
              onClick={() => setProjectView("carousel")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${projectView === "carousel" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Carousel
            </button>
            <button
              onClick={() => setProjectView("grid")}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${projectView === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Grid
            </button>
          </div>
        </div>

        {projectView === "grid" ? (
          <>
            <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">Professional</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-14">
              {WORK_PROJECTS.map((project) => (
                <Card
                  key={project.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{project.details}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-6">Personal</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PERSONAL_PROJECTS.map((project) => (
                <Card
                  key={project.title}
                  className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      >
                        {project.link.includes("github.com") ? <GitHubIcon /> : <ExternalLinkIcon />}
                      </a>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{project.details}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                {carouselIndex < WORK_PROJECTS.length ? "Professional" : "Personal"}
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                {carouselIndex + 1} / {allProjects.length}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
              <div
                className="absolute top-0 left-0 h-1 bg-primary/80 transition-all duration-500 ease-out"
                style={{ width: `${((carouselIndex + 1) / allProjects.length) * 100}%` }}
              />
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

              <div className="relative min-h-[280px] flex items-center">
                {allProjects.map((project, i) => (
                  <div
                    key={project.title}
                    className={`absolute inset-0 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 ${i === carouselIndex ? "opacity-100 translate-x-0" : i < carouselIndex ? "opacity-0 -translate-x-8" : "opacity-0 translate-x-8"}`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{project.title}</h3>
                        {"link" in project && (
                          <a
                            href={(project as { link: string }).link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors mt-1"
                          >
                            {(project as { link: string }).link.includes("github.com") ? (
                              <GitHubIcon className="w-5 h-5" />
                            ) : (
                              <ExternalLinkIcon />
                            )}
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">{project.details}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevProject}
                className="group w-11 h-11 rounded-full border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
              </button>
              <div className="flex gap-1.5">
                {allProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === carouselIndex ? "bg-primary w-8" : "bg-muted-foreground/20 w-1.5 hover:bg-muted-foreground/40"}`}
                  />
                ))}
              </div>
              <button
                onClick={nextProject}
                className="group w-11 h-11 rounded-full border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 transition-all"
              >
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
            </div>
          </div>
        )}
      </section>

      <section id="skills" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Toolkit</p>
        <h2 className="text-4xl font-bold mb-12 text-foreground">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category) => (
            <Card
              key={category.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {category.icon}
                  </span>
                  <CardTitle className="text-sm font-semibold text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="education" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">Background</p>
        <h2 className="text-4xl font-bold mb-12 text-foreground">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((school) => (
            <Card
              key={school.school}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500" />
              <CardHeader className="pl-8">
                <div className="text-sm text-muted-foreground font-medium">{school.dateRange}</div>
                <CardTitle className="text-xl">{school.school}</CardTitle>
                <CardDescription>{school.location}</CardDescription>
              </CardHeader>
              <CardContent className="pl-8 space-y-3">
                <p className="text-sm text-foreground font-medium">{school.degree}</p>
                {"honors" in school && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {school.honors.map((award) => (
                      <Badge key={award} variant="outline" className="text-xs border-primary/30 text-primary/80">
                        {award}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-lg font-bold text-foreground">{PROFILE.name}</p>
              <p className="text-sm text-muted-foreground">
                {PROFILE.role} • {PROFILE.location}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {PROFILE.email}
              </a>
              <span className="text-border">•</span>
              <span className="text-sm text-muted-foreground">{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <Separator className="my-6 opacity-30" />
          <p className="text-sm text-muted-foreground text-center">&copy; 2026 {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
