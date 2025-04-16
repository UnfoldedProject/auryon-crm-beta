"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, ChevronDown, Filter } from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"

// Sample lead data
const leads = [
  {
    id: "1",
    name: "Julia Chen",
    email: "julia.chen@example.com",
    phone: "(555) 123-4567",
    source: "Contact Form",
    tag: "Hot",
    assignedRep: "Sean Williams",
    status: "Contacted",
  },
  {
    id: "2",
    name: "Carlos Mendez",
    email: "carlos@mendezinc.com",
    phone: "(555) 987-6543",
    source: "Funnel",
    tag: "Hot",
    assignedRep: "Sean Williams",
    status: "Pending",
  },
  {
    id: "3",
    name: "Alex Thompson",
    email: "alex.t@example.org",
    phone: "(555) 456-7890",
    source: "Referral",
    tag: "Warm",
    assignedRep: "Unassigned",
    status: "Pending",
  },
  {
    id: "4",
    name: "Sarah Johnson",
    email: "sarah.j@acmecorp.com",
    phone: "(555) 234-5678",
    source: "LinkedIn",
    tag: "Cold",
    assignedRep: "Sean Williams",
    status: "Closed",
  },
  {
    id: "5",
    name: "Michael Rodriguez",
    email: "mrodriguez@example.net",
    phone: "(555) 876-5432",
    source: "Webinar",
    tag: "Warm",
    assignedRep: "Unassigned",
    status: "Contacted",
  },
  {
    id: "6",
    name: "Emma Wilson",
    email: "emma.wilson@techstart.io",
    phone: "(555) 345-6789",
    source: "Contact Form",
    tag: "Hot",
    assignedRep: "Sean Williams",
    status: "Pending",
  },
]

// Tag color mapping
const tagColors = {
  Hot: "bg-red-100 text-red-800",
  Warm: "bg-orange-100 text-orange-800",
  Cold: "bg-blue-100 text-blue-800",
}

// Status color mapping
const statusColors = {
  Pending: "bg-gray-100 text-gray-800",
  Contacted: "bg-purple-100 text-purple-800",
  Closed: "bg-green-100 text-green-800",
}

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter leads based on search term
  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm),
  )

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Lead Management</p>
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
            <Link href="/leads" className="flex items-center text-green-600 font-medium">
              <span className="mr-3">👥</span>
              Leads
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">📝</span>
              Forms
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">⚡</span>
              Automation
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">✅</span>
              Tasks
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">📅</span>
              Calendar
            </Link>
            <Link href="#" className="flex items-center text-gray-700 hover:text-green-600">
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
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Leads</h1>
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                <Plus className="h-5 w-5 mr-2" />
                Add Lead
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Filter className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  Status
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  Tag
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  Source
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  Assigned Rep
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Source
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tag
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
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            href={`/dashboard?lead=${lead.id}`}
                            className="text-green-600 hover:text-green-800 font-medium"
                          >
                            {lead.name}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.source}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${tagColors[lead.tag as keyof typeof tagColors]}`}
                          >
                            {lead.tag}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.assignedRep}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${statusColors[lead.status as keyof typeof statusColors]}`}
                          >
                            {lead.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-gray-600 hover:text-gray-900">•••</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-4 text-center text-gray-500">
                        No leads found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredLeads.length}</span> of{" "}
                <span className="font-medium">{leads.length}</span> leads
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
