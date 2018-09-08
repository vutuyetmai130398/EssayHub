pragma solidity ^0.4.22;
import "./EssayType.sol";
import "./EssayInfo.sol";

contract Culture is EssayType {
  constructor() public {
  }
  
  EssayInfo[] cultureEssay;
  
  function printEssay(EssayInfo[] essays) external returns (EssayInfo[]) {
    string memory socStr = "CULTURE";
    string memory typefile = "";
    for(uint i=0; i<essays.length; i++){
      (,,,,typefile,,) = essays[i].getEssay();
      if(keccak256(abi.encodePacked(typefile)) == keccak256(abi.encodePacked(socStr))){
        cultureEssay.push(essays[i]);
      }
    }
    return cultureEssay;
  }
}
