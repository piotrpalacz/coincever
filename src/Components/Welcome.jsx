
function Welcome() {
  let marketValue = -3.1;
  
  return (
    <>
      <section id="welcome" className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2>Cryptocurrency Prices by Market Cap</h2>
            <p>The global cryptocurrency market cap today is 1.23 Trillion, a {marketValue <= 0 ? <span style={{color: 'red'}}>{marketValue}%</span> : <span style={{color: 'green'}}>{marketValue}%</span>} change in the last 24 hours</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Welcome;