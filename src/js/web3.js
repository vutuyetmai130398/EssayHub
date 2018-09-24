import Web3 from 'web3';

const web3;
const account;
const contract;

//Setup web3. Allow client-side application talk to the blockchain
if(typeof web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}
else{
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//Load contract address
contract = "0x66144c6b829600e909dcef7e5752cf61cefc48b1";

//Load account data
web3.eth.getCoinbase(function(err, account1){
    if(err==null){
        account = account1;
        //$("#accountAddress").html("Your account: "+account);
    }
    else{
        //$("#error").html("Error: "+err);
    }
})

export default {web3, account, contract};