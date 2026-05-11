'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'תוכניות', href: '#plans' },
    { label: 'יתרונות', href: '#benefits' },
    { label: 'שאלות ותשובות', href: '#faq' },
    { label: 'צור קשר', href: '#lead-form' },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-brand-700 font-bold text-xl">
            <span className="text-2xl">🐾</span>
            <span>כפות מוגנות</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#lead-form"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors shadow"
            >
              קבל הצעת מחיר
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-brand-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="תפריט"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-600 hover:text-brand-600 font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lead-form"
              onClick={() => setMenuOpen(false)}
              className="block bg-brand-600 text-white font-semibold px-5 py-2 rounded-full text-sm text-center mt-3"
            >
              קבל הצעת מחיר
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
