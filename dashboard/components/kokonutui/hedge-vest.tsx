import { TrendingUp, ArrowDownRight, Percent, DollarSign, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export default function HedgeVest() {
  // Sample data for hedge funds
  const hedgeFunds = [
    {
      name: "Global Macro Fund",
      allocation: 30,
      value: "$56,065.05",
      sharpeRatio: 1.8,
      alpha: 3.2,
      beta: 0.65,
      return: "+12.4%",
      isPositive: true,
      color: "bg-blue-500",
    },
    {
      name: "Long/Short Equity",
      allocation: 25,
      value: "$46,720.88",
      sharpeRatio: 1.5,
      alpha: 2.8,
      beta: 0.75,
      return: "+8.7%",
      isPositive: true,
      color: "bg-green-500",
    },
    {
      name: "Event-Driven Fund",
      allocation: 20,
      value: "$37,376.70",
      sharpeRatio: 1.2,
      alpha: 1.9,
      beta: 0.85,
      return: "+5.2%",
      isPositive: true,
      color: "bg-purple-500",
    },
    {
      name: "Fixed Income Arbitrage",
      allocation: 15,
      value: "$28,032.53",
      sharpeRatio: 0.9,
      alpha: -0.5,
      beta: 0.35,
      return: "-2.3%",
      isPositive: false,
      color: "bg-orange-500",
    },
    {
      name: "Managed Futures",
      allocation: 10,
      value: "$18,688.35",
      sharpeRatio: 1.1,
      alpha: 1.5,
      beta: 0.45,
      return: "+4.8%",
      isPositive: true,
      color: "bg-red-500",
    },
  ]

  // Market exposure
  const sectorExposure = [
    { name: "Technology", exposure: 25, color: "bg-blue-500" },
    { name: "Healthcare", exposure: 20, color: "bg-green-500" },
    { name: "Financial", exposure: 18, color: "bg-purple-500" },
    { name: "Consumer", exposure: 15, color: "bg-orange-500" },
    { name: "Energy", exposure: 12, color: "bg-red-500" },
    { name: "Utilities", exposure: 10, color: "bg-gray-500" },
  ]

  // Leverage settings
  const currentLeverage = 1.5 // 1.0 = no leverage

  // Performance metrics
  const performanceData = [
    { period: "1D", value: "+0.3%" },
    { period: "1W", value: "-0.8%" },
    { period: "1M", value: "+2.2%" },
    { period: "3M", value: "+4.5%" },
    { period: "YTD", value: "-2.3%" },
    { period: "1Y", value: "+7.8%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-orange-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <TrendingUp className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">HedgeVest</h1>
          <p className="text-muted-foreground">Hedge Funding</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Hedge Fund Value</CardDescription>
            <CardTitle className="text-3xl">$186,883.50</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-red-500 flex items-center">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                -2.3% YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Current Leverage</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>{currentLeverage}x</span>
              <Badge variant="outline">Moderate</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={currentLeverage * 33.3} className="h-2" indicatorClassName="bg-orange-500" />
            <p className="text-xs text-muted-foreground mt-2">Your portfolio is using moderate leverage (1.5x)</p>
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

      {/* Hedge Fund Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Hedge Fund Performance</CardTitle>
          <CardDescription>Metrics like Sharpe ratio, alpha, and beta</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {hedgeFunds.map((fund, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${fund.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                      <LineChart className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">{fund.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Value</p>
                          <p className="text-sm font-medium">{fund.value}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Return</p>
                          <p className={`text-sm font-medium ${fund.isPositive ? "text-green-500" : "text-red-500"}`}>
                            {fund.return}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Sharpe</p>
                          <p className="text-sm font-medium">{fund.sharpeRatio}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Alpha</p>
                          <p className={`text-sm font-medium ${fund.alpha >= 0 ? "text-green-500" : "text-red-500"}`}>
                            {fund.alpha > 0 ? "+" : ""}
                            {fund.alpha}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button size="sm">Adjust</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Exposure */}
      <Card>
        <CardHeader>
          <CardTitle>Market Exposure</CardTitle>
          <CardDescription>Chart showing exposure to different sectors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sectorExposure.map((sector) => (
              <div key={sector.name} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-md ${sector.color} bg-opacity-20 dark:bg-opacity-30 mr-2`}></div>
                    <p className="text-sm font-medium">{sector.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{sector.exposure}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={sector.exposure} className="h-1.5" indicatorClassName={sector.color} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leverage Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Leverage Settings</CardTitle>
          <CardDescription>Current leverage level and options to adjust</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Current Leverage</p>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-medium">{currentLeverage}x</p>
                </div>
              </div>
              <Slider defaultValue={[currentLeverage * 33.3]} max={100} step={1} className="h-1.5" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>1.0x</span>
                <span>2.0x</span>
                <span>3.0x</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Higher leverage increases both potential returns and risks
              </p>
            </div>

            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start">
                <Percent className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Leverage Risk Warning</p>
                  <p className="text-sm text-muted-foreground">
                    Increasing leverage beyond 2.0x significantly increases portfolio risk. Please ensure you understand
                    the implications.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                Apply Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allocation Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Fund Allocation</CardTitle>
          <CardDescription>Adjust allocation between hedge funds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {hedgeFunds.map((fund) => (
              <div key={fund.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{fund.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-12 text-center">{fund.allocation}%</span>
                  </div>
                </div>
                <Slider defaultValue={[fund.allocation]} max={100} step={1} className="h-1.5" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Current: {fund.value}</span>
                  <span className={`${fund.isPositive ? "text-green-500" : "text-red-500"}`}>{fund.return}</span>
                </div>
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline">Reset</Button>
              <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                Apply Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

