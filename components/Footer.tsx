export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <span className="text-2xl">🐾</span>
              <span>כפות מוגנות</span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              ביטוח וטרינרי מקיף לחיות המחמד שלך. אנחנו כאן כדי לדאוג לבריאות הפרוותי שלך.
            </p>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-colors text-xs"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">תוכניות</h4>
            <ul className="space-y-2 text-sm">
              {['תוכנית בסיסית', 'תוכנית מתקדמת', 'תוכנית פרימיום', 'השוואת תוכניות'].map((item) => (
                <li key={item}>
                  <a href="#plans" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">מידע</h4>
            <ul className="space-y-2 text-sm">
              {['אודות', 'שאלות ותשובות', 'מדיניות פרטיות', 'תנאי שימוש', 'רשת וטרינרים'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">צור קשר</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <span>03-123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉️</span>
                <span>info@kapotmeuganos.co.il</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🕐</span>
                <span>א׳–ה׳ 9:00–20:00<br />ו׳ 9:00–13:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} כפות מוגנות בע״מ. כל הזכויות שמורות.</p>
          <p>רישיון ביטוח מס׳ 12345 | מפוקח על ידי המפקח על הביטוח</p>
        </div>
      </div>
    </footer>
  )
}
