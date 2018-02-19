var IncentiveTokenVault = artifacts.require("./IncentiveTokenVault.sol");

module.exports = function(deployer) {
  deployer.deploy(IncentiveTokenVault, 1000);
};