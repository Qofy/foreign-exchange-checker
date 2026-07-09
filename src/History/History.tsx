import { ChartHeader, ChartStats, ChartSvg, TimeRangeSelector } from "@/components"

type Props = {}

export default function History({}: Props) {
  return (
    <div className="chart-container">
                <ChartStats/>
                <TimeRangeSelector/>
                  <ChartHeader/>
                  <ChartSvg/>
                </div>
  )
};