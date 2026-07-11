import { CurrencySelect } from "@/components"
import { useState } from "react";

function Converter() {
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [receiveCurrency, setReceiveCurrency] = useState('EUR')

  return (
    <section className="converter-section">
          <h2 className="section-title">CHECK THE RATE</h2>

          <div className="converter-container">
            {/* Send Side */}
            <div className="currency-input send">
              <label className="input-label">SEND</label>
              <div className="input-wrapper">
                <input
                  type="number"
                  className="amount-input"
                  defaultValue="1,000"
                  placeholder="0"
                />
                <CurrencySelect value={sendCurrency} onChange={setSendCurrency} />
              </div>
            </div>

            {/* Swap Button */}
            <button className="swap-button" aria-label="Swap currencies">
              <img src="/images/icon-exchange-vertical.svg" alt="swap" />
            </button>

            {/* Receive Side */}
            <div className="currency-input receive">
              <label className="input-label">RECEIVE</label>
              <div className="input-wrapper">
                <div className="amount-output">853.02</div>
                <CurrencySelect value={receiveCurrency} onChange={setReceiveCurrency} />
              </div>
            </div>
          </div>
          <div>
            
          </div>
          {/* Exchange Rate Info */}
          <div className="exchange-rate-info">
            <span className="rate-text">1 USD = 0.8530 EUR</span>
          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-favorited">
              <img src="/images/icon-star-filled.svg" alt="favorite" className="btn-icon" />
              FAVORITED
            </button>
            <button className="btn btn-secondary">
              LOG CONVERSION
            </button>
          </div>
          </div>

        </section>
  )
};

export default Converter;