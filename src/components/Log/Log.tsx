import './Log.css'
import LogHeader from './LogHeader'
import LogList from './LogList'

export default function Log() {
  return (
    <div className="log-container">
      <LogHeader />
      <LogList />
    </div>
  )
}
