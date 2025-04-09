import { Binary, ArrowUpRight, Play, Pause, Settings, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function QuantumVest() {
  // Sample data for algorithms
  const algorithms = [
    {
      name: "Momentum Alpha",
      status: "active",
      roi: "+18.2%",
      winRate: "68%",
      trades: 245,
      riskLevel: "Medium-High",
      description: "Captures price trends across multiple timeframes",
      color: "bg-purple-500",
    },
    {
      name: "Volatility Arbitrage",
      status: "active",
      roi: "+12.5%",
      winRate: "72%",
      trades: 187,
      riskLevel: "Medium",
      description: "Exploits price discrepancies during high volatility",
      color: "bg-blue-500",
    },
    {
      name: "Statistical Hedge",
      status: "inactive",
      roi: "+7.8%",
      winRate: "65%",
      trades: 312,
      riskLevel: "Low",
      description: "Uses statistical models to identify mispriced assets",
      color: "bg-green-500",
    },
    {
      name: "Quantum ML Predictor",
      status: "active",
      roi: "+22.4%",
      winRate: "61%",
      trades: 156,
      riskLevel: "High",
      description: "Machine learning model with quantum computing optimization",
      color: "bg-red-500",
    },
    {
      name: "Market Neutral ETF",
      status: "inactive",
      roi: "+5.2%",
      winRate: "78%",
      trades: 94,
      riskLevel: "Very Low",
      description: "Balanced long/short positions to neutralize market risk",
      color: "bg-gray-500",
    },
  ]

  // Market conditions
  const marketConditions = [
    { name: "Market Volatility", value: 68, trend: "increasing", color: "bg-yellow-500" },
    { name: "Trading Volume", value: 52, trend: "stable", color: "bg-blue-500" },
    { name: "Sentiment Index", value: 45, trend: "decreasing", color: "bg-purple-500" },
    { name: "Liquidity Factor", value: 72, trend: "stable", color: "bg-green-500" },
  ]

  // Performance metrics
  const performanceData = [
    { period: "1D", value: "+1.2%" },
    { period: "1W", value: "+3.8%" },
    { period: "1M", value: "+8.7%" },
    { period: "3M", value: "+12.5%" },
    { period: "YTD", value: "+18.7%" },
    { period: "1Y", value: "+24.3%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-purple-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <Binary className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">QuantumVest</h1>
          <p className="text-muted-foreground">Quantum Trading and Algorithms</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Algorithm Value</CardDescription>
            <CardTitle className="text-3xl">$249,178.00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +18.7% YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Algorithms</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>3 of 5</span>
              <span className="text-sm font-normal">60%</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="h-2" indicatorClassName="bg-purple-500" />
            <p className="text-xs text-muted-foreground mt-2">3 algorithms are currently active and trading</p>
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

      {/* Market Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Market Conditions</CardTitle>
          <CardDescription>Live data on market trends affecting the algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {marketConditions.map((condition) => (
              <div key={condition.name} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{condition.name}</p>
                  <Badge
                    variant={
                      condition.trend === "increasing"
                        ? "default"
                        : condition.trend === "decreasing"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {condition.trend.charAt(0).toUpperCase() + condition.trend.slice(1)}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Intensity</span>
                    <span className="text-sm font-medium">{condition.value}/100</span>
                  </div>
                  <Progress value={condition.value} className="h-1.5" indicatorClassName={condition.color} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Management */}
      <Card>
        <CardHeader>
          <CardTitle>Algorithm Management</CardTitle>
          <CardDescription>Monitor and control your trading algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {algorithms.map((algorithm, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${algorithm.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                      <Binary className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{algorithm.name}</h3>
                        <Badge variant={algorithm.status === "active" ? "default" : "secondary"}>
                          {algorithm.status === "active" ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{algorithm.description}</p>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">ROI</p>
                          <p className="text-sm font-medium text-green-500">{algorithm.roi}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Win Rate</p>
                          <p className="text-sm font-medium">{algorithm.winRate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Risk</p>
                          <p className="text-sm font-medium">{algorithm.riskLevel}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                    <Button size="sm" variant={algorithm.status === "active" ? "destructive" : "default"}>
                      {algorithm.status === "active" ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Activate
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Algorithm Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Algorithm Settings</CardTitle>
          <CardDescription>Customize parameters for all active algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="risk">
            <TabsList className="mb-4">
              <TabsTrigger value="risk">Risk Level</TabsTrigger>
              <TabsTrigger value="investment">Investment Amount</TabsTrigger>
              <TabsTrigger value="frequency">Trading Frequency</TabsTrigger>
            </TabsList>

            <TabsContent value="risk" className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Global Risk Level</p>
                  <p className="text-sm font-medium">Medium-High</p>
                </div>
                <Slider defaultValue={[75]} max={100} step={5} className="h-1.5" />
                <p className="text-xs text-muted-foreground">
                  This setting affects all active algorithms. Higher risk may lead to higher returns but with increased
                  volatility.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {algorithms
                  .filter((a) => a.status === "active")
                  .map((algorithm, index) => (
                    <div key={index} className="p-3 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{algorithm.name}</p>
                        <p className="text-xs font-medium">{algorithm.riskLevel}</p>
                      </div>
                      <Slider
                        defaultValue={[
                          algorithm.riskLevel === "High"
                            ? 85
                            : algorithm.riskLevel === "Medium-High"
                              ? 70
                              : algorithm.riskLevel === "Medium"
                                ? 50
                                : 30,
                        ]}
                        max={100}
                        step={5}
                        className="h-1.5"
                      />
                    </div>
                  ))}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                  Apply Changes
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="investment" className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Total Investment Amount</p>
                  <p className="text-sm font-medium">$249,178.00</p>
                </div>
                <p className="text-xs text-muted-foreground">Adjust how much capital is allocated to each algorithm</p>
              </div>

              <div className="space-y-4 mt-4">
                {algorithms
                  .filter((a) => a.status === "active")
                  .map((algorithm, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{algorithm.name}</p>
                        <p className="text-sm font-medium">${Math.floor((249178 * (index + 1)) / 10) / 1000}k</p>
                      </div>
                      <Slider defaultValue={[(index + 1) * 10]} max={100} step={5} className="h-1.5" />
                      <p className="text-xs text-muted-foreground">
                        Allocation: {(index + 1) * 10}% of total investment
                      </p>
                    </div>
                  ))}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                  Apply Changes
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="frequency" className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium">Trading Frequency</p>
                <p className="text-xs text-muted-foreground">Adjust how often each algorithm executes trades</p>
              </div>

              <div className="space-y-4 mt-4">
                {algorithms
                  .filter((a) => a.status === "active")
                  .map((algorithm, index) => (
                    <div key={index} className="p-3 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{algorithm.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-medium">Active</p>
                          <Switch checked={true} />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className={index === 0 ? "bg-gray-200 dark:bg-zinc-700" : ""}
                        >
                          Low
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={index === 1 ? "bg-gray-200 dark:bg-zinc-700" : ""}
                        >
                          Medium
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className={index === 2 ? "bg-gray-200 dark:bg-zinc-700" : ""}
                        >
                          High
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {index === 0
                          ? "1-5 trades per day"
                          : index === 1
                            ? "5-15 trades per day"
                            : "15+ trades per day"}
                      </p>
                    </div>
                  ))}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200">
                  Apply Changes
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Performance Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Analytics</CardTitle>
          <CardDescription>Detailed performance metrics for your algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="font-medium mb-2">Win/Loss Ratio</h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 dark:bg-zinc-800 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                </div>
                <span className="text-sm font-medium">68%</span>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>412 Wins</span>
                <span>194 Losses</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="font-medium mb-2">Average Trade</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Profit</span>
                  <span className="text-sm font-medium text-green-500">+$245.32</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Loss</span>
                  <span className="text-sm font-medium text-red-500">-$178.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Net</span>
                  <span className="text-sm font-medium text-green-500">+$66.87</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
              <h3 className="font-medium mb-2">Trading Volume</h3>
              <div className="text-3xl font-bold">606</div>
              <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <span>Total Trades</span>
                <span className="text-green-500">+12% vs last month</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">View Detailed Analytics</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

