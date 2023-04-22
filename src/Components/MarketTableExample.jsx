import { Link } from 'react-router-dom';

function MarketTableExample() {

  let perPage = null;

  let checkComponent = (document.getElementById('header') ? true : false);
  checkComponent ? perPage = 5 : perPage = 50;

  const paginationButtons = [];

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
      >
        {i}
      </button>
    )
  }

  const rows = [];

  for(let i = 0; i < 20; i++) {
    rows.push(
      <tr key="id">
        <td style={{borderBottom: "none"}}>{i + 1}</td>
        
        <td className="text-align-start">
          <div style={{display: "flex", alignItems: "center"}}>
            <img src={"./Bitcoin.svg"} alt="bitcoin" height={"30px"} width={"30px"}></img>
            <p style={{marginInlineStart: "10px"}}>
              Bitcoin - <span style={{fontVariant: "historical-forms"}}>BTC</span>
            </p>
          </div>
        </td>

        <td className="text-align-end">
          <div>$27,294.00</div>
        </td>

        <td className="text-align-end">
          <div>-3.02%</div>
        </td>

        <td className="text-align-end">
          <div>$15,601,829,181</div>
        </td>

        <td className="text-align-end">
          <div>$527,869,551,880</div>
        </td>
      </tr>
    )
  }

  return (
    <>
      <section id="market-table" className="market-table-section">
        <div className="container">
          <div className="market-content">
              {/* <h3>The global cryptocurrency market cap today is 1.23 Trillion, a {marketValue <= 0 ? <span style={{color: 'red'}}>{marketValue}%</span> : <span style={{color: 'green'}}>{marketValue}%</span>} change in the last 24 hours.</h3> */}
              <div 
                id="table" 
                className={checkComponent ? "table-market-main" : "table-market-coins"}
                style={checkComponent ? {width: "70%"} : {width: "100%"}} 
              >
                
                  <table>
                    <caption hidden>Cryptocurrency table with actual prices</caption>
                    
                    <thead>
                      <tr>
                        
                        <th>#</th>

                        <th id="coin-name">
                          <div className=" ">
                            <p className="text-align-start">Coin</p>
                          </div>
                        </th>

                        <th id="price">
                          <div>
                            <p className="text-align-end">Price</p>
                          </div>
                        </th>

                        <th id="change24h">
                          <div className=" ">
                            <p className="text-align-end">24h %</p>
                          </div>
                        </th>

                        <th id="volume24">
                          <div className=" ">
                            <p className="text-align-end">24h Volume</p>
                          </div>
                        </th>

                        <th id="market-cap">
                          <div className=" ">
                            <p className="text-align-end">Market Cap</p>
                          </div>
                        </th>

                      </tr>
                    </thead>
                    

                    <tbody>
                      {rows}
                      
                    </tbody>
                  </table>
                
              </div>
              {perPage === 5 ? (<div className="button-see-more">
              <Link to="/coins">
                <button>See More</button>
              </Link>
      </div>) : <div className="list-pagination">{paginationButtons}</div>}
          </div>
        </div>
      </section>

    </>
  )
}

export default MarketTableExample;