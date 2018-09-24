import {web3, account} from "./web3";
import {abi} from "../../build/contracts/ipfs.json";

export default new web3.eth.Contract(abi, account);