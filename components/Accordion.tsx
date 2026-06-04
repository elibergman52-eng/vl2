'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

export default function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number }) {
  const [openIdx, setOpenIdx] = useState<number | null>(defaultOpen)

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div key={i} className={`acc-item${isOpen ? ' open' : ''}`}>
            <button
              className="acc-q"
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              {item.question}
              <span className="acc-icon" />
            </button>
            <div
              className="acc-body"
              style={{ maxHeight: isOpen ? 400 : 0 }}
            >
              <div className="acc-body-inner">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
