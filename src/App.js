import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./App.css";
import { useState } from 'react';
import NavBar from './NavBar';
import Home from './home';
import Mirage from './mirage';
import Marco from './marco';
import Gallery from './Gallery'; 
import Mint from './mint';





function App() {

  const [account, setAccount] = useState(null)
  // const [accounts, setAccounts] = useState([])
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask

    

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
  }
  return (
    <BrowserRouter>
      <div className="App">
        <>
        <NavBar web3Handler={web3Handler} account={account}/>
        </>
        <div>      
          <Routes>
          <Route index element={
              <Home />
            }/>
              <Route path='/home' element={
              <Home />
            }/>
            <Route index element={
              <Mirage />
            }/>
            <Route path='/Mirage' element={
              <Mirage />
            }/>
            <Route path='/marco' element={
              <Marco />
            }/>
            <Route path = '/Gallery' element={
              <Gallery />
            } />
            <Route path='/mint' element={
              <Mint />
            }/>
          </Routes>
          </div>
        </div>
      {/* <div className='moving-background'></div> */}
    </BrowserRouter>  
  );
}

export default App;
