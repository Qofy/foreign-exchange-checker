type Props = {}

export default function TimeRangeSelector({}: Props) {
  return (
    <div className="time-range">
              <button className="range-btn">1D</button>
              <button className="range-btn">1W</button>
              <button className="range-btn">1M</button>
              <button className="range-btn">3M</button>
              <button className="range-btn">1Y</button>
              <button className="range-btn">5Y</button>
            </div>
  )
};