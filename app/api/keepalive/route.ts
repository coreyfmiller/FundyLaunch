import { NextResponse } from "next/server"

const SUPABASE_PROJECTS = [
  {
    name: "MarketMojo",
    url: "https://qpbhvbubudlohgkvlmiv.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwYmh2YnVidWRsb2hna3ZsbWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1Nzk1NTIsImV4cCI6MjA5MjE1NTU1Mn0.3Ru_YiKag0e-zEgsYkWmAy08tdjKP3ptT9J9IkokIHo",
  },
  {
    name: "Duelly",
    url: "https://lywtagruvefurzftoxiz.supabase.co",
    anonKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5d3RhZ3J1dmVmdXJ6ZnRveGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NzE2MjIsImV4cCI6MjA4OTQ0NzYyMn0.rRmOX7Oyl7BIhZALxyNm8loHQ8WvOgPt9Xi2o7VCACQ",
  },
]

export async function GET() {
  const results = []

  for (const project of SUPABASE_PROJECTS) {
    try {
      const res = await fetch(`${project.url}/rest/v1/`, {
        headers: {
          apikey: project.anonKey,
          Authorization: `Bearer ${project.anonKey}`,
        },
      })
      results.push({ name: project.name, status: res.status, ok: res.ok })
    } catch (error) {
      results.push({ name: project.name, status: "error", ok: false })
    }
  }

  return NextResponse.json({ pinged: new Date().toISOString(), results })
}
