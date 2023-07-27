# Local Development

The following assumes the use of `node@>=14`.

## Install Dependencies

`yarn`

## Update .env

`cp .env.template .env`

## Compile contracts

`yarn compile`

## Run Tests

```bash
yarn test [FILE_PATH]
yarn test:parallel [FILE_PATH] # parallel mode
yarn test:bali [FILE_PATH] # bali mode
```

## Deploy contracts

`npx hardhat deploy --tags <TAGS> --network <NETWORK>`

## Verify Contract

`npx hardhat --network <NETWORK> etherscan-verify`
