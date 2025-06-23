import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tanmay Thole - Full Stack Engineer | React Specialist",
  description:
    "Full Stack Engineer specializing in React, Next.js, and modern web technologies. Building scalable applications with cutting-edge tools.",
  keywords: ["Full Stack Engineer", "React Developer", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Tanmay Thole" }],
  creator: "Tanmay Thole",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://tanmaythole.vercel.app",
  //   title: "Tanmay Thole - Full Stack Engineer | React Specialist",
  //   description: "Full Stack Engineer specializing in React, Next.js, and modern web technologies.",
  //   siteName: "Tanmay Thole Portfolio",
  //   images: [
  //     {
  //       url: "/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Tanmay Thole - Full Stack Engineer",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Tanmay Thole - Full Stack Engineer | React Specialist",
  //   description: "Full Stack Engineer specializing in React, Next.js, and modern web technologies.",
  //   images: ["/og-image.jpg"],
  //   creator: "@tanmaythole",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
