import { COMPARE_LIST_DATA } from '@/constants'
import CompareItem from './CompareItem'

export default function CompareList() {
  return (
    <div className="compare-list">
      {COMPARE_LIST_DATA.map((item) => (
        <CompareItem
          key={item.id}
          flag={item.flag}
          code={item.code}
          name={item.name}
          amount={item.amount}
          rate={item.rate}
          isFavorited={item.isFavorited}
        />
      ))}
    </div>
  )
}
