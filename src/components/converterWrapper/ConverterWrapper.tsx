import { useState } from 'react'
import { Tabs, Converter } from '@/components'
import { TabType } from '../Tabs/Tabs'
import Compare from '../Compare/Compare'
import Favorite from '../Favorite/Favorite'
import Log from '../Log/Log'
import History from '../History/History'

export default function ConverterWrapper() {
  const [activeTab, setActiveTab] = useState<TabType>('history')
  const [sendAmount, setSendAmount] = useState('0')
  const [receiveAmount, setReceiveAmount] = useState('0')
  const [sendCurrency, setSendCurrency] = useState('USD')
  const [receiveCurrency, setReceiveCurrency] = useState('EUR')

  return (
    <>
      <Converter
        sendAmount={sendAmount}
        receiveAmount={receiveAmount}
        sendCurrency={sendCurrency}
        receiveCurrency={receiveCurrency}
        onSendAmountChange={setSendAmount}
        onReceiveAmountChange={setReceiveAmount}
        onSendCurrencyChange={setSendCurrency}
        onReceiveCurrencyChange={setReceiveCurrency}
      />

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'history' && <History sendAmount={sendAmount} />}
      {activeTab === 'compare' && <Compare sendAmount={sendAmount} />}
      {activeTab === 'favorites' && <Favorite sendAmount={sendAmount} />}
      {activeTab === 'log' && <Log sendAmount={sendAmount} />}
    </>
  )
}