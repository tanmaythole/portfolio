export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
