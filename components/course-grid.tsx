"use client"

import CourseCard from "./course-card"

const courses = [
  {
    id: 1,
    code: "GYM3000",
    title: "Fitness & Strength",
    subtitle: "Physical Excellence",
    image: "/gym-workout-fitness-training.jpg",
  },
  {
    id: 2,
    code: "HEA4200",
    title: "Healthy Eating",
    subtitle: "Nutritional Wellness",
    image: "/healthy-food-nutrition-diet.jpg",
  },
  {
    id: 3,
    code: "MNT5100",
    title: "Mental Health",
    subtitle: "Emotional Balance",
    image: "/meditation-mindfulness-calm.jpg",
  },
  {
    id: 4,
    code: "REA6300",
    title: "Reading & Learning",
    subtitle: "Knowledge Growth",
    image: "/books-reading-library-learning.jpg",
  },
  {
    id: 5,
    code: "CRT7400",
    title: "Creativity",
    subtitle: "Artistic Expression",
    image: "/art-creative-design-painting.jpg",
  },
  {
    id: 6,
    code: "SOC8500",
    title: "Social Connection",
    subtitle: "Relationships & Community",
    image: "/friends-community-people-together.jpg",
  },
]

export default function CourseGrid() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-foreground">My Life Curriculum</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}
