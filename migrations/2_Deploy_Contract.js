var LoanContract = artifacts.require("LoanContract");

module.exports = function (deployer) {
    deployer.deploy(LoanContract);
}