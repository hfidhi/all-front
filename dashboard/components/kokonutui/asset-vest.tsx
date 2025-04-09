"use client"

import { PieChart, ArrowUpRight, Plus, Minus, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AssetVest() {
  const router = useRouter()
  const [allocations, setAllocations] = useState({
    Stocks: 45,
    Bonds: 25,
    "Real Estate": 15,
    Commodities: 10,
    Cash: 5,
  })

  const handleAllocationChange = (asset: string, change: number) => {
    setAllocations((prev) => {
      const newValue = Math.max(0, Math.min(100, prev[asset as keyof typeof prev] + change))
      return { ...prev, [asset]: newValue }
    })
  }

  const handleSliderChange = (asset: string, value: number[]) => {
    setAllocations((prev) => ({ ...prev, [asset]: value[0] }))
  }

  const resetAllocations = () => {
    setAllocations({
      Stocks: 45,
      Bonds: 25,
      "Real Estate": 15,
      Commodities: 10,
      Cash: 5,
    })
  }

  // Sample data for asset allocation
  const assetClasses = [
    {
      name: "Stocks",
      allocation: allocations["Stocks"],
      value: "$140,162.63",
      return: "+12.4%",
      isPositive: true,
      color: "bg-blue-500",
    },
    {
      name: "Bonds",
      allocation: allocations["Bonds"],
      value: "$77,868.13",
      return: "+3.2%",
      isPositive: true,
      color: "bg-green-500",
    },
    {
      name: "Real Estate",
      allocation: allocations["Real Estate"],
      value: "$46,720.88",
      return: "+8.7%",
      isPositive: true,
      color: "bg-purple-500",
    },
    {
      name: "Commodities",
      allocation: allocations["Commodities"],
      value: "$31,147.25",
      return: "-2.3%",
      isPositive: false,
      color: "bg-orange-500",
    },
    {
      name: "Cash",
      allocation: allocations["Cash"],
      value: "$15,573.63",
      return: "+0.8%",
      isPositive: true,
      color: "bg-gray-500",
    },
  ]

  // Risk metrics
  const riskLevel = 55 // 0-100
  const riskStatus = riskLevel < 30 ? "Low" : riskLevel < 70 ? "Medium" : "High"
  const riskColor = riskLevel < 30 ? "bg-green-500" : riskLevel < 70 ? "bg-yellow-500" : "bg-red-500"

  // Performance metrics
  const performanceData = [
    { period: "1D", value: "+0.5%" },
    { period: "1W", value: "+1.8%" },
    { period: "1M", value: "+4.2%" },
    { period: "3M", value: "+7.5%" },
    { period: "YTD", value: "+9.8%" },
    { period: "1Y", value: "+15.3%" },
  ]

  // Available assets
  const availableAssets = [
    {
      name: "S&P 500 ETF",
      type: "ETF",
      expectedReturn: "+8.5%",
      risk: "Medium",
      expense: "0.03%",
      minInvestment: "$100",
    },
    {
      name: "Global Bond Fund",
      type: "Bond",
      expectedReturn: "+3.2%",
      risk: "Low",
      expense: "0.15%",
      minInvestment: "$500",
    },
    {
      name: "Real Estate Trust",
      type: "REIT",
      expectedReturn: "+7.8%",
      risk: "Medium-High",
      expense: "0.45%",
      minInvestment: "$1,000",
    },
    {
      name: "Tech Growth Fund",
      type: "Mutual Fund",
      expectedReturn: "+12.5%",
      risk: "High",
      expense: "0.75%",
      minInvestment: "$2,500",
    },
    {
      name: "Dividend Aristocrats",
      type: "ETF",
      expectedReturn: "+6.2%",
      risk: "Medium-Low",
      expense: "0.06%",
      minInvestment: "$100",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-blue-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <PieChart className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AssetVest</h1>
          <p className="text-muted-foreground">Asset Management</p>
        </div>
      </div>

      {/* Asset Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Asset Value</CardDescription>
            <CardTitle className="text-3xl">$311,472.50</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +8.2% YTD
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
              Your asset allocation has a {riskStatus.toLowerCase()} risk level
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

      {/* Asset Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Your investment distribution across asset classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assetClasses.map((asset) => (
              <div key={asset.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-md ${asset.color} bg-opacity-20 dark:bg-opacity-30 mr-2`}></div>
                    <p className="text-sm font-medium">{asset.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{asset.value}</p>
                    <p className={`text-xs ${asset.isPositive ? "text-green-500" : "text-red-500"}`}>{asset.return}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={asset.allocation} className="h-1.5" indicatorClassName={asset.color} />
                  <span className="text-xs font-medium">{asset.allocation}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Adjust Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>Adjust Allocation</CardTitle>
          <CardDescription>Reallocate your funds between asset classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {assetClasses.map((asset) => (
              <div key={asset.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{asset.name}</p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleAllocationChange(asset.name, -5)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-12 text-center">{asset.allocation}%</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleAllocationChange(asset.name, 5)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <Slider
                  defaultValue={[asset.allocation]}
                  value={[asset.allocation]}
                  max={100}
                  step={1}
                  className="h-1.5"
                  onValueChange={(value) => handleSliderChange(asset.name, value)}
                />
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={resetAllocations}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                onClick={() => alert("Changes applied successfully!")}
              >
                Apply Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Assets */}
      <Card>
        <CardHeader>
          <CardTitle>Explore New Assets</CardTitle>
          <CardDescription>Discover and invest in new assets</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="etf">ETFs</TabsTrigger>
              <TabsTrigger value="bond">Bonds</TabsTrigger>
              <TabsTrigger value="reit">REITs</TabsTrigger>
              <TabsTrigger value="mutual">Mutual Funds</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {availableAssets.map((asset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{asset.name}</p>
                    <p className="text-xs text-muted-foreground">{asset.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-500">{asset.expectedReturn}</p>
                    <p className="text-xs text-muted-foreground">Risk: {asset.risk}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => alert(`Investing in ${asset.name}. Minimum investment: ${asset.minInvestment}`)}
                  >
                    Invest
                  </Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="etf" className="space-y-4">
              {availableAssets
                .filter((a) => a.type === "ETF")
                .map((asset, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-xs text-muted-foreground">{asset.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-500">{asset.expectedReturn}</p>
                      <p className="text-xs text-muted-foreground">Risk: {asset.risk}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Investing in ${asset.name}. Minimum investment: ${asset.minInvestment}`)}
                    >
                      Invest
                    </Button>
                  </div>
                ))}
            </TabsContent>

            {/* Other tabs would follow the same pattern */}
          </Tabs>
        </CardContent>
      </Card>

      {/* Set Goals */}
      <Card>
        <CardHeader>
          <CardTitle>Set Investment Goals</CardTitle>
          <CardDescription>Define your target returns and risk tolerance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Target Annual Return</p>
                <p className="text-sm font-medium">8.5%</p>
              </div>
              <Slider defaultValue={[8.5]} max={20} step={0.5} className="h-1.5" />
              <p className="text-xs text-muted-foreground">Higher returns typically come with higher risk</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Risk Tolerance</p>
                <p className="text-sm font-medium">{riskStatus}</p>
              </div>
              <Slider defaultValue={[riskLevel]} max={100} step={1} className="h-1.5" />
              <p className="text-xs text-muted-foreground">Your comfort level with investment volatility</p>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                onClick={() => alert("Investment goals saved successfully!")}
              >
                Save Goals
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

