"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Bonzai Digital Pvt. Ltd.",
    location: "Pune, India",
    duration: "2023 - Present",
    description:
      "Contributed to the development of Bonzai Canvas, a creative automation platform used to design high-impact, interactive HTML5 ad experiences at scale. Worked closely with cross-functional teams to deliver feature-rich, high-performance modules tailored for designers and marketers.",
    technologies: ["React", "Node.js", "Python", "Spring Boot", "AWS"],
    achievements: [
      "Built 6+ AD formats including Fillboard & Everboard that increased viewability and user experience for ads.",
      "Refactored analytics dashboard which systematically fetchs insights from social platforms and optimized APIs.",
      "Participated in code reviews and architecture discussions to continuously improve the product's codebase and developer experience.",
    ],
  },
  {
    id: 2,
    title: "Open Source Contributor",
    company: "Mattermost Inc.",
    location: "Remote",
    duration: "2022 - Present",
    description:
      "Contributed to the development of an open-source mobile and web application for Mattermost, focusing on building intuitive user interfaces using React and React Native. Collaborated in an agile environment and engaged in open-source development practices.",
    technologies: ["React", "React Native", "TypeScript"],
    achievements: [
      "Built and maintained features for both mobile and web platforms using React and React Native.",
      "Improved UI responsiveness and performance across devices.",
      "Collaborated with global contributors, enhancing open-source communication and review skills.",
      "Strengthened problem-solving abilities in real-world agile development workflows."
    ],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Josh Software Pvt. Ltd.",
    location: "Pune, India",
    duration: "2022 - 2023",
    description:
      "Contributed to the development of two key products — a mobile intranet app and a QA automation platform — with a focus on building scalable and intuitive user interfaces. Worked closely with cross-functional teams to design and implement frontend and backend components using modern technologies.",
    technologies: ["React", "TypeScript", "React Native", "Python", "Flask"],
    achievements: [
      "Led development of a mobile intranet app using React Native for employee management (timesheets, leave applications).",
      "Delivered highly interactive and performant UIs across web and mobile platforms.",
      "Developed a robust QA automation tool using React.js and Flask, enabling end-to-end test validation with a user-friendly interface.",
      "Mentored junior developers and guided UI implementation with React Query and API integration.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={experience.id} className="relative">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{experience.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
