import { useState } from 'react'

export type TabType = 'history' | 'compare' | 'favorites' | 'log'

interface TabItem {
  id: TabType
  label: string
  badge?: number
}

interface Props {
  onTabChange?: (tab: TabType) => void
}

const TAB_ITEMS: TabItem[] = [
  { id: 'history', label: 'HISTORY', badge: 3 },
  { id: 'compare', label: 'COMPARE' },
  { id: 'favorites', label: 'FAVORITES', badge: 10 },
  { id: 'log', label: 'LOG', badge: 0 },
]

export default function Tabs({ onTabChange }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('history')

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
    onTabChange?.(tab)
  }

  return (
    <div className="tabs">
      {TAB_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`tab ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => handleTabClick(item.id)}
          aria-selected={activeTab === item.id}
        >
          {item.label}
          {item.badge !== undefined && (
            <span className="tab-badge">{item.badge}</span>
          )}
        </button>
      ))}
    </div>
  )
};