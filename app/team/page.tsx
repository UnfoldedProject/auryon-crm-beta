"use client"

import { useState } from "react"
import { Search, Plus, Filter, Mail, ChevronDown, UserPlus, CheckCircle, Clock, XCircle } from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"
import { SidebarNavigation } from "@/components/sidebar-navigation"

// Sample team members data
const teamMembers = [
  {
    id: "1",
    name: "Sean Williams",
    role: "Sales Director",
    email: "sean@auryon.cloud",
    status: "Active",
    assignedLeads: 24,
    avatar: "/abstract-southwest.png",
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Account Executive",
    email: "alex@auryon.cloud",
    status: "Active",
    assignedLeads: 18,
    avatar: "/abstract-aj.png",
  },
  {
    id: "3",
    name: "Maya Patel",
    role: "Customer Success Manager",
    email: "maya@auryon.cloud",
    status: "Active",
    assignedLeads: 15,
    avatar: "/musical-performance.png",
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Sales Development Rep",
    email: "james@auryon.cloud",
    status: "Onboarding",
    assignedLeads: 5,
    avatar: "/abstract-jw.png",
  },
  {
    id: "5",
    name: "Sophia Chen",
    role: "Marketing Specialist",
    email: "sophia@auryon.cloud",
    status: "Active",
    assignedLeads: 0,
    avatar: "/abstract-geometric-shapes.png",
  },
  {
    id: "6",
    name: "David Rodriguez",
    role: "Account Executive",
    email: "david@auryon.cloud",
    status: "Inactive",
    assignedLeads: 0,
    avatar: "/abstract-geometric-shapes.png",
  },
]

// Status color mapping
const statusColors = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-gray-100 text-gray-800",
  Onboarding: "bg-yellow-100 text-yellow-800",
}

// Status icon mapping
const statusIcons = {
  Active: CheckCircle,
  Inactive: XCircle,
  Onboarding: Clock,
}

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [roleFilter, setRoleFilter] = useState("All")
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  // Get unique roles for filter
  const roles = ["All", ...new Set(teamMembers.map((member) => member.role))]

  // Filter team members based on search term, status, and role
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "All" || member.status === statusFilter
    const matchesRole = roleFilter === "All" || member.role === roleFilter

    return matchesSearch && matchesStatus && matchesRole
  })

  // Toggle expanded card
  const toggleExpand = (id: string) => {
    if (expandedMember === id) {
      setExpandedMember(null)
    } else {
      setExpandedMember(id)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Team Management</p>
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
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Team</h1>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <UserPlus className="h-5 w-5 mr-2" />
              Add Team Member
            </button>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search team members..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="relative">
                  <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Status: {statusFilter}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute z-10 mt-1 w-48 bg-white rounded-lg shadow-lg border overflow-hidden hidden group-focus-within:block">
                    <div className="py-1">
                      {["All", "Active", "Onboarding", "Inactive"].map((status) => (
                        <button
                          key={status}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setStatusFilter(status)}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button className="flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Role: {roleFilter}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute z-10 mt-1 w-48 bg-white rounded-lg shadow-lg border overflow-hidden hidden group-focus-within:block">
                    <div className="py-1">
                      {roles.map((role) => (
                        <button
                          key={role}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                          onClick={() => setRoleFilter(role)}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => {
              const StatusIcon = statusIcons[member.status as keyof typeof statusIcons]
              const isExpanded = expandedMember === member.id

              return (
                <div
                  key={member.id}
                  className={`bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-200 ${
                    isExpanded ? "scale-[1.02]" : "hover:scale-[1.01]"
                  } cursor-pointer`}
                  onClick={() => toggleExpand(member.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={`${member.name} avatar`}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full flex items-center ${
                              statusColors[member.status as keyof typeof statusColors]
                            }`}
                          >
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {member.status}
                          </span>
                        </div>
                        <div className="mt-3 text-sm text-gray-500">{member.email}</div>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="text-sm">
                            <span className="font-medium">{member.assignedLeads}</span> Assigned Leads
                          </span>
                          <button
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.location.href = `mailto:${member.email}`
                            }}
                            title={`Email ${member.name}`}
                          >
                            <Mail className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-gray-500">Phone</p>
                            <p className="font-medium">+1 (555) 123-4567</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Joined</p>
                            <p className="font-medium">Jan 15, 2023</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Department</p>
                            <p className="font-medium">Sales</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Location</p>
                            <p className="font-medium">Columbus, OH</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-gray-500 text-sm">Recent Activity</p>
                          <ul className="mt-2 text-sm space-y-1">
                            <li className="text-gray-600">• Added 3 new leads yesterday</li>
                            <li className="text-gray-600">• Completed 5 tasks this week</li>
                            <li className="text-gray-600">• Scheduled 2 meetings for tomorrow</li>
                          </ul>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            View Full Profile
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">No team members found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg inline-flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add Team Member
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
