pragma solidity ^0.4.22;
import "./EssayInfo.sol";
import "./onlyStudent.sol";

interface ViewType {
  function ViewProcess(EssayInfo essay) external view returns (uint, string);
}
