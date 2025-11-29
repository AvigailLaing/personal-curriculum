"use client"

import { Megaphone, CheckSquare, MessageCircle } from "lucide-react"

interface CourseCardProps {
  code: string
  title: string
  subtitle: string
  image: string
}

export default function CourseCard({ code, title, subtitle, image }: CourseCardProps) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
      <div className="h-32 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover opacity-90" />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{code}</p>
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        <div className="flex gap-3 justify-end">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-accent">
            <Megaphone className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-accent">
            <CheckSquare className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-accent">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
