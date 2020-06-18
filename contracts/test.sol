// pragma solidity ^0.4.22;
// import "github.com/provable-things/ethereum-api/provableAPI_0.4.25.sol";

// contract ExampleContract is usingProvable {

//     string public ETHUSD;
//     mapping(bytes32=>bool) validIds;
//     event LogConstructorInitiated(string nextStep);
//     event LogPriceUpdated(string price);
//     event LogNewProvableQuery(string description);

//     function ExampleContract() payable {
//         LogConstructorInitiated("Constructor was initiated. Call 'updatePrice()' to send the Provable Query.");
//     }

//     function __callback(bytes32 myid, string result) {
//         if (!validIds[myid]) revert();
//         if (msg.sender != provable_cbAddress()) revert();
//         ETHUSD = result;
//         LogPriceUpdated(result);
//         delete validIds[myid];
//         updatePrice();
//     }

//     function updatePrice() payable {
//         if (provable_getPrice("URL") > this.balance) {
//             LogNewProvableQuery("Provable query was NOT sent, please add some ETH to cover for the query fee");
//         } else {
//             LogNewProvableQuery("Provable query was sent, standing by for the answer..");
//             bytes32 queryId =
//                 provable_query(60, "URL", "json(https://api.pro.coinbase.com/products/ETH-USD/ticker).price");
//             validIds[queryId] = true;
//         }
//     }
// }