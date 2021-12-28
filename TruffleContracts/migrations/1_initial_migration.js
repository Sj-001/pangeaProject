const Migrations = artifacts.require("Migrations");
const MintNft = artifacts.require("MintNft");
const NFTAuction = artifacts.require("NFTAuction");
const NFTMarket = artifacts.require("NFTMarket");
const OpenToBids = artifacts.require("OpenToBids");
module.exports = async function (deployer) {
  deployer.deploy(Migrations);
  await deployer.deploy(MintNft, "Pangea", "PNG");
  const mintNFTContract = await MintNft.deployed();
  await deployer.deploy(
    NFTAuction,
    mintNFTContract.address,
    "0x3608301a2b29A1D5780206a4B392E0E558A5cAf4"
  );
  await deployer.deploy(
    NFTMarket,
    mintNFTContract.address,
    "0x3608301a2b29A1D5780206a4B392E0E558A5cAf4"
  );
  await deployer.deploy(
    OpenToBids,
    mintNFTContract.address,
    "0x3608301a2b29A1D5780206a4B392E0E558A5cAf4"
  );
};
