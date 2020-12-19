const DonateOrganFactory = artifacts.require("./DonateOrganFactory");

module.exports = async function (deployer)  {
  await deployer.deploy(DonateOrganFactory , "0xDdC5B37Af559a0ed454a42D465b783baAB875b59" , "0x23e8c1272EaA6c20768AC1c8360313C229d64631" );
};
