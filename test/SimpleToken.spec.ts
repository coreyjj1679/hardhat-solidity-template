import { ethers } from 'hardhat'
import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers'
import { SimpleToken } from '../typechain-types'
import chai from 'chai'

const { expect } = chai

describe('SimpleToken', function () {
  let owner: SignerWithAddress
  let tokenContract: SimpleToken

  const totalSupply = BigInt(10000000000000000000000)

  beforeEach(async function () {
    // Get Factories
    ;[owner] = await ethers.getSigners()

    const ERC20Factory = await ethers.getContractFactory('SimpleToken')
    tokenContract = await ERC20Factory.connect(owner).deploy(owner.address, totalSupply)

    await tokenContract.waitForDeployment()
  })

  describe('[deploy]', function () {
    it('shd return correct name', async function () {
      expect(await tokenContract.name()).to.equal('Hello World')
    })
    it('shd return correct symbol', async function () {
      expect(await tokenContract.symbol()).to.equal('HW')
    })
    it('shd return correct decimals', async function () {
      expect(await tokenContract.decimals()).to.equal(18)
    })
    it('shd return correct balance of deployer', async function () {
      expect(await tokenContract.balanceOf(owner.address)).to.equal(totalSupply)
    })
  })
})
