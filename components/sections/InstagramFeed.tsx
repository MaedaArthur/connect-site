'use client'

import { useEffect } from 'react'

export default function InstagramFeed() {
  useEffect(() => {
    const d = document
    const s = d.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    d.head.append(s)
  }, [])

  return (
    <section style={{ background: '#ffffff', padding: '96px 0 80px' }}>
      <div className="container">
        <p className="section__eyebrow">Instagram</p>
        <h2 className="section__title">
          Acompanhe o <em>Connect</em>
        </h2>
        <div style={{ marginTop: '48px' }}>
          <div data-behold-id="g0YZk3WJoA9BY7zaZQfE"></div>
        </div>
      </div>
    </section>
  )
}