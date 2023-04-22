import WalletCard from "./WalletCard";


function Header() {
  return (
    <>
      <section id="header" className="header-section">
        <div className="container">
          <div className="header-content">
            <div className="header-content__text">
              <h3>
                Manage Your Crypto 
                <br/>
                <span>Portfolio From One Place</span>
              </h3>
              <p>Securely connect the portfolio you're using to start</p>
            </div>
            <WalletCard />
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Header;