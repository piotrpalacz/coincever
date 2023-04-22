import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar-sticky">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
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
}

export default Navbar;