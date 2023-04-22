import MarketTable from "../Components/MarketTable";

function Coins() {

return (
    <>
      <section id="coins-section" className="coins-section">
        <div className="container">
          <div className="coins-content">
            <div className="coins-content__text">
              <div style={{width: "60%", display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", color: "white"}}>
                <h1>Welcome to Price Tracker</h1>
                <h4>With coincever, you can manage all your crypto assets from one interface.</h4>
              </div>
              <MarketTable />
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
};

export default Coins;