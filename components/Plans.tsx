'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'בסיסי',
    emoji: '🌱',
    price: { monthly: 59, yearly: 49 },
    tagline: 'מושלם להתחלה',
    color: 'from-slate-50 to-slate-100',
    border: 'border-slate-200',
    badge: null,
    features: [
      { text: 'כיסוי לתאונות וחירום', included: true },
      { text: 'עד ₪15,000 לשנה', included: true },
      { text: 'ביקורי וטרינר רגילים', included: true },
      { text: 'תרופות מרשם', included: false },
      { text: 'ניתוחים מתוכננים', included: false },
      { text: 'כיסוי מחלות כרוניות', included: false },
      { text: 'שירות 24/7', included: false },
    ],
  },
  {
    name: 'מתקדם',
    emoji: '⭐',
    price: { monthly: 99, yearly: 82 },
    tagline: 'הפופולרי ביותר',
    color: 'from-brand-600 to-brand-700',
    border: 'border-brand-500',
    badge: 'הכי פופולרי',
    features: [
      { text: 'כיסוי לתאונות וחירום', included: true },
      { text: 'עד ₪40,000 לשנה', included: true },
      { text: 'ביקורי וטרינר רגילים', included: true },
      { text: 'תרופות מרשם', included: true },
      { text: 'ניתוחים מתוכננים', included: true },
      { text: 'כיסוי מחלות כרוניות', included: false },
      { text: 'שירות 24/7', included: false },
    ],
  },
  {
    name: 'פרימיום',
    emoji: '👑',
    price: { monthly: 149, yearly: 124 },
    tagline: 'כיסוי מלא ומקיף',
    color: 'from-slate-50 to-slate-100',
    border: 'border-slate-200',
    badge: null,
    features: [
      { text: 'כיסוי לתאונות וחירום', included: true },
      { text: 'ללא הגבלת סכום', included: true },
      { text: 'ביקורי וטרינר רגילים', included: true },
      { text: 'תרופות מרשם', included: true },
      { text: 'ניתוחים מתוכננים', included: true },
      { text: 'כיסוי מחלות כרוניות', included: true },
      { text: 'שירות 24/7', included: true },
    ],
  },
]

export default function Plans() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">תוכניות ביטוח</span>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">בחרו את התוכנית המתאימה</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            שלוש תוכניות גמישות המותאמות לצרכי חיית המחמד שלך ולתקציב המשפחה
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-4 bg-slate-100 rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !yearly ? 'bg-white text-brand-700 shadow' : 'text-slate-500'
              }`}
            >
              חיוב חודשי
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                yearly ? 'bg-white text-brand-700 shadow' : 'text-slate-500'
              }`}
            >
              חיוב שנתי
              <span className="mr-2 bg-brand-100 text-brand-700 text-xs px-2 py-0.5 rounded-full">חסכון 17%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.badge !== null
            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 ${plan.border} ${
                  isPopular ? 'shadow-2xl shadow-brand-200 -translate-y-4' : 'shadow-lg'
                } overflow-hidden flex flex-col`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.color} p-8 ${isPopular ? 'text-white' : 'text-slate-800'}`}>
                  <div className="text-4xl mb-3">{plan.emoji}</div>
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${isPopular ? 'text-brand-100' : 'text-slate-500'}`}>{plan.tagline}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-extrabold">
                      ₪{yearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={`text-sm pb-2 ${isPopular ? 'text-brand-100' : 'text-slate-500'}`}>/חודש</span>
                  </div>
                  {yearly && (
                    <p className={`text-xs mt-1 ${isPopular ? 'text-brand-100' : 'text-slate-500'}`}>
                      חיוב שנתי של ₪{plan.price.yearly * 12}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="p-8 bg-white flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        {feature.included ? (
                          <span className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs flex-shrink-0">✓</span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs flex-shrink-0">✗</span>
                        )}
                        <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#lead-form"
                    className={`mt-8 block text-center py-3 px-6 rounded-full font-bold text-sm transition-all ${
                      isPopular
                        ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-200'
                        : 'border-2 border-brand-600 text-brand-700 hover:bg-brand-50'
                    }`}
                  >
                    בחר תוכנית זו
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-slate-400 mt-10">
          * כל התוכניות כוללות תקופת המתנה של 14 יום. לא כולל מצבים רפואיים קיימים מלפני תחילת הביטוח.
        </p>
      </div>
    </section>
  )
}
