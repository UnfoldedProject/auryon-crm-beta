"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SidebarNavigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/") return true
    return pathname.startsWith(path)
  }

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "🏠" },
    { path: "/leads", label: "Leads", icon: "👥" },
    { path: "/forms", label: "Forms", icon: "📝" },
    { path: "/automations", label: "Automation", icon: "⚡" },
    { path: "/tasks", label: "Tasks", icon: "✅" },
    { path: "/calendar", label: "Calendar", icon: "📅" },
    { path: "/clients", label: "Clients", icon: "🤝" },
    { path: "/team", label: "Team", icon: "👤" },
    { path: "/notifications", label: "Notifications", icon: "🔔" },
    { path: "/settings", label: "Settings", icon: "⚙️" },
  ]

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <nav className="space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center ${
              isActive(item.path) ? "text-green-600 font-medium" : "text-gray-700 hover:text-green-600"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
