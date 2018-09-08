pragma solidity ^0.4.22;
import "./EssayInfo.sol";

interface EssayType {
  function printEssay(EssayInfo[] essays) external returns (EssayInfo[]);
}
