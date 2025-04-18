"use client"

import { useState } from "react"
import Link from "next/link"
import {
  User,
  Mail,
  Phone,
  Lock,
  Bell,
  Moon,
  Users,
  UserPlus,
  Zap,
  Slack,
  Globe,
  DollarSign,
  BarChart2,
  Shield,
  LogOut,
  ChevronDown,
  ChevronUp,
  Edit,
  Check,
  X,
} from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"
import { SidebarNavigation } from "@/components/sidebar-navigation"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [autoAssignLeads, setAutoAssignLeads] = useState(true)
  const [notionSync, setNotionSync] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [reportingExpanded, setReportingExpanded] = useState(false)
  const [securityExpanded, setSecurityExpanded] = useState(false)
  const [editingName, setEditingName] = useState(false)
  const [fullName, setFullName] = useState("Sean Williams")
  const [leadCaptureEmail, setLeadCaptureEmail] = useState("leads@auryon.cloud")
  const [notificationEmail, setNotificationEmail] = useState("notifications@auryon.cloud")
  const [defaultLeadAssignment, setDefaultLeadAssignment] = useState("Round Robin")
  const [defaultTaskPriority, setDefaultTaskPriority] = useState("Medium")
  const [timeZone, setTimeZone] = useState("Eastern Time (ET)")
  const [currencyFormat, setCurrencyFormat] = useState("USD ($)")
  const [defaultReportView, setDefaultReportView] = useState("Monthly")
  const [inviteEmail, setInviteEmail] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Settings</p>
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Settings</h1>
            <p className="text-gray-600">Manage your preferences and system controls</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Settings Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-6">User Settings</h2>

              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#6EE7B7] to-[#FCD34D] flex items-center justify-center text-white text-2xl font-bold">
                    SW
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Full Name
                  </label>
                  {editingName ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="flex-1 px-3 py-2 border rounded-lg"
                      />
                      <button
                        onClick={() => setEditingName(false)}
                        className="ml-2 p-1.5 rounded-full bg-green-100 text-green-600"
                      >
                        <Check className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setFullName("Sean Williams")
                          setEditingName(false)
                        }}
                        className="ml-1 p-1.5 rounded-full bg-red-100 text-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{fullName}</span>
                      <button
                        onClick={() => setEditingName(true)}
                        className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">sean@auryon.cloud</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Primary</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Phone Number
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">+1 (740) 600-4468</span>
                    <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button className="w-full mt-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <Lock className="h-4 w-4 mr-2" />
                  Change Password
                </button>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Bell className="h-4 w-4 mr-2 text-gray-600" />
                      <span>Enable Notifications</span>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        notifications ? "bg-green-500" : "bg-gray-200"
                      }`}
                      onClick={() => setNotifications(!notifications)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Moon className="h-4 w-4 mr-2 text-gray-600" />
                      <span>Dark Mode</span>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        darkMode ? "bg-green-500" : "bg-gray-200"
                      }`}
                      onClick={() => setDarkMode(!darkMode)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          darkMode ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Team/Workspace Settings Card */}
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-6">Team & Workspace Settings</h2>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-500">Company Name</label>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">Auryon CRM</span>
                    <button className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Team Members
                  </label>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">6 Members</span>
                    <Link href="/team" className="text-sm text-green-600 hover:text-green-700 font-medium">
                      View Team
                    </Link>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite New Member
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-l-lg"
                    />
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg">
                      Invite
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500">Default Lead Assignment</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={defaultLeadAssignment}
                    onChange={(e) => setDefaultLeadAssignment(e.target.value)}
                  >
                    <option>Round Robin</option>
                    <option>Manual Assignment</option>
                    <option>Assigned Rep</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500 flex items-center">
                    <Slack className="h-4 w-4 mr-2" />
                    Slack Workspace Integration
                  </label>
                  <button className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                    <Slack className="h-4 w-4 mr-2" />
                    Connect Slack
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Settings Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mt-8">
            <h2 className="text-lg font-semibold mb-6">Automation Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-500">Lead Capture Email</label>
                  <input
                    type="email"
                    value={leadCaptureEmail}
                    onChange={(e) => setLeadCaptureEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500">Notification Email</label>
                  <input
                    type="email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-gray-600" />
                    <span>Auto-assign new leads</span>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      autoAssignLeads ? "bg-green-500" : "bg-gray-200"
                    }`}
                    onClick={() => setAutoAssignLeads(!autoAssignLeads)}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoAssignLeads ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-2 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.37 12.5H17.62"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V8Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 9L7 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 9L17 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Enable Notion Sync</span>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                      notionSync ? "bg-green-500" : "bg-gray-200"
                    }`}
                    onClick={() => setNotionSync(!notionSync)}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        notionSync ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-sm text-gray-500">Default Task Priority</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg"
                    value={defaultTaskPriority}
                    onChange={(e) => setDefaultTaskPriority(e.target.value)}
                  >
                    <option>Medium</option>
                    <option>High</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Modules */}
          <div className="mt-8 space-y-4">
            {/* Reporting Preferences */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setReportingExpanded(!reportingExpanded)}
              >
                <div className="flex items-center">
                  <BarChart2 className="h-5 w-5 mr-3 text-gray-600" />
                  <h2 className="text-lg font-semibold">Reporting Preferences</h2>
                </div>
                {reportingExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {reportingExpanded && (
                <div className="p-6 pt-0 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-sm text-gray-500 flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          Time Zone
                        </label>
                        <select
                          className="w-full px-3 py-2 border rounded-lg"
                          value={timeZone}
                          onChange={(e) => setTimeZone(e.target.value)}
                        >
                          <option>Eastern Time (ET)</option>
                          <option>Central Time (CT)</option>
                          <option>Mountain Time (MT)</option>
                          <option>Pacific Time (PT)</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm text-gray-500 flex items-center">
                          <DollarSign className="h-4 w-4 mr-2" />
                          Currency Format
                        </label>
                        <select
                          className="w-full px-3 py-2 border rounded-lg"
                          value={currencyFormat}
                          onChange={(e) => setCurrencyFormat(e.target.value)}
                        >
                          <option>USD ($)</option>
                          <option>EUR (€)</option>
                          <option>GBP (£)</option>
                          <option>CAD (C$)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-sm text-gray-500">Default Report View</label>
                        <select
                          className="w-full px-3 py-2 border rounded-lg"
                          value={defaultReportView}
                          onChange={(e) => setDefaultReportView(e.target.value)}
                        >
                          <option>Monthly</option>
                          <option>Weekly</option>
                          <option>Quarterly</option>
                          <option>Yearly</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-sm text-gray-500">Export Reports</label>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                            CSV
                          </button>
                          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                            PDF
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <button
                className="w-full p-6 flex items-center justify-between text-left"
                onClick={() => setSecurityExpanded(!securityExpanded)}
              >
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-3 text-gray-600" />
                  <h2 className="text-lg font-semibold">Security Settings</h2>
                </div>
                {securityExpanded ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {securityExpanded && (
                <div className="p-6 pt-0 border-t">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Two-Factor Authentication</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-6">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          twoFactor ? "bg-green-500" : "bg-gray-200"
                        }`}
                        onClick={() => setTwoFactor(!twoFactor)}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            twoFactor ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <Bell className="h-4 w-4 mr-2 text-gray-600" />
                          <span>Login Alerts</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-6">
                          Receive email notifications for new login attempts
                        </p>
                      </div>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          loginAlerts ? "bg-green-500" : "bg-gray-200"
                        }`}
                        onClick={() => setLoginAlerts(!loginAlerts)}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            loginAlerts ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Recent Login Sessions</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium">Columbus, OH, United States</p>
                              <p className="text-xs text-gray-500">Today, 10:42 AM • Chrome on macOS</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-medium">Columbus, OH, United States</p>
                              <p className="text-xs text-gray-500">Yesterday, 3:15 PM • Safari on iOS</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between">
                            <div>
                              <p className="text-sm font-medium">Columbus, OH, United States</p>
                              <p className="text-xs text-gray-500">May 12, 2023, 9:30 AM • Chrome on macOS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="flex items-center text-red-600 hover:text-red-700">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Sign out of all devices</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
