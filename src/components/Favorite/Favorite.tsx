import { EmptyState } from '../EmptyState'
import './Favorite.css'
import FavoriteHeader from './FavoriteHeader'
import FavoriteList from './FavoriteList'

interface Prop {
  sendAmount: string
  // receiveAmount:string
}
export default function Favorite({sendAmount}:Prop) {
 if(sendAmount === '0'){
      return (
        <EmptyState 
          title="No history available"
          description="Enter amounts to see your conversion history"
        />
      )
    }
  return (
    <div className="favorite-container">
      <FavoriteHeader />
      <FavoriteList />
    </div>
  )
}
