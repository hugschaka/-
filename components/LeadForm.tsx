'use client'

import { useState } from 'react'

const petTypes = ['כלב', 'חתול', 'ארנב', 'אחר']
const ageRanges = ['פחות משנה', '1–3 שנים', '3–7 שנים', '7–10 שנים', 'מעל 10 שנים']

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    petAge: '',
    plan: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="lead-form" className="py-24 bg-brand-50">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3">תודה! פנייתך התקבלה</h3>
            <p className="text-slate-500">
              נציג שלנו יצור איתך קשר תוך 24 שעות עם הצעת מחיר מותאמת אישית לחיית המחמד שלך.
            </p>
            <div className="mt-8 bg-brand-50 rounded-2xl p-4 text-brand-700 font-semibold text-sm">
              בינתיים, אפשר להגיע אלינו בטלפון: 03-123-4567
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-24 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="text-white">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-widest">קבל הצעת מחיר</span>
            <h2 className="mt-2 text-4xl font-extrabold leading-tight mb-6">
              מלאו פרטים
              <br />
              ונחזור אליכם
              <br />
              <span className="text-brand-200">תוך 24 שעות</span>
            </h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              השאירו פרטים ונציג מקצועי שלנו יכין עבורכם הצעת מחיר אישית, ללא עלות וללא התחייבות.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🔒', text: 'המידע שלך מאובטח ומוצפן' },
                { icon: '📞', text: 'ייעוץ חינמי ללא התחייבות' },
                { icon: '⚡', text: 'הפוליסה מופעלת תוך 24 שעות' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-brand-100">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">פרטי יצירת קשר</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">שם מלא *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="ישראל ישראלי"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">טלפון *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="050-000-0000"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">כתובת אימייל</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="israel@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">שם חיית המחמד</label>
                  <input
                    type="text"
                    name="petName"
                    value={form.petName}
                    onChange={handleChange}
                    placeholder="מקס"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">סוג חיית מחמד *</label>
                  <select
                    name="petType"
                    required
                    value={form.petType}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">בחר...</option>
                    {petTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">גיל חיית המחמד *</label>
                  <select
                    name="petAge"
                    required
                    value={form.petAge}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">בחר...</option>
                    {ageRanges.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">תוכנית מועדפת</label>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white"
                  >
                    <option value="">לא בטוח</option>
                    <option value="basic">בסיסי</option>
                    <option value="advanced">מתקדם</option>
                    <option value="premium">פרימיום</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-brand-400 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-lg shadow-brand-200 mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    שולח...
                  </span>
                ) : (
                  'שלח פנייה ➜'
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                בלחיצה על שלח, אתה מאשר שקראת את{' '}
                <a href="#" className="text-brand-600 hover:underline">מדיניות הפרטיות</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
