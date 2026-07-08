type Props = {}

function Header({}: Props) {
  return (
     <header className="header">
        <div className="header-left">
          <h1 className="logo">💱 FX_CHECKER</h1>
        </div>
        <div className="header-right">
          <span className="currency-count">55 CURRENCIES</span>
          <span className="separator">•</span>
          <span className="data-source">EDD • ECB DATA</span>
        </div>
      </header>
  )
};

export default Header;