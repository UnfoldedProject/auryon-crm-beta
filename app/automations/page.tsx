"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Plus,
  UserPlus,
  Bell,
  Calendar,
  Tag,
  ArrowRight,
  Edit,
  Eye,
  Zap,
  Sparkles,
  Save,
  PlayCircle,
} from "lucide-react"
import { AuryonLogo } from "@/components/auryon-logo"

// Sample workflow templates
const workflowTemplates = [
  {
    id: "1",
    name: "New Lead Welcome",
    trigger: "New Lead Created",
    actions: ["Send Email", "Assign to Rep", "Create Task"],
    description: "Automatically welcome new leads and assign them to the right rep",
    icon: UserPlus,
    color: "from-green-400 to-green-600",
  },
  {
    id: "2",
    name: "Meeting Follow-Up",
    trigger: "Meeting Completed",
    actions: ["Send Email", "Create Task", "Set Reminder"],
    description: "Send a follow-up email after meetings and create next steps",
    icon: Calendar,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "3",
    name: "Missed Meeting",
    trigger: "Meeting Missed",
    actions: ["Send SMS", "Create Task", "Notify Rep"],
    description: "Automatically reach out when a client misses a scheduled meeting",
    icon: Bell,
    color: "from-red-400 to-red-600",
  },
  {
    id: "4",
    name: "Lead Qualification",
    trigger: "Form Submission",
    actions: ["Tag Lead", "Route to Team", "Send Email"],
    description: "Qualify and route leads based on form responses",
    icon: Tag,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "5",
    name: "Client Onboarding",
    trigger: "Status Change: New Client",
    actions: ["Send Welcome Kit", "Schedule Call", "Assign Tasks"],
    description: "Streamline your client onboarding process",
    icon: UserPlus,
    color: "from-yellow-400 to-yellow-600",
  },
]

// Sample trigger types
const triggerTypes = [
  { id: "new_lead", name: "New Lead Created" },
  { id: "form_submission", name: "Form Submission" },
  { id: "meeting_scheduled", name: "Meeting Scheduled" },
  { id: "meeting_completed", name: "Meeting Completed" },
  { id: "meeting_missed", name: "Meeting Missed" },
  { id: "status_change", name: "Status Change" },
  { id: "tag_added", name: "Tag Added" },
]

// Sample action types
const actionTypes = [
  { id: "send_email", name: "Send Email" },
  { id: "send_sms", name: "Send SMS" },
  { id: "create_task", name: "Create Task" },
  { id: "assign_rep", name: "Assign to Rep" },
  { id: "add_tag", name: "Add Tag" },
  { id: "schedule_meeting", name: "Schedule Meeting" },
  { id: "notify_rep", name: "Notify Rep" },
]

export default function AutomationsPage() {
  const [workflowName, setWorkflowName] = useState("")
  const [selectedTrigger, setSelectedTrigger] = useState("")
  const [selectedActions, setSelectedActions] = useState<string[]>([])

  const handleActionToggle = (actionId: string) => {
    if (selectedActions.includes(actionId)) {
      setSelectedActions(selectedActions.filter((id) => id !== actionId))
    } else {
      setSelectedActions([...selectedActions, actionId])
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
            <p className="text-sm text-gray-500">Automation Engine</p>
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
            <Link href="/automations" className="flex items-center text-green-600 font-medium">
              <span className="mr-3">⚡</span>
              Automations
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Automations</h1>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
              <Plus className="h-5 w-5 mr-2" />
              Add Automation
            </button>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Build powerful workflows that automate your pipeline and reduce manual tasks.
          </p>

          {/* Workflow Library */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Workflow Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowTemplates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${template.color} text-white`} aria-hidden="true">
                      <template.icon className="h-6 w-6" />
                    </div>
                    <div className="flex space-x-1">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" title="Edit Workflow">
                        <Edit className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors" title="View Workflow">
                        <Eye className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{template.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="font-medium">Trigger:</span>
                    <span className="ml-1">{template.trigger}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {template.actions.map((action, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Workflow Builder */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Custom Workflow Builder</h2>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="mb-6">
                <label htmlFor="workflow-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Workflow Name
                </label>
                <input
                  type="text"
                  id="workflow-name"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="e.g., New Lead Follow-up Sequence"
                  value={workflowName}
                  onChange={(e) => setWorkflowName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="trigger-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Trigger
                </label>
                <select
                  id="trigger-type"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={selectedTrigger}
                  onChange={(e) => setSelectedTrigger(e.target.value)}
                >
                  <option value="">Select a trigger...</option>
                  {triggerTypes.map((trigger) => (
                    <option key={trigger.id} value={trigger.id}>
                      {trigger.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Actions</label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {actionTypes.map((action) => (
                    <div
                      key={action.id}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedActions.includes(action.id)
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleActionToggle(action.id)}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`action-${action.id}`}
                          checked={selectedActions.includes(action.id)}
                          onChange={() => {}}
                          className="h-4 w-4 text-green-600 rounded"
                        />
                        <label htmlFor={`action-${action.id}`} className="ml-2 text-sm text-gray-700">
                          {action.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Visual Workflow</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 flex flex-col items-center justify-center">
                  {selectedTrigger && selectedActions.length > 0 ? (
                    <div className="w-full max-w-2xl">
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg mb-2 w-full text-center">
                          {triggerTypes.find((t) => t.id === selectedTrigger)?.name || "Trigger"}
                        </div>
                        <ArrowRight className="h-6 w-6 text-gray-400 my-2" />
                        {selectedActions.map((actionId, index) => (
                          <div key={actionId} className="w-full flex flex-col items-center">
                            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-2 w-full text-center">
                              {actionTypes.find((a) => a.id === actionId)?.name || "Action"}
                            </div>
                            {index < selectedActions.length - 1 && (
                              <ArrowRight className="h-6 w-6 text-gray-400 my-2" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <Zap className="h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-gray-500 text-center mb-2">
                        Select a trigger and actions to build your workflow
                      </p>
                      <p className="text-xs text-gray-400 text-center">
                        Your workflow will appear here as you build it
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center">
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </button>
                <button
                  className={`px-4 py-2 rounded-lg text-white flex items-center ${
                    workflowName && selectedTrigger && selectedActions.length > 0
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!workflowName || !selectedTrigger || selectedActions.length === 0}
                >
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Publish
                </button>
              </div>
            </div>
          </section>

          {/* AI Assistant */}
          <div className="fixed bottom-8 right-8">
            <div className="group relative">
              <button className="bg-gradient-to-r from-[#6EE7B7] to-[#FCD34D] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Sparkles className="h-6 w-6 text-white" />
              </button>
              <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <p className="text-sm font-medium">Coming soon: AI Workflow Generator</p>
                <p className="text-xs text-gray-500 mt-1">
                  Let AI suggest and build workflows based on your business needs.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
