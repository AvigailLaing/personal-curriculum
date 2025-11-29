"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { useState } from "react"

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

const initialTodos: TodoItem[] = [
  { id: 1, text: "Go to the gym", completed: false },
  { id: 2, text: "Read Chapter 1 of Atomic Habits", completed: true },
  { id: 3, text: "Meditate for 10 minutes", completed: false },
  { id: 4, text: "Prepare healthy meal", completed: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)

  const toggle = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-sm font-semibold text-foreground mb-4">To Do</h3>
      <div className="space-y-3">
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => toggle(todo.id)}
            className="w-full flex items-center gap-3 p-3 hover:bg-secondary rounded-lg transition-colors text-left"
          >
            {todo.completed ? (
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
            <span className={`text-sm ${todo.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
              {todo.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
