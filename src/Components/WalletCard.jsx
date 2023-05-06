import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function WalletCard() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [metamaskAccount, setMetamaskAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnectButtonText] = useState('Connect');

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({method: 'eth_requestAccounts'})
      .then(result => {
        accountChangedHandler(result[0]);
        setConnectButtonText('Connected!')
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
    } else {
      setErrorMessage('Please install MetaMask browser extension')
    }
  }

  const accountChangedHandler = (newAccount) => {
    setMetamaskAccount(newAccount);
    getAccountBalance(newAccount);
  }

  const getAccountBalance = (account) => {
    window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
    .then(balance => {
      setUserBalance(ethers.formatEther(balance));
    })
  }

  const chainChangedHandler = () => {
		window.location.reload();
	}

  window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum.on('chainChanged', chainChangedHandler);

  return (
    <>
    <div className='wallet-card-section'>
      <div className="header-content__wallets">
        <ul>

          <li>
            <div className="portfolio-inner">
              <img src="images/MetaMask_Fox.svg" alt="Metamask Logo" className="logo"></img>
              <p style={{color: "white"}}>MetaMask</p>
              <br/>
              <button onClick={connectWalletHandler}>{connButtonText}</button>
            </div>
          </li>

          <li>
            <div className="portfolio-inner-disabled grayscale" title="SOON!">
              <img src="images/wallet-connect-logo.svg" alt="Metamask Logo" className="logo-smaller"></img>
              <p style={{color: "white"}}>WalletConnect</p>
              <br/>
              <button onClick={() => alert("Now it doesn't work, but I will implement it soon.")}>Connect</button>
            </div>
          </li>

        </ul>
        
      </div>
      <div className='walletCard'>
        <p style={{textTransform: "uppercase", padding: "10px", border: "1px solid grey", borderRadius: "5px"}}>Connect the MetaMask Wallet to see your address and your account balance</p>
          <div className='accountDisplay'>
            <h3>Address: {metamaskAccount}</h3>
          </div>
          <div className='balanceDisplay'>
            <h3>Balance: {userBalance}</h3>
          </div>
          <span style={{color: 'red'}}>
          {errorMessage}
          </span>
        </div>
      </div>
    </>
  )
};