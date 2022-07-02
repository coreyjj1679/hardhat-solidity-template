# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## Verify Contract

`npx hardhat verify <CONTRACT_ADDRESS> --network fuji /`

`npx hardhat verify --construct-args ./args.ts <CONTRACT_ADDRESS> --network fuji `
