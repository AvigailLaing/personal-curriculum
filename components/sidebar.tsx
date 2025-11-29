"use client"

import { LayoutDashboard, BookOpen, Calendar, Inbox } from "lucide-react"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  { icon: BookOpen, label: "Courses", href: "#" },
  { icon: Calendar, label: "Calendar", href: "#" },
  { icon: Inbox, label: "Inbox", href: "#" },
]

export default function Sidebar() {
  return (
    <aside className="w-24 bg-primary flex flex-col items-center gap-8 py-8 text-primary-foreground shadow-lg">
      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center font-bold text-lg">LC</div>
      <nav className="flex flex-col gap-6 flex-1">
        {navItems.map((item) => (
          <button key={item.label} className="p-3 hover:bg-white/10 rounded-lg transition-colors" title={item.label}>
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
    </aside>
  )
}
