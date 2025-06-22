"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Bonzai Canvas",
    description: "Bonzai is a Creative Automation Platform that enables marketers and designers across the globe to build personalized creatives across channels, formats and screens.",
    image: "/bonzai.png",
    technologies: ["React", "TypeScript", "Redux"],
    liveUrl: "https://bonzai.ai",
  },
  {
    id: 2,
    title: "Bonzai Fillboard Format",
    description: "A premium digital format aimed at enhancing viewability and user experience for ads served across desktop, tablet, and mobile devices.",
    image: "/fillboard.jpeg",
    technologies: ["React", "JavaScript", "TypeScript"],
    liveUrl: "https://www.bonzai.ai/fillboard",
  },
  {
    id: 3,
    title: "Bonzai Everboard Format",
    description: "A revolutionary video display format built for maximum video completion & viewability",
    image: "/bonzai.png",
    technologies: ["React", "JavaScript", "TypeScript"],
    liveUrl: "https://www.bonzai.ai/everboard",
  },
  {
    id: 4,
    title: "Intranet",
    description:
      "Intranet is a mobile application for employee management which uses to fill timesheet and apply leaves.",
    image: "/intranet.png",
    technologies: ["React Native", "TypeScript"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.joshsoftware.intranet&pli=1",
  },
  {
    id: 5,
    title: "FACET",
    description:
      "FACET is a tool for Quality Assurance (QA) that enables end-to-end automated validation with a user-friendly UI.",
    image: "/facet.png",
    technologies: ["React", "TypeScript", "Python", "Flask", "PostgreSQL"]
  },
  {
    id: 6,
    title: "My Ideal 11",
    description: "MyIdeal11 is a fantasy sports web application that allows users to trade players like the stock market during live matches.",
    image: "/ideal11.png",
    technologies: ["React", "JavaScript", "Python", "Django"],
    githubUrl: "https://github.com/tanmaythole/ideal11",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    {!!project.githubUrl && <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        <Github size={16} />
                      </Button>
                    </Link>}
                    {!!project.liveUrl && <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        <ExternalLink size={16} />
                      </Button>
                    </Link>}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://github.com/tanmaythole" target="_blank" className="inline-flex items-center">
            <Button variant="outline" size="lg" className="bg-background text-foreground">
              <Github className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
