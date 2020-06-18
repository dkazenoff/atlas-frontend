// import React from 'react';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './App.css';
// import ContractEngine from './components/ContractEngine.js';
// import { BrowserRouter } from "react-router-dom";
// import { Connectors } from 'web3-react'



// const { InjectedConnector, NetworkOnlyConnector } = Connectors

// const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })

// const Infura = new NetworkOnlyConnector({
//   // providerURL: 'https://mainnet.infura.io/v3/...'
// })

// const connectors = { MetaMask, Infura }

// function App() {
//   // web3 = new Web3(new Web3.providers.HttpProvider("http://ropsten.infura.io/"));

//   return (
//     <Router>
//       <div className="App">
//         <ContractEngine />
//         {/* <Web3Provider
//         // connectors={...}
//         libraryName={'ethers.js' | 'web3.js' | null}
//       >
//       </Web3Provider> */}
//         {/* <Route exact path="/" exact comoponent={ContractEngine} /> */}
//         {/* <Route exact path="/prelim" exact component={Prelim} /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;

//
// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";

// import Root from "./components/Root";

// render(
//   <BrowserRouter>
//     <Root />
//   </BrowserRouter>,
//   document.getElementById("app")
// );