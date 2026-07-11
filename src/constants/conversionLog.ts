export interface LogEntry {
  id: string
  time: string
  pair: string
  sendAmount: string
  receiveAmount: string
}

export const CONVERSION_LOG_DATA: LogEntry[] = [
  {
    id: '1',
    time: '20M',
    pair: 'USD → EUR',
    sendAmount: '1,000.00',
    receiveAmount: '853.02',
  },
  {
    id: '2',
    time: '34M',
    pair: 'EUR → JPY',
    sendAmount: '500.00',
    receiveAmount: '92,490',
  },
  {
    id: '3',
    time: '50M',
    pair: 'GBP → USD',
    sendAmount: '250.00',
    receiveAmount: '339.38',
  },
  {
    id: '4',
    time: '1H',
    pair: 'USD → GBP',
    sendAmount: '1,500.00',
    receiveAmount: '1,104.95',
  },
  {
    id: '5',
    time: '2H',
    pair: 'BDT → USD',
    sendAmount: '50,000',
    receiveAmount: '406.77',
  },
  {
    id: '6',
    time: '4H',
    pair: 'EUR → INR',
    sendAmount: '100.00',
    receiveAmount: '11,127.43',
  },
  {
    id: '7',
    time: '13 May',
    pair: 'AUD → USD',
    sendAmount: '2,000.00',
    receiveAmount: '1,441.60',
  },
  {
    id: '8',
    time: '11 May',
    pair: 'CHF → USD',
    sendAmount: '750.00',
    receiveAmount: '824.36',
  },
]
