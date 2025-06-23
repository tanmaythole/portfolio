"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="#home" className="text-2xl font-bold gradient-text">
              Tanmay Thole
            </Link>
            <p className="mt-4 text-muted-foreground">
              Full Stack Engineer passionate about creating exceptional digital experiences with modern web
              technologies.
            </p>
          </div>
          <div></div>

          {/* <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div> */}

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/tanmaythole"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com/in/tanmaythole"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={20} />
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">tanmaythole@gmail.com</p>
              <p className="text-sm text-muted-foreground">Pune, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tanmay Thole. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js & v0.dev
          </p>
        </div>
      </div>
    </footer>
  )
}
