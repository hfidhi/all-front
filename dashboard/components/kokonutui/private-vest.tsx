import { Building, ArrowUpRight, Clock, AlertTriangle, Calendar, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PrivateVest() {
  // Sample data for private equity investments
  const privateEquityInvestments = [
    {
      name: "TechFusion Inc.",
      stage: "Series B",
      industry: "Software",
      invested: "$45,000",
      currentValue: "$68,523.95",
      expectedExit: "Q3 2025",
      roi: "+52.3%",
      illiquidityRisk: "Medium",
      color: "bg-blue-500",
    },
    {
      name: "GreenEnergy Solutions",
      stage: "Series A",
      industry: "Renewable Energy",
      invested: "$30,000",
      currentValue: "$37,176.70",
      expectedExit: "Q4 2026",
      roi: "+23.9%",
      illiquidityRisk: "High",
      color: "bg-green-500",
    },
    {
      name: "HealthTech Innovations",
      stage: "Growth",
      industry: "Healthcare",
      invested: "$25,000",
      currentValue: "$31,147.25",
      expectedExit: "Q2 2024",
      roi: "+24.6%",
      illiquidityRisk: "Low",
      color: "bg-purple-500",
    },
    {
      name: "Quantum Computing Labs",
      stage: "Seed",
      industry: "Technology",
      invested: "$15,000",
      currentValue: "$12,441.60",
      expectedExit: "Q1 2027",
      roi: "-17.1%",
      illiquidityRisk: "Very High",
      color: "bg-orange-500",
    },
  ]

  // Milestones
  const milestones = [
    {
      company: "TechFusion Inc.",
      event: "Series C Funding Round",
      date: "Expected Q1 2024",
      impact: "Potential 30% valuation increase",
      status: "upcoming",
    },
    {
      company: "HealthTech Innovations",
      event: "FDA Approval",
      date: "Expected Q4 2023",
      impact: "Critical for exit strategy",
      status: "upcoming",
    },
    {
      company: "GreenEnergy Solutions",
      event: "Major Contract Signed",
      date: "September 15, 2023",
      impact: "15% valuation increase",
      status: "completed",
    },
    {
      company: "Quantum Computing Labs",
      event: "Prototype Development",
      date: "July 28, 2023",
      impact: "Technical milestone achieved",
      status: "completed",
    },
  ]

  // New opportunities
  const newOpportunities = [
    {
      name: "BioTech Ventures",
      stage: "Series A",
      industry: "Biotechnology",
      minInvestment: "$25,000",
      targetRaise: "$5M",
      projectedROI: "+85% (3yr)",
      risk: "High",
    },
    {
      name: "AI Solutions Corp",
      stage: "Series B",
      industry: "Artificial Intelligence",
      minInvestment: "$50,000",
      targetRaise: "$12M",
      projectedROI: "+65% (2yr)",
      risk: "Medium-High",
    },
    {
      name: "Sustainable Materials",
      stage: "Seed",
      industry: "Manufacturing",
      minInvestment: "$15,000",
      targetRaise: "$2M",
      projectedROI: "+120% (4yr)",
      risk: "Very High",
    },
  ]

  // Performance metrics
  const performanceData = [
    { period: "1M", value: "+1.2%" },
    { period: "3M", value: "+3.8%" },
    { period: "6M", value: "+8.7%" },
    { period: "YTD", value: "+12.5%" },
    { period: "1Y", value: "+15.4%" },
    { period: "Since Inception", value: "+32.8%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-red-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <Building className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">PrivateVest</h1>
          <p className="text-muted-foreground">Private Equity</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Private Equity Value</CardDescription>
            <CardTitle className="text-3xl">$124,589.00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +15.4% YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Illiquidity Risk</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>Medium</span>
              <Badge variant="outline">65%</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="h-2" indicatorClassName="bg-yellow-500" />
            <p className="text-xs text-muted-foreground mt-2">
              Your private equity portfolio has a medium illiquidity risk
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

      {/* Current Investments */}
      <Card>
        <CardHeader>
          <CardTitle>Current Investments</CardTitle>
          <CardDescription>Details of your private equity investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {privateEquityInvestments.map((investment, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${investment.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                      <Briefcase className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{investment.name}</h3>
                        <Badge variant="outline">{investment.stage}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{investment.industry}</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Invested</p>
                          <p className="text-sm font-medium">{investment.invested}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Current Value</p>
                          <p className="text-sm font-medium">{investment.currentValue}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">ROI</p>
                          <p
                            className={`text-sm font-medium ${investment.roi.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                          >
                            {investment.roi}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Expected Exit</p>
                          <p className="text-sm font-medium">{investment.expectedExit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md">
                      <Clock className="h-3.5 w-3.5 text-yellow-500" />
                      <span className="text-xs font-medium">{investment.illiquidityRisk} Illiquidity</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Milestones</CardTitle>
          <CardDescription>Track progress updates and key events</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {milestones
                .filter((m) => m.status === "upcoming")
                .map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mt-1">
                      <Calendar className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{milestone.event}</h3>
                        <Badge variant="outline">{milestone.date}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{milestone.company}</p>
                      <p className="text-sm mt-2">{milestone.impact}</p>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {milestones
                .filter((m) => m.status === "completed")
                .map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full mt-1">
                      <Calendar className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{milestone.event}</h3>
                        <Badge variant="outline">{milestone.date}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{milestone.company}</p>
                      <p className="text-sm mt-2">{milestone.impact}</p>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* New Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>New Investment Opportunities</CardTitle>
          <CardDescription>Explore and invest in new private equity deals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {newOpportunities.map((opportunity, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{opportunity.name}</h3>
                      <Badge variant="outline">{opportunity.stage}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{opportunity.industry}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                      <div>
                        <p className="text-xs text-muted-foreground">Min Investment</p>
                        <p className="text-sm font-medium">{opportunity.minInvestment}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Target Raise</p>
                        <p className="text-sm font-medium">{opportunity.targetRaise}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Projected ROI</p>
                        <p className="text-sm font-medium text-green-500">{opportunity.projectedROI}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Risk Level</p>
                        <p className="text-sm font-medium">{opportunity.risk}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                    <Button size="sm">Invest</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Illiquidity Risk */}
      <Card>
        <CardHeader>
          <CardTitle>Illiquidity Risk Assessment</CardTitle>
          <CardDescription>Evaluate liquidity risk for each investment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">Illiquidity Warning</p>
                <p className="text-sm text-muted-foreground">
                  Private equity investments typically have lock-up periods of 5-10 years. Ensure you have sufficient
                  liquid assets for your financial needs.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {privateEquityInvestments.map((investment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{investment.name}</p>
                  <p className="text-sm font-medium">{investment.illiquidityRisk} Risk</p>
                </div>
                <Progress
                  value={
                    investment.illiquidityRisk === "Very High"
                      ? 90
                      : investment.illiquidityRisk === "High"
                        ? 75
                        : investment.illiquidityRisk === "Medium"
                          ? 50
                          : investment.illiquidityRisk === "Low"
                            ? 25
                            : 10
                  }
                  className="h-1.5"
                  indicatorClassName={
                    investment.illiquidityRisk === "Very High"
                      ? "bg-red-500"
                      : investment.illiquidityRisk === "High"
                        ? "bg-orange-500"
                        : investment.illiquidityRisk === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                  }
                />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Expected Exit: {investment.expectedExit}</span>
                  <span>Current ROI: {investment.roi}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

