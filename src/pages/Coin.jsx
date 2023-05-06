import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TradingViewWidget from '../Components/TradingViewWidget';
import { convertDateFromIsoToRegular } from './Utils/Utils';

export default function Coin() {

  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  // const [loadCoin, setLoadCoin] = useState(false);

  const coinUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(coinUrl);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [coinUrl]);

  return (
    <>
      <section id='coin-section' className='coin-section padding-left'>
        <div className='container'>
          
          <div className='coin__nav-links'>
            <div>
              <Link to="/coins"><p>Cryptocurrencies</p></Link>
            </div>
            <div>
              <span>&#62;</span>
            </div>
            <div id="coin-name">
              {coin.name}
            </div>
          </div>

          <div className='coin__top-header'>
            <button>Rank #{coin.market_cap_rank}</button>
          </div>

          <div className='coin__content-info'>
          
            {/* <div onLoad={() => setLoadCoin(false)} className='coin-content'>
            {loadCoin && <span className='loader-ring'></span> } */}
            <div  className='coin__content-left'>

              <div className='coin__content-left__header'>
                <img src="/images/bitcoin.svg" alt="logo" style={{width:"60px", height:"60px"}}/><h1>{coin.name} Price - <span id="coin-symbol" style={{fontSize:"17px"}}>{(coin.symbol)?.toUpperCase()}</span></h1>
                
              </div>
              <br/>

              <div className='coin__price'> {/* display flex, flex-direction: row*/}
                
                  <span style={{fontSize: "40px"}}>${(coin.market_data?.current_price?.usd)?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 8})}</span>
                  {coin.market_data?.price_change_percentage_24h < 0 ? <span style={{color: "red"}}><i class="fa-solid fa-caret-down"></i>{(coin.market_data?.price_change_percentage_24h)?.toLocaleString(undefined, {maximumFractionDigits: 1})}%</span> : <span style={{color: "green"}}><i class="fa-solid fa-caret-up"></i>{(coin.market_data?.price_change_percentage_24h)?.toLocaleString(undefined, {maximumFractionDigits: 1})}%</span>}
                
              </div>

              <div className='coin__progress-bar'>
                <progress 
                value={parseFloat(coin.market_data?.current_price?.usd - coin.market_data?.low_24h?.usd)} 
                min="0" 
                max={parseFloat(coin.market_data?.high_24h?.usd - coin.market_data?.low_24h?.usd)}></progress>
                <div className='coin__progress-bar__prices'>
                  <span>${parseFloat(coin.market_data?.low_24h?.usd)}</span>
                  <span>24h range</span>
                  <span>${parseFloat(coin.market_data?.high_24h?.usd)}</span>
                </div>
              </div>

              <div className='coin__market-details-container'>
                {/* Column 1 */}
                <div className='coin__market-details-columns'>
                
                  <div className="coin__market-details-row coin__market-details-columns-column-left" >
                    <div>Market Cap</div>
                    <div>{"$" + (coin.market_data?.market_cap?.usd)?.toLocaleString()}</div>
                  </div>

                  <div className="coin__market-details-row">
                      <div>24 Hour Trading Vol</div>
                      <div>{"$" + (coin.market_data?.total_volume?.usd)?.toLocaleString()}</div>
                  </div>

                  <div className="coin__market-details-row" >
                    <div>Fully Diluted Valuation</div>
                    <div>{"$" + (coin.market_data?.fully_diluted_valuation?.usd)?.toLocaleString()}</div>
                  </div>

                </div>
                
                {/* Column 2 */}
                <div className="coin__market-details-columns coin__market-details-columns-column-right">

                  <div className="coin__market-details-row" >
                    <div>Circulating Supply</div>
                    <div>{(coin.market_data?.circulating_supply)?.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                  </div>

                
                  <div className="coin__market-details-row" >
                    <div>Total Supply</div>
                    <div>{(coin.market_data?.total_supply)?.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                  </div>

                  <div className="coin__market-details-row" >
                    <div>Max Supply</div>
                    <div>{coin.market_data?.max_supply === null ? "∞" : (coin.market_data?.max_supply)?.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                  </div>

                </div>
              </div>
            </div>

            <div className='coin__content-right'>
              <div className='coin__content-right-header'>
                <p>Info</p>
              </div>
              <div className='coin__content-right__box-cols'>
                
                <div className='coin__content-right__box-row'>
                  <span>Website</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>{(coin.links?.homepage[0])}</button>
                    {/* <button>Whitepaper</button> */}
                  </div>
                </div>

                <div className='coin__content-right__box-row'>
                  <span>Explorers</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>Blockchair</button>
                    <button>Btc</button>
                    <button>Tokenview</button>
                  </div>
                </div>

                {/* <div className='coin__content-right__box-row'>
                  <span>Wallets</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>Ledger</button>
                    <button>Trezor</button>
                    <button>Electrum</button>
                    <button>Xdefi</button>
                    <button>SafePal</button>
                  </div>
                </div> */}

                <div className='coin__content-right__box-row'>
                  <span>Community</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>Twitter</button>
                    <button>Facebook</button>
                    <button>bitcointalk.org</button>
                  </div>
                </div>

                <div className='coin__content-right__box-row'>
                  <span>Source Code</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>Github</button>
                  </div>
                </div>

                <div className='coin__content-right__box-row'>
                  <span>API id</span>
                  <div className='coin__content-right__box-row__flex'>
                    <button>bitcoin</button>
                  </div>
                </div>

                <div className='coin__content-right__box-row margin-1rem'>
                  <span>All-Time High</span>
                  <div id='coin__content-right__box-row__flex-wrapper'>
                    <div id='coin__content-right__box-row__flex-price'>
                      <span>
                        <i class="fa-solid fa-dollar-sign fa-fade" style={{color: "#ffffff"}}></i>{coin.market_data?.ath?.usd}
                      </span>
                      {coin.market_data?.ath_change_percentage?.usd < 0 ? <span style={{color: "red"}}>{(coin.market_data?.ath_change_percentage?.usd)?.toLocaleString([], {maximumFractionDigits: 2})}%</span> : <span style={{color: "green"}}>{(coin.market_data?.ath_change_percentage?.usd)?.toLocaleString([], {maximumFractionDigits: 2})}%</span>}
                    </div>
                    <div id='ath-date'>{convertDateFromIsoToRegular(coin.market_data?.ath_date?.usd)}</div>
                  </div>
                </div>

                <div className='coin__content-right__box-row margin-1rem'>
                  <span>All-Time Low</span>
                  <div id='coin__content-right__box-row__flex-wrapper'>
                    <div id='coin__content-right__box-row__flex-price'>
                      <span>
                        <i class="fa-solid fa-dollar-sign fa-fade" style={{color: "#ffffff"}}></i>{coin.market_data?.atl?.usd}
                      </span>
                      {coin.market_data?.atl_change_percentage?.usd < 0 ? <span style={{color: "red"}}>{(coin.market_data?.atl_change_percentage?.usd)?.toLocaleString(undefined, {maximumFractionDigits: 2})}%</span> : <span style={{color: "green"}}>{(coin.market_data?.atl_change_percentage?.usd)?.toLocaleString(undefined, {maximumFractionDigits: 2})}%</span>}
                    </div>
                    <div id='ath-date'>{convertDateFromIsoToRegular(coin.market_data?.atl_date?.usd)}</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='trading-view__wrapper'>
            <div id='trading-view-chart'>
            <TradingViewWidget 
              name={coin.name} 
              symbol={coin.symbol}
            />

            </div>
          </div>

        </div>
      </section>
    </>
  )
};