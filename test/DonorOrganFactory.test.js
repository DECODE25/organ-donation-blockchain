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
    let address; //adddress of the transplant cotract
    let recepientContract;
    let donorContract;
    let doctorContract;
    let transplant; //transpant contract
    before(async () => {
      factory = await DonateOrganFactory.deployed();
      // create the recepient
      await factory.createPerson("ujjwal", "1234321234", { from: recepient });
      let address1 = await factory.people(recepient);
      recepientContract = await Person.at(address1);

      //create the donor
      await factory.createPerson("ujjwal", "1234321234", { from: donor });
      let address2 = await factory.people(donor);
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

    it("creates and deploys a trnspalant smart contract", async () => {
      assert.equal(
        address,
        transplant.address,
        "address in map of factory and address from deployed instance"
      );
    });
    it("stage approval tests --> ideal", async () => {
      let approvalCount;
      let stage;
      let stageNumber = await transplant.stageNo();
      stage = await transplant.stages(stageNumber);
      approvalCount = stage.voteCount;
      assert.equal(approvalCount.toNumber(), 0, "vote count is 0 at the start");
      await recepientContract.approveStage(address, { from: recepient });
      await donorContract.approveStage(address, { from: donor });
      await doctorContract.approveStage(address, { from: doctor });
      await factory.approveTranspantStage(address, { from: authority1 });
      await factory.approveTranspantStage(address, { from: authority2 });
      stage = await transplant.stages(stageNumber);
      approvalCount = stage.voteCount;
      assert.equal(approvalCount.toNumber(), 5, "vote count is 5 at the end ");
    });
    it("stage completion tests --> ideal ", async () => {
      let stageNumber = await transplant.stageNo();
      await doctorContract.completecurrentStage(address, { from: doctor });
      let stage = await transplant.stages(stageNumber);
      let status = stage.completed;
      assert.equal(status, true, "stage is marked as correct");
    });

    it("create new stage --> ideal ", async () => {
      let stageNumberOld = await transplant.stageNo();
      await doctorContract.createStage(address, { from: doctor });
      let stageNumberNew = await transplant.stageNo();
      let stage = await transplant.stages(stageNumberNew);
      assert.equal(
        stageNumberNew.toNumber(),
        stageNumberOld.toNumber() + 1,
        "stage is incremneted by 1"
      );
      assert.equal(stage.completed, false, "stage is not complete");
      assert.equal(stage.voteCount, 0, "stage voteCount is 0");
      assert.equal(stage.started, true, "new stage has been started");
    });
  });

  describe("failure tests for create transplant functionality", () => {
    //checks that only doctor is able to create the trasnplant
    it("only doctors can create transplant", async () => {
      try {
        await factory.createTransplant(recepient, donor, 1234, {
          from: recepient,
        });

        assert(false);
      } catch (error) {
        assert(error);
      }
    });
  });
});
