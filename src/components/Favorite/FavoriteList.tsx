import FavoriteItem from './FavoriteItem'

export default function FavoriteList() {
  return (
    <div className="favorite-list">
      <FavoriteItem
        pair="USD → EUR"
        rate="0.8530"
        change="+0.16%"
        isPositive={true}
      />
      <FavoriteItem
        pair="GBP → USD"
        rate="1.3575"
        change="-0.22%"
        isPositive={false}
      />
      <FavoriteItem
        pair="USD → JPY"
        rate="157.91"
        change="+0.04%"
        isPositive={true}
      />
      <FavoriteItem
        pair="USD → BDT"
        rate="122.92"
        change="+0.18%"
        isPositive={false}
      />
      <FavoriteItem
        pair="EUR → GBP"
        rate="0.8633"
        change="+0.11%"
        isPositive={true}
      />
      <FavoriteItem
        pair="AUD → NZD"
        rate="1.2217"
        change="+0.23%"
        isPositive={true}
      />
      <FavoriteItem
        pair="USD → INR"
        rate="94.910"
        change="+0.05%"
        isPositive={true}
      />
      <FavoriteItem
        pair="EUR → CHF"
        rate="1.0668"
        change="-0.15%"
        isPositive={false}
      />
      <FavoriteItem
        pair="GBP → JPY"
        rate="213.21"
        change="+0.13%"
        isPositive={true}
      />
      <FavoriteItem
        pair="USD → TRY"
        rate="38.642"
        change="+0.54%"
        isPositive={true}
      />
    </div>
  )
}
