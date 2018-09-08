pragma solidity ^0.4.22;
import "./ViewType.sol";

contract abstractViewFactory {
  constructor() public {
  }

  function getView(string) public returns (ViewType);
}
