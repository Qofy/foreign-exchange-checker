import LogItem from './LogItem'

export default function LogList() {
  return (
    <div className="log-list">
      <LogItem
        time="20M"
        pair="USD → EUR"
        sendAmount="1,000.00"
        receiveAmount="853.02"
      />
      <LogItem
        time="34M"
        pair="EUR → JPY"
        sendAmount="500.00"
        receiveAmount="92,490"
      />
      <LogItem
        time="50M"
        pair="GBP → USD"
        sendAmount="250.00"
        receiveAmount="339.38"
      />
      <LogItem
        time="1H"
        pair="USD → GBP"
        sendAmount="1,500.00"
        receiveAmount="1,104.95"
      />
      <LogItem
        time="2H"
        pair="BDT → USD"
        sendAmount="50,000"
        receiveAmount="406.77"
      />
      <LogItem
        time="4H"
        pair="EUR → INR"
        sendAmount="100.00"
        receiveAmount="11,127.43"
      />
      <LogItem
        time="13 May"
        pair="AUD → USD"
        sendAmount="2,000.00"
        receiveAmount="1,441.60"
      />
      <LogItem
        time="11 May"
        pair="CHF → USD"
        sendAmount="750.00"
        receiveAmount="824.36"
      />
    </div>
  )
}
