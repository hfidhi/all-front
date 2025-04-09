"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Bell, ChevronRight } from "lucide-react"
import Profile01 from "./profile-01"
import Link from "next/link"
import { ThemeToggle } from "../theme-toggle"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function TopNav() {
  const pathname = usePathname()

  // Generate breadcrumbs based on current path
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = [
      { path: "/dashboard", label: "Portfolio Overview" },
      { path: "/assetvest", label: "AssetVest" },
      { path: "/riskvest", label: "RiskVest" },
      { path: "/quantumvest", label: "QuantumVest" },
      { path: "/hedgevest", label: "HedgeVest" },
      { path: "/privatevest", label: "PrivateVest" },
      { path: "/partvest", label: "PartVest" },
      { path: "/relvest", label: "RelVest" },
      { path: "/settings", label: "Settings" },
      { path: "/help", label: "Help & Support" },
    ]

    const currentPath = paths.find((p) => p.path === pathname)

    if (currentPath) {
      return [
        { label: "ShareVest", href: "/dashboard" },
        { label: currentPath.label, href: currentPath.path },
      ]
    }

    return [{ label: "ShareVest", href: "/dashboard" }]
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <nav className="px-3 sm:px-6 flex items-center justify-between bg-white dark:bg-[#0F0F12] border-b border-gray-200 dark:border-[#1F1F23] h-full">
      <div className="font-medium text-sm hidden sm:flex items-center gap-2 truncate">
        {breadcrumbs.map((item, index) => (
          <div key={item.label} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-gray-100">{item.label}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
        <button
          type="button"
          className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-[#1F1F23] rounded-full transition-colors"
        >
          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
        </button>

        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Image
              src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
              alt="User avatar"
              width={28}
              height={28}
              className="rounded-full ring-2 ring-gray-200 dark:ring-[#2B2B30] sm:w-8 sm:h-8 cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-[280px] sm:w-80 bg-background border-border rounded-lg shadow-lg"
          >
            <Profile01
              name="Eugene An"
              role="Premium Investor"
              subscription="Premium Plan"
              avatar="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png"
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

