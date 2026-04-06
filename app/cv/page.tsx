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
    experience: [{ company: '', role: '', years: '', description: '' }],
    skills: '',
    languages: '',
  })

  const handleChange = (field: string, value: any) => {
    setCV((prev) => ({ ...prev, [field]: value }))
  }

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExp = [...cv.experience]
    newExp[index] = { ...newExp[index], [field]: value }
    setCV((prev) => ({ ...prev, experience: newExp }))
  }

  const addExperience = () => {
    setCV((prev) => ({
      ...prev,
      experience: [...prev.experience, { company: '', role: '', years: '', description: '' }],
    }))
  }

  const exportCV = () => {
    const text = `
CV — ${cv.fullName}
${cv.profession}

CONTACT:
Email: ${cv.email}
Telefon: ${cv.phone}

EXPERIENȚĂ PROFESIONALĂ:
${cv.experience.map((e) => `${e.role} la ${e.company} (${e.years})\n${e.description}`).join('\n\n')}

ABILITĂȚI:
${cv.skills}

LIMBI:
${cv.languages}
    `.trim()

    navigator.clipboard.writeText(text)
    alert('CV copiat în clipboard! Paste-ul în email sau document.')
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Creează-ți CV</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <div className="bg-white rounded-lg p-8">
              {/* Progress */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                      s <= step ? 'bg-brand-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>

              {/* Step 1: Personal Info */}
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
                  <Input
                    placeholder="Profesie actuală"
                    value={cv.profession}
                    onChange={(e) => handleChange('profession', e.target.value)}
                  />
                </div>
              )}

              {/* Step 2: Experience */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-4">Experiență profesională</h2>
                  {cv.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border rounded-lg space-y-2">
                      <Input
                        placeholder="Companie"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)}
                      />
                      <Input
                        placeholder="Rol"
                        value={exp.role}
                        onChange={(e) => handleExperienceChange(idx, 'role', e.target.value)}
                      />
                      <Input
                        placeholder="Ani (ex: 2020-2023)"
                        value={exp.years}
                        onChange={(e) => handleExperienceChange(idx, 'years', e.target.value)}
                      />
                      <textarea
                        placeholder="Descriere"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        rows={2}
                      />
                    </div>
                  ))}
                  <Button variant="outline" onClick={addExperience} className="w-full">
                    + Adaugă experiență
                  </Button>
                </div>
              )}

              {/* Step 3: Skills & Languages */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-4">Abilități și limbi</h2>
                  <div>
                    <label className="block text-sm font-medium mb-2">Abilități (separate prin virgulă)</label>
                    <textarea
                      placeholder="Exemplu: Comunicare, Excel, SQL, Management..."
                      value={cv.skills}
                      onChange={(e) => handleChange('skills', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Limbi străine</label>
                    <textarea
                      placeholder="Exemplu: Engleză (B2), Franceză (A1)..."
                      value={cv.languages}
                      onChange={(e) => handleChange('languages', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Preview & Export */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-4">Previzualizare și export</h2>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">✅ CV-ul tău este gata!</p>
                  </div>
                  <Button onClick={exportCV} className="w-full bg-success hover:bg-green-600 text-white">
                    ↓ Copy CV
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
                  ← Înapoi
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => setStep(Math.min(4, step + 1))}
                  disabled={step === 4}
                >
                  {step === 4 ? 'Gata! 🎉' : 'Continuă →'}
                </Button>
              </div>
            </div>
          </div>

          {/* CV Preview */}
          <div>
            <div id="cv-preview" className="bg-white rounded-lg p-8 shadow-lg sticky top-24">
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b pb-6">
                  <h1 className="text-3xl font-bold">{cv.fullName || 'Nume Prenume'}</h1>
                  <p className="text-lg text-gray-600 mt-1">{cv.profession || 'Profesie'}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    {cv.email && <p>📧 {cv.email}</p>}
                    {cv.phone && <p>📱 {cv.phone}</p>}
                  </div>
                </div>

                {/* Experience */}
                {cv.experience.some((e) => e.company) && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">Experiență</h3>
                    {cv.experience.map((exp, idx) =>
                      exp.company ? (
                        <div key={idx} className="mb-4">
                          <p className="font-semibold">{exp.role}</p>
                          <p className="text-gray-600 text-sm">{exp.company} • {exp.years}</p>
                          {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
                        </div>
                      ) : null
                    )}
                  </div>
                )}

                {/* Skills */}
                {cv.skills && (
                  <div>
                    <h3 className="text-lg font-bold mb-2">Abilități</h3>
                    <p className="text-sm text-gray-700">{cv.skills}</p>
                  </div>
                )}

                {/* Languages */}
                {cv.languages && (
                  <div>
                    <h3 className="text-lg font-bold mb-2">Limbi</h3>
                    <p className="text-sm text-gray-700">{cv.languages}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
