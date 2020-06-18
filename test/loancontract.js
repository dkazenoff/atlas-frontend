const LoanContract = artifacts.require('../../contracts/LoanContract.sol');

contract('LoanContract', function (accounts) {
    it('initiates contract', async function () {
        const contract = await LoanContract.deployed();
        const approver = await contract.approver.call();	//allows access into the contract file
        assert.equal(approver, "0xe9bB6A5E4Fe9263a5c877D9Ce9c869460ad41D41", "Approvers don't match")
    });

    it('takes a depost', async function () {
        const contract = await LoanContract.deployed();
        await contract.deposit(accounts[0], { value: 1e+18, from: accounts[1] });

        const balance = await web3.eth.getBalance(contract.address);

        assert.equal(balance.toString(), web3.utils.toBN(1e+18).toString(), "amount did not match");
        // assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amounts didn't match");
    });
});