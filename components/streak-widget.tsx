"use client"

import { Flame } from "lucide-react"

export default function StreakWidget() {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 flex items-center gap-4">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-lg flex items-center justify-center">
        <Flame className="w-8 h-8 text-white" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">Current Streak</p>
        <p className="text-3xl font-bold text-foreground">8 Days</p>
      </div>
    </div>
  )
}
