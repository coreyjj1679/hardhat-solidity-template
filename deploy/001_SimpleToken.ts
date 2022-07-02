import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deploy, get, execute, getOrNull } = deployments;
  const { deployer } = await getNamedAccounts();

  const factory = await deploy("SimpleToken", {
    from: deployer,
    args: [deployer, 10000],
    log: true,
    skipIfAlreadyDeployed: true,
  });

  await hre.run("verify:verify", {
    address: factory.address,
    constructorArguments: [deployer],
  });
};

export default func;
func.tags = ["SimpleToken"];
