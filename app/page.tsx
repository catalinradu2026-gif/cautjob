'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-600">CautJob</div>
          <div className="flex gap-4">
            <Link href="/jobs">
              <Button variant="outline">Joburi</Button>
            </Link>
            <Link href="/cv">
              <Button>CV Builder</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Găsește-ți jobul potrivit cu AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Chat cu Robi, asistentul AI al nostru, și descoperă poziții care se potrivesc perfect cu abilitățile tale.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/jobs">
              <Button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 text-lg">
                🔍 Cauta joburi
              </Button>
            </Link>
            <Link href="/cv">
              <Button variant="outline" className="px-8 py-3 text-lg">
                📄 Creează CV
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">500+</div>
              <p className="text-gray-600">Joburi deschise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">10,000+</div>
              <p className="text-gray-600">Candidați activi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">1000+</div>
              <p className="text-gray-600">Angajări reușite</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Cum funcționează</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Vorbești cu Robi</h3>
              <p className="text-gray-600">Descriu-ți experiența, abilitățile și ce cauți în jobul ideal.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI analizează</h3>
              <p className="text-gray-600">Sistemul nostru AI găsește poziții potrivite bazate pe conversație.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Aplici direct</h3>
              <p className="text-gray-600">Pui CV și aplici la joburi cu un click. Contactez recrutori pe WhatsApp.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Obții oferta</h3>
              <p className="text-gray-600">Recrutori iau legătura direct. Tu alegi ce job ți se potrivește.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">De ce CautJob?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">✨ Personalizat pentru tine</h3>
              <p className="text-gray-600 leading-relaxed">
                Fiecare recomandare de job este bazată pe conversația ta cu AI. Nu vezi job-uri care nu te interesează.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">🚀 Rapid și ușor</h3>
              <p className="text-gray-600 leading-relaxed">
                Creeaza CV-ul în minute. Aplici la sute de joburi fără a rescrie informații de fiecare dată.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">💼 Contactare directă</h3>
              <p className="text-gray-600 leading-relaxed">
                Recrutori sunt contactați direct pe WhatsApp cu aplicarea ta. Răspunsuri mai rapide, nu e-mail care se pierd.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">🤝 100% gratuit</h3>
              <p className="text-gray-600 leading-relaxed">
                Fără taxe ascunse. Candidații nu plătesc niciodată. Jobul tău este prioritatea noastră.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Gata să găsești jobul tău?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Vorbește acum cu Robi și descoperă pozitii care se potrivesc perfect cu abilitățile tale.
          </p>
          <Link href="/jobs">
            <Button className="bg-success hover:bg-green-600 text-white px-8 py-3 text-lg">
              Cauta Joburi Acum →
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>&copy; 2026 CautJob. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </main>
  )
}
