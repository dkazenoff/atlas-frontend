//SPDX-License-Identifier: UNLICENSED
pragma solidity > 0.6.0 < 0.7.0;
// import "github.com/provable-things/ethereum-api/provableAPI_0.6.sol";
import './provableAPI.sol';
//Copyright (c) dkazenoff
contract LoanContract is usingProvable {
    enum State {AWAITING_DEPOSITS, AWAITING_BVER, PAID_BORROWER, PAYING_LENDERS}
    State public currentState = State.AWAITING_DEPOSITS;
    uint constant public loan_value = 5 ether;     //ETH
    uint8 constant public max_lenders = 1;
    uint8 constant public loan_rate = 20;       //%
    uint8 constant public num_months = 12;
    uint constant public full_lender_pay = 1200000000000000000;
    // uint public contract_balance;
    uint8 public num_lenders;
    address payable[] public lenders;
    address payable public borrower;
    string public b_eligible = "false";
    event LogNewProvableQuery(string description);
    event LogConstructorInitiated(string result);
    event LogBoolUpdated(string description);

    constructor() public {
    OAR = OracleAddrResolverI(0x1868f74476af3A5Df8b62dD8fd4EeF069bb2Ea76);
    emit LogConstructorInitiated("Constructor was initiated");
    
  }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
    function addLenderTest() payable public {
      num_lenders += 1;
    }
  // function addLender(address payable _addr) payable public {
  function addLender(address _addr) payable public {
    //change _addr to msg.sender for deployment&remove _addr param. Using _addr for easy testing
    require(msg.value == (loan_value/max_lenders), "Incorrect deposit value");
    require(lenders.length < max_lenders,"Max number lenders already committed");
    for (uint16 i = 0; i<lenders.length; i++) {
      require(lenders[i] != payable(_addr), "Cannot lend multiple times!");
    }
    num_lenders += 1;
    // _addr = payable(_addr);
    lenders.push(payable(_addr));
  }
   function __callback(bytes32 myid, string memory result) public override{
      emit LogNewProvableQuery("inside callback.");
      if (msg.sender != provable_cbAddress()) revert();
    //   ETHUSD = result;
      b_eligible = result;
      LogBoolUpdated(result);
      if (keccak256(abi.encodePacked(b_eligible)) == keccak256(abi.encodePacked("true")) ) {
        borrower == msg.sender;
        BPAYOUT();
      }

      emit LogNewProvableQuery("finished callback.");
   }
  function addBorrower(string memory encrypted, string memory uuid) public {
    emit LogNewProvableQuery("inside AddBorrower.");
    require(borrower == payable(0x0), "Borrower already added. Contract is full");
  
  emit LogNewProvableQuery("Provable query was sent, standing by for the answer..");
       //Replace below URL with whatever your public ngrok tunnel URL is 
  provable_query("URL", strConcat("json(https://a99022664ff8.ngrok.io/encryption/dekyc?pubkey=",encrypted,"&uuid=",uuid,").score"));
  borrower = msg.sender;
  }
  function BPAYOUT() private {
    // require(_addr==borrower, "Error with BPAYOUT Function");
    borrower.transfer(address(this).balance);
  }

}
