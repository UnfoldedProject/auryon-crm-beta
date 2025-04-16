"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Search,
  Plus,
  Edit,
  Archive,
  Share2,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BarChart2,
  FileText,
  Filter,
} from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"

// Sample forms data
const forms = [
  {
    id: "1",
    name: "Client Intake Form",
    createdDate: "2023-04-15",
    submissions: 28,
    status: "Active",
    lastUpdated: "2023-05-10",
  },
  {
    id: "2",
    name: "Feedback Survey",
    createdDate: "2023-04-22",
    submissions: 15,
    status: "Active",
    lastUpdated: "2023-05-05",
  },
  {
    id: "3",
    name: "Contact Request",
    createdDate: "2023-05-01",
    submissions: 42,
    status: "Active",
    lastUpdated: "2023-05-12",
  },
  {
    id: "4",
    name: "Event Registration",
    createdDate: "2023-05-08",
    submissions: 7,
    status: "Draft",
    lastUpdated: "2023-05-08",
  },
]

// Sample archived forms data
const archivedForms = [
  {
    id: "5",
    name: "Old Client Questionnaire",
    createdDate: "2023-02-10",
    submissions: 56,
    status: "Archived",
    lastUpdated: "2023-04-01",
  },
  {
    id: "6",
    name: "2022 Satisfaction Survey",
    createdDate: "2022-11-15",
    submissions: 124,
    status: "Archived",
    lastUpdated: "2023-03-20",
  },
]

// Status icon and color mapping
const statusConfig = {
  Active: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  Draft: {
    icon: Clock,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  Archived: {
    icon: Archive,
    color: "text-gray-500",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
  },
}

export default function FormsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showArchived, setShowArchived] = useState(false)

  // Filter forms based on search term
  const filteredForms = forms.filter((form) => form.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredArchivedForms = archivedForms.filter((form) =>
    form.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
            <p className="text-sm text-gray-500">Forms Management</p>
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
            <Link href="/forms" className="flex items-center text-green-600 font-medium">
              <span className="mr-3">📝</span>
              Forms
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">⚡</span>
              Automation
            </Link>
            <Link href="/tasks" className="flex items-center text-gray-700 hover:text-green-600">
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
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">⚙️</span>
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Forms</h1>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 mr-2" />
              Create New Form
            </button>
          </div>

          {/* Analytics Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-2">
                <FileText className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-semibold text-gray-700">Total Forms</h3>
              </div>
              <p className="text-3xl font-bold">{forms.length + archivedForms.length}</p>
              <p className="text-sm text-gray-500 mt-1">
                {forms.length} active, {archivedForms.length} archived
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-2">
                <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold text-gray-700">Total Submissions</h3>
              </div>
              <p className="text-3xl font-bold">
                {forms.reduce((sum, form) => sum + form.submissions, 0) +
                  archivedForms.reduce((sum, form) => sum + form.submissions, 0)}
              </p>
              <p className="text-sm text-gray-500 mt-1">Across all forms</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="font-semibold text-gray-700">Conversion Rate</h3>
              </div>
              <p className="text-3xl font-bold">24%</p>
              <p className="text-sm text-gray-500 mt-1">Average across all forms</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search forms..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </button>
                <button
                  className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm"
                  onClick={() => setShowArchived(!showArchived)}
                >
                  {showArchived ? "Hide" : "Show"} Archived
                  {showArchived ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                </button>
              </div>
            </div>
          </div>

          {/* Active Forms */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Active Forms</h2>
            {filteredForms.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredForms.map((form) => {
                  const StatusIcon = statusConfig[form.status as keyof typeof statusConfig].icon
                  return (
                    <div
                      key={form.id}
                      className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow"
                    >
                      <div className="md:flex justify-between items-center">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center">
                            <StatusIcon
                              className={`h-5 w-5 mr-2 ${statusConfig[form.status as keyof typeof statusConfig].color}`}
                            />
                            <h3 className="font-semibold text-lg">{form.name}</h3>
                          </div>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-500">
                            <span>Created: {formatDate(form.createdDate)}</span>
                            <span>Last Updated: {formatDate(form.lastUpdated)}</span>
                            <span>Submissions: {form.submissions}</span>
                            <span
                              className={`px-2 py-0.5 rounded-full ${statusConfig[form.status as keyof typeof statusConfig].bgColor} ${statusConfig[form.status as keyof typeof statusConfig].textColor}`}
                            >
                              {form.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Edit">
                            <Edit className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Archive">
                            <Archive className="h-5 w-5 text-gray-600" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Share">
                            <Share2 className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">No forms found</h3>
                <p className="text-gray-500 mb-4">No forms match your search criteria.</p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Form
                </button>
              </div>
            )}
          </div>

          {/* Archived Forms */}
          {showArchived && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Archived Forms</h2>
              {filteredArchivedForms.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {filteredArchivedForms.map((form) => {
                    const StatusIcon = statusConfig[form.status as keyof typeof statusConfig].icon
                    return (
                      <div
                        key={form.id}
                        className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow opacity-75"
                      >
                        <div className="md:flex justify-between items-center">
                          <div className="mb-4 md:mb-0">
                            <div className="flex items-center">
                              <StatusIcon
                                className={`h-5 w-5 mr-2 ${statusConfig[form.status as keyof typeof statusConfig].color}`}
                              />
                              <h3 className="font-semibold text-lg">{form.name}</h3>
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-500">
                              <span>Created: {formatDate(form.createdDate)}</span>
                              <span>Last Updated: {formatDate(form.lastUpdated)}</span>
                              <span>Submissions: {form.submissions}</span>
                              <span
                                className={`px-2 py-0.5 rounded-full ${statusConfig[form.status as keyof typeof statusConfig].bgColor} ${statusConfig[form.status as keyof typeof statusConfig].textColor}`}
                              >
                                {form.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="Restore">
                              <CheckCircle className="h-5 w-5 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
                  <Archive className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No archived forms</h3>
                  <p className="text-gray-500">You don't have any archived forms yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Empty State (shown when no forms exist at all) */}
          {forms.length === 0 && archivedForms.length === 0 && (
            <div className="bg-white rounded-xl p-12 shadow-sm border text-center">
              <div className="max-w-md mx-auto">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-xl font-medium text-gray-700 mb-3">No forms yet</h3>
                <p className="text-gray-500 mb-6">
                  Create your first form to start collecting information from your clients and leads.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Form
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
