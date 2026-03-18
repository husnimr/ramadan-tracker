"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="inline-flex items-center justify-center rounded-full h-9 w-9 bg-white/10 backdrop-blur-md border border-white/10 shadow-sm opacity-50 cursor-default">
        <Moon className="h-4 w-4 text-white" />
      </button>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full h-9 w-9 hover:bg-white/20 transition-colors bg-white/10 backdrop-blur-md border border-white/10 shadow-sm"
      aria-label="Toggle dark mode"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-300" />
      ) : (
        <Moon className="h-4 w-4 text-white" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
