"use client"

import {
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  TrendingUp,
  Shield,
  Binary,
  Building,
  Users,
  HandshakeIcon,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioOverview() {
  // Sample data for portfolio overview
  const totalInvestment = "$1,245,890.00"
  const totalReturn = "+12.4%"
  const isPositiveReturn = true

  const subsidiaries = [
    {
      name: "AssetVest",
      description: "Asset Management",
      icon: PieChart,
      allocation: 25,
      value: "$311,472.50",
      return: "+8.2%",
      isPositive: true,
      href: "/assetvest",
      color: "bg-blue-500",
    },
    {
      name: "RiskVest",
      description: "Risk Management",
      icon: Shield,
      allocation: 15,
      value: "$186,883.50",
      return: "+5.1%",
      isPositive: true,
      href: "/riskvest",
      color: "bg-green-500",
    },
    {
      name: "QuantumVest",
      description: "Quantum Trading",
      icon: Binary,
      allocation: 20,
      value: "$249,178.00",
      return: "+18.7%",
      isPositive: true,
      href: "/quantumvest",
      color: "bg-purple-500",
    },
    {
      name: "HedgeVest",
      description: "Hedge Funding",
      icon: TrendingUp,
      allocation: 15,
      value: "$186,883.50",
      return: "-2.3%",
      isPositive: false,
      href: "/hedgevest",
      color: "bg-orange-500",
    },
    {
      name: "PrivateVest",
      description: "Private Equity",
      icon: Building,
      allocation: 10,
      value: "$124,589.00",
      return: "+15.4%",
      isPositive: true,
      href: "/privatevest",
      color: "bg-red-500",
    },
    {
      name: "PartVest",
      description: "Crowdfunding",
      icon: Users,
      allocation: 10,
      value: "$124,589.00",
      return: "+9.8%",
      isPositive: true,
      href: "/partvest",
      color: "bg-yellow-500",
    },
    {
      name: "RelVest",
      description: "Relationship Investing",
      icon: HandshakeIcon,
      allocation: 5,
      value: "$62,294.50",
      return: "+7.5%",
      isPositive: true,
      href: "/relvest",
      color: "bg-teal-500",
    },
  ]

  // Risk metrics
  const riskLevel = 65 // 0-100
  const riskStatus = riskLevel < 30 ? "Low" : riskLevel < 70 ? "Medium" : "High"
  const riskColor = riskLevel < 30 ? "bg-green-500" : riskLevel < 70 ? "bg-yellow-500" : "bg-red-500"

  // Performance metrics
  const performanceData = [
    { period: "1D", value: "+0.8%" },
    { period: "1W", value: "+2.3%" },
    { period: "1M", value: "+5.7%" },
    { period: "3M", value: "+8.9%" },
    { period: "YTD", value: "+12.4%" },
    { period: "1Y", value: "+18.2%" },
  ]

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Investment Value</CardDescription>
            <CardTitle className="text-3xl">{totalInvestment}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span
                className={`text-sm font-medium ${isPositiveReturn ? "text-green-500" : "text-red-500"} flex items-center`}
              >
                {isPositiveReturn ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {totalReturn} YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Risk Level</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>{riskStatus}</span>
              <span className="text-sm font-normal">{riskLevel}/100</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={riskLevel} className="h-2" indicatorClassName={riskColor} />
            <p className="text-xs text-muted-foreground mt-2">
              Your portfolio has a {riskStatus.toLowerCase()} risk level based on your current allocations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              {performanceData.map((item) => (
                <div key={item.period} className="text-center p-2 bg-gray-50 dark:bg-zinc-900 rounded-md">
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                  <p
                    className={`text-sm font-medium ${item.value.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subsidiary Allocations */}
      <Card>
        <CardHeader>
          <CardTitle>Subsidiary Allocations</CardTitle>
          <CardDescription>Your investment distribution across all subsidiaries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subsidiaries.map((subsidiary) => (
              <div key={subsidiary.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-md ${subsidiary.color} bg-opacity-20 dark:bg-opacity-30 mr-2`}>
                      <subsidiary.icon className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{subsidiary.name}</p>
                      <p className="text-xs text-muted-foreground">{subsidiary.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{subsidiary.value}</p>
                    <p className={`text-xs ${subsidiary.isPositive ? "text-green-500" : "text-red-500"}`}>
                      {subsidiary.return}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={subsidiary.allocation} className="h-1.5" indicatorClassName={subsidiary.color} />
                  <span className="text-xs font-medium">{subsidiary.allocation}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subsidiaries.map((subsidiary) => (
          <Link href={subsidiary.href} key={subsidiary.name} className="block">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-md ${subsidiary.color} bg-opacity-20 dark:bg-opacity-30`}>
                    <subsidiary.icon className="h-5 w-5 text-gray-900 dark:text-white" />
                  </div>
                  <div className={`text-sm font-medium ${subsidiary.isPositive ? "text-green-500" : "text-red-500"}`}>
                    {subsidiary.return}
                  </div>
                </div>
                <CardTitle className="text-lg mt-2">{subsidiary.name}</CardTitle>
                <CardDescription>{subsidiary.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Allocation</p>
                  <p className="text-sm font-medium">{subsidiary.allocation}%</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-muted-foreground">Value</p>
                  <p className="text-sm font-medium">{subsidiary.value}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <Button
          className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
          onClick={() => (window.location.href = "/settings")}
        >
          Reallocate Funds
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/settings#goals")}>
          Set Financial Goals
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/reports")}>
          Download Reports
        </Button>
      </div>
    </div>
  )
}

