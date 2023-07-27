import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  const result = await deploy('SimpleToken', {
    from: deployer,
    args: [deployer, 10000],
    log: true,
    skipIfAlreadyDeployed: true,
  })

  deployments.log(`Deployed ERC20: ${result.address}, Deployer: ${deployer}, network: ${hre.network.name}`)
}

export default func
func.tags = ['SimpleToken']
