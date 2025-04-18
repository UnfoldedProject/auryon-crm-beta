"use client"

import { useState } from "react"
import { Search, ChevronDown, Filter, MoreHorizontal, UserPlus } from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"
import { SidebarNavigation } from "@/components/sidebar-navigation"

// Sample client data
const clients = [
  {
    id: "1",
    name: "Acme Corporation",
    status: "Active",
    assignedRep: "Sean Williams",
    lastContactDate: "2023-05-10",
    nextFollowUpDate: "2023-05-25",
    notes: "Discussing expansion of current services",
  },
  {
    id: "2",
    name: "TechStart Inc.",
    status: "Onboarding",
    assignedRep: "Alex Johnson",
    lastContactDate: "2023-05-12",
    nextFollowUpDate: "2023-05-18",
    notes: "Setting up initial systems and training",
  },
  {
    id: "3",
    name: "Global Innovations",
    status: "Prospect",
    assignedRep: "Sean Williams",
    lastContactDate: "2023-05-08",
    nextFollowUpDate: "2023-05-22",
    notes: "Interested in CRM implementation",
  },
  {
    id: "4",
    name: "Bright Future Foundation",
    status: "Active",
    assignedRep: "Alex Johnson",
    lastContactDate: "2023-05-15",
    nextFollowUpDate: "2023-06-01",
    notes: "Quarterly review scheduled",
  },
  {
    id: "5",
    name: "Sunset Industries",
    status: "Inactive",
    assignedRep: "Sean Williams",
    lastContactDate: "2023-04-20",
    nextFollowUpDate: "2023-06-15",
    notes: "On hold until Q3 budget approval",
  },
]

// Status color mapping
const statusColors = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-gray-100 text-gray-800",
  Onboarding: "bg-blue-100 text-blue-800",
  Prospect: "bg-yellow-100 text-yellow-800",
}

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter clients based on search term
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.assignedRep.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.notes.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // Calculate days since last contact
  const daysSinceLastContact = (dateString: string) => {
    const lastContact = new Date(dateString)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - lastContact.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Client Management</p>
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
        <SidebarNavigation />

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Clients</h1>
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                <UserPlus className="h-5 w-5 mr-2" />
                Add Client
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
                  Assigned Rep
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm">
                  Last Contact
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Client Name
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
                      Assigned Rep
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Last Contact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Next Follow-Up
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Notes
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
                  {filteredClients.length > 0 ? (
                    filteredClients.map((client, index) => (
                      <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                              {client.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{client.name}</div>
                              <div className="text-xs text-gray-500">ID: {client.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              statusColors[client.status as keyof typeof statusColors]
                            }`}
                          >
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.assignedRep}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(client.lastContactDate)}</div>
                          <div className="text-xs text-gray-500">
                            {daysSinceLastContact(client.lastContactDate)} days ago
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(client.nextFollowUpDate)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">{client.notes}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                        No clients found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredClients.length}</span> of{" "}
                <span className="font-medium">{clients.length}</span> clients
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
