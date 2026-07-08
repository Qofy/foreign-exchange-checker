type Props = {}

export default function ChartStats({}: Props) {
  return (
    <div className="chart-stats">
              <div className="stat">
                <span className="stat-label">OPEN</span>
                <span className="stat-value">0.8516</span>
              </div>
              <div className="stat">
                <span className="stat-label">LAST</span>
                <span className="stat-value">0.8530</span>
              </div>
              <div className="stat">
                <span className="stat-label">CHANGE</span>
                <span className="stat-value positive">+0.0014</span>
              </div>
              <div className="stat">
                <span className="stat-label">% CHANGE</span>
                <span className="stat-value positive">▲ +0.16%</span>
              </div>
            </div>
  )
};