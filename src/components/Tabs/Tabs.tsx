type Props = {}

export default function Tabs({}: Props) {
  return (
      <div className="tabs">
            <button className="tab active">
              HISTORY
              <span className="tab-badge">3</span>
            </button>
            <button className="tab">COMPARE</button>
            <button className="tab">
              FAVORITES
              <span className="tab-badge">10</span>
            </button>
            <button className="tab">
              LOG
              <span className="tab-badge">0</span>
            </button>
          </div>
  )
};