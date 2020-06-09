pragma solidity >=0.4.22 <0.7.0;
//import "github.com/oraclize/ethereum-api/provableAPI.sol";
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";
/// @title Voting with delegation.
contract LoanContract is usingProvable {
    uint constant loan_value = 50;     //ETH
    uint constant loan_percent = 20;    //%   
    uint constant timeframe = 12;       //months
    uint constant max_loaners = 1;     //10, etc...
    uint balance = 0;
    address payable public borrower_addr;
    address payable[] public loaners;   //receive the interest payouts
    bool payout = false;

    event LogNewProvableQuery(string description);
   
   receive() external payable { 

    }
    function addLoaner(address payable loaner) external payable {
        loaner = payable(msg.sender);
        require(msg.value == 100 ether, "incorrect loan deposit amount!" );
        require(loaner != borrower_addr, "Cannot Loan to Self");
        require(loaners.length < max_loaners, "Loaner queue is already full.");
        bool loaner_bool = true;
        for (uint i = 0; i < loaners.length; i++) {
            if (loaners[i] == loaner) loaner_bool = false;
        }
        require(loaner_bool == true, "Address already in loaner queue.");
                                    //loan_value / max_loaners,
        require((payable(address(this)).send(60 ether)), "incorrect value sent");
        balance += 100;
        loaners.push(loaner);
        if (balance == loan_value && borrower_addr != "0x0") {
            BPayout();
        }
    }
    function __callback(bytes32 myid, string result) {
       if (msg.sender != provable_cbAddress()) revert();
       ETHUSD = result;
       LogPriceUpdated(result);
   }
    function addBorrower(address payable borrower_addr) external {
        // require(borrower_addr == "0x0");
        provable_query("URL", "(https://b8f7b1a99511.ngrok.io/datas/dummy2)",
                '{"addr": "0x7B158777d03282D722bAec6f49F5dc0c27895680"}');
        require(payout == false, "payout already occurred");

       BPayout(borrower_addr);

    }

    function BPayout(address payable borrower_addr) private payable {
        require(payout == false, "Contract already sent loan to borrower");
        require(address(this).balance == balance);
        payout = true;
        require(borrower_addr.send.value(address(this).balance)(), "Improper values sent");

    }

   

    // function LPayout() {
    //     for (uint i=0; i<loaners.length; i++) {
    //         i++
    //     }
    //     return;
    // }
   
}