"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Flask",
  "Django",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "REST APIs",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=200&width=200" alt="John Doe" fill className="object-cover" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Tanmay Thole</h3>
                  <p className="text-muted-foreground mb-6">Full Stack Engineer based in Pune, India</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">My Story</h3>
                <p className="text-muted-foreground mb-4">
                  With over 3+ years of experience in full-stack development, I specialize in building modern web
                  applications using React, Node.js, and Python. I'm passionate about creating user-centric solutions
                  that are both performant and scalable.
                </p>
                <p className="text-muted-foreground mb-6">
                  I love staying up-to-date with the latest technologies and best practices, and I'm always eager to
                  take on new challenges that push the boundaries of what's possible on the web.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
