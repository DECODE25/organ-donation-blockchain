const DonateOrganFactory = artifacts.require("DonateOrganFactory");

contract("DonateOrganFactory", (accounts) => {
  describe("it is deployed correctly", async () => {
    let factory;
    let deployer = accounts[0];
    let authority1 = accounts[1];
    let authority2 = accounts[2];
    let doctor = accounts[3];
    let recepient = accounts[4];
    let donor = accounts[5];
    before(async () => {
      factory = await DonateOrganFactory.deployed();
    });
    it("deployed address check", async () => {
      const address = await factory.address;
      assert.notEqual(address, 0 * 0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
    it(" initializes storage variables with correct values", async () => {
      const admin = await factory.admin();
      const auth1 = await factory.authority1();
      const auth2 = await factory.authority2();
      assert.equal(admin, deployer, "deployer and admin euality check");
      assert.equal(auth1, authority1, "auth1 and authority1 euality check");
      assert.equal(auth2, authority2, "auth2 and authority2 euality check");
    });
  });
});
