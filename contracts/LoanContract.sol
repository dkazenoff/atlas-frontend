pragma solidity > 0.6.0 < 0.7.0;

contract LoanContract {
    uint constant public loan_value = 2;     //ETH
    string public isgood = "false";
    // uint public balance;
    uint public num_lenders;
    
    function getNumLenders() public view returns (uint) {
      return num_lenders;
    }
    function getContractBalance() public view returns (uint) {
        return address(this).balance;
    }
     function addLender() payable public {
    //   balance = address(this).balance;
      num_lenders += 1;
  }
}
