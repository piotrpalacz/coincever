import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function MarketTable() {
  
  let perPage = null;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  // const [pagenNr, setPageNr] = useState([]);
  let checkComponent = (document.getElementById('header') ? true : false);
  checkComponent ? perPage = 5 : perPage = 20;
  

  
  const coinsUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=24h&locale=en`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(coinsUrl);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [coinsUrl]);
  // fetch(url)
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json();
  //     }
  //     throw response;
  //   })
  //   .then(data => {
  //     setData(data);
  //   })
  //   .catch(error => {
  //     console.error("Error fetching data: ", error);
  //     setError(error);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   })
  // }, [url])

  // if (loading) return "Loading...";
  // if (error) return "Error!";

  const paginationButtons = [];

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagination" : ""}
        
      >
        {i}
      </button>
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
                style={checkComponent ? {width: "70%"} : {width: "90%"}} 
              >
                
                  <table>
                    <caption hidden>Cryptocurrency table with actual prices</caption>
                    
                    <thead>
                      
                      <tr>
                     
                        <th className="thead-style">#</th>

                        <th id="coin-name" className="thead-style">
                          
                            <p className="text-align-start">Coin</p>
                          
                        </th>

                        <th id="price" className="thead-style">
                          <div>
                            <p className="text-align-end">Price</p>
                          </div>
                        </th>

                        <th id="change24h" className="thead-style">
                          <div className=" ">
                            <p className="text-align-end">24h %</p>
                          </div>
                        </th>

                        <th id="volume24" className="thead-style">
                          <div className=" ">
                            <p className="text-align-end">24h Volume</p>
                          </div>
                        </th>

                        <th id="market-cap" className="thead-style">
                          <div className=" ">
                            <p className="text-align-end">Market Cap</p>
                          </div>
                        </th>
                        
                      </tr>
                      
                    </thead>
                    

                    <tbody>
                      {data.map((item) => (
                      
                      <tr key={item.market_cap_rank}>

                        <td style={{borderBottom: "none"}}>{item.market_cap_rank}</td>
                        <td className="text-align-start">
                        <Link
                        to={`/coin/${item.id}`}
                        className="coin-row"
                        key={item.id}
                      >
                          <div style={{display: "flex", alignItems: "center"}}>
                            <img src={item.image} alt={item.id} height={"30px"} width={"30px"}></img>
                            <p style={{marginInlineStart: "10px"}}>
                              {item.name} - <span style={{fontVariant: "historical-forms"}}>{(item.symbol).toUpperCase()}</span>
                            </p>
                          </div>
                        </Link>
                        </td>

                        <td className="text-align-end">
                          <div>${(item.current_price).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}</div>
                        </td>

                        <td className="text-align-end">
                          <div
                            className={
                            "coin-price-" +
                            (item.price_change_percentage_24h >= 0
                              ? 'green-text'
                              : 'red-text')}
                          >{(item.price_change_percentage_24h).toFixed(2) + "%"}</div>
                        </td>

                        <td className="text-align-end">
                          <div>{"$" + (item.total_volume).toLocaleString()}</div>
                        </td>

                        <td className="text-align-end">
                          <div>{"$" + (item.market_cap).toLocaleString()}</div>
                        </td>
                      </tr>
                      
                      ))}

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