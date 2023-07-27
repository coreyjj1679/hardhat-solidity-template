# Solidity Template
A lightweight template for developing smart contracts in Solidity.


## Major Plugins 
- `ethers`
- `hardhat`
- `@nomicfoundation/hardhat-chai-matchers`
- `@nomicfoundation/hardhat-toolbox`


## Install Dependencies

`yarn`

## Update .env

`cp .env.template .env`

## Compile contracts

`yarn compile`

## Deploy contracts

`npx hardhat deploy --tags <TAGS> --network <NETWORK>`

## Verify Contract

`npx hardhat --network <NETWORK> etherscan-verify`
## Run tests

```bash
yarn test [FILE_PATH]
yarn test:parallel [FILE_PATH] # parallel mode
yarn test:bali [FILE_PATH] # bali mode
```