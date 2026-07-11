interface FavoriteItemProps {
  pair: string
  rate: string
  change: string
  isPositive: boolean
}

export default function FavoriteItem({
  pair,
  rate,
  change,
  isPositive,
}: FavoriteItemProps) {
  return (
    <div className="favorite-item">
      <div className="favorite-pair">
        {pair}
      </div>

      <div className="favorite-item-right">
        <div className="favorite-values">
          <div className="favorite-rate">{rate}</div>
          <div className={`favorite-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '▲' : '▼'} {change}
          </div>
        </div>
        <button className="favorite-btn" aria-label="unpin favorite">
          <img
            src="/images/icon-star-filled.svg"
            alt="unfavorite"
            className="favorite-icon"
          />
        </button>
      </div>
    </div>
  )
}
