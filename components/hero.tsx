"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Tanmay Thole</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
              Full Stack Engineer | React Specialist
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              I build exceptional digital experiences with modern web technologies. Passionate about creating scalable
              applications that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Link href="#contact" className="w-full sm:w-auto">
              <Button  variant="outline" size="lg" className="w-full sm:w-auto bg-background text-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/tanmaythole"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/tanmaythole"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
