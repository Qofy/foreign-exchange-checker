import { EmptyState } from '../EmptyState'
import './Log.css'
import LogHeader from './LogHeader'
import LogList from './LogList'

interface Prop {
  sendAmount: string
  // receiveAmount:string
}
export default function Log({sendAmount}:Prop) {
  if(sendAmount === '0'){
        return (
          <EmptyState
            title="No history available"
            description="Enter amounts to see your conversion history"
          />
        )
      }
  return (
    <div className="log-container">
      <LogHeader />
      <LogList />
    </div>
  )
}
