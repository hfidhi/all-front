import { HandshakeIcon, ArrowUpRight, Users, MessageSquare, Video, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function RelVest() {
  // Sample data for relationship investments
  const relationshipInvestments = [
    {
      name: "Tech Innovation Fund",
      type: "Co-Investment",
      partners: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40", role: "Lead Investor" },
        { name: "Sarah Chen", avatar: "/placeholder.svg?height=40&width=40", role: "Technology Advisor" },
      ],
      invested: "$25,000",
      totalValue: "$32,500",
      roi: "+30%",
      relationshipScore: 85,
      lastActivity: "2 days ago",
      color: "bg-blue-500",
    },
    {
      name: "Sustainable Energy Partnership",
      type: "Joint Venture",
      partners: [
        { name: "Michael Rodriguez", avatar: "/placeholder.svg?height=40&width=40", role: "Energy Expert" },
        { name: "Emma Wilson", avatar: "/placeholder.svg?height=40&width=40", role: "Financial Analyst" },
      ],
      invested: "$15,000",
      totalValue: "$18,750",
      roi: "+25%",
      relationshipScore: 92,
      lastActivity: "Yesterday",
      color: "bg-green-500",
    },
    {
      name: "Healthcare Innovation Group",
      type: "Syndicate",
      partners: [
        { name: "Dr. James Lee", avatar: "/placeholder.svg?height=40&width=40", role: "Medical Advisor" },
        { name: "Lisa Thompson", avatar: "/placeholder.svg?height=40&width=40", role: "Biotech Investor" },
      ],
      invested: "$20,000",
      totalValue: "$17,000",
      roi: "-15%",
      relationshipScore: 68,
      lastActivity: "1 week ago",
      color: "bg-purple-500",
    },
  ]

  // Upcoming meetings
  const upcomingMeetings = [
    {
      title: "Tech Innovation Fund Review",
      date: "Oct 15, 2023",
      time: "10:00 AM",
      attendees: [
        { name: "Alex Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Sarah Chen", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      type: "video",
    },
    {
      title: "Sustainable Energy Partnership Update",
      date: "Oct 18, 2023",
      time: "2:30 PM",
      attendees: [
        { name: "Michael Rodriguez", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Emma Wilson", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "You", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      type: "in-person",
    },
  ]

  // New opportunities
  const newOpportunities = [
    {
      name: "Fintech Accelerator",
      type: "Co-Investment",
      initiator: { name: "Robert Chang", avatar: "/placeholder.svg?height=40&width=40", role: "Fintech Expert" },
      minInvestment: "$10,000",
      expectedReturn: "22% (2yr)",
      relationshipStrength: "Strong",
      description: "Join a group of fintech experts to invest in promising startups",
    },
    {
      name: "Real Estate Development",
      type: "Joint Venture",
      initiator: {
        name: "Olivia Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Real Estate Developer",
      },
      minInvestment: "$50,000",
      expectedReturn: "15% (3yr)",
      relationshipStrength: "New",
      description: "Partner on a mixed-use development project in an emerging neighborhood",
    },
  ]

  // Performance metrics
  const performanceData = [
    { period: "1M", value: "+1.2%" },
    { period: "3M", value: "+3.5%" },
    { period: "6M", value: "+5.8%" },
    { period: "YTD", value: "+7.5%" },
    { period: "1Y", value: "+12.3%" },
    { period: "Since Inception", value: "+18.5%" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <div className="p-2 rounded-md bg-teal-500 bg-opacity-20 dark:bg-opacity-30 mr-3">
          <HandshakeIcon className="h-6 w-6 text-gray-900 dark:text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">RelVest</h1>
          <p className="text-muted-foreground">Relationship Investing</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Relationship Value</CardDescription>
            <CardTitle className="text-3xl">$62,294.50</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <span className="text-sm font-medium text-green-500 flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                +7.5% YTD
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Relationships</CardDescription>
            <CardTitle className="flex items-center justify-between">
              <span>3</span>
              <Badge variant="outline">6 Partners</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="h-2" indicatorClassName="bg-teal-500" />
            <p className="text-xs text-muted-foreground mt-2">Average relationship score: 82/100</p>
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

      {/* Relationship Investments */}
      <Card>
        <CardHeader>
          <CardTitle>Relationship Investments</CardTitle>
          <CardDescription>Overview of relationship-based investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {relationshipInvestments.map((investment, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-md ${investment.color} bg-opacity-20 dark:bg-opacity-30 mt-1`}>
                      <HandshakeIcon className="h-4 w-4 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{investment.name}</h3>
                        <Badge variant="outline">{investment.type}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs text-muted-foreground">Partners:</p>
                        <div className="flex -space-x-2">
                          {investment.partners.map((partner, i) => (
                            <Avatar key={i} className="h-6 w-6 border-2 border-background">
                              <AvatarImage src={partner.avatar} alt={partner.name} />
                              <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Invested</p>
                          <p className="text-sm font-medium">{investment.invested}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Current Value</p>
                          <p className="text-sm font-medium">{investment.totalValue}</p>
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
                          <p className="text-xs text-muted-foreground">Last Activity</p>
                          <p className="text-sm font-medium">{investment.lastActivity}</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">Relationship Score</p>
                          <p className="text-xs font-medium">{investment.relationshipScore}/100</p>
                        </div>
                        <Progress
                          value={investment.relationshipScore}
                          className="h-1.5"
                          indicatorClassName={
                            investment.relationshipScore > 80
                              ? "bg-green-500"
                              : investment.relationshipScore > 60
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm">
                      <Users className="h-4 w-4 mr-2" />
                      Manage
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Communication Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Communication Tools</CardTitle>
          <CardDescription>Stay connected with your investment partners</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="meetings">
            <TabsList className="mb-4">
              <TabsTrigger value="meetings">Upcoming Meetings</TabsTrigger>
              <TabsTrigger value="messages">Recent Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="meetings" className="space-y-4">
              {upcomingMeetings.map((meeting, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mt-1">
                    {meeting.type === "video" ? (
                      <Video className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Calendar className="h-4 w-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{meeting.title}</h3>
                      <Badge variant="outline">
                        {meeting.date}, {meeting.time}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-xs text-muted-foreground">Attendees:</p>
                      <div className="flex -space-x-2">
                        {meeting.attendees.map((attendee, i) => (
                          <Avatar key={i} className="h-6 w-6 border-2 border-background">
                            <AvatarImage src={attendee.avatar} alt={attendee.name} />
                            <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      {meeting.type === "video" ? (
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Join Meeting
                        </Button>
                      ) : (
                        <Button size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New Meeting
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="messages" className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg text-center">
                <MessageSquare className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-muted-foreground">Your messages will appear here</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start New Conversation
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* New Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>New Relationship Opportunities</CardTitle>
          <CardDescription>Explore new relationship-based investments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {newOpportunities.map((opportunity, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 mt-1">
                      <AvatarImage src={opportunity.initiator.avatar} alt={opportunity.initiator.name} />
                      <AvatarFallback>{opportunity.initiator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{opportunity.name}</h3>
                        <Badge variant="outline">{opportunity.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Initiated by {opportunity.initiator.name} ({opportunity.initiator.role})
                      </p>
                      <p className="text-sm mt-2">{opportunity.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Min Investment</p>
                          <p className="text-sm font-medium">{opportunity.minInvestment}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Expected Return</p>
                          <p className="text-sm font-medium text-green-500">{opportunity.expectedReturn}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Relationship</p>
                          <p className="text-sm font-medium">{opportunity.relationshipStrength}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button size="sm">
                      <HandshakeIcon className="h-4 w-4 mr-2" />
                      Join
                    </Button>
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

