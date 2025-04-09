import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/kokonutui/layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ShareVest Dashboard",
  description: "A comprehensive investment platform with multiple subsidiaries",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'