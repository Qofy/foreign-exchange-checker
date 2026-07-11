'use client'

import { useMemo, useState } from 'react'
import { CURRENCIES } from '@/constants'
import { Image } from '@/components'
import './CurrencySelect.css'

interface CurrencySelectProps {
  value?: string
  onChange?: (code: string) => void
}

export default function CurrencySelect({ value = 'USD', onChange }: CurrencySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchCurrency, setSearchCurrency] = useState('')

   const filterCurrencies = useMemo(()=>{
    return CURRENCIES.filter((currency)=> 
      currency.code.toLowerCase().includes(searchCurrency.toLowerCase()) ||
  currency.name.toLocaleLowerCase().includes(searchCurrency.toLowerCase())
)
  }, [searchCurrency])
  const popularCurrencies = filterCurrencies.filter((c)=>c.isPopular)
  const otherCurrencies = filterCurrencies.filter((c)=>!c.isPopular)
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
          <div className='currency-search'>
            <img src="/images/icon-search.svg" alt="search" className='search-icon'/>
            <input type="text"
            placeholder='Search currencies...'
            className='currency-search-input'
            value={searchCurrency}
            onChange={(e)=> setSearchCurrency(e.target.value)}
            autoFocus
            />
          </div>
          {popularCurrencies.length > 0 && (
            <>
              <div className="currency-section-header">
                <span className="section-label">POPULAR</span>
                <span className='section-count'>{popularCurrencies.length}</span>
              </div>
              {popularCurrencies.map((currency) => (
                <button
                  key={currency.id}
                  className={`currency-option ${currency.code === value ? 'active' : ''}`}
                  onClick={() => handleSelect(currency.code)}
                  role='option'
                  aria-selected={currency.code === value}
                >
                  <Image
                    src={currency.flag}
                    alt={currency.name}
                    width={24}
                    height={24}
                    className="currency-flag-image"
                  />
                  <div className='currency-info'>
                    <span className='currency-code'>{currency.code}</span>
                    <span className='currency-name'>{currency.name}</span>
                  </div>
                  {currency.code === value && (
                    <img src='/images/icon-check.svg' alt='selected' className='check-icon' />
                  )}
                </button>
              ))}
            </>
          )}
          {otherCurrencies.length > 0 && (
            <>
              <div className="currency-section-header">
                <span className="section-label">OTHER CURRENCIES</span>
                <span className='section-count'>{otherCurrencies.length}</span>
              </div>
              {otherCurrencies.map((currency) => (
                <button
                  key={currency.id}
                  className={`currency-option ${currency.code === value ? 'active' : ''}`}
                  onClick={() => handleSelect(currency.code)}
                  role='option'
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
                  {currency.code === value && (
                    <img src='/images/icon-check.svg' alt='selected' className='check-icon' />
                  )}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}
