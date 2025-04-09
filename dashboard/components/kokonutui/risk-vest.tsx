"use client"

import { Shield, AlertTriangle, BarChart2, RefreshCw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function RiskVest() {
  const [hedgingStrategies, setHedgingStrategies] = useState([
    { name: "Options Contracts", enabled: true, coverage: 25, cost: "$1,250/year" },
    { name: "Futures Hedging", enabled: false, coverage: 40, cost: "$2,800/year" },
    { name: "Inverse ETFs", enabled: true, coverage: 15, cost: "$950/year" },
    { name: "Gold Allocation", enabled: true, coverage: 10, cost: "$500/year" },
    { name: "Currency Hedging", enabled: false, coverage: 30, cost: "$1,800/year" },
  ])

  const [riskScore, setRiskScore] = useState(65)
  const [marketDecline, setMarketDecline] = useState(25)
  const [inflationRate, setInflationRate] = useState(5)
  const [interestRateChange, setInterestRateChange] = useState(2)
  const [simulationDuration, setSimulationDuration] = useState(6)

  const toggleHedgingStrategy = (index: number) => {
    const updatedStrategies = [...hedgingStrategies]
    updatedStrategies[index].enabled = !updatedStrategies[index].enabled
    setHedgingStrategies(updatedStrategies)
  }

  const runSimulation = (scenario: string) => {
    alert(`Running simulation for scenario: ${scenario}`)
  }

  const runCustomSimulation = () => {
    alert(`Running custom simulation with parameters:
    - Market Decline: -${marketDecline}%
    - Inflation Rate: ${inflationRate}%
    - Interest Rate Change: +${interestRateChange}%
    - Duration: ${simulationDuration} months`)
  }

  // Sample data for risk assessment
  const riskStatus = riskScore < 30 ? "Low" : riskScore < 70 ? "Medium" : "High"
  const riskColor = riskScore < 30 ? "bg-green-500" : riskScore < 70 ? "bg-yellow-500" : "bg-red-500"

  // Diversification metrics
  const diversificationScore = 78 // 0-100

  // Risk exposure by sector
  const sectorExposure = [
    { name: "Technology", exposure: 35, risk: "High", color: "bg-blue-500" },
    { name: "Healthcare", exposure: 20, risk: "Medium", color: "bg-green-500" },
    { name: "Financial", exposure: 15, risk: "Medium-High", color: "bg-purple-500" },
    { name: "Consumer", exposure: 15, risk: "Medium", color: "bg-orange-500" },
    { name: "Energy", exposure: 10, risk: "High", color: "bg-red-500" },
    { name: "Utilities", exposure: 5, risk: "Low", color: "bg-gray-500" },
  ]

  // Simulation scenarios
  const simulationScenarios = [
    { name: "Market Crash (-30%)", portfolioImpact: "-12%", hedgedImpact: "-8%" },
    { name: "Recession", portfolioImpact: "-18%", hedgedImpact: "-11%" },
    { name: "High Inflation", portfolioImpact: "-8%", hedgedImpact: "-3%" },
    { name: "Interest Rate Spike", portfolioImpact: "-5%", hedgedImpact: "-2%" },
    { name: "Currency Crisis", portfolioImpact: "-10%", hedgedImpact: "-6%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-yellow-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <Shield className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">RiskVest</h1>
          <p className="text-muted-foreground">Risk Management</p>
        </div>
      </div>

      {/* Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Risk Assessment</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>{riskStatus} Risk</span>
              <span className="text-sm font-normal">{riskScore}/100</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={riskScore} className="h-2" indicatorClassName={riskColor} />
            <p className="text-xs text-muted-foreground mt-2">
              Your portfolio has a {riskStatus.toLowerCase()} risk level based on current market conditions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Diversification Analysis</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>Well Diversified</span>
              <span className="text-sm font-normal">{diversificationScore}/100</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={diversificationScore} className="h-2" indicatorClassName="bg-green-500" />
            <p className="text-xs text-muted-foreground mt-2">
              Your portfolio is well diversified across asset classes and sectors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Hedging Coverage</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>Partial Coverage</span>
              <span className="text-sm font-normal">35%</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={35} className="h-2" indicatorClassName="bg-blue-500" />
            <p className="text-xs text-muted-foreground mt-2">
              35% of your portfolio is protected by hedging strategies
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Exposure */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Exposure by Sector</CardTitle>
          <CardDescription>Monitor how much risk you are exposed to in different sectors</CardDescription>
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
                    <p className="text-xs text-muted-foreground">Risk: {sector.risk}</p>
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

      {/* Hedging Strategies */}
      <Card>
        <CardHeader>
          <CardTitle>Hedging Strategies</CardTitle>
          <CardDescription>Enable or disable hedging options to protect your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hedgingStrategies.map((strategy, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div>
                  <p className="font-medium">{strategy.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Coverage: {strategy.coverage}% | Cost: {strategy.cost}
                  </p>
                </div>
                <Switch checked={strategy.enabled} onCheckedChange={() => toggleHedgingStrategy(index)} />
              </div>
            ))}

            <div className="flex justify-end gap-4 mt-6">
              <Button
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                onClick={() => alert("Hedging strategies updated successfully!")}
              >
                Apply Changes
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Simulations */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Simulations</CardTitle>
          <CardDescription>Simulate different market scenarios to see how your portfolio would perform</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="scenarios">
            <TabsList className="mb-4">
              <TabsTrigger value="scenarios">Predefined Scenarios</TabsTrigger>
              <TabsTrigger value="custom">Custom Simulation</TabsTrigger>
            </TabsList>

            <TabsContent value="scenarios" className="space-y-4">
              {simulationScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg"
                >
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                    <p className="font-medium">{scenario.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-right">
                    <div>
                      <p className="text-xs text-muted-foreground">Without Hedging</p>
                      <p className="text-sm font-medium text-red-500">{scenario.portfolioImpact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">With Hedging</p>
                      <p className="text-sm font-medium text-red-500">{scenario.hedgedImpact}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => runSimulation(scenario.name)}>
                    Run
                  </Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="custom" className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Market Decline</p>
                  <p className="text-sm font-medium">-{marketDecline}%</p>
                </div>
                <Slider
                  defaultValue={[marketDecline]}
                  value={[marketDecline]}
                  max={50}
                  step={5}
                  className="h-1.5"
                  onValueChange={(value) => setMarketDecline(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Inflation Rate</p>
                  <p className="text-sm font-medium">{inflationRate}%</p>
                </div>
                <Slider
                  defaultValue={[inflationRate]}
                  value={[inflationRate]}
                  max={15}
                  step={1}
                  className="h-1.5"
                  onValueChange={(value) => setInflationRate(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Interest Rate Change</p>
                  <p className="text-sm font-medium">+{interestRateChange}%</p>
                </div>
                <Slider
                  defaultValue={[interestRateChange]}
                  value={[interestRateChange]}
                  min={-2}
                  max={5}
                  step={0.5}
                  className="h-1.5"
                  onValueChange={(value) => setInterestRateChange(value[0])}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Duration (months)</p>
                  <p className="text-sm font-medium">{simulationDuration}</p>
                </div>
                <Slider
                  defaultValue={[simulationDuration]}
                  value={[simulationDuration]}
                  min={1}
                  max={24}
                  step={1}
                  className="h-1.5"
                  onValueChange
                  step={1}
                  className="h-1.5"
                  onValueChange={(value) => setSimulationDuration(value[0])}
                />
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setMarketDecline(25)
                    setInflationRate(5)
                    setInterestRateChange(2)
                    setSimulationDuration(6)
                  }}
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
                <Button
                  className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                  onClick={runCustomSimulation}
                >
                  Run Simulation
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Risk Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Recommendations</CardTitle>
          <CardDescription>Personalized suggestions to improve your risk profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">High Technology Exposure</p>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio has a 35% exposure to the technology sector, which increases overall risk.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => alert("Redirecting to asset allocation page to reduce technology exposure")}
                  >
                    Reduce Exposure
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Consider Futures Hedging</p>
                  <p className="text-sm text-muted-foreground">
                    Adding futures hedging could provide 40% more coverage against market downturns.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => {
                      const updatedStrategies = [...hedgingStrategies]
                      const index = updatedStrategies.findIndex((s) => s.name === "Futures Hedging")
                      if (index !== -1) {
                        updatedStrategies[index].enabled = true
                        setHedgingStrategies(updatedStrategies)
                        alert("Futures Hedging strategy enabled")
                      }
                    }}
                  >
                    Enable Strategy
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start">
                <BarChart2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <p className="font-medium">Good Diversification</p>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio is well diversified across asset classes, which helps reduce overall risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

