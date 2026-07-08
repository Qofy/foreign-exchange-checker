type Props = {}

function Converter({}: Props) {
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
                <select className="currency-select">
                  <option>🇺🇸 USD</option>
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <button className="swap-button" aria-label="Swap currencies">
              ↔
            </button>

            {/* Receive Side */}
            <div className="currency-input receive">
              <label className="input-label">RECEIVE</label>
              <div className="input-wrapper">
                <div className="amount-output">853.02</div>
                <select className="currency-select">
                  <option>🇪🇺 EUR</option>
                </select>
              </div>
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="exchange-rate-info">
            <span className="rate-text">1 USD = 0.8530 EUR</span>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-favorited">
              ⭐ FAVORITED
            </button>
            <button className="btn btn-secondary">
              LOG CONVERSION
            </button>
          </div>
        </section>
  )
};

export default Converter;