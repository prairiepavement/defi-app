pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Dachsador is ERC20 {
    using Address for address;
    using SafeMath for uint256;

    IERC20 public token;

    constructor(address _token)
        public
        ERC20("Dachsador", "DAR")
    {
        token = IERC20(_token);
    }

    function balance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function deposit(uint256 _amount) public {
        // Amount must be greater than zero
        require(_amount > 0, "amount cannot be 0");

        // Transfer MyToken to smart contract
        token.transferFrom(msg.sender, address(this), _amount);

        // Mint Dachsador to msg sender
        _mint(msg.sender, _amount);
    }

    function withdraw(uint256 _amount) public {
    // Burn Dachsador from msg sender
    _burn(msg.sender, _amount);

    // Transfer MyTokens from this smart contract to msg sender
    token.transfer(msg.sender, _amount);
    }






}