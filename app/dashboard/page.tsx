"use client"

import { useState } from "react"
import {
  Bell,
  Settings,
  LogOut,
  Plus,
  ChevronRight,
  Calendar,
  FileText,
  Zap,
  CheckSquare,
  User,
  MessageSquare,
  BarChart2,
  Slack,
} from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"
import { SidebarNavigation } from "@/components/sidebar-navigation"

export default function Dashboard() {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return "Good Morning"
    if (hour < 18) return "Good Afternoon"
    return "Good Evening"
  })

  const quotes = [
    "Discipline equals freedom.",
    "Progress over perfection.",
    "Focus on what matters.",
    "Small steps, big results.",
  ]

  const [quote] = useState(() => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  })

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">{greeting}, Sean</h1>
            <p className="text-sm text-gray-500">"{quote}"</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-900">
            <Bell className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Settings className="h-5 w-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <LogOut className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">Sean Williams</span>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#FCD34D] flex items-center justify-center text-white font-bold">
              SW
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <SidebarNavigation />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
          {/* Metrics Section */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Metrics Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Active Leads", value: "26", change: "+3 today" },
                { title: "Tasks Due", value: "8", change: "2 overdue" },
                { title: "Meetings Booked", value: "3", change: "Next: 2pm" },
                { title: "Top Converting Rep", value: "Sean W.", change: "68% close rate" },
                { title: "Revenue to Date", value: "$42,500", change: "+$8,500 this month" },
                { title: "Leads Assigned Today", value: "5", change: "3 unassigned" },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <div className="flex justify-between items-end mt-1">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <span className="text-xs text-gray-500">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Task Center */}
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Task Center</h2>
                <button className="text-green-600 hover:text-green-700 flex items-center text-sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Task
                </button>
              </div>
              <ul className="space-y-3">
                {[
                  { task: "Follow up with Jenna", due: "Today", overdue: false },
                  { task: "Review funnel responses", due: "Tomorrow", overdue: false },
                  { task: "Schedule onboarding call", due: "May 2", overdue: false },
                  { task: "Send proposal to Acme Inc", due: "Apr 28", overdue: true },
                  { task: "Update client dashboard", due: "Apr 30", overdue: false },
                ].map((task, index) => (
                  <li key={index} className="p-3 rounded-lg border flex justify-between items-center">
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <div>
                        <span className={task.overdue ? "text-red-600 font-medium" : ""}>{task.task}</span>
                        <p className="text-xs text-gray-500">Due: {task.due}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </li>
                ))}
              </ul>
              <button className="w-full text-center text-sm text-gray-500 hover:text-gray-700 mt-4">
                View All Tasks
              </button>
            </section>

            {/* Latest Activity */}
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Latest Activity</h2>
              <ul className="space-y-4">
                {[
                  {
                    action: "New lead added",
                    details: "Julia Chen submitted the contact form",
                    time: "2 hours ago",
                    icon: User,
                  },
                  {
                    action: "Form submitted",
                    details: "Carlos Mendez completed the intake questionnaire",
                    time: "Yesterday",
                    icon: FileText,
                  },
                  {
                    action: "Meeting scheduled",
                    details: "Call with Alex T. for tomorrow at 2:00 PM",
                    time: "Yesterday",
                    icon: Calendar,
                  },
                  {
                    action: "Funnel updated",
                    details: "Sales funnel for Enterprise clients modified",
                    time: "2 days ago",
                    icon: Zap,
                  },
                  {
                    action: "Task completed",
                    details: "Sean marked 'Send follow-up emails' as done",
                    time: "2 days ago",
                    icon: CheckSquare,
                  },
                ].map((activity, index) => (
                  <li key={index} className="flex">
                    <div className="mr-3 bg-gray-100 rounded-full p-2">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.details}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="w-full text-center text-sm text-gray-500 hover:text-gray-700 mt-4">
                View All Activity
              </button>
            </section>
          </div>

          {/* Quick Actions */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Add New Lead", icon: User, color: "from-green-400 to-green-600" },
                { title: "Create Form", icon: FileText, color: "from-blue-400 to-blue-600" },
                { title: "Build Funnel", icon: Zap, color: "from-yellow-400 to-yellow-600" },
                { title: "Start Automation", icon: Settings, color: "from-purple-400 to-purple-600" },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-xl shadow flex flex-col items-center justify-center h-32 hover:shadow-md transition-all`}
                >
                  <action.icon className="h-8 w-8 mb-2" />
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Bottom Modules */}
          <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-5 w-5 mr-2 text-gray-600" />
                <h3 className="font-semibold">AI Chat Suggestions</h3>
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-sm text-gray-500">
                AI-powered insights and suggestions to help optimize your sales process and client interactions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <Slack className="h-5 w-5 mr-2 text-gray-600" />
                <h3 className="font-semibold">Slack Sync Feed</h3>
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-sm text-gray-500">
                Connect your Slack workspace to receive real-time notifications and updates from Auryon.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-5 w-5 mr-2 text-gray-600" />
                <h3 className="font-semibold">CRM Performance</h3>
                <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-sm text-gray-500">
                Detailed analytics and performance metrics with 7-day and 30-day views of your CRM activity.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
