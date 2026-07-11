interface LogItemProps {
  time: string
  pair: string
  sendAmount: string
  receiveAmount: string
}

export default function LogItem({
  time,
  pair,
  sendAmount,
  receiveAmount,
}: LogItemProps) {
  return (
    <div className="log-item">
      <div className="log-time">
        {time}
      </div>

      <div className="log-pair">
        {pair}
      </div>

      <div className="log-amounts">
        <span className="log-send">{sendAmount}</span>
        <span className="log-receive">{receiveAmount}</span>
      </div>

      <button className="log-delete-btn" aria-label="delete conversion">
        <img src="/images/icon-delete.svg" alt="delete" className="log-delete-icon" />
      </button>
    </div>
  )
}
