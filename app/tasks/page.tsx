"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Check, Trash2, Clock, PlayCircle, CheckCircle } from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"

// Sample task data
const tasks = [
  {
    id: "1",
    name: "Follow up with Julia Chen",
    assignedRep: "Sean Williams",
    dueDate: "2023-05-15",
    priority: "High",
    status: "Pending",
  },
  {
    id: "2",
    name: "Send proposal to Acme Corp",
    assignedRep: "Sean Williams",
    dueDate: "2023-05-16",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "3",
    name: "Schedule demo with potential client",
    assignedRep: "Alex Johnson",
    dueDate: "2023-05-18",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "4",
    name: "Update client onboarding documents",
    assignedRep: "Sean Williams",
    dueDate: "2023-05-20",
    priority: "Low",
    status: "In Progress",
  },
  {
    id: "5",
    name: "Review Q2 sales targets",
    assignedRep: "Alex Johnson",
    dueDate: "2023-05-22",
    priority: "Medium",
    status: "Completed",
  },
  {
    id: "6",
    name: "Prepare for team meeting",
    assignedRep: "Sean Williams",
    dueDate: "2023-05-17",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: "7",
    name: "Update CRM documentation",
    assignedRep: "Alex Johnson",
    dueDate: "2023-05-25",
    priority: "Low",
    status: "Completed",
  },
]

// Priority color mapping
const priorityColors = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Low: "bg-blue-100 text-blue-800",
}

// Status color and icon mapping
const statusConfig = {
  Pending: {
    color: "bg-gray-100 text-gray-800",
    icon: Clock,
  },
  "In Progress": {
    color: "bg-purple-100 text-purple-800",
    icon: PlayCircle,
  },
  Completed: {
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
}

export default function TasksPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [taskList, setTaskList] = useState(tasks)

  // Filter tasks based on status
  const filteredTasks = activeFilter === "All" ? taskList : taskList.filter((task) => task.status === activeFilter)

  // Handle task completion
  const handleCompleteTask = (id: string) => {
    setTaskList((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, status: "Completed" } : task)))
  }

  // Handle task deletion
  const handleDeleteTask = (id: string) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Task Management</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Sean Williams</span>
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#FCD34D] flex items-center justify-center text-white font-bold">
            SW
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-6">
          <nav className="space-y-4">
            <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">🏠</span>
              Dashboard
            </Link>
            <Link href="/leads" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">👥</span>
              Leads
            </Link>
            <Link href="/forms" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">📝</span>
              Forms
            </Link>
            <Link href="/automations" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">⚡</span>
              Automation
            </Link>
            <Link href="/tasks" className="flex items-center text-green-600 font-medium">
              <span className="mr-3">✅</span>
              Tasks
            </Link>
            <Link href="/calendar" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">📅</span>
              Calendar
            </Link>
            <Link href="/clients" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">🤝</span>
              Clients
            </Link>
            <Link href="/team" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">👤</span>
              Team
            </Link>
            <Link href="/notifications" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">🔔</span>
              Notifications
            </Link>
            <Link href="/settings" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">⚙️</span>
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Tasks</h1>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 mr-2" />
              New Task
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
            <div className="flex flex-wrap gap-2">
              {["All", "Pending", "In Progress", "Completed"].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Tasks Table */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Assigned Rep
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Due Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Priority
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTasks.length > 0 ? (
                    filteredTasks.map((task, index) => {
                      const StatusIcon = statusConfig[task.status as keyof typeof statusConfig].icon

                      return (
                        <tr
                          key={task.id}
                          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-900">{task.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignedRep}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(task.dueDate)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                priorityColors[task.priority as keyof typeof priorityColors]
                              }`}
                            >
                              {task.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <StatusIcon className="h-4 w-4 mr-1" />
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  statusConfig[task.status as keyof typeof statusConfig].color
                                }`}
                              >
                                {task.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex space-x-2">
                              {task.status !== "Completed" && (
                                <button
                                  onClick={() => handleCompleteTask(task.id)}
                                  className="text-green-600 hover:text-green-800 transition-colors"
                                  title="Mark as complete"
                                >
                                  <Check className="h-5 w-5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="text-red-600 hover:text-red-800 transition-colors"
                                title="Delete task"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                        No tasks found matching your filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredTasks.length}</span> of{" "}
                <span className="font-medium">{taskList.length}</span> tasks
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 border rounded-md text-sm bg-gray-100 text-gray-800">1</button>
                <button className="px-3 py-1 border rounded-md text-sm text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
