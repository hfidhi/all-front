"use client"

import type React from "react"
import {
  PieChart,
  Shield,
  Binary,
  TrendingUp,
  Building,
  Users,
  HandshakeIcon,
  Wallet,
  Settings,
  HelpCircle,
  Menu,
} from "lucide-react"
import { Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  function handleNavigation() {
    setIsMobileMenuOpen(false)
  }

  // Get current page title
  const getCurrentPageTitle = () => {
    const routes = {
      "/dashboard": "Portfolio Overview",
      "/assetvest": "AssetVest",
      "/riskvest": "RiskVest",
      "/quantumvest": "QuantumVest",
      "/hedgevest": "HedgeVest",
      "/privatevest": "PrivateVest",
      "/partvest": "PartVest",
      "/relvest": "RelVest",
      "/settings": "Settings",
      "/help": "Help & Support",
    }
    return routes[pathname as keyof typeof routes] || ""
  }

  function NavItem({
    href,
    icon: Icon,
    children,
  }: {
    href: string
    icon: any
    children: React.ReactNode
  }) {
    const isActive = pathname === href

    return (
      <Link
        href={href}
        onClick={handleNavigation}
        className={`flex items-center px-3 py-2.5 text-sm rounded-md transition-all duration-200 ${
          isActive
            ? "bg-gray-100 dark:bg-[#1F1F23] text-gray-900 dark:text-white font-medium shadow-sm"
            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#1F1F23]"
        }`}
      >
        <Icon className="h-4 w-4 mr-3 flex-shrink-0" />
        {children}
      </Link>
    )
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[70] h-14 bg-[#0F0F12] px-4 flex items-center">
        <button
          type="button"
          className="p-2 rounded-lg flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-5 w-5 text-gray-300" />
        </button>

        <div className="flex items-center ml-2 space-x-4">
          <span className="text-sm font-medium text-white">ShareVest</span>
          {pathname !== "/dashboard" && (
            <>
              <span className="text-gray-500">/</span>
              <span className="text-sm font-medium text-gray-300">{getCurrentPageTitle()}</span>
            </>
          )}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav
        className={`
          fixed inset-y-0 left-0 z-[70] w-72 bg-white dark:bg-[#0F0F12] transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:static lg:w-64 border-r border-gray-200 dark:border-[#1F1F23]
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col">
          <Link
            href="/dashboard"
            className="h-16 px-6 flex items-center border-b border-gray-200 dark:border-[#1F1F23]"
            onClick={handleNavigation}
          >
            <span className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
              ShareVest
            </span>
          </Link>

          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-6">
              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Overview
                </div>
                <div className="space-y-1">
                  <NavItem href="/dashboard" icon={Home}>
                    Portfolio Overview
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Subsidiaries
                </div>
                <div className="space-y-1">
                  <NavItem href="/assetvest" icon={PieChart}>
                    AssetVest
                  </NavItem>
                  <NavItem href="/riskvest" icon={Shield}>
                    RiskVest
                  </NavItem>
                  <NavItem href="/quantumvest" icon={Binary}>
                    QuantumVest
                  </NavItem>
                  <NavItem href="/hedgevest" icon={TrendingUp}>
                    HedgeVest
                  </NavItem>
                  <NavItem href="/privatevest" icon={Building}>
                    PrivateVest
                  </NavItem>
                  <NavItem href="/partvest" icon={Users}>
                    PartVest
                  </NavItem>
                  <NavItem href="/relvest" icon={HandshakeIcon}>
                    RelVest
                  </NavItem>
                </div>
              </div>

              <div>
                <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Account
                </div>
                <div className="space-y-1">
                  <NavItem href="/settings" icon={Settings}>
                    Settings
                  </NavItem>
                  <NavItem href="/help" icon={HelpCircle}>
                    Help & Support
                  </NavItem>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200 dark:border-[#1F1F23]">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-[#1F1F23] transition-colors">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#0F0F12]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Eugene An</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Premium Investor</p>
              </div>
              <Wallet className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[65] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}

