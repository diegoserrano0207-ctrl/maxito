"use client"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [calendar, setCalendar] = useState([])
  const [reminders, setReminders] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch("https://opensheet.elk.sh/139mMw4VrHBS58LHb78PfjrVy06lLfESNq4FAoUb3tOs/task")
      .then(res => res.json())
      .then(setTasks)

    fetch("https://opensheet.elk.sh/139mMw4VrHBS58LHb78PfjrVy06lLfESNq4FAoUb3tOs/calendar")
      .then(res => res.json())
      .then(setCalendar)

    fetch("https://opensheet.elk.sh/139mMw4VrHBS58LHb78PfjrVy06lLfESNq4FAoUb3tOs/reminders")
      .then(res => res.json())
      .then(setReminders)

    fetch("https://opensheet.elk.sh/139mMw4VrHBS58LHb78PfjrVy06lLfESNq4FAoUb3tOs/reports")
      .then(res => res.json())
      .then(setReports)
  }, [])

  return (
    <main className="p-10 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Tasks</h2>
          <p>{tasks.length} tareas</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Calendar</h2>
          <p>{calendar.length} eventos</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Reminders</h2>
          <p>{reminders.length} recordatorios</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">Reports</h2>
          <p>{reports.length} reportes</p>
        </div>

      </div>
    </main>
  )
}
