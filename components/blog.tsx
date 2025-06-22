"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Re-render in React Context",
    excerpt:
      "Mastering React Efficiency: Unveiling Strategies for Optimized Re-renders in Contextual State Management and Performance Tuning.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*oOkKO1TaRPGhWOzeBtwhKA.png",
    date: "2023-12-10",
    readTime: "6 min read",
    tags: ["React", "React Context API", "Performance", "Re-render"],
    url: "https://tanmaythole.medium.com/optimizing-re-render-in-react-context-d823e113a45d",
  },
  {
    id: 2,
    title: "Optimizing Token Refreshing: Preventing Duplicate API Requests with Axios",
    excerpt:
      "This blog shows how to prevent duplicate API requests and optimize token refreshing using Axios in your application.",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IMLln_M4UtLYDbMKHO4M0A.png",
    date: "2023-06-19",
    readTime: "6 min read",
    tags: ["React", "Best Practices", "Axios", "Axios Interceptor"],
    url: "https://tanmaythole.medium.com/optimizing-token-refreshing-preventing-duplicate-api-requests-with-axios-511bde1ef676",
  },
  {
    id: 3,
    title: "Mastering Event Delegation in JavaScript",
    excerpt:
      "Learn how event delegation simplifies event handling by allowing a parent element to manage events for its child elements.",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KSLnJEwxYcitzqvm2_4xiw.png",
    date: "2024-09-08",
    readTime: "4 min read",
    tags: ["Performance", "JavaScript", "Optimization", "Event Delegation"],
    url: "https://javascript.plainenglish.io/mastering-event-delegation-in-javascript-c2e9f92858eb",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={post.url}>
                  <Button variant="ghost" className="px-3 h-auto font-medium group">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://tanmaythole.medium.com" target="_blank" referrerPolicy="no-referrer">
            <Button variant="outline" size="lg" className="bg-background text-foreground">
              View All Posts
              <ExternalLink />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
