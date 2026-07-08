import { CHART_STATS_DATA } from '@/constants'

type Props = {}

export default function ChartStats({}: Props) {
  return (
    <div className="chart-stats">
      {CHART_STATS_DATA.map((stat) => (
        <div key={stat.id} className="stat">
          <span className="stat-label">{stat.label}</span>
          <span className={`stat-value ${stat.isPositive ? 'positive' : ''}`}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  )
};