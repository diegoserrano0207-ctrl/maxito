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
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>Mi Dashboard</h1>

      <h2>Tasks</h2>
      <pre>{JSON.stringify(tasks, null, 2)}</pre>

      <h2>Calendar</h2>
      <pre>{JSON.stringify(calendar, null, 2)}</pre>

      <h2>Reminders</h2>
      <pre>{JSON.stringify(reminders, null, 2)}</pre>

      <h2>Reports</h2>
      <pre>{JSON.stringify(reports, null, 2)}</pre>
    </main>
  )
}
