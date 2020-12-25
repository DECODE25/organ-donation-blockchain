const DonateOrganFactory = artifacts.require("DonateOrganFactory");
const Person = artifacts.require("Person");

contract("DonateOrganFactory", (accounts) => {
  let factory;
  let deployer = accounts[0];
  let authority1 = accounts[1];
  let authority2 = accounts[2];
  let doctor = accounts[3];
  let recepient = accounts[4];
  let donor = accounts[5];

  describe("it is deployed correctly", async () => {
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
  describe("create person functionality", () => {
    let address;
    let person;
    let personContract;
    before(async () => {
      factory = await DonateOrganFactory.deployed();
      person = await factory.createPerson("ujjwal", "1234321234", {
        from: recepient,
      });
      address = await factory.people(recepient);
      personContract = await Person.at(address);
    });
    it("fires the personCreate event", async () => {
      const event = await person.logs[0];
      assert.equal(event.event, "personEvent", "fires the personEvent name");
      assert.equal(
        event.args.sender,
        recepient,
        "sender check in person event"
      );
      assert.equal(
        event.args.personAddress,
        address,
        "personAddress check in person event"
      );
      assert.equal(event.args.name, "ujjwal", "name check in person event");
    });
    it("creates and deploys a person smart contract", async () => {
      // console.log(address)
      // console.log(personContract.address);
      assert.equal(
        address,
        personContract.address,
        "address in map of factory and address from deployed instance"
      );
    });
  });
});
