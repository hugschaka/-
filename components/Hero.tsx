export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-50 via-white to-emerald-50 pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-right">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span>✅</span>
              <span>מעל 50,000 חיות מחמד מבוטחות</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              הגנה מקיפה
              <br />
              <span className="text-brand-600">לחיית המחמד</span>
              <br />
              שלך
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ביטוח וטרינרי מקיף הכולל כיסוי לטיפולים רפואיים, ניתוחים, תרופות ואשפוז.
              תנו לנו לדאוג לבריאות הפרוותי שלכם, אתם תדאגו לאהבה.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#lead-form"
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-brand-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                קבל הצעת מחיר חינם
              </a>
              <a
                href="#plans"
                className="border-2 border-brand-600 text-brand-700 hover:bg-brand-50 font-bold px-8 py-4 rounded-full text-lg transition-colors"
              >
                לתוכניות הביטוח
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-brand-500 text-lg">🛡️</span>
                <span>כיסוי מלא לחירום</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-500 text-lg">💊</span>
                <span>כיסוי תרופות מרשם</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-500 text-lg">🏥</span>
                <span>רשת בתי חולים ווטרינריים</span>
              </div>
            </div>
          </div>

          {/* Illustration card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-80 border border-brand-100">
                <div className="text-center mb-6">
                  <div className="text-8xl mb-3">🐶</div>
                  <div className="text-8xl -mt-4">🐱</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-brand-50 rounded-xl p-3">
                    <span className="font-semibold text-brand-700 text-sm">ניתוח חירום</span>
                    <span className="text-slate-500 text-xs line-through">₪8,500</span>
                  </div>
                  <div className="flex items-center justify-between bg-brand-50 rounded-xl p-3">
                    <span className="font-semibold text-brand-700 text-sm">אשפוז 3 לילות</span>
                    <span className="text-slate-500 text-xs line-through">₪3,200</span>
                  </div>
                  <div className="flex items-center justify-between bg-brand-50 rounded-xl p-3">
                    <span className="font-semibold text-brand-700 text-sm">טיפולי כימותרפיה</span>
                    <span className="text-slate-500 text-xs line-through">₪15,000</span>
                  </div>
                </div>

                <div className="mt-6 bg-brand-600 text-white rounded-xl p-4 text-center">
                  <p className="text-xs mb-1 opacity-80">אתם משלמים רק</p>
                  <p className="text-3xl font-extrabold">₪0</p>
                  <p className="text-xs mt-1 opacity-80">הביטוח מכסה הכל</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-2xl px-4 py-2 shadow-lg font-bold text-sm rotate-3">
                💰 חסכו עד ₪26,700
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 68C120 56 240 32 360 26.7C480 21.3 600 37.3 720 42.7C840 48 960 42.7 1080 37.3C1200 32 1320 26.7 1380 24L1440 21.3V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
