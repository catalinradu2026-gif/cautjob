'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

interface Job {
  id: string
  title: string
  company: string
  sector: string
  salary: string
  location: string
  description: string
  requirements: string[]
  phone: string
  email: string
  postedDate: string
}

interface JobPageProps {
  params: { id: string }
}

export default function JobDetailPage({ params }: JobPageProps) {
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)
  const [showApplyForm, setShowApplyForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [applying, setApplying] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Load job from JSON
    import('@/data/olx-jobs.json').then((data) => {
      const foundJob = data.jobs.find((j: Job) => j.id === params.id)
      setJob(foundJob || null)
      setLoading(false)
    })
  }, [params.id])

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-20">
          <p className="text-gray-600">Se încarcă...</p>
        </div>
      </main>
    )
  }

  if (!job) {
    return (
      <main className="min-h-screen pt-24 pb-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Job not found</h1>
          <Link href="/jobs">
            <Button>Înapoi la joburi</Button>
          </Link>
        </div>
      </main>
    )
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    setApplying(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId: job.id,
          jobTitle: job.title,
          company: job.company,
          ...formData,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          setShowApplyForm(false)
          setSuccess(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Apply error:', error)
    } finally {
      setApplying(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="inline-block bg-brand-100 text-brand-700 text-sm font-semibold px-3 py-1 rounded mb-3">
                {job.sector}
              </span>
              <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{job.company}</p>
              <p className="text-lg font-bold text-success mb-2">{job.salary}</p>
              <p className="text-gray-600">📍 {job.location}</p>
            </div>
            <Link href="/jobs">
              <Button variant="outline">← Înapoi</Button>
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Descriere job</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

              {/* Requirements */}
              <h3 className="text-xl font-bold mb-3">Cerințe</h3>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req: string) => (
                  <span key={req} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {req}
                  </span>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-bold mb-4">Contact recrutor</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">📧 Email: <strong>{job.email}</strong></p>
                  <p className="text-gray-700">📱 Telefon: <strong>{job.phone}</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Apply Section */}
          <div>
            <div className="bg-white rounded-lg p-6 sticky top-24">
              {!showApplyForm ? (
                <>
                  <h3 className="text-xl font-bold mb-4">Vrei să aplici?</h3>
                  <Button
                    onClick={() => setShowApplyForm(true)}
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white mb-4"
                  >
                    Aplică pentru acest job
                  </Button>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      💡 <strong>Cum funcționează:</strong> Completezi formularul, iar noi îți trimitem cererea recruitorului. El va lua legătura cu tine direct.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4">Aplicare pentru: {job.title}</h3>

                  {success ? (
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-800 font-semibold">✅ Aplicare trimisă!</p>
                      <p className="text-sm text-green-700 mt-1">Recruitorii vor lua legătura cu tine în curând.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleApply} className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium mb-1">Nume complet</label>
                        <Input
                          type="text"
                          placeholder="Nume..."
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Telefon</label>
                        <Input
                          type="tel"
                          placeholder="0760..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">Mesaj (opțional)</label>
                        <textarea
                          placeholder="De ce te interesează acest job?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 outline-none"
                          rows={3}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={applying}
                        className="w-full bg-success hover:bg-green-600 text-white"
                      >
                        {applying ? 'Se trimite...' : '✉️ Trimite aplicare'}
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setShowApplyForm(false)}
                      >
                        Anulează
                      </Button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
