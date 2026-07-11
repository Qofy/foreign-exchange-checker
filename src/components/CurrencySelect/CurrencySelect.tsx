'use client'

import { useState } from 'react'
import { CURRENCIES } from '@/constants'
import { Image } from '@/components'
import './CurrencySelect.css'

interface CurrencySelectProps {
  value?: string
  onChange?: (code: string) => void
}

export default function CurrencySelect({ value = 'USD', onChange }: CurrencySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectedCurrency = CURRENCIES.find((c) => c.code === value)

  const handleSelect = (code: string) => {
    onChange?.(code)
    setIsOpen(false)
  }

  return (
    <div className="currency-select-wrapper">
      <button
        className="currency-select-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Image
          src={selectedCurrency?.flag || ''}
          alt={selectedCurrency?.code || ''}
          width={20}
          height={20}
          className="currency-flag-image"
        />
        <span className="currency-code">{selectedCurrency?.code}</span>
        <img src="/images/icon-chevron-down.svg" alt="dropdown" className="currency-arrow" />
      </button>

      {isOpen && (
        <div className="currency-dropdown" role="listbox">
          {CURRENCIES.map((currency) => (
            <button
              key={currency.id}
              className={`currency-option ${
                currency.code === value ? 'active' : ''
              }`}
              onClick={() => handleSelect(currency.code)}
              role="option"
              aria-selected={currency.code === value}
            >
              <Image
                src={currency.flag}
                alt={currency.code}
                width={24}
                height={24}
                className="currency-flag-image"
              />
              <div className="currency-info">
                <span className="currency-code">{currency.code}</span>
                <span className="currency-name">{currency.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
