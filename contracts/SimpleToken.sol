// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.5;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol';

contract SimpleToken is ERC20('Hello World', 'HW') {
    constructor(address _receipient, uint256 _totalSupply) {
        _mint(_receipient, _totalSupply);
    }
}