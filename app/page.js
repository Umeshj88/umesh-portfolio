
'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, Globe, FlaskConical, CheckCircle2, Bug, Wrench, ShieldCheck, Sparkles, Download, ChevronRight, FlaskRound } from "lucide-react";

// ----- Helper animation presets -----
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl tracking-tight flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow">
              UT
            </span>
            <span>Umesh — QA Engineer</span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                {label}
              </a>
            ))}
            <Button asChild className="rounded-2xl">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-30" aria-hidden>
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-emerald-400 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-400 to-pink-400 blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 w-fit">
              <Sparkles className="h-4 w-4" />
              <span>Manual + Automation QA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              I test software so your users don’t have to.
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
             I&apos;m <strong>Umesh</strong>, a Software Test Engineer at <strong>Php Poets</strong> with ~2 years of experience.
              I blend manual testing depth with growing automation skills to ship stable, secure, and delightful releases.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl" asChild>
                <a href="#projects">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" className="rounded-2xl" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" className="rounded-2xl" asChild>
                <a href="/resume-umesh.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/your-github" className="inline-flex items-center gap-2 hover:opacity-80" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/your-linkedin" className="inline-flex items-center gap-2 hover:opacity-80" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 hover:opacity-80">
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 shadow-lg p-6">
              <div className="h-full w-full rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 grid place-items-center text-center p-6">
                <div>
                  <Bug className="h-12 w-12 mx-auto" />
                  <p className="mt-4 text-lg font-medium">“Break it early. Ship it safely.”</p>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">Specialised in web + mobile app QA, API testing, and CI-friendly test automation.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div {...stagger} className="grid md:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="md:col-span-2">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Passionate QA engineer focused on delivering reliable user experiences.
                  I collaborate with devs, product, and stakeholders to design test strategies that balance speed and quality.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Manual testing across web and Android apps</li>
                  <li>Functional, regression, smoke, sanity, UI/UX checks</li>
                  <li>API testing with Postman and REST Assured basics</li>
                  <li>Automation foundations: Selenium WebDriver, Playwright</li>
                  <li>JMeter basics for performance sanity</li>
                  <li>CI taste: GitHub Actions, basic pipelines</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="rounded-3xl h-full">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3"><Globe className="h-4 w-4"/> Udaipur, India</div>
                <div className="flex items-center gap-3"><Mail className="h-4 w-4"/> you@example.com</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4"/> +91-98xxxxxxx</div>
                <div className="pt-2 flex flex-wrap gap-2">
                  {["Manual QA","Automation","API Testing","CI/CD","SQL","JIRA","Agile"].map(t => (
                    <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Functional Testing",
              desc: "End-to-end flows, regression suites, smoke & sanity checks.",
              points: ["Test planning & strategy","Test case design","Bug reporting & triage"],
              icon: <CheckCircle2 className="h-6 w-6" />
            },
            {
              title: "Automation",
              desc: "Selenium WebDriver, Playwright basics, Page Object Model.",
              points: ["Java/JS basics","Locators mastery","CI-friendly runs"],
              icon: <Wrench className="h-6 w-6" />
            },
            {
              title: "API & Tools",
              desc: "Postman, REST Assured basics, Swagger, JMeter sanity.",
              points: ["Auth & collections","Assertions","Monitors"],
              icon: <FlaskConical className="h-6 w-6" />
            },
            {
              title: "Quality & Security",
              desc: "Basic OWASP awareness, input validation, auth flows.",
              points: ["Role-based testing","Error states","Edge cases"],
              icon: <ShieldCheck className="h-6 w-6" />
            },
            {
              title: "Collaboration",
              desc: "Agile ceremonies, JIRA, Confluence, clear communication.",
              points: ["Defect life cycle","Release notes","Demos"],
              icon: <Sparkles className="h-6 w-6" />
            },
            {
              title: "Data & DB",
              desc: "SQL basics for validation and quick checks.",
              points: ["Joins & filters","Data setup","Back-office QA"],
              icon: <FlaskRound className="h-6 w-6" />
            }
          ].map((s) => (
            <Card key={s.title} className="rounded-3xl">
              <CardHeader className="flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">{s.icon}</div>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">{s.desc}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {s.points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" /> {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold mb-2">Selected Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">Handpicked QA work and automation samples.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "E‑Commerce Web App QA",
              desc: "Designed regression suite (120+ cases), covered cart, payments, refunds. Found 30+ critical issues before release.",
              stack: ["Web","Manual","JIRA","Postman"],
              link: "#"
            },
            {
              name: "SaaS Admin Panel",
              desc: "API testing collections in Postman with monitors + smoke suite for role-based access control.",
              stack: ["API","Auth","Postman"],
              link: "#"
            },
            {
              name: "Selenium POM Demo",
              desc: "Sample repo with Page Object Model in Java + TestNG and GitHub Actions CI.",
              stack: ["Selenium","Java","TestNG","CI"],
              link: "#"
            },
            {
              name: "Playwright TS Suite",
              desc: "UI tests in Playwright + fixtures, screenshots on failure, HTML report.",
              stack: ["Playwright","TypeScript"],
              link: "#"
            },
            {
              name: "Mobile App Sanity",
              desc: "APK sanity checklist covering install, permissions, network, and offline states.",
              stack: ["Android","Sanity"],
              link: "#"
            },
            {
              name: "JMeter Smoke",
              desc: "Basic load sanity for top APIs (ramp-up, assertions, error rate alert).",
              stack: ["JMeter","API"],
              link: "#"
            },
          ].map(p => (
            <Card key={p.name} className="rounded-3xl flex flex-col">
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-slate-600 dark:text-slate-300 flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map(t => (
                    <Badge key={t} variant="outline" className="rounded-full">{t}</Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="secondary" className="rounded-2xl" asChild>
                    <a href={p.link} target="_blank" rel="noreferrer">View</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {[
            {
              role: "Software Test Engineer",
              org: "Php Poets",
              period: "2023 — Present",
              bullets: [
                "Owned manual QA for multiple modules across web and Android.",
                "Created and maintained test cases; improved regression coverage by 35%.",
                "Partnered with devs to reproduce tricky bugs and verify fixes quickly.",
              ]
            },
            {
              role: "QA Intern",
              org: "(Previous / Training)",
              period: "2022 — 2023",
              bullets: [
                "Learned test design techniques and wrote sanity checklists.",
                "Automated a handful of flows using Selenium basics.",
              ]
            }
          ].map((e) => (
            <Card key={e.role} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{e.role} · {e.org}</span>
                  <span className="text-base font-normal text-slate-500">{e.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
                  {e.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <Card className="rounded-3xl">
          <CardContent className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300">
                Want me to test your app or set up a lean QA workflow? Drop a line.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><Mail className="h-4 w-4"/> you@example.com</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4"/> +91-98xxxxxxx</div>
              </div>
              <div className="flex gap-3">
                <Button asChild className="rounded-2xl"><a href="mailto:you@example.com">Email</a></Button>
                <Button variant="secondary" asChild className="rounded-2xl"><a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">LinkedIn</a></Button>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your name" required />
                <Input type="email" placeholder="Email" required />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="How can I help?" rows={5} />
              <div className="flex justify-end">
                <Button type="submit" className="rounded-2xl">Send</Button>
              </div>
              <p className="text-xs text-slate-500">(Form is a demo — wire up to your backend or a service like Formspree.)</p>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Umesh • Built with React + Tailwind</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a href="#contact" className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full shadow-lg">Hire Me</Button>
      </a>
    </div>
  );
}
