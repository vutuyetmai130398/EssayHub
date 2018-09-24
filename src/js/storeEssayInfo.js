import web3 from "./web3";
import "../../build/contracts/EssayHub.json";

var fs = require("fs")
var jsonfile = "../../build/contracts/EssayHub.json"
var parsed = JSON.parse(fs.readFileSync(jsonfile))
var abi = parsed.abi;

export default new web3.eth.Contract(abi);