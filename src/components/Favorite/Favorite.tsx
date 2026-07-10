import './Favorite.css'
import FavoriteHeader from './FavoriteHeader'
import FavoriteList from './FavoriteList'

export default function Favorite() {
  return (
    <div className="favorite-container">
      <FavoriteHeader />
      <FavoriteList />
    </div>
  )
}
