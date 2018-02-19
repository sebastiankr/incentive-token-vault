const IncentiveTokenVault = artifacts.require("./IncentiveTokenVault.sol");

contract("IncentiveTokenVault", accounts => {
  it("vesting period should be 1000 milliseconds", async () => {
    const instance = await IncentiveTokenVault.deployed();
    const period = await instance.vestingPeriod();
    assert.equal(period.toNumber(), 1000);
  });
});
