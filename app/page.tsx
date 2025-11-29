import Sidebar from "@/components/sidebar"
import CourseGrid from "@/components/course-grid"
import StatsPanel from "@/components/stats-panel"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="flex gap-6 p-8">
          <div className="flex-1">
            <CourseGrid />
          </div>
          <StatsPanel />
        </div>
      </main>
    </div>
  )
}
