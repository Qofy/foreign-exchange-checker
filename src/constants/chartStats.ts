export interface ChartStat {
  id: string
  label: string
  value: string
  isPositive: boolean
}

export const CHART_STATS_DATA: ChartStat[] = [
  {
    id: 'open',
    label: 'OPEN',
    value: '0.8516',
    isPositive: false,
  },
  {
    id: 'last',
    label: 'LAST',
    value: '0.8530',
    isPositive: false,
  },
  {
    id: 'change',
    label: 'CHANGE',
    value: '+0.0014',
    isPositive: true,
  },
  {
    id: 'percentChange',
    label: '% CHANGE',
    value: '▲ +0.16%',
    isPositive: true,
  },
]
