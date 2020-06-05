pragma solidity >=0.4.22 <0.7.0;

/// @title Voting with delegation.
contract LoanContract {
    //bytes32 constant myHash = keccak256("hash_of_verifications"); 

    uint constant loan_value = 100;     //ETH
    uint constant loan_percent = 10;    //%   
    uint constant timeframe = 12;       //months
    uint constant max_loaners = 1;     //10, etc...
    uint balance = 0;
    address payable public borrower_addr;
    address payable[] public loaners;   //receive the interest payouts
    bool payout = false;
   
    //  struct Loaner {  // It will represent a single Loander.
    //     uint loaner_count; // weight is accumulated by delegation
       
    // }
    receive() payable {};
    function addLoaner(address payable loaner) external payable {
        loaner = payable(msg.sender);
        //@requires: loaner address as payable, msg.value to be the correct amount of ether, and msg.sender not already in loaners array
        //@effects: desposits appropriate portion of loan value to the contract from loaner
        require(msg.value == 100 ether, "incorrect loan deposit amount!" );
        require(loaner != borrower_addr, "Cannot Loan to Self");
        require(loaners.length < max_loaners, "Loaner queue is already full.");
        bool loaner_bool = true;
        for (uint i = 0; i < loaners.length; i++) {
            if (loaners[i] == loaner) loaner_bool = false;
        }
        require(loaner_bool == true, "Address already in loaner queue.");
                                    //loan_value / max_loaners,
        require((payable(address(this)).send(100 ether)), "incorrect value sent");
        balance += 100;
        loaners.push(loaner);
        if (balance == loan_value && borrower_addr != "0x0") {
            BPayout();
        }
    }
    function addBorrower(address payable borrower_addr) external {
        require(borrower_addr == "0x0");
        require(payout == false);
        

    }

    function BPayout() external payable {
        require(payout == false, "Contract already sent loan to borrower");
        require(address(this).balance == balance)
        payout = true;
    }

    // function BPayout(address payable recipient) payable external {
    //     require(recipient == )
    //     recipient.transfer(100, ether);
    // }

    // function LPayout() {
    //     for (uint i=0; i<loaners.length; i++) {
    //         i++
    //     }
    //     return;
    // }

   
   

    /// Give your vote (including votes delegated to you)
    /// to proposal `proposals[proposal].name`.
    // function vote(uint proposal) public {
    //     Voter storage sender = voters[msg.sender];
    //     require(sender.weight != 0, "Has no right to vote");
    //     require(!sender.voted, "Already voted.");
    //     sender.voted = true;
    //     sender.vote = proposal;

    //     // If `proposal` is out of the range of the array,
    //     // this will throw automatically and revert all
    //     // changes.
    //     proposals[proposal].voteCount += sender.weight;
    // }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
   
}