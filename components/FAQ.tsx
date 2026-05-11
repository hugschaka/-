'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'מהו ביטוח וטרינרי ואיך הוא עובד?',
    a: 'ביטוח וטרינרי הוא פוליסת ביטוח המכסה את עלויות הטיפול הרפואי בחיית המחמד שלך. אתה משלם פרמיה חודשית קבועה, ובתמורה אנו מכסים את עלויות הטיפול הרפואי בהתאם לתוכנית שבחרת. כאשר חיית המחמד שלך זקוקה לטיפול, אתה מגיע לוטרינר כל שהוא, משלם ומגיש לנו בקשת החזר.',
  },
  {
    q: 'אילו חיות מחמד ניתן לבטח?',
    a: 'אנו מבטחים כלבים וחתולים בגילאי 8 שבועות עד 10 שנים. גזעים מיוחדים עשויים להיות כפופים לתנאים שונים. ניתן לרכוש ביטוח גם לארנבים ומכרסמים ביתיים בתוכנית מיוחדת — צרו קשר לפרטים.',
  },
  {
    q: 'האם יש תקופת המתנה?',
    a: 'כן, כמו ברוב חברות הביטוח, קיימת תקופת המתנה של 14 יום מיום הצטרפות עד לכניסת הכיסוי לתוקף. חריגים: במקרה תאונה, הכיסוי תקף מיד.',
  },
  {
    q: 'האם הביטוח מכסה מצבים רפואיים קיימים?',
    a: 'מצבים רפואיים שהתקיימו לפני תחילת הביטוח אינם מכוסים. זו הסיבה שמומלץ לבטח את חיית המחמד שלך בגיל צעיר ככל האפשר, לפני שמתפתחים מצבים רפואיים.',
  },
  {
    q: 'כיצד מגישים תביעה?',
    a: 'הגשת תביעה פשוטה ומהירה: לאחר הטיפול, שמרו את כל הקבלות ותיעוד רפואי, הכנסו לאפליקציה או לאתר שלנו, מלאו טופס תביעה מקוון ועלו את המסמכים. אנו מטפלים בתביעות תוך 5 ימי עסקים בממוצע.',
  },
  {
    q: 'האם ניתן לבטל את הביטוח?',
    a: 'כן, ניתן לבטל בכל עת עם הודעה של 30 יום מראש. ביטול בתוך 14 יום מיום ההצטרפות מקנה החזר כספי מלא. לא קיים עונש ביטול.',
  },
  {
    q: 'האם הביטוח מכסה חיסונים ובדיקות שגרתיות?',
    a: 'בתוכנית הבסיסית — לא. בתוכניות המתקדמת והפרימיום — כן, כולל חיסונים שנתיים, בדיקות דם שגרתיות, טיפולי שיניים מניעתיים וכדי הדברת פרזיטים.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">שאלות ותשובות</span>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">כל מה שרציתם לדעת</h2>
          <p className="mt-4 text-lg text-slate-500">
            לא מצאתם תשובה? צרו קשר ונשמח לעזור
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-800 text-base">{faq.q}</span>
                <span className={`flex-shrink-0 mr-4 w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                  openIndex === i ? 'bg-brand-600 text-white rotate-45' : 'bg-brand-100 text-brand-600'
                }`}>
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-brand-50 rounded-3xl p-8 border border-brand-100">
          <p className="text-slate-700 font-semibold mb-2">עדיין יש לכם שאלות?</p>
          <p className="text-slate-500 text-sm mb-4">צוות שירות הלקוחות שלנו זמין ימים א'-ה' 9:00–20:00</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:031234567"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              📞 03-123-4567
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-700 hover:bg-brand-50 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              ✉️ השאר הודעה
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
