const DonateOrganFactory = artifacts.require("./DonateOrganFactory");

module.exports = async function (deployer)  {
  await deployer.deploy(DonateOrganFactory , "0x38b5F86DBfd4c5cE716a634DE5b91425A4C73c0B" , "0x0fd3Ec0295a3569C637adEF5B31fFE88D4Fa8708" );
};
