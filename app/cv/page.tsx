'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CVBuilderPage() {
  const [step, setStep] = useState(1)
  const [cv, setCV] = useState({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    experience: [],
    skills: [],
  })

  const handleChange = (field: string, value: any) => {
    setCV((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Creează-ți CV</h1>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition ${
                  s <= step
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Date personale</h2>
              <Input
                placeholder="Nume complet"
                value={cv.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                value={cv.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <Input
                placeholder="Telefon"
                value={cv.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Experiență profesională</h2>
              <Input
                placeholder="Profesie actuală"
                value={cv.profession}
                onChange={(e) => handleChange('profession', e.target.value)}
              />
              <p className="text-gray-600 text-sm">Detaliile experienței vor fi completate în pasul următor</p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Abilități</h2>
              <Input
                placeholder="Exemplu: Comunicare, Organizare, Excel..."
                value={cv.skills.join(', ')}
                onChange={(e) => handleChange('skills', e.target.value.split(', '))}
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Verificare și export</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Preview CV:</h3>
                <p><strong>Nume:</strong> {cv.fullName}</p>
                <p><strong>Email:</strong> {cv.email}</p>
                <p><strong>Telefon:</strong> {cv.phone}</p>
                <p><strong>Profesie:</strong> {cv.profession}</p>
                <p><strong>Abilități:</strong> {cv.skills.join(', ')}</p>
              </div>
              <Button className="w-full bg-success hover:bg-green-600">
                ↓ Export PDF
              </Button>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Înapoi
            </Button>
            <Button
              className="flex-1"
              onClick={() => setStep(Math.min(4, step + 1))}
              disabled={step === 4}
            >
              {step === 4 ? 'Gata!' : 'Continuă'}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
