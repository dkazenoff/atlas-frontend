const Web3 = require("web3");

const getWeb3 = async () => {
    var web3 = new Web3('ws://localhost:8545');
    // console.log(web3);
    return web3;

}

export default getWeb3;