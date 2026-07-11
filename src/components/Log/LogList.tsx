import { CONVERSION_LOG_DATA } from '@/constants'
import LogItem from './LogItem'

export default function LogList() {
  return (
    <div className="log-list">
      {CONVERSION_LOG_DATA.map((entry) => (
        <LogItem
          key={entry.id}
          time={entry.time}
          pair={entry.pair}
          sendAmount={entry.sendAmount}
          receiveAmount={entry.receiveAmount}
        />
      ))}
    </div>
  )
}
