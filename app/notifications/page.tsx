"use client"

import { useState } from "react"
import {
  Bell,
  Search,
  CheckCircle,
  Users,
  FileText,
  Calendar,
  Zap,
  MessageSquare,
  Settings,
  Filter,
  Mail,
  Phone,
  BellOff,
  MoreHorizontal,
  ChevronRight,
  CheckCheck,
} from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"
import { SidebarNavigation } from "@/components/sidebar-navigation"

// Sample notification data
const notifications = [
  {
    id: "1",
    type: "lead",
    title: "New Lead Assigned",
    message: "Julia Chen has been assigned to you",
    timestamp: "10 minutes ago",
    read: false,
    icon: Users,
    category: "mentions",
  },
  {
    id: "2",
    type: "form",
    title: "Form Submission",
    message: "New client intake form submitted by Carlos Mendez",
    timestamp: "1 hour ago",
    read: false,
    icon: FileText,
    category: "activity",
  },
  {
    id: "3",
    type: "meeting",
    title: "Meeting Reminder",
    message: "Upcoming call with Alex Thompson in 30 minutes",
    timestamp: "2 hours ago",
    read: true,
    icon: Calendar,
    category: "mentions",
  },
  {
    id: "4",
    type: "system",
    title: "System Update",
    message: "Auryon CRM has been updated to version 2.4.0",
    timestamp: "Yesterday",
    read: true,
    icon: Zap,
    category: "system",
  },
  {
    id: "5",
    type: "message",
    title: "New Message",
    message: "Sarah Johnson commented on a task: 'Let's discuss this tomorrow'",
    timestamp: "Yesterday",
    read: false,
    icon: MessageSquare,
    category: "mentions",
  },
  {
    id: "6",
    type: "task",
    title: "Task Completed",
    message: "Michael Rodriguez completed 'Send follow-up emails'",
    timestamp: "2 days ago",
    read: true,
    icon: CheckCircle,
    category: "activity",
  },
  {
    id: "7",
    type: "system",
    title: "Account Security",
    message: "New login detected from Columbus, OH on Chrome",
    timestamp: "3 days ago",
    read: true,
    icon: Settings,
    category: "system",
  },
  {
    id: "8",
    type: "lead",
    title: "Lead Status Change",
    message: "Emma Wilson moved from 'Prospect' to 'Qualified'",
    timestamp: "4 days ago",
    read: true,
    icon: Users,
    category: "activity",
  },
]

