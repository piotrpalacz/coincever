import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar-sticky">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/bull-logo.png" alt="bull logo" style={{width: "70px", height: "40px"}}/>
              <p>coincever</p>
            </Link>
          </div>
          <ul>
            <li>
              <a href="#home">Swap</a>
            </li>
            <li>
              <Link to="/coins">
              <p>Cryptocurrencies</p>
              </Link>
            </li>
            <li>
              <a href="#whyus">Why Us</a>
            </li>
            <li>
              <a href="#Join">Join</a>
            </li>
          </ul>
          <span>
            <p>Login</p>
          </span>
        </div>
      </nav>



    </>
  )
};
