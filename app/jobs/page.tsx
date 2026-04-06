'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Mock jobs data — replace cu Supabase query
const JOBS = [
  {
    id: '1',
    title: 'Specialist IT Help Desk',
    company: 'TechCorp Craiova',
    sector: 'IT',
    salary: '2500-3000 RON',
    location: 'Craiova',
    description: 'Suport tehnic level 1',
  },
  {
    id: '2',
    title: 'Contabil Senior',
    company: 'Audit Plus SRL',
    sector: 'Contabilitate',
    salary: '3000-3500 RON',
    location: 'Craiova',
    description: 'Contabilitate și declarații',
  },
  {
    id: '3',
    title: 'Agent Vânzări',
    company: 'Sales Pro Ltd',
    sector: 'Vânzări',
    salary: '2000-2500 RON + comisie',
    location: 'Craiova',
    description: 'Vânzări B2B',
  },
]

const SECTORS = ['IT', 'Contabilitate', 'Vânzări', 'HR', 'Management']

export default function JobsPage() {
  const [search, setSearch] = useState('')
  const [selectedSector, setSelectedSector] = useState<string | null>(null)

  const filtered = JOBS.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    const matchesSector = !selectedSector || job.sector === selectedSector
    return matchesSearch && matchesSector
  })

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Joburi în Craiova</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="bg-white rounded-lg p-4 h-fit">
            <h3 className="font-semibold mb-4">Filtre</h3>
            <div className="space-y-2">
              {SECTORS.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(selectedSector === sector ? null : sector)}
                  className={`block w-full text-left px-3 py-2 rounded transition ${
                    selectedSector === sector
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3 space-y-4">
            <Input
              placeholder="Caută meserie, companie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-4"
            />

            {filtered.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600">Nu am găsit joburi potrivite</p>
              </div>
            ) : (
              filtered.map((job) => (
                <div key={job.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded">
                          {job.sector}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.company} • {job.location}</p>
                      <p className="text-lg font-bold text-green-600">{job.salary}</p>
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button variant="outline">Detalii</Button>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
