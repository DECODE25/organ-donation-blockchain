const DonateOrganFactory = artifacts.require("DonateOrganFactory");
const Person = artifacts.require("Person");
const Doctor = artifacts.require("Doctor");
const Transplant = artifacts.require("Transplant");

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
      assert.equal(
        address,
        personContract.address,
        "address in map of factory and address from deployed instance"
      );
    });
  });

  describe("create doctor functionality", () => {
    let address;
    let person;
    let personContract;
    before(async () => {
      factory = await DonateOrganFactory.deployed();
      person = await factory.createDoctor("ujjwal", "1234321234", {
        from: doctor,
      });
      address = await factory.doctors(doctor);
      personContract = await Doctor.at(address);
    });
    it("fires the personCreate event", async () => {
      const event = await person.logs[0];
      assert.equal(event.event, "doctorEvent", "fires the doctorEvent name");
      assert.equal(event.args.sender, doctor, "sender check in doctor event");
      assert.equal(
        event.args.doctorAddress,
        address,
        "doctorAddress check in doctor event"
      );
      assert.equal(event.args.name, "ujjwal", "name check in doctor event");
    });
    it("creates and deploys a person smart contract", async () => {
      assert.equal(
        address,
        personContract.address,
        "address in map of factory and address from deployed instance"
      );
    });
  });

  describe("testing the complete transplant functionality", () => {
    let address;
    let recepientContract;
    let donorContract;
    let doctorContract;
    let transplant;
    before(async () => {
      factory = await DonateOrganFactory.deployed();
      // create the recepient
      await factory.createPerson("ujjwal", "1234321234", { from: recepient });
      let address1 = await factory.people(recepient);
      recepientContract = await Person.at(address1);

      //create the donor
      await factory.createPerson("ujjwal", "1234321234", { from: donor });
      let address2 = await factory.people(recepient);
      donorContract = await Person.at(address2);

      //create the doctor

      await factory.createDoctor("ujjwal", "1234321234", { from: doctor });
      let address3 = await factory.doctors(doctor);
      doctorContract = await Doctor.at(address3);

      //create the transaplant
      await factory.createTransplant(recepient, donor, 1234, { from: doctor });
      let count = await factory.count();
      address = await factory.transplants(count - 1);
      transplant = await Transplant.at(address);
    });

    it("creates and deploys a person smart contract", async () => {
      assert.equal(
        address,
        transplant.address,
        "address in map of factory and address from deployed instance"
      );
    });
  });
});
