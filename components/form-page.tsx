import { ClientIntakeForm } from "@/components/client-intake-form"

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Top Header */}
      <header className="bg-white shadow-sm p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Client Intake</h1>
          <p className="text-sm text-gray-500">Add new prospects to your pipeline</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Sean Williams</span>
          <img src="/user-avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full object-cover" />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-6">
          <nav className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Dashboard
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Leads
            </a>
            <a href="#" className="block text-gray-700 font-medium text-green-600">
              Forms
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Automation
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Tasks
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Calendar
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Clients
            </a>
            <a href="#" className="block text-gray-700 hover:text-green-600">
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <ClientIntakeForm />
          </div>
        </main>
      </div>
    </div>
  )
}
