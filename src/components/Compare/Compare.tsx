import { EmptyState } from '../EmptyState'
import './Compare.css'
import CompareHeader from './CompareHeader'
import CompareList from './CompareList'

interface Prop {
  sendAmount: string
  // receiveAmount:string
}

export default function Compare({sendAmount}:Prop) {
   if(sendAmount === '0'){
      return (
        <EmptyState 
          title="No history available"
          description="Enter amounts to see your conversion history"
        />
      )
    }
  return (
    <div className="compare-container">
      <CompareHeader />
      <CompareList />
    </div>
  )
}
