"use client"

import StreakWidget from "./streak-widget"
import NestedProgressRings from "./nested-progress-rings"
import TodoList from "./todo-list"

export default function StatsPanel() {
  return (
    <div className="w-80 space-y-6">
      <StreakWidget />
      <div className="bg-card rounded-xl shadow-sm border border-border p-6 flex flex-col items-center">
        <h3 className="text-sm font-semibold text-foreground mb-6">Overall Progress</h3>
        <NestedProgressRings />
      </div>
      <TodoList />
    </div>
  )
}
