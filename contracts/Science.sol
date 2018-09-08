pragma solidity ^0.4.22;
import "./EssayType.sol";
import "./EssayInfo.sol";

contract Science is EssayType {
  constructor() public {
  }
  
  EssayInfo[] scienceEssay;
  
  function printEssay(EssayInfo[] essays) external returns (EssayInfo[]) {
    string memory socStr = "SCIENCE";
    string memory typefile = "";
    for(uint i=0; i<essays.length; i++){
      (,,,,typefile,,) = essays[i].getEssay();
      if(keccak256(abi.encodePacked(typefile)) == keccak256(abi.encodePacked(socStr))){
        scienceEssay.push(essays[i]);
      }
    }
    return scienceEssay;
  }
}
