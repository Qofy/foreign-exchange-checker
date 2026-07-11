import { FAVORITE_LIST_DATA } from '@/constants'
import FavoriteItem from './FavoriteItem'

export default function FavoriteList() {
  return (
    <div className="favorite-list">
      {FAVORITE_LIST_DATA.map((item) => (
        <FavoriteItem
          key={item.id}
          pair={item.pair}
          rate={item.rate}
          change={item.change}
          isPositive={item.isPositive}
        />
      ))}
    </div>
  )
}
