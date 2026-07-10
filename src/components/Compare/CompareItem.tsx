interface CompareItemProps {
  flag: string
  code: string
  name: string
  amount: string
  rate: string
  isFavorited: boolean
}

export default function CompareItem({
  flag,
  code,
  name,
  amount,
  rate,
  isFavorited,
}: CompareItemProps) {
  return (
    <div className="compare-item">
      <div className="compare-item-left">
        <span className="compare-flag">{flag}</span>
        <div className="compare-info">
          <div className="compare-code">{code}</div>
          <div className="compare-name">{name}</div>
        </div>
      </div>

      <div className="compare-item-right">
        <div className="compare-values">
          <div className="compare-amount">{amount}</div>
          <div className="compare-rate">@ {rate}</div>
        </div>
        <button className="compare-favorite" aria-label="favorite">
          {isFavorited ? '⭐' : '☆'}
        </button>
      </div>
    </div>
  )
}
