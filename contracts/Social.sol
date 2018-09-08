pragma solidity ^0.4.22;
import "./EssayType.sol";
import "./EssayInfo.sol";

contract Social is EssayType {
  constructor() public {
  }
  
  EssayInfo[] socialEssay;
  
  function printEssay(EssayInfo[] essays) external returns (EssayInfo[]) {
    string memory socStr = "SOCIAL";
    string memory typefile = "";
    for(uint i=0; i<essays.length; i++){
      (,,,,typefile,,) = essays[i].getEssay();
      if(keccak256(abi.encodePacked(typefile)) == keccak256(abi.encodePacked(socStr))){
        socialEssay.push(essays[i]);
      }
    }
    return socialEssay;
  }
}
