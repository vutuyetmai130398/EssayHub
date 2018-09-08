pragma solidity ^0.4.22;
import "./ViewType.sol";
import "./onlyStudent.sol";
import "./EssayInfo.sol";

contract ViewExclusiveType is ViewType, onlyStudent {
  constructor() public {
  }

  uint costValue = 0;

  function ViewProcess(EssayInfo essay) external view returns (uint, string){
    string memory str;
    (,,str,,,,) = essay.getEssay();

    return (costValue, str);  
  }
  
  function setCost(EssayInfo essay, uint cost) public onlyStudents(essay) {
    costValue = cost;
  }

}