// Type color mapping
const typeColors = {
  lead: "bg-blue-100 text-blue-800",
  form: "bg-purple-100 text-purple-800",
  meeting: "bg-yellow-100 text-yellow-800",
  system: "bg-gray-100 text-gray-800",
  message: "bg-green-100 text-green-800",
  task: "bg-indigo-100 text-indigo-800",
}

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [notificationsList, setNotificationsList] = useState(notifications)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  // Filter notifications based on active filter and search term
  const filteredNotifications = notificationsList.filter((notification) => {
    const matchesFilter = activeFilter === "all" || notification.category === activeFilter

    const matchesSearch =
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  // Handle marking a notification as read
  const handleMarkAsRead = (id: string) => {
    setNotificationsList(
      notificationsList.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    )
  }

  // Handle marking all notifications as read
  const handleMarkAllAsRead = () => {
    setNotificationsList(notificationsList.map((notification) => ({ ...notification, read: true })))
  }

  // Count unread notifications
  const unreadCount = notificationsList.filter((notification) => !notification.read).length

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Notifications Center</p>
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
            <div>
              <h1 className="text-2xl font-bold mb-1">Notifications</h1>
              <p className="text-gray-600">Stay on top of everything that matters</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <button
                onClick={handleMarkAllAsRead}
                className="flex items-center bg-white border hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg mr-3 transition-colors"
              >
                <CheckCheck className="h-4 w-4 mr-2" />
                Mark All as Read
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Notification Filters */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All", count: notificationsList.length },
                {
                  id: "mentions",
                  label: "Mentions",
                  count: notificationsList.filter((n) => n.category === "mentions").length,
                },
                {
                  id: "system",
                  label: "System",
                  count: notificationsList.filter((n) => n.category === "system").length,
                },
                {
                  id: "activity",
                  label: "Activity",
                  count: notificationsList.filter((n) => n.category === "activity").length,
                },
              ].map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                    activeFilter === filter.id
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                  <span className="ml-2 bg-white px-2 py-0.5 rounded-full text-xs">{filter.count}</span>
                </button>
              ))}
              <button className="ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Notification Feed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="font-semibold">Notification Feed</h2>
                  <span className="text-sm text-gray-500">
                    {unreadCount} unread {unreadCount === 1 ? "notification" : "notifications"}
                  </span>
                </div>

                {filteredNotifications.length > 0 ? (
                  <div className="divide-y">
                    {filteredNotifications.map((notification) => {
                      const NotificationIcon = notification.icon
                      return (
                        <div
                          key={notification.id}
                          className={`p-4 hover:bg-gray-50 transition-colors ${
                            !notification.read ? "bg-green-50" : ""
                          }`}
                        >
                          <div className="flex">
                            <div className="mr-4">
                              <div
                                className={`p-2 rounded-full ${
                                  typeColors[notification.type as keyof typeof typeColors]
                                }`}
                              >
                                <NotificationIcon className="h-5 w-5" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{notification.title}</h3>
                                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                </div>
                                <div className="flex items-center">
                                  {!notification.read && (
                                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full mr-2"></span>
                                  )}
                                  <span className="text-xs text-gray-500">{notification.timestamp}</span>
                                </div>
                              </div>
                              <div className="flex justify-between items-center mt-3">
                                <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
                                  View Details
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </button>
                                <div className="flex space-x-2">
                                  {!notification.read && (
                                    <button
                                      onClick={() => handleMarkAsRead(notification.id)}
                                      className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500"
                                      title="Mark as read"
                                    >
                                      <CheckCircle className="h-4 w-4" />
                                    </button>
                                  )}
                                  <button
                                    className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500"
                                    title="More options"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-700 mb-2">No notifications found</h3>
                    <p className="text-gray-500">
                      {searchTerm ? "No notifications match your search criteria." : "You're all caught up!"}
                    </p>
                  </div>
                )}

                {filteredNotifications.length > 0 && (
                  <div className="p-4 border-t text-center">
                    <button className="text-sm text-gray-600 hover:text-gray-800">Load More Notifications</button>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Settings Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-semibold">Notification Settings</h2>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-600" />
                      <span>Email Alerts</span>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        emailAlerts ? "bg-green-500" : "bg-gray-200"
                      }`}
                      onClick={() => setEmailAlerts(!emailAlerts)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          emailAlerts ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-600" />
                      <span>SMS Alerts</span>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        smsAlerts ? "bg-green-500" : "bg-gray-200"
                      }`}
                      onClick={() => setSmsAlerts(!smsAlerts)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          smsAlerts ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Bell className="h-4 w-4 mr-2 text-gray-600" />
                      <span>Push Notifications</span>
                    </div>
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        pushNotifications ? "bg-green-500" : "bg-gray-200"
                      }`}
                      onClick={() => setPushNotifications(!pushNotifications)}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          pushNotifications ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-3">Notification Types</h3>
                    <div className="space-y-2">
                      {[
                        { label: "Lead Updates", enabled: true },
                        { label: "Form Submissions", enabled: true },
                        { label: "Meeting Reminders", enabled: true },
                        { label: "System Updates", enabled: false },
                        { label: "Team Messages", enabled: true },
                        { label: "Task Completions", enabled: true },
                      ].map((type, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{type.label}</span>
                          <div
                            className={`h-3 w-3 rounded-full ${type.enabled ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                      <Settings className="h-4 w-4 mr-2" />
                      Advanced Settings
                    </button>
                  </div>

                  <div className="pt-4 border-t">
                    <button className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                      <BellOff className="h-4 w-4 mr-2" />
                      Mute All Notifications
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats Card */}
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden mt-6">
                <div className="p-4 border-b">
                  <h2 className="font-semibold">Notification Stats</h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-600">{notificationsList.length}</p>
                      <p className="text-xs text-gray-500">Total</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-yellow-600">{unreadCount}</p>
                      <p className="text-xs text-gray-500">Unread</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-600">
                        {notificationsList.filter((n) => n.category === "mentions").length}
                      </p>
                      <p className="text-xs text-gray-500">Mentions</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-purple-600">
                        {notificationsList.filter((n) => n.category === "system").length}
                      </p>
                      <p className="text-xs text-gray-500">System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
