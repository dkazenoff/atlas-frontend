//SPDX-License-Identifier: UNLICENSED
pragma solidity > 0.6.0 < 0.7.0;
// import "github.com/provable-things/ethereum-api/provableAPI_0.6.sol";
import './provableAPI.sol';
//Copyright (c) dkazenoff
contract LoanContract is usingProvable {
    enum State {AWAITING_DEPOSITS, AWAITING_BVER, PAID_BORROWER, PAYING_LENDERS}
    State public currentState = State.AWAITING_DEPOSITS;
    uint constant public loan_value = 5 ether;     //ETH
    uint8 constant public max_lenders = 5;
    uint8 constant public loan_rate = 20;       //%
    uint8 constant public num_months = 12;
    uint constant public full_lender_pay = 1200000000000000000;
    // uint public contract_balance;
    uint8 public num_lenders;
    address payable[] lenders;
    address payable public borrower;
    string public b_eligible = "false";
    event LogNewProvableQuery(string description);
    event LogConstructorInitiated(string result);
    event LogBoolUpdated(string description);

    constructor() public {
    OAR = OracleAddrResolverI(0xfFC9B597e97D3d28Fbcfa661FD91D6CB48Ca00c2);
    emit LogConstructorInitiated("Constructor was initiated");
    
  }

    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
    function addLenderTest() payable public {
      num_lenders += 1;
    }
  function addLender(address payable _addr) payable public {
    //change _addr to msg.sender for deployment&remove _addr param. Using _addr for easy testing
    require(msg.value ==1 ether, "Incorrect deposit value");
    require(lenders.length < max_lenders,"Max number lenders already committed");
    for (uint16 i = 0; i<lenders.length; i++) {
      require(lenders[i] != payable(_addr), "Cannot lend multiple times!");
    }
    num_lenders += 1;
    lenders.push(_addr);
  }
   function __callback(bytes32 myid, string memory result) public override{
      emit LogNewProvableQuery("inside callback.");
       if (msg.sender != provable_cbAddress()) revert();
    //   ETHUSD = result;
        b_eligible = result;
       LogBoolUpdated(result);
       emit LogNewProvableQuery("finished callback.");
   }
  function addBorrower() public {
    emit LogNewProvableQuery("inside AddBorrower.");
    require(borrower == payable(0x0), "Borrower already added. Contract is full");
  }
}
