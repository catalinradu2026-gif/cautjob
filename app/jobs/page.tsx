'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Job {
  id: string
  title: string
  company: string
  sector: string
  salary: string
  location: string
  description: string
  phone: string
  email: string
}

const SECTORS = ['IT', 'Contabilitate', 'Vânzări', 'HR', 'Management', 'Producție', 'Transport', 'Horeca', 'Securitate', 'Servicii']

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [search, setSearch] = useState('')
  const [selectedSector, setSelectedSector] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load jobs from JSON
    import('@/data/olx-jobs.json').then((data) => {
      setJobs(data.jobs)
      setLoading(false)
    })
  }, [])

  const filtered = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
    const matchesSector = !selectedSector || job.sector === selectedSector
    return matchesSearch && matchesSector
  })

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Joburi în România</h1>
        <p className="text-gray-600 mb-8">{jobs.length} poziții deschise</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="bg-white rounded-lg p-4 h-fit">
            <h3 className="font-semibold mb-4">Filtre</h3>
            <div className="space-y-2">
              {SECTORS.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(selectedSector === sector ? null : sector)}
                  className={`block w-full text-left px-3 py-2 rounded transition text-sm ${
                    selectedSector === sector
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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

            {loading ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600">Se încarcă joburi...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600">Nu am găsit joburi potrivite</p>
              </div>
            ) : (
              filtered.map((job) => (
                <div key={job.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded">
                          {job.sector}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                      <p className="text-lg font-bold text-success">{job.salary}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 border-t flex-wrap">
                      <Link href={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          Detalii
                        </Button>
                      </Link>
                      <a
                        href={`https://wa.me/${job.phone.replace(/\D/g, '')}?text=Salut! Sunt interesat de postul de ${job.title} la ${job.company}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">
                          💬 WhatsApp
                        </Button>
                      </a>
                    </div>
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
