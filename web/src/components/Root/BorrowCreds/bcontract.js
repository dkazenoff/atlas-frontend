// const { credentials } = require('./Borrower.js');
const NodeRSA = require('node-rsa');
const axios = require('axios');
let neo4j = require('neo4j-driver');
let driver = neo4j.driver("bolt://0.0.0.0:7687", neo4j.auth.basic("neo4j", "rpi2020"));

exports.encrypt = async function (credentials) {
    console.log("creds:", credentials)

    const key = new NodeRSA({ b: 512 });
    let secret = JSON.stringify(credentials);
    let public_key = await key.exportKey('public');
    let private_key = await key.exportKey('private');
    // let uuid = Date.now();  //mock uuid as timestamp for offchain mongo-hash-matchup and retrieval
    // uuid = uuid.toString(); //Consistency, string for Solidity-Oracle.
    //Can't send key_private to neo4j; its structure won't work.
    // let key_private = new NodeRSA(private_key); //Sent ONLY to third party
    // console.log("public", public_key);
    // console.log("private-key", private_key);
    let session = driver.session();
    const priv = await session.run('CREATE (n:titan {uuid: $uuid, private: $private}) return n', {
        private: private_key,
        uuid: credentials.uuid
    })
    session.close();    //Private key with UUID is now in the 3rd party DB.
    console.log("RESPONSE:", priv.records.length);

    // console.log(toMe.records[0].get(0).properties)
    let key_public = new NodeRSA(public_key);
    // console.log("public", key_public)
    let encryptedString = await key_public.encrypt(secret, 'base64'); //Sent to Solidty Contract!
    console.log("COPY THIS INTO POST encryptedString\n" + encryptedString + "DONE")
    // let result = await axios.post("http://localhost:8080/encryption/dekyc", { pkey: private_key, uuid: uuid })

    // return 100;
}


