const benefits = [
  {
    icon: '🏥',
    title: 'רשת בתי חולים',
    description: 'גישה לרשת של מעל 500 בתי חולים ווטרינריים ברחבי הארץ',
  },
  {
    icon: '⚡',
    title: 'תגובה מהירה',
    description: 'אישור תביעה ממוצע תוך 5 ימי עסקים, חירום — תוך 24 שעות',
  },
  {
    icon: '📱',
    title: 'אפליקציה נוחה',
    description: 'הגישה לכרטיס הביטוח, הגשת תביעות ומעקב הכל מהנייד',
  },
  {
    icon: '💰',
    title: 'ללא תשלום מראש',
    description: 'בבתי חולים שותפים — הביטוח משלם ישירות, ללא הוצאה מכיסך',
  },
  {
    icon: '🔄',
    title: 'ביטול בכל עת',
    description: 'אין עונש ביטול. ביטול קל ופשוט עם הודעה של 30 יום',
  },
  {
    icon: '👨‍⚕️',
    title: 'ייעוץ וטרינרי 24/7',
    description: 'בתוכנית פרימיום — וטרינר זמין בטלפון או בווידאו בכל שעה',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-widest">למה כפות מוגנות?</span>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">היתרונות שלנו</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            אנחנו לא רק ביטוח — אנחנו שותפים לבריאות של חיית המחמד שלך
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '50,000+', label: 'חיות מבוטחות' },
            { value: '98%', label: 'שביעות רצון לקוחות' },
            { value: '₪45M+', label: 'תביעות שולמו' },
            { value: '500+', label: 'בתי חולים שותפים' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
              <p className="text-brand-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
