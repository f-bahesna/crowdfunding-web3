async function main() {
    const getContract = await ethers.getContractFactory('CrowdFunding');
    const deployContract = await getContract.deploy()

    console.log("Contract deployed to Address:", deployContract.target);
    //0x1F87527DF988A7974971Cc839fdb0064bF8C7F71
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });