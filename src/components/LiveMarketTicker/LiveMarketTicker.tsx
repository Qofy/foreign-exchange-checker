import { LIVE_MARKET_DATA } from '@/constants'

function LiveMarketTicker() {
  return (
    <section className="live-markets">
      <div className="ticker-label">• LIVE MARKETS</div>
      <div className="ticker-scroll">
        {LIVE_MARKET_DATA.map((item) => (
          <div key={item.id} className="ticker-item">
            <span className="currency-pair">{item.currencyPair}</span>
            <span className="rate">{item.rate}</span>
            <span className={`change ${item.isPositive ? 'positive' : 'negative'}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
};

export default LiveMarketTicker;