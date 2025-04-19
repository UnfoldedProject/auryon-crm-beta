"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"

// Sample events data
const events = [
  {
    id: "1",
    title: "Onboarding Call – Julia Chen",
    date: new Date(2023, 4, 15, 10, 0), // May 15, 2023, 10:00 AM
    color: "bg-green-100 border-green-300 text-green-800",
  },
  {
    id: "2",
    title: "Follow-up: Carlos Mendez",
    date: new Date(2023, 4, 16, 14, 0), // May 16, 2023, 2:00 PM
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
  {
    id: "3",
    title: "Demo Scheduled – 2PM",
    date: new Date(2023, 4, 18, 14, 0), // May 18, 2023, 2:00 PM
    color: "bg-blue-100 border-blue-300 text-blue-800",
  },
  {
    id: "4",
    title: "Team Meeting",
    date: new Date(2023, 4, 17, 9, 0), // May 17, 2023, 9:00 AM
    color: "bg-purple-100 border-purple-300 text-purple-800",
  },
  {
    id: "5",
    title: "Client Review – Acme Corp",
    date: new Date(2023, 4, 22, 11, 0), // May 22, 2023, 11:00 AM
    color: "bg-green-100 border-green-300 text-green-800",
  },
  {
    id: "6",
    title: "Sales Strategy Session",
    date: new Date(2023, 4, 24, 15, 0), // May 24, 2023, 3:00 PM
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 4, 1)) // May 1, 2023
  const [view, setView] = useState<"month" | "week">("month")

  // Get the current month and year
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()

  // Navigate to previous month
  const prevMonth = () => {
    const newDate = new Date(currentDate)
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setDate(newDate.getDate() - 7)
    }
    setCurrentDate(newDate)
  }

  // Navigate to next month
  const nextMonth = () => {
    const newDate = new Date(currentDate)
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() + 1)
    } else {
      newDate.setDate(newDate.getDate() + 7)
    }
    setCurrentDate(newDate)
  }

  // Generate days for the month view
  const generateMonthDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    // Get the first day of the month
    const firstDay = new Date(year, month, 1)
    const firstDayIndex = firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.

    // Get the last day of the month
    const lastDay = new Date(year, month + 1, 0)
    const lastDate = lastDay.getDate()

    // Get the last day of the previous month
    const prevLastDay = new Date(year, month, 0)
    const prevLastDate = prevLastDay.getDate()

    // Calculate total days to display (42 = 6 rows of 7 days)
    const totalDays = 42

    const days = []

    // Previous month's days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevLastDate - i),
        isCurrentMonth: false,
      })
    }

    // Current month's days
    for (let i = 1; i <= lastDate; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      })
    }

    // Next month's days
    const remainingDays = totalDays - days.length
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      })
    }

    return days
  }

  // Generate days for the week view
  const generateWeekDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const date = currentDate.getDate()

    // Get the first day of the week (Sunday)
    const firstDayOfWeek = new Date(currentDate)
    const day = currentDate.getDay()
    firstDayOfWeek.setDate(date - day)

    const days = []

    // Generate 7 days starting from the first day of the week
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(firstDayOfWeek)
      currentDay.setDate(firstDayOfWeek.getDate() + i)
      days.push({
        date: currentDay,
        isCurrentMonth: currentDay.getMonth() === month,
      })
    }

    return days
  }

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Format time (e.g., "10:00 AM")
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
  }

  // Get days based on current view
  const days = view === "month" ? generateMonthDays() : generateWeekDays()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <AuryonLogo className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Auryon CRM</h1>
            <p className="text-sm text-gray-500">Calendar</p>
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
            <Link href="/tasks" className="flex items-center text-gray-700 hover:text-green-600">
              <span className="mr-3">✅</span>
              Tasks
            </Link>
            <Link href="/calendar" className="flex items-center text-green-600 font-medium">
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
          {/* Calendar Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Calendar</h1>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    view === "week" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setView("week")}
                >
                  Week
                </button>
                <button
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    view === "month" ? "bg-white shadow-sm" : "hover:bg-gray-200"
                  }`}
                  onClick={() => setView("month")}
                >
                  Month
                </button>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                <Plus className="h-5 w-5 mr-2" />
                New Event
              </button>
            </div>
          </div>

          {/* Calendar Navigation */}
          <div className="bg-white rounded-xl p-4 shadow-sm border mb-6 flex justify-between items-center">
            <button
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold">
              {currentMonth} {currentYear}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* Day Headers */}
            <div className="grid grid-cols-7 border-b">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className={`grid grid-cols-7 ${view === "month" ? "grid-rows-6" : "grid-rows-1"}`}>
              {days.map((day, index) => {
                const dayEvents = getEventsForDate(day.date)
                return (
                  <div
                    key={index}
                    className={`min-h-[100px] border-b border-r p-1 ${
                      day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"
                    } ${view === "week" ? "h-96" : ""}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className={`text-sm font-medium ${
                          new Date().toDateString() === day.date.toDateString()
                            ? "bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                            : ""
                        }`}
                      >
                        {day.date.getDate()}
                      </span>
                      {dayEvents.length > 0 && view === "month" && (
                        <span className="text-xs text-gray-500">{dayEvents.length} events</span>
                      )}
                    </div>
                    <div className="space-y-1 overflow-y-auto max-h-[calc(100%-1.5rem)]">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`p-1 text-xs rounded border-l-2 ${event.color} hover:shadow-md transition-shadow cursor-pointer`}
                        >
                          {view === "week" && <div className="font-medium">{formatTime(event.date)}</div>}
                          <div className="truncate">{event.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
