var EssayHub = artifacts.require("../contracts/EssayHub.sol")

module.exports = function(deployer){
    deployer.deploy(EssayHub);
};