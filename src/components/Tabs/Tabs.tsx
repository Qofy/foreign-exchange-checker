export type TabType = 'history' | 'compare' | 'favorites' | 'log'

interface TabItem {
  id: TabType
  label: string
  badge?: number
}

interface Props {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const TAB_ITEMS: TabItem[] = [
  { id: 'history', label: 'HISTORY',  },
  { id: 'compare', label: 'COMPARE' },
  { id: 'favorites', label: 'FAVORITES',  },
  { id: 'log', label: 'LOG', },
]

export default function Tabs({ activeTab, onTabChange }: Props) {
  const handleTabClick = (tab: TabType) => {
    onTabChange(tab)
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