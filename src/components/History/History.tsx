import { EmptyState } from '../EmptyState'
import './History.css'
import ChartHeader from '../ChartHeader/ChartHeader'
import ChartStats from '../ChartStats/ChartStats'
import { ChartSvg } from '../ChartSvg'

interface Prop {
  sendAmount: string
}

export default function History({ sendAmount }: Prop) {
  if (sendAmount === '0') {
    return (
      <EmptyState
        title="No history available"
        description="Enter amounts to see your conversion history"
      />
    )
  }

  return (
    <div className="history-container">
      <ChartHeader />
      <ChartStats />
      <ChartSvg/>
    </div>
  )
}
