pragma solidity > 0.6.0 < 0.7.0;

contract LoanContract {
    uint constant public loan_value = 2;     //ETH
    string public isgood = "false";
    // uint public balance;
    uint public num_lenders;
    
    function getBalance() public returns (uint) {
        return address(this).balance;
    }
     function AddLender() payable public {
    //   balance = address(this).balance;
      num_lenders += 1;
  }
}
