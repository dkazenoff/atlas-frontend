import React from 'react';
import logo from './logo.svg';

import './App.css';
import ContractEngine from './components/ContractEngine.js';
import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

const Infura = new NetworkOnlyConnector({
  providerURL: 'https://mainnet.infura.io/v3/...'
})

const connectors = { MetaMask, Infura }

function App() {
  return (
    <div className="App">
      <ContractEngine />
      <Web3Provider
        // connectors={...}
        libraryName={'ethers.js' | 'web3.js' | null}

      >

      </Web3Provider>
    </div>
  );
}

export default App;
