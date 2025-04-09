import { Users, ArrowUpRight, Lightbulb, CheckCircle, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PartVest() {
  // Sample data for crowdfunding projects
  const activeProjects = [
    {
      name: "Solar Farm Initiative",
      category: "Renewable Energy",
      goal: "$500,000",
      raised: "$325,000",
      progress: 65,
      invested: "$15,000",
      expectedReturn: "12% (3yr)",
      riskLevel: "Medium",
      daysLeft: 18,
      color: "bg-green-500",
    },
    {
      name: "Urban Housing Development",
      category: "Real Estate",
      goal: "$1,200,000",
      raised: "$840,000",
      progress: 70,
      invested: "$25,000",
      expectedReturn: "9% (2yr)",
      riskLevel: "Low",
      daysLeft: 25,
      color: "bg-blue-500",
    },
    {
      name: "Tech Startup Accelerator",
      category: "Technology",
      goal: "$750,000",
      raised: "$375,000",
      progress: 50,
      invested: "$20,000",
      expectedReturn: "18% (4yr)",
      riskLevel: "High",
      daysLeft: 12,
      color: "bg-purple-500",
    },
  ]

  // Completed projects
  const completedProjects = [
    {
      name: "Community Wind Farm",
      category: "Renewable Energy",
      goal: "$350,000",
      raised: "$350,000",
      invested: "$10,000",
      projectedReturn: "11% (2yr)",
      actualReturn: "13.5%",
      status: "Successful",
      color: "bg-green-500",
    },
    {
      name: "Biotech Research Lab",
      category: "Healthcare",
      goal: "$600,000",
      raised: "$600,000",
      invested: "$15,000",
      projectedReturn: "15% (3yr)",
      actualReturn: "12.8%",
      status: "Successful",
      color: "bg-blue-500",
    },
    {
      name: "E-commerce Platform",
      category: "Technology",
      goal: "$250,000",
      raised: "$180,000",
      invested: "$5,000",
      projectedReturn: "20% (2yr)",
      actualReturn: "-5.2%",
      status: "Underperforming",
      color: "bg-red-500",
    },
  ]

  // New projects
  const newProjects = [
    {
      name: "Sustainable Agriculture",
      category: "Agriculture",
      goal: "$400,000",
      raised: "$120,000",
      progress: 30,
      minInvestment: "$5,000",
      expectedReturn: "10% (2yr)",
      riskLevel: "Medium-Low",
      daysLeft: 45,
      color: "bg-green-500",
    },
    {
      name: "AI Education Platform",
      category: "Education Technology",
      goal: "$300,000",
      raised: "$90,000",
      progress: 30,
      minInvestment: "$2,500",
      expectedReturn: "16% (3yr)",
      riskLevel: "Medium-High",
      daysLeft: 30,
      color: "bg-purple-500",
    },
    {
      name: "Medical Device Innovation",
      category: "Healthcare",
      goal: "$550,000",
      raised: "$220,000",
      progress: 40,
      minInvestment: "$7,500",
      expectedReturn: "14% (2.5yr)",
      riskLevel: "Medium",
      daysLeft: 22,
      color: "bg-blue-500",
    },
  ]

  // Performance metrics
  const performanceData = [
    { period: "1M", value: "+1.8%" },
    { period: "3M", value: "+4.2%" },
    { period: "6M", value: "+6.5%" },
    { period: "YTD", value: "+9.8%" },
    { period: "1Y", value: "+12.3%" },
    { period: "Since Inception", value: "+18.7%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-yellow-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <Users className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">PartVest</h1>
          <p className="text-muted-foreground">Crowdfunding and Participatory Investing</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Crowdfunding Value</CardDescription>
            <CardTitle className="text-3xl">$124,589.00</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +9.8% YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Projects</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>3</span>
              <Badge variant="outline">$60,000 Invested</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={65} className="h-2" indicatorClassName="bg-yellow-500" />
            <p className="text-xs text-muted-foreground mt-2">Average funding progress across all active projects</p>
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

      {/* Project Management */}
      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
          <CardDescription>Monitor and manage your crowdfunding investments</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Projects</TabsTrigger>
              <TabsTrigger value="completed">Completed Projects</TabsTrigger>
              <TabsTrigger value="new">New Opportunities</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              {activeProjects.map((project, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-md ${project.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                        <Lightbulb className="h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{project.name}</h3>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Your Investment</p>
                            <p className="text-sm font-medium">{project.invested}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Expected Return</p>
                            <p className="text-sm font-medium text-green-500">{project.expectedReturn}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Risk Level</p>
                            <p className="text-sm font-medium">{project.riskLevel}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Days Left</p>
                            <p className="text-sm font-medium">{project.daysLeft}</p>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">Funding Progress</p>
                            <p className="text-xs font-medium">{project.progress}%</p>
                          </div>
                          <Progress value={project.progress} className="h-1.5" indicatorClassName={project.color} />
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Raised: {project.raised}</span>
                            <span>Goal: {project.goal}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                      <Button size="sm">Add Investment</Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="completed" className="space-y-6">
              {completedProjects.map((project, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-md ${project.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                        <CheckCircle className="h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{project.name}</h3>
                          <Badge variant={project.status === "Successful" ? "default" : "destructive"}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{project.category}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Your Investment</p>
                            <p className="text-sm font-medium">{project.invested}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Projected Return</p>
                            <p className="text-sm font-medium">{project.projectedReturn}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Actual Return</p>
                            <p
                              className={`text-sm font-medium ${project.actualReturn.startsWith("-") ? "text-red-500" : "text-green-500"}`}
                            >
                              {project.actualReturn}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Funding</p>
                            <p className="text-sm font-medium">
                              {project.raised} / {project.goal}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="new" className="space-y-6">
              {newProjects.map((project, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-md ${project.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                        <Lightbulb className="h-4 w-4 text-gray-900 dark:text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{project.name}</h3>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                          <div>
                            <p className="text-xs text-muted-foreground">Min Investment</p>
                            <p className="text-sm font-medium">{project.minInvestment}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Expected Return</p>
                            <p className="text-sm font-medium text-green-500">{project.expectedReturn}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Risk Level</p>
                            <p className="text-sm font-medium">{project.riskLevel}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Days Left</p>
                            <p className="text-sm font-medium">{project.daysLeft}</p>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground">Funding Progress</p>
                            <p className="text-xs font-medium">{project.progress}%</p>
                          </div>
                          <Progress value={project.progress} className="h-1.5" indicatorClassName={project.color} />
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Raised: {project.raised}</span>
                            <span>Goal: {project.goal}</span>
                          </div>
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Risk and Reward Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Risk and Reward Analysis</CardTitle>
          <CardDescription>Visual breakdown of risk vs. reward for each project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-6">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
              <div>
                <p className="font-medium">Crowdfunding Risk Warning</p>
                <p className="text-sm text-muted-foreground">
                  Crowdfunding investments carry significant risks, including the potential for complete loss of
                  capital. Diversify your investments and only invest what you can afford to lose.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...activeProjects, ...newProjects].map((project, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Risk Level</p>
                    <Progress
                      value={
                        project.riskLevel === "High"
                          ? 80
                          : project.riskLevel === "Medium-High"
                            ? 65
                            : project.riskLevel === "Medium"
                              ? 50
                              : project.riskLevel === "Medium-Low"
                                ? 35
                                : 20
                      }
                      className="h-1.5"
                      indicatorClassName={
                        project.riskLevel === "High"
                          ? "bg-red-500"
                          : project.riskLevel === "Medium-High"
                            ? "bg-orange-500"
                            : project.riskLevel === "Medium"
                              ? "bg-yellow-500"
                              : project.riskLevel === "Medium-Low"
                                ? "bg-blue-500"
                                : "bg-green-500"
                      }
                    />
                    <p className="text-xs font-medium">{project.riskLevel}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Expected Return</p>
                    <Progress
                      value={Number.parseInt(project.expectedReturn.split("%")[0]) * 5}
                      className="h-1.5"
                      indicatorClassName="bg-green-500"
                    />
                    <p className="text-xs font-medium text-green-500">{project.expectedReturn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

