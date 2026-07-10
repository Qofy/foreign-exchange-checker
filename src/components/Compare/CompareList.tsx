import CompareItem from './CompareItem'

export default function CompareList() {
  return (
    <div className="compare-list">
      <CompareItem
        flag="🇬🇧"
        code="GBP"
        name="British Pound"
        amount="736.65"
        rate="0.7366"
        isFavorited={false}
      />
      <CompareItem
        flag="🇯🇵"
        code="JPY"
        name="Japanese Yen"
        amount="157,910"
        rate="157.91"
        isFavorited={true}
      />
      <CompareItem
        flag="🇨🇭"
        code="CHF"
        name="Swiss Franc"
        amount="909.80"
        rate="0.9098"
        isFavorited={false}
      />
      <CompareItem
        flag="🇨🇦"
        code="CAD"
        name="Canadian Dollar"
        amount="1,381.50"
        rate="1.3815"
        isFavorited={false}
      />
      <CompareItem
        flag="🇦🇺"
        code="AUD"
        name="Australian Dollar"
        amount="1,387.35"
        rate="1.3874"
        isFavorited={false}
      />
      <CompareItem
        flag="🇮🇳"
        code="INR"
        name="Indian Rupee"
        amount="94,910.00"
        rate="94.910"
        isFavorited={true}
      />
      <CompareItem
        flag="🇨🇳"
        code="CNY"
        name="Chinese Yuan"
        amount="7,210.00"
        rate="7.2100"
        isFavorited={false}
      />
      <CompareItem
        flag="🇧🇩"
        code="BDT"
        name="Bangladeshi Taka"
        amount="122,920"
        rate="122.92"
        isFavorited={true}
      />
    </div>
  )
}
