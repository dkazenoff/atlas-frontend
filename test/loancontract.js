const LoanContract = artifacts.require('./../contracts/LoanContract.sol');

contract('LoanContract', function (accounts) {
    it('initiates contract', async function () {
        // const contract = await LoanContract.deployed();  old
        const contract = await LoanContract.new();
        // console.log("hello")
        // console.log("getting lenders", contract.getNumLenders())

        assert.equal(await contract.num_lenders(), 0, "Num Lenders Not initialized to zero value");
        assert.equal(await contract.getContractBalance(), 0, "Invalid Contract Balance");
        // const approver = await contract.approver.call();	//allows access into the contract file
        // assert.equal(approver, "0xe9bB6A5E4Fe9263a5c877D9Ce9c869460ad41D41", "Approvers don't match")
    });

    it('Takes a test depost', async function () {
        const contract = await LoanContract.deployed();
        await contract.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        //await contract.AddLender(accounts[0], { value: 1e+18, from: accounts[1] });
        const contract_bal = await contract.getContractBalance();
        const balance = await web3.eth.getBalance(contract.address);
        assert.equal(balance.toString(), contract_bal.toString(), "issue with getContractBalance()");

        assert.equal(balance.toString(), web3.utils.toBN(1e+18).toString(), "amount Strings did not match");
        assert.equal(balance, web3.utils.toBN(1e+18), "amounts Numbers didn't match");
    });
    it('Calculates NumLenders correctly', async function () {
        const contract2 = await LoanContract.new();
        await contract2.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        await contract2.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        await contract2.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        await contract2.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        await contract2.addLenderTest({ 'value': web3.utils.toBN(1e+18) });
        //await contract.AddLender(accounts[0], { value: 1e+18, from: accounts[1] });
        // let numLenders = contract2.num_lenders();
        // let numLenders;
        let numLenders = await contract2.num_lenders()
        //     .call(function (err, res) {
        //     numLenders = res;
        // })

        // console.log("NUM LENDERS:", numLenders);
        // const numLenders = await contract2.getNumLenders();
        assert.equal(numLenders, 5, "issue with Adding Lenders or NumLenders");
        // assert.equal(balance.toString(), web3.utils.toBN(1e+18).toString(), "amount did not match");
        // assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amounts didn't match");
    });
});